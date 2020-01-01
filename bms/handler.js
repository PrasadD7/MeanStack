
exports.defaultHandler = function (req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));   
}

exports.booksHandler = function (req, res){
    //BookID, Title, category, Availalbe (true or false).

    var books  = [
        {
            BookID:101,
            Title:"Let Us C",            
            Category:"Technical",
            Available:"true"
        },
        {
            BookID:102,
            Title:"Let Us C++",            
            Category:"Technical",
            Available:"false"
        },
        {
            BookID:103,
            Title:"The Alchemist",            
            Category:"Motivational",
            Available:"true"
        }
];
res.send(books);
}