if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,a)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const d={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return d;default:return e(r)}}))).then((e=>{const r=a(...e);return i.default||(i.default=r),i}))})))}}define("./walkingbot-sw.js",["./workbox-7c877640"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"515/index.js",revision:"ed44583bcd69e169c9cc2399514267ae"},{url:"515/index.js.LICENSE.txt",revision:"f92589f8c94642245cb876515824e7aa"},{url:"640/index.js",revision:"bf277821651680267b9c4884ec36d1b7"},{url:"931/index.js",revision:"a2de19a8fa20a3e76f13bdc47d863618"},{url:"assets/file_example_MP4_1280_10MG.mp4",revision:"10c918b1d01aea85864ee65d9e0c2305"},{url:"assets/megaman.png",revision:"e3f3714dc24beea1bb1ef76196af329e"},{url:"assets/megamans.png",revision:"c6e3faefdb3f9e42e085905b59fb4051"},{url:"assets/oranges.png",revision:"a9da1b07fd9bec38f783c46ac444ccca"},{url:"assets/popcorntest_MP4_300x180_2M.mp4",revision:"1a504d16e7bb1b3995099cdfe8ab52dc"},{url:"assets/strawberries.jpg",revision:"59e3cebb87241e7dded7f7a3bcbd3e67"},{url:"bookmarks/index.css",revision:"c90364b53930942e963f00db28d31bcc"},{url:"bookmarks/index.html",revision:"4e772ec5fa450c84113f7a7b896932b6"},{url:"bookmarks/index.js",revision:"d89a2582622bec2f35169d6933958fb0"},{url:"bookmarks/index.js.LICENSE.txt",revision:"783f14fa45b10e088e68f98251448010"},{url:"default_bookmarks.json",revision:"1bd75ead8ac093c05ee0d78e05819cad"},{url:"favicon.ico",revision:"7e615fe5837ddce347b066d46410019a"},{url:"home/index.css",revision:"3920549e6be984be9fde37b8b2072fc7"},{url:"home/index.js",revision:"85fa271f3449e7ab2cdc1ce09482f457"},{url:"homemade-serviceworker/index.js",revision:"35b100cf5459aedd2121b185843af0e0"},{url:"index.html",revision:"5502a817e589b04591a927eab3330332"},{url:"manifest.json",revision:"06ed6ce40fc08c714c66e4b9b79d370c"},{url:"maskable_icon_512.png",revision:"2e9c75fe1e0a5d52a2444e0b29c5591d"},{url:"renderer/index.html",revision:"aebf15abf7eb0ae9d693f8cba47d4cd8"},{url:"renderer/index.js",revision:"9931058473453afc26ed704e7ee2653c"},{url:"service-worker-playground/index.html",revision:"7eb10ca963fc26abda07f3645ea4ad0e"},{url:"service-worker-playground/index.js",revision:"f2d52863b41fb13819dbc38d86289030"},{url:"service_worker_playground.css",revision:"1c90e6a6e69de6bef0b6c6275b8ba38c"},{url:"test-worker/index.js",revision:"1f8e5841586f625af7b8b43b88d059c7"},{url:"web-worker-playground/index.css",revision:"8e1f8c6416a98cc1680aa4f47dea91f9"},{url:"web-worker-playground/index.html",revision:"7128c93c968bb2184091238a953ea05c"},{url:"web-worker-playground/index.js",revision:"3705929313fdbfa2b671e8b5f657d16d"},{url:"webgl-playground/index.html",revision:"011f3ca1a834de0c2a8ac3ad381b866a"},{url:"webgl-playground/index.js",revision:"a4c7edaed949d51e30eaeda498505029"},{url:"webgl-tutorials.css",revision:"9561327c718f7bf0f205d739ec25a86e"}],{})}));
