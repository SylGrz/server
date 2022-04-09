const http = require('http');
const port = process.env.PORT;
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('SylieGie jest super SUPER!');
}
const server = http.createServer(requestListener);
server.listen(port);