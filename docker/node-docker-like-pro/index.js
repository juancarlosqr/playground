const express = require('express');
const app = express();

const host = '0.0.0.0';
const port = 5000;

app.get('/', (_, res) => {
  res.send('The best way to manage your Node app using Docker\n');
});

app.listen(port, host);

console.log(`Running on http://${host}:${port}`);
