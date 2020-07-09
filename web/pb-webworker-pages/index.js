var myWorker = new Worker('./ws.worker.js');

myWorker.onmessage = ({ data }) => {
  if (data && data.type === 'rtt') {
    pushRttData(data.val);
    return;
  }

  if (data === 'opened') {
    document.querySelector('.status-txt').innerHTML = '<span style="color:green">Connected</span>';
    return;
  }
  const endTs = new Date().getTime();
  const totalTs = endTs - data.timestampE6;
  console.log('full span = ', totalTs, 'ms');

  pushMainDataTime(totalTs);
};

let timer = 0;
window.sendMsg = function sendMsg() {
  clearInterval(timer);
  timer = setInterval(() => { myWorker.postMessage('ping'); }, 2000);
}