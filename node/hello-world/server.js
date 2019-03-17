// node app
var http = require('http');

http.createServer(function (request, response)
{
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Node.js\n');
}).listen(8080, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8080/');