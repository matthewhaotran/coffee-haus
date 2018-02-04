const express = require('express');
const bodyParser = require('body-parser');
const customerRoute = require('./routes/customer.route');
const db = require('./models');
const app = express();

app.use(express.static(`${__dirname}`));
// app.use(express.static(`${__dirname}/../dist`));
app.use(bodyParser.json());
app.use('/api/customer', customerRoute);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

module.exports = app;