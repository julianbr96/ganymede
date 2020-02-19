const http = require('http');
const app = require('./src/app');
const server = http.createServer(app);

server.listen(process.env.port || '3000');
module.exports = server;
