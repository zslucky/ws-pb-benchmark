var host = process.env.NODE_ENV === 'dev' ? 'ws://localhost:3000' : 'wss://ws-js-pb-server.herokuapp.com';
var ws = new WebSocket(`${host}/json`);

ws.onopen = () => {
  document.querySelector('.status-txt').innerHTML = '<span style="color:green">Connected</span>';
};

/**
 * Use arrayBuffer
 */
ws.onmessage = function (message) {
  const data = JSON.parse(message.data);

  if (data.op === 'pong') {
    const rtt = new Date().getTime() - Number(data.args[0]);
    console.log(`Pong --> ${rtt}ms`);
    pushRttData(rtt);
    return;
  };

  const endTs = new Date().getTime();
  const totalTs = endTs - data.timestampE6;
  console.log('full span = ', totalTs, 'ms');

  pushMainDataTime(totalTs);
};

let timer = 0;
window.sendMsg = function sendMsg() {
  clearInterval(timer);

  timer = setInterval(() => {
    ws.send(JSON.stringify({ op: 'ping', args:[new Date().getTime()] }));
    ws.send(JSON.stringify({ op: 'topic', args:[new Date().getTime()] }));
  }, 2000);
}

window.addEventListener('load', () => {

});
