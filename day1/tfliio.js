var http = require('http');
var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(line);
    fs.appendFile('demo.html',line,function (){console.log()});
    
fs.appendFile('demo.html','</h1></body></html>',function (){console.log()});
})
console.log("Enter Greetings ::>>");
http.createServer(function (req, res) {
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    });
 
}).listen(8080);
