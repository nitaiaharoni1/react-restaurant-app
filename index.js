const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 3005;
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
});

app.get('/api/gallery', async (req, res) => {
    let images = await fs.readdir('./server_assets');
    for (i in images) {
        let buffer = await fs.readFile('./server_assets/' + images[i], {encoding: 'base64'});
        images[i] = {img: buffer, title: images[i], key: i};
    }
    res.send({images: images});
});

app.listen(port, () => console.log(`Listening on port ${port}`));