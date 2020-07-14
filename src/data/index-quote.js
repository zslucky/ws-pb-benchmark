const _ = require('lodash');
const { v4 } = require('uuid');

let cs = 1;

const obLevel = 20;
const rtCounts = 100;

const rand = () => Math.round(Math.random() * 10);

module.exports = function getData() {
  return {
    crossSeq: cs++,
    topic: 'index_quote',
    type: 'snapshot',
    timestampE6: new Date().getTime(),
    orderbook: _.times(obLevel * 2, (idx) => ({
      id: idx,
      price: 9923.12 + idx,
      side: Math.round(Math.random()),
      size: 0 + idx + Math.random(),
      symbol: Math.round(Math.random()),
    })),
    recentTrade: _.times(rtCounts, (idx) => ({
      execID: v4(),
      execPrice: String(9070.50 + idx),
      execQty: 337,
      execTime: new Date((new Date().getTime() + idx * 2000)).toISOString(),
      side: Math.round(Math.random()),
      symbol: Math.round(Math.random()),
      tickDirection: Math.round(Math.random()),
      transactTimeE6: new Date().getTime() + idx * 3,
    })),
    instrument: {
      countdownHour: 6 + rand() * 0.2,
      createdAt: new Date((new Date().getTime() + rand() * 5000)).toISOString(),
      crossSeq: cs++,
      fundingRateE6: 100 + rand() * 50,
      highPrice24hE4: 93920000 + rand() * 5000,
      id: 1,
      indexPriceE4: 92816300 + rand() * 5000,
      lastPriceE4: 92820000 + rand() * 5000,
      lastTickDirection: 1,
      lowPrice24hE4: 90845000 + rand() * 5000,
      markPriceE4: 92822700 + rand() * 5000,
      nextFundingTime: new Date((new Date().getTime() + rand() * 3000)).toISOString(),
      openInterest: 236802282 + rand() * 123,
      openValueE8: 1461680310351 + rand() * 231,
      predictedFundingRateE6: 100 + rand() * 150,
      prevPrice1hE4: 93170000  + rand() * 5000,
      prevPrice24hE4: 90995000 + rand() * 5000,
      price1hPcntE6: -3756 + rand() * 3,
      price24hPcntE6: 20056 + rand() * 1,
      symbol: Math.round(Math.random()),
      totalTurnoverE8: 3973311614452362 + rand() * 431,
      totalVolume: 335755668665 + rand() * 112,
      turnover24hE8: 6563069055480 + rand() * 223,
      updatedAt: new Date((new Date().getTime() + rand() * 6500)).toISOString(),
      volume24h: 607427738 + rand() * 213,
    },
  };
};
