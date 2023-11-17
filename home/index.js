(()=>{"use strict";var e,t={6257:(e,t,r)=>{r.r(t),r.d(t,{AbstractUserDataWriter:()=>n.u7,Bytes:()=>n.Jj,CACHE_SIZE_UNLIMITED:()=>n.IX,CollectionReference:()=>n.hx,DocumentReference:()=>n.my,DocumentSnapshot:()=>n.xU,FieldPath:()=>n.Lz,FieldValue:()=>n.GH,Firestore:()=>n.gg,FirestoreError:()=>n.WA,GeoPoint:()=>n.F8,LoadBundleTask:()=>n.tO,Query:()=>n.AE,QueryConstraint:()=>n.O$,QueryDocumentSnapshot:()=>n.$q,QuerySnapshot:()=>n.W,SnapshotMetadata:()=>n.oZ,Timestamp:()=>n.EK,Transaction:()=>n.YW,WriteBatch:()=>n.PU,_DatabaseId:()=>n.l7,_DocumentKey:()=>n.Ky,_EmptyAppCheckTokenProvider:()=>n.Mu,_EmptyAuthCredentialsProvider:()=>n.EZ,_FieldPath:()=>n.Xb,_cast:()=>n.Cf,_debugAssert:()=>n.K9,_isBase64Available:()=>n.Me,_logWarn:()=>n.yq,_setIndexConfiguration:()=>n.J$,_validateIsNotUsedTogether:()=>n.Wi,addDoc:()=>n.ET,arrayRemove:()=>n.Ab,arrayUnion:()=>n.vr,clearIndexedDbPersistence:()=>n.Fc,collection:()=>n.hJ,collectionGroup:()=>n.B$,connectFirestoreEmulator:()=>n.at,deleteDoc:()=>n.oe,deleteField:()=>n.AK,disableNetwork:()=>n.TF,doc:()=>n.JU,documentId:()=>n.Jm,enableIndexedDbPersistence:()=>n.ST,enableMultiTabIndexedDbPersistence:()=>n.fH,enableNetwork:()=>n.Ix,endAt:()=>n.Wu,endBefore:()=>n.Lx,ensureFirestoreConfigured:()=>n.qY,executeWrite:()=>n.GL,getDoc:()=>n.QT,getDocFromCache:()=>n.kl,getDocFromServer:()=>n.Xk,getDocs:()=>n.PL,getDocsFromCache:()=>n.UQ,getDocsFromServer:()=>n.zN,getFirestore:()=>n.ad,increment:()=>n.nP,initializeFirestore:()=>n.LV,limit:()=>n.b9,limitToLast:()=>n.vh,loadBundle:()=>n.Pb,namedQuery:()=>n.L$,onSnapshot:()=>n.cf,onSnapshotsInSync:()=>n.sc,orderBy:()=>n.Xo,query:()=>n.IO,queryEqual:()=>n.iE,refEqual:()=>n.Eo,runTransaction:()=>n.i3,serverTimestamp:()=>n.Bt,setDoc:()=>n.pl,setLogLevel:()=>n.Ub,snapshotEqual:()=>n.qK,startAfter:()=>n.TQ,startAt:()=>n.e0,terminate:()=>n.RA,updateDoc:()=>n.r7,waitForPendingWrites:()=>n.Mx,where:()=>n.ar,writeBatch:()=>n.qs});var n=r(3680)},9611:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={auth:"_3vi42HHkffKV02srvgbJib"}},122:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={header:"_35ndk9BPL4oHcrxCfoszyu"}},2340:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={urlBar:"_2URDnARqP-40mUl8TsvOZh"}},6472:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={root:"_3E20GM3BUzSI5YkAskKbXY"}},7294:(e,t,r)=>{e.exports=r(2408)},6670:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Auth=void 0;var u=i(r(7294)),l=r(3349),c=a(r(9611)),s=r(7722);function f(){return u.createElement(u.Fragment,null,u.createElement("button",{className:"sign-in",onClick:function(){s.firebaseService.signInWithPopup()}},"Sign in with Google"))}function d(){return s.firebaseService.auth.currentUser&&u.createElement("button",{className:"sign-out",onClick:function(){return s.firebaseService.auth.signOut()}},"Sign Out")}t.Auth=function(e){var t,r=null!==(t=e.firebaseService)&&void 0!==t?t:s.firebaseService,n=(0,l.useAuthState)(r.auth)[0];return u.createElement("div",{className:c.default.auth},n?u.createElement(u.Fragment,null,u.createElement("span",null,n.displayName),u.createElement(d,null)):u.createElement(f,null))}},402:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var u=i(r(7294)),l=r(6670),c=a(r(122)),s=r(8382);t.Header=function(){return u.createElement("div",{className:c.default.header},u.createElement("h3",null,"My Bookmarks"),u.createElement(s.UrlBar,null),u.createElement(l.Auth,null))}},8382:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.UrlBar=void 0;var u=i(r(7294)),l=a(r(2340));t.UrlBar=function(){var e=u.useState(""),t=e[0],r=e[1],n=function(){var e=new URL(t.startsWith("http://")||t.startsWith("https://")?t:"https://"+t);window.location.href=e.href};return u.createElement("div",{className:l.default.urlBar},u.createElement("input",{type:"text",placeholder:"URL",onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&n()}}),u.createElement("button",{onClick:n},"Go"))}},7506:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=u(r(7294)),s=r(745),f=r(402),d=r(2665),p=l(r(6472)),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return c.createElement(c.StrictMode,null,c.createElement(f.Header,null),c.createElement("div",null,c.createElement("div",null,c.createElement("a",{href:"/bookmarks/"},"Go to Bookmarks")),c.createElement("div",null,c.createElement("a",{href:"/renderer/"},"Go to WebGL Renderer")),c.createElement("div",null,c.createElement("a",{href:"/web-worker-playground/"},"Go to WebWorker Playground")),c.createElement("div",null,c.createElement("a",{href:"/service-worker-playground/"},"Go to Service Worker Playground"))))},t}(c.PureComponent);!function(){var e=document.getElementById("app-root");if(null==e)throw new Error("No app-root found");e.className=p.default.root,(0,s.createRoot)(e).render(c.createElement(h,null)),(0,d.maybeInstallServiceWorker)()}()},7662:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0,t.config={apiKey:"AIzaSyC8vC732qHxtqNS0nBcQJTNAt0UUHOPzeY",authDomain:"galileo-2021.firebaseapp.com",databaseURL:"https://galileo-2021-default-rtdb.firebaseio.com",projectId:"galileo-2021",storageBucket:"galileo-2021.appspot.com",messagingSenderId:"931380598986",appId:"1:931380598986:web:8d5f6ddeb4fdb1d65dbc33",measurementId:"G-JT3FE8X1XZ"}},7722:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.firebaseService=t.FirebaseService=void 0;var n=r(5503),o=r(6257),i=r(3095),a=r(5296),u=r(7662),l=function(){function e(){var e=(0,n.initializeApp)(u.config);this.auth=(0,i.getAuth)(e),this.firestore=(0,o.getFirestore)(e),this.analytics=(0,a.getAnalytics)(e)}return e.prototype.createCollection=function(e){return(0,o.collection)(this.firestore,e)},e.prototype.signInWithPopup=function(){(0,i.signInWithPopup)(this.auth,new i.GoogleAuthProvider)},e}();t.FirebaseService=l,t.firebaseService=new l},2665:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function u(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}l((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.maybeInstallServiceWorker=void 0;var i,a=r(8640);function u(){return n(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,fetch("/walkingbot-sw.js")];case 1:return e.sent().ok?[2,new Promise((function(e){window.addEventListener("load",(function(){navigator.serviceWorker.register("/walkingbot-sw.js").then((function(t){console.log("SW registered: ",t),e(!0)})).catch((function(t){console.log("SW registration failed: ",t),e(!1)}))}))}))]:[2]}}))}))}!function(e){e.WORKBOX="workbox",e.HOMEMADE="homemade"}(i||(i={})),t.maybeInstallServiceWorker=function(e){return void 0===e&&(e=i.WORKBOX),n(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:if(Date.now()>0)return[2];if(!("serviceWorker"in navigator))return[2];switch(e){case i.WORKBOX:return[3,1];case i.HOMEMADE:return[3,3]}return[3,5];case 1:return[4,u()];case 2:if(t.sent())return[3,6];t.label=3;case 3:return[4,(0,a.installHomemadeServiceWorker)(!1)];case 4:return t.sent(),[3,6];case 5:throw new Error("Unknown ServiceWorkerSource: ".concat(e));case 6:return[2]}}))}))}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={177:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,u,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return n.O(s)},r=self.webpackChunkenjoy_life3000=self.webpackChunkenjoy_life3000||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[515,931,640],(()=>n(7506)));o=n.O(o)})();