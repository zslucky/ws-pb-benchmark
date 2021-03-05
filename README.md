# WS-PB
Websocket with PB demo and benchmark

## Demo
`Get Msg` button will trigger a 2 seconds interval stream from websocket. (Need wait 10s for data settled). [Demo Address](https://zslucky.github.io/ws-pb-benchmark/dist/index.html)

Run `node zlib-test` to compare compressed size.

## Tech
 - Heroku
 - Parcel
 - Websocket
 - protobufjs

## Develop
 - `yarn server`: to start ws server
  - path: `/pb` is for protobuf
  - path: `/json` is for json
 - `yarn dev`: to start browser
