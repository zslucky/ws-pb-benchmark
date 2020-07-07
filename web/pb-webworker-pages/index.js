var myWorker = new Worker('./ws.worker.js');

myWorker.postMessage('312');

myWorker.onmessage = ({ data }) => {
  if (data === 'opened') {
    document.querySelector('.status-txt').innerHTML = '<span style="color:green">Connected</span>';
    return;
  }
  const endTs = new Date().getTime();
  console.log('full span = ', endTs - data.timestampE6, 'ms');
};

let timer = 0;
window.sendMsg = function sendMsg() {
  clearInterval(timer);
  timer = setInterval(() => { myWorker.postMessage(1); }, 2000);
}