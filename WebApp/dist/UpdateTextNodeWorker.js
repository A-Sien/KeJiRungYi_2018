!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([,function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(){function n(){}return n.getRandomBoolean=function(){return Math.random()>=.5},n.getRandomNumberInRange=function(t,e,r){var o=Math.pow(10,r);return n.getRandomIntInRange(t*o,e*o)/o},n.getRandomIntInRange=function(n,t){return Math.floor(Math.random()*(t-n+1))+n},n.getRandomInt=function(t){var e=n.getRandomBoolean()?1:-1;return n.getRandomNegativeInt(t)*e},n.getRandomNegativeInt=function(t){return n.getRandomNegativeNumber(t)},n.getRandomNumber=function(t,e){var r=n.getRandomBoolean()?1:-1;return n.getRandomNegativeNumber(t,e)*r},n.getRandomNegativeNumber=function(n,t){n=n||1,t=t||0;var e=Math.round(Math.random()*Math.pow(10,n+t));return 0!==t&&(e/=Math.pow(10,t)),e},n.sort=function(n,t){return n.sort(function(n,e){return t(n)-t(e)}),n},n.shuffle=function(n){for(var t,e,r=n.length;0!==r;)e=Math.floor(Math.random()*r),t=n[r-=1],n[r]=n[e],n[e]=t;return n},n}()},function(n,t,e){"use strict";e.d(t,"a",function(){return o});var r=e(1),o=function(){function n(){}return n.distanceVector=function(n,t){var e=n.x-t.x,r=n.y-t.y,o=n.z-t.z;return Math.sqrt(e*e+r*r+o*o)},n.addVector=function(n,t){return new BABYLON.Vector3(n.x+t.x,n.y+t.y,n.z+t.z)},n.subtractVector=function(n,t){return new BABYLON.Vector3(n.x-t.x,n.y-t.y,n.z-t.z)},n.getRandomVector3=function(n,t,e){return void 0===n&&(n=!0),void 0===t&&(t=!0),void 0===e&&(e=!0),new BABYLON.Vector3(n?r.a.getRandomInt():0,t?r.a.getRandomInt():0,e?r.a.getRandomInt():0).normalize()},n.updatePosition=function(n,t,e){n.x+=t.x*e,n.y+=t.y*e,n.z+=t.z*e},n.positionToString=function(n){return["x","y","z"].map(function(t){return n[t].toFixed(2)}).join(", ")},n.getLineToEachOther=function(t){var e=[];return t.forEach(function(r,o){t.forEach(function(t,a){if(o<a){var u=n.distanceVector(r,t),i=o+"-"+a;e.push({key:i,from:r,to:t,distance:u})}})}),e},n}()},,,,,function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(2);self.onmessage=function(n){var t=n.data,e=o.a.getLineToEachOther(t),a=r.a.sort(e,function(n){return n.distance}).filter(function(n){return n.distance>.2}).slice(0,1200).map(function(n){return[n.from,n.to]});postMessage(a,void 0)}}]);
//# sourceMappingURL=UpdateTextNodeWorker.js.map