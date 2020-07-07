var ws = new WebSocket('wss://ws-js-pb-server.herokuapp.com/json');

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
  postMessage(data);
};

onmessage = ({ data }) => {
  if (!wsOpened) {
    waitQueue.push(data);
    return;
  }
  ws.send(data);
};
