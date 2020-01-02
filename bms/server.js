var express = require('express');
var path=require('path');
var handlers = require('./handler');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get("/",handlers.defaultHandler);

app.get("/books",handlers.booksHandler)

var onListen = function () {
    console.log(" Server is listening on port "+server.address().address+server.address().port);
    
}

var server = app.listen(2021,onListen);