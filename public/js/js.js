!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"c",function(){return a}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var u=3e4,s=!0;function a(t){return Array.from(t).filter(function(t){return[">","<","+","-",".","[","]"].indexOf(t)>-1})}var f=function(){function t(e,n,o){r(this,t),this.token=e,this.left=n,this.right=o}return i(t,[{key:"traverse",value:function(t){var e=t(this.token),n=e.shouldLoopBack,r=e.shouldSkipForward;if(this.right)for(;!r&&this.right.traverse(t).shouldLoopBack;);return this.left&&(n=this.left.traverse(t).shouldLoopBack),{shouldLoopBack:n,shouldSkipForward:!1}}}]),t}(),c=function(){function t(e){r(this,t),this._tokens=e,this._at=0,this.parsed=this._parse()}return i(t,[{key:"_parse",value:function(){if(this._at>=this._tokens.length)return null;var t=this._tokens[this._at],e=null;return this._at++,"["===t&&(e=this._parse()),[">","<","+","-",".","["].indexOf(t)>-1?new f(t,this._parse(),e):new f(t,null,null)}}]),t}(),l=function(){function t(e){r(this,t),this._nodeRoot=e,this._ptr=0,this._stdout="",this._buffer=new(s?Uint8Array:Int8Array)(u).fill(0)}return i(t,[{key:"run",value:function(){var t=this;return this._nodeRoot.traverse(function(e){return t._run.call(t,e)}),this._stdout}},{key:"_run",value:function(t){if(t){if("+"===t)this._buffer[this._ptr]++;else if("-"===t)this._buffer[this._ptr]--;else if(">"===t)this._ptr++;else if("<"===t)this._ptr--;else{if("["===t)return{shouldSkipForward:0===this._buffer[this._ptr],shouldLoopBack:!1};if("]"===t)return{shouldSkipForward:!1,shouldLoopBack:!isNaN(this._buffer[this._ptr])&&0!==this._buffer[this._ptr]};"."===t&&(this._stdout+=String.fromCharCode(this._buffer[this._ptr]))}return{shouldSkipForward:!1,shouldLoopBack:!1}}}}]),t}()},function(t,e,n){"use strict";n.r(e);var r=n(0);document.addEventListener("DOMContentLoaded",function(){document.getElementById("execute").addEventListener("click",function(){var t=performance.now(),e=document.getElementById("code").value,n=Object(r.c)(e),o=new r.b(n),i=new r.a(o.parsed).run();document.getElementById("stdout").innerText=i;var u=performance.now();document.getElementById("elapsed-time-js").innerHTML="\n        <span>execution time: ".concat(u-t," ms.</span>\n    ")})})}]);