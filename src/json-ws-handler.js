const WebSocket = require('ws');
const consola = require('consola');
const getData = require('./data/index-quote');

const jsonWsHandler = new WebSocket.Server({
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

jsonWsHandler.on('connection', function connection(ws) {
  consola.info('[Json WS]: connected.');

  ws.on('close', () => {
    consola.info('[Json WS]: closed.');
  });

  ws.on('message', () => {
    ws.send(JSON.stringify(getData()));
  });
});

module.exports = jsonWsHandler;
