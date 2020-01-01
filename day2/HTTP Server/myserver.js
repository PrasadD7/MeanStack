var http=require("http")
var fs=require ("fs")
var url=require ("url")

function onpradnyaserver(req,res) {
    var path=url.parse(req.url).path;
    fs.readFile(path.substr(1),fio);

    function fio(err,data) {
        if (data) {
            console.log("data is read successfully");
            res.writeHead(200 ,{"Content-Type":"text/html"});
            res.write(data);            
        }
        else{
            console.log("data is not found");
            res.writeHead(404,{"Content-Type":"text/html"});
        }
        res.end();
    }
}

var server= http.createServer(onpradnyaserver);
server.listen(2020);
