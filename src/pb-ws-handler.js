const WebSocket = require('ws');
const consola = require('consola');
const { IndexQuote, Health, Main } = require('../protos/proto-main');
const getData = require('./data/index-quote');

const pbWsHandler = new WebSocket.Server({
  noServer: true,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed.
  }
});

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
