var ws = new WebSocket('ws://localhost:3000/json');

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

/**
 * Use arrayBuffer
 */
// ws.binaryType = 'arraybuffer';
ws.onmessage = function (message) {
  // const start = performance.now();

  const data = JSON.parse(message.data);

  const endTs = new Date().getTime();
  console.log('full span = ', endTs - data.timestampE6, 'ms');

  // const msg = ab2str(message.data);
  // console.log('msg = ', msg);
  // const end = performance.now();
  // console.log('span = ', end - start, 'ms');
};

window.sendMsg = function sendMsg() {
  ws.send(1);
}