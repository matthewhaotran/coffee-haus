const express = require('express');
const app = express();

app.use(express.static(`${__dirname}`));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

const db = require('./models');



  module.exports = app;