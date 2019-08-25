const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs').promises,
    uniqid = require('uniqid');

const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/build')));

//Simulates database access
app.get('/api/gallery', async (req, res) => {
    try {
        let images = await fs.readdir('./server_assets');
        for (i in images) {
            let buffer = await fs.readFile('./server_assets/' + images[i], {encoding: 'base64'});
            images[i] = {img: buffer, title: images[i], key: i};
        }
        res.status(200).send({images: images});
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Simulates database access
app.get('/api/items/:email', async (req, res) => {
    try {
        let data = require('./data');
        res.status(200).send({items: data[req.params.email].currentItems});
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

app.post('/api/items/:email/:title/:action', async (req, res) => {
    try {
        const email = req.params.email,
            title = req.params.title,
            action = req.params.action;
        let data = require('./data');
        if (action === 'ADD') {
            data[email].currentItems[title]++;
        } else if (action === 'SUB') {
            data[email].currentItems[title]--;
        }
        await fs.writeFile('./data.json', JSON.stringify(data));
        res.status(200).send({msg: 'Items we\'re updated'});
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

app.get('/api/user/login/:email/:password', async (req, res) => {
    try {
        const data = require('./data'),
            email = req.params.email,
            password = req.params.password;
        if (data[email] && data[email].password === password) {
            res.status(200).send({msg: 'Login successful', data: data[email]});
        } else {
            res.status(500).send({msg: 'Login failed... Either email or password are incorrect'});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

app.post('/api/user/signup', async (req, res) => {
    try {
        const email = req.body.email,
            password = req.body.password,
            address = req.body.address,
            houseNum = req.body.houseNum,
            city = req.body.city,
            zip = req.body.zip,
            firstName = req.body.firstName,
            lastName = req.body.lastName,
            country = req.body.country;
        const data = require('./data');
        if (!data[email]) {
            data[email] = {
                "user": {
                    "remember": false,
                    "firstName": firstName,
                    "lastName": lastName,
                    "address": address,
                    "city": city,
                    "country": country,
                    "houseNum": houseNum,
                    "email": email,
                    "zip": zip
                },
                "password": password,
                "orders": {},
                "currentItems": {}
            };
            await fs.writeFile('./data.json', JSON.stringify(obj));
            res.status(200).send({msg: 'Login successful'});
        } else {
            res.status(500).send({msg: `The user ${email}, is already signed up...`});
        }
    } catch
        (e) {
        res.status(500).send({msg: e.message});
    }
});

app.post('/api/order/new/:email', async (req, res) => {
    try {
        const email = req.params.email,
            payment = req.body.payment,
            items = req.body.items,
            total = req.body.total,
            totalPrice = req.body.totalPrice,
            orderId = uniqid(),
            date = Date.now();
        let data = require('./data');
        if (data[email]) {
            data[email].orders[orderId] = {
                total: total,
                totalPrice: totalPrice,
                payment: payment,
                items: items,
                date: date
            };
            data = resetItemsNum(data, email);
            await fs.writeFile('./data.json', JSON.stringify(data));
            res.status(200).send({msg: 'Order successfully placed', data: data[email], orderId: orderId, date: date});
        } else {
            res.status(500).send({msg: `Error placing order`});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Serves react client static files
app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname = 'client/build/index.html'));
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

function resetItemsNum(data, email) {
    Object.keys(data[email].currentItems).map(item => {
        data[email].currentItems[item] = 0
    });
    return data;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
