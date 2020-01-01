var http = require('http');
var fs = require('fs');
var url = require('url');
var onServerStartup = function(req,res) {
    var path = url.parse(req.url).path;
    fs.readFile(path.substr(1),function (err,data) {
             
        if (err) {
            console.log("err :"+err);
        res.writeHead(404,{'Content-Type':'text/html'});
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data.toString());
        }
        res.end();
    })

}

var server = http.createServer(onServerStartup);
server.listen(8080);
console.log("server running at http://127.0.0.1:8080");
