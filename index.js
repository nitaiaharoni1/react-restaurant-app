const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    {promisify} = require('util'),
    fs = require('fs'),
    uniqid = require('uniqid'),
    cookieParser = require('cookie-parser'),
    jwt = require('jsonwebtoken'),
    rateLimit = require("express-rate-limit"),
    readdirAsync = promisify(fs.readdir),
    readFileAsync = promisify(fs.readFile),
    writeFileAsync = promisify(fs.writeFile);

///asddasdasdasdasd
//sdfdsf

const SECRET = 'secret',
    app = express(),
    port = process.env.PORT || 3005,
    limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 1000, // limit each IP to 100 requests per windowMs
        message: "Too many requests from this IP, please try again later"
    });

app.set('trust proxy', 1);
app.use(limiter);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/build')));

//Update user's items in db
app.post('/api/items/:email/:title/:action', async (req, res) => {
    try {
        const email = req.params.email,
            title = req.params.title,
            action = req.params.action;
        let data = require('./data');
        switch (action) {
            case 'ADD':
                if (data[email].currentItems[title]) {
                    data[email].currentItems[title]++;
                } else {
                    data[email].currentItems[title] = 1;
                }
                break;
            case 'SUB':
                if (data[email].currentItems[title] > 1) {
                    data[email].currentItems[title]--;
                } else {
                    delete data[email].currentItems[title];
                }
                break;
            case 'ZERO':
                delete data[email].currentItems[title];
                break;
        }
        await writeFileAsync('./data.json', JSON.stringify(data));
        res.status(200).send({msg: 'Items we\'re updated'});
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Authenticate user with cookie on lunching the app and getting user's data
app.get('/api/user/auth', async (req, res) => {
    try {
        const data = require('./data');
        if (req.cookies && req.cookies.token_mama) {
            const token = req.cookies.token_mama,
                decoded = jwt.verify(token, SECRET);
            if (data[decoded.email]) {
                res.status(200).send({msg: 'Auth successful', data: data[decoded.email]});
            } else {
                res.status(500).send({msg: 'Auth failed... there is no user with this token'});
            }
        } else {
            res.status(500).send({msg: 'Auth failed... there is no cookie'});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Admin get all database
app.get('/api/admin/data/:email', async (req, res) => {
    try {
        if (req.params.email === 'admin') {
            const data = require('./data');
            res.status(200).send({msg: 'Admin data', data: data});
        } else {
            res.status(500).send({msg: 'User can\'t get this data...'});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Login user
app.get('/api/user/login/:email/:password/:remember', async (req, res) => {
    try {
        const data = require('./data'),
            email = req.params.email,
            password = req.params.password,
            maxAge = req.params.remember === "true" ? (10 * 365 * 24 * 60 * 60) : (60 * 5 * 1000);
        if (data[email] && data[email].password === password) {
            const token = jwt.sign({email}, SECRET);
            res.cookie('token_mama', token, {maxAge: maxAge});
            res.status(200).send({msg: 'Login successful', data: data[email]});
        } else {
            res.status(500).send({msg: 'Login failed... Either email or password are incorrect'});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Logout user
app.post('/api/user/logout', async (req, res) => {
    try {
        res.clearCookie('token_mama');
        res.status(200).send({msg: 'Logout successful'});
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Signup new user
app.post('/api/user/signup', async (req, res) => {
    try {
        const email = req.body.email,
            password = req.body.password,
            address = req.body.address,
            houseNum = req.body.houseNum,
            city = capitalize(req.body.city),
            zip = req.body.zip,
            firstName = capitalize(req.body.firstName),
            lastName = capitalize(req.body.lastName),
            country = req.body.country;
        const data = require('./data');
        if (!data[email]) {
            data[email] = {
                "user": {
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
            await writeFileAsync('./data.json', JSON.stringify(data));
            const token = jwt.sign({email}, SECRET);
            res.cookie('token_mama', token, {maxAge: 60 * 5 * 1000});
            res.status(200).send({msg: 'Signup successful'});
        } else {
            res.status(500).send({msg: `The user ${email}, is already signed up...`});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Delete a user
app.delete('/api/user/:email/:password', async (req, res) => {
    try {
        const data = require('./data'),
            email = req.params.email,
            password = req.params.password;
        if (data[email] && data[email].password === password) {
            delete data[email];
            await writeFileAsync('./data.json', JSON.stringify(data));
            res.status(200).send({msg: 'User was deleted successfully', data: data[email]});
        } else {
            res.status(500).send({msg: 'User deletion failed'});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Post a new order
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
            data[email].currentItems = {};
            await writeFileAsync('./data.json', JSON.stringify(data));
            res.status(200).send({msg: 'Order successfully placed', data: data[email], orderId: orderId, date: date});
        } else {
            res.status(500).send({msg: `Error placing order`});
        }
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Get gallery images (Simulates database access)
app.get('/api/gallery', async (req, res) => {
    try {
        let images = await readdirAsync('./server_assets');
        for (let i in images) {
            let buffer = await readFileAsync('./server_assets/' + images[i], {encoding: 'base64'});
            images[i] = {img: buffer, title: images[i], key: i};
        }
        res.status(200).send({images: images});
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Serves react client static files
app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    } catch (e) {
        res.status(500).send({msg: e.message});
    }
});

//Private functions
function capitalize(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;

