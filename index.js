const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/hello', (req, res) => {
    res.send({express: 'Hello World!'})
});

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));