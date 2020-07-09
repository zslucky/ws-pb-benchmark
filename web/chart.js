
let rttSum = 0;
let avg = 0;
const rttArr = [];

window.pushRttData = (rtt) => {
  rttArr.push(rtt);
  rttSum += (rtt || 0);
  avg = Math.round((rttSum / (rttArr.length)) * 1e5) / 1e5;

  document.querySelector('.rtt-dv').innerHTML = avg;
};


let totalSum = 0;
let totalAvg = 0;
let encodeDecodeAvg = 0;
const totalArr = [];

window.pushMainDataTime = (total) => {
  totalArr.push(total);
  totalSum += total;
  totalAvg = totalSum / (totalArr.length);
  encodeDecodeAvg = Math.round((totalAvg - avg) * 1e5) / 1e5;

  document.querySelector('.en-de-dv').innerHTML = encodeDecodeAvg;
};
