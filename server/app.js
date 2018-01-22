const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../public/index.html`);
});

module.exports = app;