parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"i9EO":[function(require,module,exports) {
var e=new Worker("/ws-pb-benchmark/dist/ws.worker.46a58728.js");e.postMessage("123"),e.onmessage=function(e){var s=e.data,a=(new Date).getTime();console.log("full span = ",a-s.timestampE6,"ms")};var s=0;window.sendMsg=function(){clearInterval(s),s=setInterval(function(){e.postMessage(1)},2e3)};
},{"./ws.worker.js":[["ws.worker.46a58728.js","lYgs"],"ws.worker.46a58728.js.map","lYgs"]}]},{},["i9EO"], null)
//# sourceMappingURL=/ws-pb-benchmark/dist/json-webworker-pages.449aef26.js.map