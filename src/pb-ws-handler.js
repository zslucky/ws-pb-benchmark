const WebSocket = require('ws');
const consola = require('consola');
const { PBIndexQuote } = require('../protos/IndexQuote');
const getData = require('./data/index-quote');

console.log('PBIndexQuote = ', PBIndexQuote);

const pbWsHandler = new WebSocket.Server({ noServer: true });

pbWsHandler.on('connection', function connection(ws) {
  consola.info('[PB WS]: connected.');

  ws.on('close', () => {
    consola.info('[PB WS]: closed.');
  });

  ws.on('message', () => {
    const data = getData();
    const msg = PBIndexQuote.create(data);
    const buffer = PBIndexQuote.encode(msg).finish();
    ws.send(buffer);
  });
});

module.exports = pbWsHandler;
