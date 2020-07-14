import protoMain from "../../protos/proto-main";

var host = process.env.NODE_ENV === 'dev' ? 'ws://localhost:3000' : 'wss://ws-js-pb-server.herokuapp.com';
var ws = new WebSocket(`${host}/pb`);

ws.onopen = () => {
  document.querySelector('.status-txt').innerHTML = '<span style="color:green">Connected</span>';
};

/**
 * Use arrayBuffer
 */
ws.binaryType = 'arraybuffer';
ws.onmessage = function (message) {
  const data = new Uint8Array(message.data);

  const mainMsg = protoMain.Main.decode(data);
  const typeMsg = protoMain[mainMsg.type].decode(mainMsg.data);

  if (typeMsg.op === 'pong') {
    const rtt = new Date().getTime() - Number(typeMsg.args[0]);
    pushRttData(rtt);
    return;
  };

  const endTs = new Date().getTime();
  const totalTs = endTs - typeMsg.timestampE6;

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
