var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url + '\n'); // this will return the url of the request. 
  // req is an object that represents the request, including properties like url, method, headers, and more.
  // so server will know what path the client is requesting by req.url
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);