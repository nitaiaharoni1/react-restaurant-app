const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
const port = process.env.Port || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/hello', (req, res) => {
    res.send({express : 'Hello World!'})
});

app.listen(port, () => console.log(`Listening on port ${port}`));