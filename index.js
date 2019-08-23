const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/build')));

//Simulates database access
app.get('/api/gallery', async (req, res) => {
    let images = await fs.readdir('./server_assets');
    for (i in images) {
        let buffer = await fs.readFile('./server_assets/' + images[i], {encoding: 'base64'});
        images[i] = {img: buffer, title: images[i], key: i};
    }
    res.send({images: images});
});

//Simulates database access
app.get('/api/items/:email', async (req, res) => {
    let data = require('./data');
    res.send({items: data[req.params.email].currentItems});
});

app.get('/api/user/login/:email/:password', async (req, res) => {
    let data = require('./data');
    if (data[req.params.email] && data[req.params.email].password === req.params.password) {
        res.send({msg: 'Login successful', data: data[req.params.email]});
    } else {
        res.send({msg: 'Login failed... Either email or password are incorrect'});
    }
});

app.post('/api/user/signup', async (req, res) => {
    const email = req.body.email,
        password = req.body.password,
        address = req.body.address,
        houseNum = req.body.houseNum,
        city = req.body.city,
        firstName = req.body.firstName,
        lastName = req.body.lastName,
        country = req.body.country;
    const data = require('./data');
    if (!data[email]) {
        const obj = {
            [email]: {
                "user": {
                    "remember": false,
                    "firstName": firstName,
                    "lastName": lastName,
                    "address": address,
                    "city": city,
                    "country": country,
                    "houseNum": houseNum,
                    "email": email
                },
                "password": password,
                "currentItems": {},
                "orders": {}
            }
        };
        await fs.writeFile('./data.json', JSON.stringify(obj));
        res.status(200).send({msg: 'Login successful'});
    } else {
        res.status(500).send({msg: `The user ${email}, is already signed up...`});
    }
});

//Serves react client static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname = 'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
