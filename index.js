(()=>{var t={6077:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},1223:(t,e,r)=>{var n=r(5112),o=r(30),a=r(3070),i=n("unscopables"),c=Array.prototype;null==c[i]&&a.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),a=r(1400),i=function(t){return function(e,r,i){var c,u=n(e),s=o(u.length),f=a(i,s);if(t&&r!=r){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e){for(var r=o(e),c=i.f,u=a.f,s=0;s<r.length;s++){var f=r[s];n(t,f)||c(t,f,u(e,f))}}},4964:(t,e,r)=>{var n=r(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),a=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,a=r(7854),i=r(8113),c=a.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]<4?1:n[0]+n[1]:i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,a=r(8880),i=r(1320),c=r(3505),u=r(9920),s=r(4705);t.exports=function(t,e){var r,f,l,p,v,d=t.target,h=t.global,y=t.stat;if(r=h?n:y?n[d]||c(d,{}):(n[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(r,f))&&v.value:r[f],!s(h?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&a(p,"sham",!0),i(r,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:(t,e,r)=>{var n=r(857),o=r(7854),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t])||a(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:(t,e,r)=>{var n=r(7908),o={}.hasOwnProperty;t.exports=function(t,e){return o.call(n(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),a=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),a="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},9587:(t,e,r)=>{var n=r(111),o=r(7674);t.exports=function(t,e,r){var a,i;return o&&"function"==typeof(a=e.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(t,i),t}},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,a,i=r(8536),c=r(7854),u=r(111),s=r(8880),f=r(6656),l=r(5465),p=r(6200),v=r(3501),d="Object already initialized",h=c.WeakMap;if(i||l.state){var y=l.state||(l.state=new h),m=y.get,g=y.has,b=y.set;n=function(t,e){if(g.call(y,t))throw new TypeError(d);return e.facade=t,b.call(y,t,e),e},o=function(t){return m.call(y,t)||{}},a=function(t){return g.call(y,t)}}else{var x=p("state");v[x]=!0,n=function(t,e){if(f(t,x))throw new TypeError(d);return e.facade=t,s(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},a=function(t){return f(t,x)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,a=function(t,e){var r=c[i(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},7850:(t,e,r)=>{var n=r(111),o=r(4326),a=r(5112)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),a=n.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},3929:(t,e,r)=>{var n=r(7850);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},30:(t,e,r)=>{var n,o=r(9670),a=r(6048),i=r(748),c=r(3501),u=r(490),s=r(317),f=r(6200),l=f("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},d=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=n?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=i.length;r--;)delete d.prototype[i[r]];return d()};c[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=d(),void 0===e?r:a(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3070),a=r(9670),i=r(1956);t.exports=n?Object.defineProperties:function(t,e){a(t);for(var r,n=i(e),c=n.length,u=0;c>u;)o.f(t,r=n[u++],e[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),a=r(9670),i=r(7593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(a(t),e=i(e,!0),a(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),a=r(9114),i=r(5656),c=r(7593),u=r(6656),s=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=i(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return a(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),a=r(1318).indexOf,i=r(3501);t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c)!n(i,r)&&n(c,r)&&s.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~a(s,r)||s.push(r));return s}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(9670),o=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,a){return n(r),o(a),e?t.call(r,a):r.__proto__=a,r}}():void 0)},3887:(t,e,r)=>{var n=r(5005),o=r(8006),a=r(5181),i=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=a.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),a=r(6656),i=r(3505),c=r(2788),u=r(9909),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,r,c){var u,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||a(r,"name")||o(r,"name",e),(u=f(r)).source||(u.source=l.join("string"==typeof e?e:""))),t!==n?(s?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:i(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.12.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},3111:(t,e,r)=>{var n=r(4488),o="["+r(1361)+"]",a=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},1400:(t,e,r)=>{var n=r(9958),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),a=r(6656),i=r(9711),c=r(133),u=r(3307),s=o("wks"),f=n.Symbol,l=u?f:f&&f.withoutSetter||i;t.exports=function(t){return a(s,t)&&(c||"string"==typeof s[t])||(c&&a(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},1361:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6699:(t,e,r)=>{"use strict";var n=r(2109),o=r(1318).includes,a=r(1223);n({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},9653:(t,e,r)=>{"use strict";var n=r(9781),o=r(7854),a=r(4705),i=r(1320),c=r(6656),u=r(4326),s=r(9587),f=r(7593),l=r(7293),p=r(30),v=r(8006).f,d=r(1236).f,h=r(3070).f,y=r(3111).trim,m="Number",g=o.Number,b=g.prototype,x=u(p(b))==m,w=function(t){var e,r,n,o,a,i,c,u,s=f(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=y(s)).charCodeAt(0))||45===e){if(88===(r=s.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(i=(a=s.slice(2)).length,c=0;c<i;c++)if((u=a.charCodeAt(c))<48||u>o)return NaN;return parseInt(a,n)}return+s};if(a(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(x?l((function(){b.valueOf.call(r)})):u(r)!=m)?s(new g(w(e)),r,O):w(e)},S=n?v(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;S.length>j;j++)c(g,E=S[j])&&!c(O,E)&&h(O,E,d(g,E));O.prototype=b,b.constructor=O,i(o,m,O)}},2023:(t,e,r)=>{"use strict";var n=r(2109),o=r(3929),a=r(4488);n({target:"String",proto:!0,forced:!r(4964)("includes")},{includes:function(t){return!!~String(a(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.maxMap=t,this.numArr=[]}var r,n,o;return r=e,(n=[{key:"appear",value:function(){for(var t=Math.ceil(0),e=Math.floor(this.maxMap),r=Math.floor(Math.random()*(e-t)),n=document.querySelectorAll(".goblin"),o=document.querySelector(".active");this.numArr[0]===r&&r>t;)n[r-1].classList.add("active"),this.numArr[0]=r-1;for(;this.numArr[0]===r&&r<e-1;)n[r+1].classList.add("active"),this.numArr[0]=r+1;n[r].classList.add("active"),this.numArr[0]=r,o&&o.classList.remove("active")}}])&&t(r.prototype,n),o&&t(r,o),e}();function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.square=e}var e,r,o;return e=t,(r=[{key:"add",value:function(){var t=document.createElement("div");t.classList.add("board"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("status"),e.textContent="Гоблинов убито : ",document.body.appendChild(e);var r=document.createElement("span");r.id="dead",r.textContent="0",e.appendChild(r);var n=document.createElement("div");n.classList.add("status"),n.textContent="Гоблинов сбежало : ",document.body.appendChild(n);var o=document.createElement("span");o.id="lost",o.textContent="0",n.appendChild(o);for(var a=0;a<this.square;a++){var i=document.createElement("div");i.classList.add("map"),t.appendChild(i);var c=document.createElement("div");c.classList.add("img"),i.appendChild(c);var u=new Image;u.src="https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true",u.classList.add("goblin"),c.appendChild(u)}}}])&&n(e.prototype,r),o&&n(e,o),t}();r(6699),r(2023),r(9653);function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i,c,u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.square=e}var e,r,n;return e=t,(r=[{key:"hummer",value:function(){for(var t=document.getElementById("dead"),e=document.getElementById("lost"),r=document.querySelectorAll(".img"),n=function(n){r[n].addEventListener("click",(function(){r[n].firstChild.className.includes("active")?(t.textContent=Number(t.textContent)+1,"10"===t.textContent&&(alert("Игра окончена! Вы убийца гоблинов!"),location.reload())):(e.textContent=Number(e.textContent)+1,"5"===e.textContent&&(alert("Игра окончена! Гоблинам повезло с вашей реакцией"),location.reload()))}))},o=0;o<this.square;o++)n(o)}}])&&a(e.prototype,r),n&&a(e,n),t}();i=new o(16),c=new e(16),i.add(),setInterval((function(){return c.appear()}),1e3),new u(16).hummer()})()})();