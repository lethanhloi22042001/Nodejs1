const http = require('http');

const server = http.createServer((req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
})

const server = http.createServer(requestListener);
server.listen(8080);