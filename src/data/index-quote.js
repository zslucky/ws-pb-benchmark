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
    instrument: {
      countdownHour: 6,
      createdAt: "2018-11-14T16:33:26Z",
      crossSeq: 1740029616,
      fundingRateE6: 100,
      highPrice24hE4: 93920000,
      id: 1,
      indexPriceE4: 92816300,
      lastPriceE4: 92820000,
      lastTickDirection: 1,
      lowPrice24hE4: 90845000,
      markPriceE4: 92822700,
      nextFundingTime: "2020-07-07T08:00:00Z",
      openInterest: 236802282,
      openValueE8: 1461680310351,
      predictedFundingRateE6: 100,
      prevPrice1hE4: 93170000,
      prevPrice24hE4: 90995000,
      price1hPcntE6: -3756,
      price24hPcntE6: 20056,
      symbol: 0,
      totalTurnoverE8: 3973311614452362,
      totalVolume: 335755668665,
      turnover24hE8: 6563069055480,
      updatedAt: "2020-07-07T02:29:54Z",
      volume24h: 607427738,
    },
  };
};
