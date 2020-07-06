var ws = new WebSocket('wss://ws-js-pb-server.herokuapp.com/json');

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

ws.onopen = () => {
  document.querySelector('.status-txt').innerHTML = '<span style="color:green">Connected</span>';
};

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

let timer = 0;
window.sendMsg = function sendMsg() {
  clearInterval(timer);
  timer = setInterval(() => { ws.send(1); }, 2000);
}