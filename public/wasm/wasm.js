!function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=0,a=[];s<i.length;s++)o=i[s],r[o]&&a.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(_&&_(t);a.length;)a.shift()()}var n={},r={1:0};var o={};var i={5:function(){return{"./optimized":{__wbindgen_object_drop_ref:function(e){return n[3].exports.__wbindgen_object_drop_ref(e)},__widl_instanceof_Window:function(e){return n[3].exports.__widl_instanceof_Window(e)},__widl_f_get_element_by_id_Document:function(e,t,r){return n[3].exports.__widl_f_get_element_by_id_Document(e,t,r)},__widl_f_value_HTMLTextAreaElement:function(e,t){return n[3].exports.__widl_f_value_HTMLTextAreaElement(e,t)},__widl_f_set_value_HTMLTextAreaElement:function(e,t,r){return n[3].exports.__widl_f_set_value_HTMLTextAreaElement(e,t,r)},__widl_f_document_Window:function(e){return n[3].exports.__widl_f_document_Window(e)},__wbg_call_8a9c8b0a32a202ff:function(e,t,r){return n[3].exports.__wbg_call_8a9c8b0a32a202ff(e,t,r)},__wbg_newnoargs_a172f39151049128:function(e,t){return n[3].exports.__wbg_newnoargs_a172f39151049128(e,t)},__wbindgen_object_clone_ref:function(e){return n[3].exports.__wbindgen_object_clone_ref(e)},__wbindgen_throw:function(e,t){return n[3].exports.__wbindgen_throw(e,t)}}}}};function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=s);var a,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+""+({}[e]||e)+"/"+({}[e]||e)+".js"}(e),a=function(t){f.onerror=f.onload=null,clearTimeout(_);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var _=setTimeout(function(){a({type:"timeout",target:f})},12e4);f.onerror=f.onload=a,document.head.appendChild(f)}return({2:[5]}[e]||[]).forEach(function(e){var n=o[e];if(n)t.push(n);else{var r,s=i[e](),a=fetch(u.p+""+{5:"6a95fd3bdde9dc3d417d"}[e]+".module.wasm");if(s instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(a),s]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(a,s);else{r=a.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,s)})}t.push(o[e]=r.then(function(t){return u.w[e]=(t.instance||t).exports}))}}),Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e},u.w={};var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var _=a;u(u.s=2)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"c",function(){return a}),n.d(t,"b",function(){return _}),n.d(t,"a",function(){return c});var u=3e4,s=!0;function a(e){return Array.from(e).filter(function(e){return[">","<","+","-",".","[","]"].indexOf(e)>-1})}var f=function(){function e(t,n,o){r(this,e),this.token=t,this.left=n,this.right=o}return i(e,[{key:"traverse",value:function(e){var t=e(this.token),n=t.shouldLoopBack,r=t.shouldSkipForward;if(this.right)for(;!r&&this.right.traverse(e).shouldLoopBack;);return this.left&&(n=this.left.traverse(e).shouldLoopBack),{shouldLoopBack:n,shouldSkipForward:!1}}}]),e}(),_=function(){function e(t){r(this,e),this._tokens=t,this._at=0,this.parsed=this._parse()}return i(e,[{key:"_parse",value:function(){if(this._at>=this._tokens.length)return null;var e=this._tokens[this._at],t=null;return this._at++,"["===e&&(t=this._parse()),[">","<","+","-",".","["].indexOf(e)>-1?new f(e,this._parse(),t):new f(e,null,null)}}]),e}(),c=function(){function e(t){r(this,e),this._nodeRoot=t,this._ptr=0,this._stdout="",this._buffer=new(s?Uint8Array:Int8Array)(u).fill(0)}return i(e,[{key:"run",value:function(){var e=this;return this._nodeRoot.traverse(function(t){return e._run.call(e,t)}),this._stdout}},{key:"_run",value:function(e){if(e){if("+"===e)this._buffer[this._ptr]++;else if("-"===e)this._buffer[this._ptr]--;else if(">"===e)this._ptr++;else if("<"===e)this._ptr--;else{if("["===e)return{shouldSkipForward:0===this._buffer[this._ptr],shouldLoopBack:!1};if("]"===e)return{shouldSkipForward:!1,shouldLoopBack:!isNaN(this._buffer[this._ptr])&&0!==this._buffer[this._ptr]};"."===e&&(this._stdout+=String.fromCharCode(this._buffer[this._ptr]))}return{shouldSkipForward:!1,shouldLoopBack:!1}}}}]),e}()},,function(e,t,n){"use strict";n.r(t);n(0);n.e(2).then(n.bind(null,3)).then(function(e){var t=e.execute;document.getElementById("websystestbtn").addEventListener("click",function(){var e=performance.now();t();var n=performance.now();document.getElementById("elapsed-time-wasm").innerHTML="\n        <span>execution time: ".concat(n-e," ms.</span>\n    ")})})}]);