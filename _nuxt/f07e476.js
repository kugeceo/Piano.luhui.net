(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{232:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return m})),e.d(n,"c",(function(){return h}));e(52);var r=e(660),o={},c=[],l=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],f=["1","#1","2","#2","3","4","#4","5","#5","6","#6","7"];!function(){for(var i=0;i<127;i++){var t=i,n=l[t%12];o[n+=(t/12|0)-1]=i,c[i]=n}}();var d=function(t){return o[t]},m=function(t){return c[t]},h=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"C#4",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"C",e={num:0,acc:"",class:"",step:""},c=r.a.note(t),d=l.indexOf(c.pc),m=l.indexOf(n),h=f,i=0;i<m;i++)h.unshift(h.pop());e.num=h[d].slice(-1),h[d].indexOf("#")>=0&&(e.acc="#");var v=n+4;m>=6&&(v=n+3);var w,y=o[t]-o[v];y>=0&&(w=Math.floor(Math.abs(y)/12)),y<0&&(w=Math.ceil(Math.abs(y)/12)),y>0&&(e.class="rise-"),y<0&&(e.class="fall-"),e.class+=w,w<=0&&(e.class="");for(var j=0;j<w;j++)y>0&&(e.step+="+"),y<0&&(e.step+="-");return e}},316:function(t,n,e){"use strict";var r,o={AutoPiano:"https://www.autopiano.cn",WordPress:"https://cms.autopiano.cn/wp-json",LeanCloudFile:"https://lc-SAs97Sjr.cn-n1.lcfile.com",JsDelivr:"https://cdn.jsdelivr.net/gh/warpprism/cdn@latest/autopiano/static"},c=(e(27),e(167)),l=function(t){alert(t)},f=((r=e.n(c).a.create({timeout:15e3})).defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.interceptors.request.use((function(t){return t}),(function(t){return Promise.error(t)})),r.interceptors.response.use((function(t){return t.status>=200&&t.status<300?Promise.resolve(t):Promise.reject(t)}),(function(t){var n=t.response;return n?(function(t,n){switch(t){case 401:l("401：您暂时没有权限");break;case 403:l("403：该资源禁止访问"),$nuxt.$router.push({path:"/"});break;case 404:$nuxt.$router.push({path:"/"});break;default:l(n)}}(n.status,n.data.message),Promise.reject(n)):Promise.reject(t)})),r),d={get:function(t){return f(Object.assign({url:"".concat(o.AutoPiano,"/"),method:"get"},t))}},m={getJwtToken:function(t){return f(Object.assign({url:"".concat(o.WordPress,"/jwt-auth/v1/token"),method:"post"},t))},validateJwtToken:function(t){return f(Object.assign({url:"".concat(o.WordPress,"/jwt-auth/v1/token/validate"),method:"post"},t))},posts:function(t){return f(Object.assign({url:"".concat(o.WordPress,"/wp/v2/posts"),method:"get"},t))},acfPosts:function(t){return f(Object.assign({url:"".concat(o.WordPress,"/acf/v3/posts"),method:"get"},t))},postsDetail:function(t,n){return f(Object.assign({url:"".concat(o.WordPress,"/wp/v2/posts/").concat(n),method:"get"},t))}};n.a={AutoPiano:d,TaoBao:{},WordPress:m}},384:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}));e(27);var r=function(t,n){if(window&&window.localStorage&&t)return"[object Object]"==Object.prototype.toString.call(n)&&(n=JSON.stringify(n)),window.localStorage.setItem(t,n),!0},o=function(t){if(window&&window.localStorage&&t){var n=window.localStorage.getItem(t);try{n=JSON.parse(n)}catch(t){n=n}return n}}},43:function(t,n,e){"use strict";var r=new(e(7).a);n.a=r},653:function(t,n,e){"use strict";e.d(n,"a",(function(){return S}));var r=e(2),o=e(72),c=(e(77),e(33),e(62),e(17),e(16),e(15),e(21),e(22),e(52),e(27),e(70),e(63),e(55),e(232)),l=e(315);function f(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw o}}}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}function m(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var v=function(t){if(!t)return"";if("string"==typeof t)return t;t.countUnderscore&&(t.classes=[].concat(Object(o.a)(t.classes),["underscore-".concat(t.countUnderscore)]));var n=t.classes?' class="'.concat(t.classes.join(" "),'"'):"",e=t.style?' style="'.concat(t.style,'"'):"",sup=t.acc?"<sup>".concat(t.acc,"</sup>"):"";return"<span ".concat(n," ").concat(e,">").concat(sup).concat(t.num,"</span>")},w=function(t){if(!t||0===t.length)return"";var n="",e=t.map((function(t){return v(h(h({},t),{},{countUnderscore:0}))})).join("");return n+=v({num:e,classes:["underscore-1"]}),t.splice(0,t.length),n},y=function(t){var n={num:t.map((function(t){return v(h(h({},t),{},{countUnderscore:0}))})).join(""),classes:["underscore-1"]};return t.splice(0,t.length),n},j=function(t){if(!t||0===t.length)return"";var n="",e=t.map((function(t){return v(h(h({},t),{},{countUnderscore:0}))})).join("");return n+=v({num:e,classes:["underscore-2"]}),t.splice(0,t.length),n},O=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="";if(n||t.score>=8){for(var r=0,o=[],c=[];t.notes.length>0;){var l=t.notes.shift();if(1===l.countUnderscore){if(c.length>0){var f=y(c);o.push(f)}o.push(l)}else 2===l.countUnderscore&&c.push(l);r=l.countUnderscore}if(1===r)e=w(o);else if(2===r)if(o.length>0){var d=y(c);o.push(d),e=w(o)}else e=j(c);t.score=0}return e},S=function(t){return t?function(t){if(!t)return"";var n,e="",r={notes:[],score:0},o=0,c=f(t);try{for(c.s();!(n=c.n()).done;){var l=n.value;1===l.countUnderscore?(r.notes.push(l),r.score+=4,e+=O(r)):2===l.countUnderscore?(r.notes.push(l),r.score+=2,e+=O(r)):"·"===l.num?1===o?(r.notes.push(h(h({},l),{},{countUnderscore:1})),r.score+=2,e+=O(r)):0===o?(r.score+=4,e+=v(l)):e+=v(l):(e+=O(r,!0),e+=v(l)),o=l.countUnderscore||0}}catch(t){c.e(t)}finally{c.f()}return e+O(r,!0)}(function(t){if(!t)return[];for(var n=[],e=t.split(""),r=Object(l.b)("char",""),o=null,f=0,d=function(){o&&(f&&(o.countUnderscore=Math.min(f,2)),n.push(o),o=null,f=0)},i=0;i<e.length;i++){var m=e[i];if(r[m]){d();var h=r[m],v=Object(c.c)(h.name,"C");v.classes=v.class?[v.class]:[],o=v}else"="===m?(d(),o={num:"0",classes:[]}):"_"===m?o&&(f+=1):(d(),"."===m?n.push({num:"·"}):"-"===m||"~"===m?n.push({num:"-"}):"|"===m?n.push({num:"|",style:"margin:0 6px"}):n.push(m))}return d(),n}(t)):""}},655:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));e(33),e(10);var r=function(t){if(window&&document){var n=document.querySelector(t);if(!n)return;var e=window.innerWidth,r=window.innerHeight;if(document.documentElement.style.fontSize=Math.max(e,r)/100+"px",e<r){var o=(r-e)/2;n.setAttribute("style","width:".concat(r,"px; height:").concat(e,"px; transform:rotate(90deg) translate(").concat(o,"px, ").concat(o,"px); transform-origin: center center;"))}else n.setAttribute("style","width:".concat(e,"px; height:").concat(r,"px; transform:none; transform-origin: center center;"))}}},870:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r}));var r=function(){return{}}},871:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return d})),e.d(n,"mutations",(function(){return m})),e.d(n,"actions",(function(){return h})),e.d(n,"getters",(function(){return v}));var r=e(2),o=e(10),c="SET_GLOBAL_DATA",l=o.a+"images/bg_default.jpg",f=1,d=function(){return{globalData:{wallpaper:l,currentLocale:"",volumeFactor:.8,enableNoteRain:!1,enableMultiInstruments:!1,selectedLoopMode:f,playerState:"off",loadedMidiInstruments:[],loadedMusic:{}}}},m=Object(r.a)({},c,(function(t,data){t.globalData=Object.assign(t.globalData,data)})),h={$setGlobalData:function(t,data){(0,t.commit)(c,data)}},v={$currentWallpaper:function(t){return t.globalData.wallpaper},$currentLocale:function(t){return t.globalData.currentLocale},$enableNoteRain:function(t){return t.globalData.enableNoteRain},$enableMultiInstruments:function(t){return t.globalData.enableMultiInstruments},$selectedLoopMode:function(t){return t.globalData.selectedLoopMode},$volumeFactor:function(t){return t.globalData.volumeFactor},$loadedMidiInstruments:function(t){return t.globalData.loadedMidiInstruments},$playerState:function(t){return t.globalData.playerState},$loadedMusic:function(t){return t.globalData.loadedMusic}}},872:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return l})),e.d(n,"mutations",(function(){return f})),e.d(n,"actions",(function(){return d})),e.d(n,"getters",(function(){return m}));var r=e(2),o=e(316),c="SET_STATE",l=function(){return{loginToken:""}},f=Object(r.a)({},c,(function(t,data){t=Object.assign(t,data)})),d={$login:function(t,n){var e,r=t.commit;(e=window.sessionStorage.getItem("$loginToken"))&&e.length>0?r(c,{loginToken:e}):o.a.WordPress.getJwtToken({method:"post",data:Object.assign({username:"robot_author",password:"1ooON*$NX!D)yds&q6gcjU3Yq"},n)}).then((function(t){window.sessionStorage.setItem("$loginToken",t.data.token),r(c,{loginToken:t.data.token})}))}},m={$loginToken:function(t){return t.loginToken}}}},[[1048,6,20,21,13,17,9,7,10,18,12,22,11,15,16,8,19,14,2,0]]]);