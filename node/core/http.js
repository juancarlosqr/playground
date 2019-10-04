const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === '/') {
    const body = '<h1>Hello http!</h1>';
    res.statusCode = 200;
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.setHeader('Content-Type', 'text/html');
    res.write(body);
  }

  if (req.url === '/api/stocks') {
    const body = JSON.stringify({
      data: ['GOOG', 'AMZN', 'MSFT', 'AAPL'],
    });
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'application/json',
    });
    res.write(body);
  }

  if (req.url === '/api/methods') {
    const body = JSON.stringify({
      data: http.METHODS,
      total: http.METHODS.length,
    });
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'application/json',
    });
    res.write(body);
  }

  if (req.url === '/api/statuses') {
    const body = JSON.stringify({
      data: http.STATUS_CODES,
      total: Object.keys(http.STATUS_CODES).length,
    });
    res.writeHead(418, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'application/json',
    });
    res.write(body);
  }

  res.end();
});

// server.on('connection', socket => {
//   // use the socket
//   console.log('Hello socket!');
// });

server.listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}/`);
});
