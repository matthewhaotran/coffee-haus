const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../dist`));


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/../dist/index.html`);
});

app.get('/#portfolio', (req, res) => {
  res.sendFile(`${__dirname}/../dist/portfolio.html`);
});

module.exports = app;
