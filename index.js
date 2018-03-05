'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var foo = require('./db.json');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

app.use(cors());

app.get('/results', function(req, res) {
    res.send(foo);
});

app.post('/results', function(req, res) {
    var body = req.body;
    console.log('>> new request ');
    console.log(body);
    res.send(foo);
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000')
});