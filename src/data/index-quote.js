const _ = require('lodash');

let cs = 1;

const obLevel = 20;
const rtCounts = 100;

module.exports = function getData() {
  return {
    crossSeq: cs++,
    topic: 'index_quote',
    type: 'snapshot',
    timestampE6: new Date().getTime(),
    orderbook: _.times(obLevel * 2, (idx) => ({
      id: idx,
      price: 9923.12,
      side: Math.round(Math.random()),
      size: 123233,
      symbol: Math.round(Math.random()),
    })),
    recentTrade: _.times(rtCounts, () => ({
      execID: "6a37530a-45cc-504a-9774-74a8409ec200",
      execPrice: "9070.50",
      execQty: 337,
      execTime: "2020-07-06T00:11:48Z",
      side: Math.round(Math.random()),
      symbol: Math.round(Math.random()),
      tickDirection: Math.round(Math.random()),
      transactTimeE6: 1593994308451020,
    })),
  };
};
