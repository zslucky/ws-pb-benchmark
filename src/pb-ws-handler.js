const WebSocket = require('ws');
const consola = require('consola');
const { IndexQuote, Health, Main } = require('../protos/proto-main');
const getData = require('./data/index-quote');

const pbWsHandler = new WebSocket.Server({ noServer: true });

pbWsHandler.on('connection', function connection(ws) {
  consola.info('[PB WS]: connected.');

  ws.on('close', () => {
    consola.info('[PB WS]: closed.');
  });

  ws.on('message', (info) => {
    const { op, args } = JSON.parse(info);
    const [ ts ] = args;
    if (op === 'ping') {
      const healthMsg = Health.create({ op: 'pong', args });
      const healthBuffer = Health.encode(healthMsg).finish();
      const mainMsgPing = Main.create({ type: 'Health', data: healthBuffer });
      const mainBufferPing = Main.encode(mainMsgPing).finish();

      ws.send(mainBufferPing);
      return;
    }
    const data = { ...getData(), timestampE6: Number(ts) };
    const msg = IndexQuote.create(data);
    const buffer = IndexQuote.encode(msg).finish();
    const mainMsg = Main.create({ type: 'IndexQuote', data: buffer });
    const mainBuffer = Main.encode(mainMsg).finish();

    ws.send(mainBuffer);
  });
});

module.exports = pbWsHandler;
