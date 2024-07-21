const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('front_end/index.html'));
    res.end();
})

app.get('/style.css', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(fs.readFileSync('front_end/style.css'));
    res.end();
})

app.get('/script.js', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(fs.readFileSync('front_end/script.js'));
    res.end();
})

app.listen(8080,() => console.log('now listening 8080'));

