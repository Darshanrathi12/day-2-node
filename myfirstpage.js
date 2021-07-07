var http = require('http');
var dt=new require('./myfirstModule');
var url = require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write("The current date and time is :"+dt.mydateTime());
    var sample = url.parse(req.url,true).query;
    var output = sample.year + " " + sample.name
    res.end(output);
}).listen(8080);