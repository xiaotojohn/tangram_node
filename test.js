var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) 
{

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data) 
    {
    
        console.log(filename);
        if (err) 
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        else if (req.url == '/style.css')
        {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            return res.end();
        }
        else if (req.url == '/script.js')
        {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(8080);




// ------------------- past versions -------------------
// var http = require('http');
// // var sancheck = require('./sancheck');
// const fs = require('node:fs');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(fs.readFileSync('front_end/index.html'));
//   // fs.readfile could be used to read the specific file. not the folder.
//   // so the website is responding with css and js files.
//   res.end();
// }).listen(8080);