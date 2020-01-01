
exports.defaultHandler = function () {
    res.sendFile(path.join(__dirname+'/index.html'));   
}

exports.helloHandler = function (req,res) {
    var resObj = {
        'id':1,
        'message':'Hello User',
        'emotion':'happy'
    }
    res.writeHead(200,{'Response-Type':'application/json'});
    res.write(JSON.stringify(resObj));
    res.end();
}
