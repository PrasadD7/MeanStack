var express = require('express');
var path=require('path');
var handlers = require('./handler');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get("/",handlers.defaultHandler);
app.get("/hello",handlers.helloHandler);
var onListen = function () {
    console.log("Listening on port 2020");    
}

var server = app.listen(2020,onListen)