var path = require('path');
var express = require('express');
var api = require('./api');
var bodyParser = require('body-parser');
var port = 3001;

var app = express();

app.use(bodyParser.json());
app.use('/api', api)
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});
