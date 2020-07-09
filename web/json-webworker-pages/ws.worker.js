var host = process.env.NODE_ENV === 'dev' ? 'ws://localhost:3000' : 'wss://ws-js-pb-server.herokuapp.com';
var ws = new WebSocket(`${host}/json`);

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
  const data = JSON.parse(message.data);
  console.log('data = ', data);

  if (data.op === 'pong') {
    const rtt = new Date().getTime() - Number(data.args[0]);
    console.log(`Pong --> ${rtt}ms`);
    postMessage({ type: 'rtt', val: rtt });
    return;
  };

  postMessage(data);
};

onmessage = ({ data }) => {
  if (!wsOpened) {
    waitQueue.push(data);
    return;
  }

  ws.send(JSON.stringify({ op: 'ping', args:[new Date().getTime()] }));
  ws.send(JSON.stringify({ op: 'topic', args:[new Date().getTime()] }));
};
