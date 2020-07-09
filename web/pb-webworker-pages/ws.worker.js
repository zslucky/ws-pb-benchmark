import protoMain from "../../protos/proto-main";

var host = process.env.NODE_ENV === 'dev' ? 'ws://localhost:3000' : 'wss://ws-js-pb-server.herokuapp.com';
var ws = new WebSocket(`${host}/pb`);

ws.binaryType = 'arraybuffer';

const waitQueue = [];
let wsOpened = false;

const sendWaitingQueue = () => {
  do {
    ws.send(waitQueue.shift());
  } while (waitQueue.length < 1);
};

ws.onopen = () => {
  wsOpened = true;
  postMessage('opened');
  // sendWaitingQueue();
};

/**
 * Use arrayBuffer
 */
ws.onmessage = function (message) {
  const data = new Uint8Array(message.data);

  const mainMsg = protoMain.Main.decode(data);
  const typeMsg = protoMain[mainMsg.type].decode(mainMsg.data);

  if (typeMsg.op === 'pong') {
    const rtt = new Date().getTime() - Number(typeMsg.args[0]);
    console.log(`Pong --> ${rtt}ms`);
    postMessage({ type: 'rtt', val: rtt });
    return;
  };

  postMessage(typeMsg);
};

onmessage = ({ data }) => {
  if (!wsOpened) {
    waitQueue.push(data);
    return;
  }

  ws.send(JSON.stringify({ op: 'ping', args:[new Date().getTime()] }));
  ws.send(JSON.stringify({ op: 'topic', args:[new Date().getTime()] }));
};
