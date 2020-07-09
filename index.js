const http = require('http');
const url = require('url');
const consola = require('consola');

const jsonWsHandler = require('./src/json-ws-handler');
const pbWsHandler = require('./src/pb-ws-handler');

const server = http.createServer();

server.on('upgrade', function upgrade(request, socket, head) {
  const pathname = url.parse(request.url).pathname;

  switch (pathname) {
    case '/pb':
      pbWsHandler.handleUpgrade(request, socket, head, (ws) => {
        pbWsHandler.emit('connection', ws, request);
      });
      break;
    case '/json':
    default:
      jsonWsHandler.handleUpgrade(request, socket, head, (ws) => {
        jsonWsHandler.emit('connection', ws, request);
      });
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  consola.info(`Server started at prot ${port}`);
});
