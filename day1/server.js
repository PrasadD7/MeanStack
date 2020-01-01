var express=require('express');
var path=require('path');
var handlers=require('./handler')
var app=express();
//HTTP pipeline
//set middleware
//server configuration
app.use(express.static(path.join(_dirname,'public')));

//API Routing
app.get("/",handlers.onDefault);
app.get("/Bye",handlers.onBye);
app.get("/hello",handlers.onHello);

//server Hosting

var onListen=function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("Express web app listening on at http://localhost:8081",host,post);
}
var server=app.listen(8081,onListen);