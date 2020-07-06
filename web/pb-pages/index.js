import { PBIndexQuote } from "../../protos/IndexQuote";

const ws = new WebSocket('ws://localhost:3000/pb');

/**
 * Use arrayBuffer
 */
ws.binaryType = 'arraybuffer';
ws.onmessage = function (message) {
  // const start = performance.now();

  const data = new Uint8Array(message.data);
  const decodeMsg = PBIndexQuote.decode(data);
  const endTs = new Date().getTime();

  console.log('full span = ', endTs - decodeMsg.timestampE6, 'ms');

  // console.log('decodeMsg = ', decodeMsg);
  // const end = performance.now();
  // console.log('span = ', end - start, 'ms');
};

window.sendMsg = function sendMsg() {
  ws.send(1);
}


/**
 * Use FileReader
 */

// ws.onmessage = function (message) {
//   const start = performance.now();
//   console.log('message = ', message);
//   var reader = new FileReader();

//   reader.readAsArrayBuffer(message.data);
//   reader.onload = () => {
//     var buf = new Uint8Array(reader.result);
//     console.log('buf = ', buf);
//     var content = response.decode(buf);
//     console.log('content = ', content);
//     const end = performance.now();
//     console.log('span = ', end - start, 'ms');
//   };
// };