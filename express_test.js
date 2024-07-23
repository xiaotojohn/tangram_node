const express = require('express');
const app = express();
var url = require('url');
const fs = require('fs');

console.log('server started');

//print any request path to the console
app.use(function(req, res, next) {
    console.log('request path: ' + req.url);
    next();
});

app.get(['/','/index.html'], function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('front_end/index.html'));
    res.end();
    console.log('index.html requested');
});

app.get('/style.css', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(fs.readFileSync('front_end/style.css'));
    res.end();
    console.log('style.css requested');
});

app.get('/script.js', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(fs.readFileSync('front_end/script.js'));
    res.end();
    console.log('script.js requested');
});

app.get('/d-schedule.html', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('front_end/d-schedule.html'));
    res.end();
    console.log('d-schedule.html requested');
});

app.get('/w-schedule.html', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
        fs.readFileSync('front_end/w-schedule.html'), 'utf-8', function(err, data) {
            if (err) {
                console.log('error reading w-schedule.html');
                return;
            }
            console.log('w-schedule.html requested');
        }
    );
    res.end();
});

app.get('/images/favicon.png', function(req, res) {
    console.log('yes it is triggered!!!!!!!!');
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(fs.readFileSync('front_end/images/favicon.png'));
    res.end();
    // console.log('favicon.png requested');
});

// notes: yes the app.get method might not be the best way to handle the static files.
// the favicon.png, before in the html we used <link rel="icon" type="image/x-icon" href="/images/favicon.png">
// but now we are using <link rel="icon" type="image/png" href="favicon.png">
// somehow in the first situation, even though the path is requested, the server does not respond with the image.
// app.get is not processing the request, even though the corresponding path is requested.
// but when we change the path in the html, the server responds with the image.
// though the actual path of the file is not under the root directory of the server.

app.get('/images/placeholder.png', function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(fs.readFileSync('front_end/images/placeholder.png'));
    res.end();
    console.log('placeholder.png requested');
});

// app.get('/', function(req, res) {
//     const path = req.url;
//     let contentType = '';
//     let filePath = '';
//     console.log(path);
//     switch (path) {
//         case '/':
//             contentType = 'text/html';
//             filePath = 'front_end/index.html';
//             break;
//         case '/style.css':
//             contentType = 'text/css';
//             filePath = 'front_end/style.css';
//             break;
//         case '/script.js':
//             contentType = 'text/javascript';
//             filePath = 'front_end/script.js';
//             break;
//         case '/d-schedule.html':
//             contentType = 'text/html';
//             filePath = 'front_end/d-schedule.html';
//             break;
//         case '/w-schedule.html':
//             contentType = 'text/html';
//             filePath = 'front_end/w-schedule.html';
//             break;
//         case '/':
//         default:
//             contentType = 'text/plain';
//             filePath = 'front_end/not-found.html';
//             break;
//     }
//     // print the path of the request
//     console.log('request path: ' + path + ' processed');

//     res.writeHead(200, {'Content-Type': contentType});
//     res.write(fs.readFileSync(filePath));
//     res.end();
// });

app.listen(8080,() => console.log('now listening 8080'));

