import { PBIndexQuote } from "../../protos/IndexQuote";

var ws = new WebSocket('wss://ws-js-pb-server.herokuapp.com/pb');

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
  const decodeMsg = PBIndexQuote.decode(data);

  postMessage(decodeMsg);
};

onmessage = ({ data }) => {
  if (!wsOpened) {
    waitQueue.push(data);
    return;
  }
  ws.send(data);
};
