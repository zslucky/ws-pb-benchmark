const { deflate, gzip, brotliCompress, constants } = require('zlib');
const getData = require('./src/data/index-quote');
const { IndexQuote, Health, Main } = require('./protos/proto-main');

const rawData = getData();
const data = JSON.stringify(getData());
const opts = {
  chunkSize: 1024,
  memLevel: 7,
  level: 3
};
const brOpts = {
  chunkSize: 1024,
  params: {
    [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
    [constants.BROTLI_PARAM_QUALITY]: 7,
  }
};

console.log('data size = ', data.length);

const msg = IndexQuote.create(rawData);
const pbBuffer = IndexQuote.encode(msg).finish();
console.log('pb size = ', pbBuffer.length);

deflate(pbBuffer, opts, (err, buffer) => {
  console.log(`pb deflate size = ${buffer.length}`);
});

brotliCompress(pbBuffer, brOpts, (err, buffer) => {
  console.log(`pb br size = ${buffer.length}`);
});

deflate(data, opts, (err, buffer) => {
  console.log(`deflate size = ${buffer.length}`);
});

gzip(data, opts, (err, buffer) => {
  console.log(`gzip size = ${buffer.length}`);
})

brotliCompress(data, brOpts, (err, buffer) => {
  console.log(`br size = ${buffer.length}`);
});