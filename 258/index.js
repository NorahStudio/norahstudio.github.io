(self.webpackChunkenjoy_life3000=self.webpackChunkenjoy_life3000||[]).push([[258],{9950:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.m4=n.uuidv4=n.randomInt=n.degToRad=n.radToDeg=void 0,n.radToDeg=function(e){return 180*e/Math.PI},n.degToRad=function(e){return e*Math.PI/180},n.randomInt=function(e){return Math.floor(Math.random()*e)},n.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)}))},n.m4={projection:function(e,n,t){return[2/e,0,0,0,0,-2/n,0,0,0,0,2/t,0,-1,1,0,1]},perspective:function(e,n,t,r){var a=Math.tan(.5*Math.PI-.5*e),o=1/(t-r);return[a/n,0,0,0,0,a,0,0,0,0,(t+r)*o,-1,0,0,t*r*o*2,0]},orthographic:function(e,n,t,r,a,o){return[2/(n-e),0,0,0,0,2/(r-t),0,0,0,0,2/(a-o),0,(e+n)/(e-n),(t+r)/(t-r),(a+o)/(a-o),1]},idenity:function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},multiply:function(e,n){var t=e[0],r=e[1],a=e[2],o=e[3],i=e[4],c=e[5],u=e[6],l=e[7],s=e[8],d=e[9],f=e[10],m=e[11],h=e[12],g=e[13],p=e[14],v=e[15],y=n[0],E=n[1],x=n[2],k=n[3],S=n[4],w=n[5],R=n[6],A=n[7],M=n[8],T=n[9],_=n[10],b=n[11],P=n[12],C=n[13],I=n[14],D=n[15];return[y*t+E*i+x*s+k*h,y*r+E*c+x*d+k*g,y*a+E*u+x*f+k*p,y*o+E*l+x*m+k*v,S*t+w*i+R*s+A*h,S*r+w*c+R*d+A*g,S*a+w*u+R*f+A*p,S*o+w*l+R*m+A*v,M*t+T*i+_*s+b*h,M*r+T*c+_*d+b*g,M*a+T*u+_*f+b*p,M*o+T*l+_*m+b*v,P*t+C*i+I*s+D*h,P*r+C*c+I*d+D*g,P*a+C*u+I*f+D*p,P*o+C*l+I*m+D*v]},unit:function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},translation:function(e,n,t){return[1,0,0,0,0,1,0,0,0,0,1,0,e,n,t,1]},translation2:function(e,n,t,r){return(r=r||new Float32Array(16))[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=e,r[13]=n,r[14]=t,r[15]=1,r},xRotation:function(e){var n=Math.cos(e),t=Math.sin(e);return[1,0,0,0,0,n,t,0,0,-t,n,0,0,0,0,1]},yRotation:function(e){var n=Math.cos(e),t=Math.sin(e);return[n,0,-t,0,0,1,0,0,t,0,n,0,0,0,0,1]},zRotation:function(e){var n=Math.cos(e),t=Math.sin(e);return[n,t,0,0,-t,n,0,0,0,0,1,0,0,0,0,1]},scaling:function(e,n,t){return[e,0,0,0,0,n,0,0,0,0,t,0,0,0,0,1]},translate:function(e,t,r,a){return n.m4.multiply(e,n.m4.translation(t,r,a))},xRotate:function(e,t){return n.m4.multiply(e,n.m4.xRotation(t))},yRotate:function(e,t){return n.m4.multiply(e,n.m4.yRotation(t))},zRotate:function(e,t){return n.m4.multiply(e,n.m4.zRotation(t))},zRotate2:function(e,n,t){t=t||new Float32Array(16);var r=e[0],a=e[1],o=e[2],i=e[3],c=e[4],u=e[5],l=e[6],s=e[7],d=Math.cos(n),f=Math.sin(n);return t[0]=d*r+f*c,t[1]=d*a+f*u,t[2]=d*o+f*l,t[3]=d*i+f*s,t[4]=d*c-f*r,t[5]=d*u-f*a,t[6]=d*l-f*o,t[7]=d*s-f*i,e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t},scale:function(e,t,r,a){return n.m4.multiply(e,n.m4.scaling(t,r,a))}}},2276:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.createProgramFromSources=n.resizeCanvasToDisplaySize=void 0;var r=t(4148);function a(e){var n=window;n.console&&(n.console.error?n.console.error(e):n.console.log&&n.console.log(e))}function o(e,n){void 0===n&&(n="");var t=Array.from(n.matchAll(/ERROR:\s*\d+:(\d+)/gi)),r=new Map(t.map((function(e,r){var a=parseInt(e[1]),o=t[r+1],i=o?o.index:n.length;return[a-1,e.index?n.substring(e.index,i):"Unknown Message"]})));return e.split("\n").map((function(e,n){var t=r.get(n);return"".concat(n+1,": ").concat(e).concat(t?"\n\n^^^ ".concat(t):"")})).join("\n")}function i(e,n,t,i){var c,u=i||a,l=r.TypeChecker.checkExists(e.createShader(t));if(e.shaderSource(l,n),e.compileShader(l),!e.getShaderParameter(l,e.COMPILE_STATUS)){var s=null!==(c=e.getShaderInfoLog(l))&&void 0!==c?c:void 0;return u("Error compiling shader: ".concat(s,"\n").concat(o(n,s))),void e.deleteShader(l)}return l}n.resizeCanvasToDisplaySize=function(e,n){void 0===n&&(n=1);var t=e.clientWidth*n|0,r=e.clientHeight*n|0;return(e.width!==t||e.height!==r)&&(e.width=t,e.height=r,!0)},n.createProgramFromSources=function(e,n,t,c,u){var l,s=[];return n.VERTEX_SHADER&&(l=i(e,n.VERTEX_SHADER,e.VERTEX_SHADER,u))&&s.push(l),n.FRAGMENT_SHADER&&(l=i(e,n.FRAGMENT_SHADER,e.FRAGMENT_SHADER,u))&&s.push(l),function(e,n,t,i,c){var u=c||a,l=r.TypeChecker.checkExists(e.createProgram());if(n.forEach((function(n){e.attachShader(l,n)})),t&&t.forEach((function(n,t){e.bindAttribLocation(l,i?i[t]:t,n)})),e.linkProgram(l),!e.getProgramParameter(l,e.LINK_STATUS)){var s=e.getProgramInfoLog(l),d=n.map((function(n){var t=o(r.TypeChecker.checkExists(e.getShaderSource(n))),a=e.getShaderParameter(n,e.SHADER_TYPE);return a===e.VERTEX_SHADER?"VERTEX_SHADER:\n".concat(t):a===e.FRAGMENT_SHADER?"FRAGMENT_SHADER:\n".concat(t):"UnknownShader:\n".concat(t)})).join("\n");return u("Error in program linking: ".concat(s,"\n").concat(d)),void e.deleteProgram(l)}return l}(e,s,t,c,u)}},4148:function(e,n){"use strict";var t=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,a=0,o=n.length;a<o;a++)!r&&a in n||(r||(r=Array.prototype.slice.call(n,0,a)),r[a]=n[a]);return e.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.TypeChecker=void 0;var r=function(){function e(){}return e.checkState=function(n,r){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];if(!n)throw new Error(null==r?"invalid state":e.format.apply(e,t([r],a,!1)))},e.checkEquals=function(n,r,a){for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];if(n!==r)throw new Error(null==a?e.format("{} != {}",e.stringify(n),e.stringify(r)):e.format.apply(e,t([a],o,!1)))},e.checkExists=function(n,r){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];if(null==n)throw new Error(null==r?"argument is null":e.format.apply(e,t([r],a,!1)));return n},e.format=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];var r=0;return e.replace(/\{}/g,(function(){return r<n.length?n[r++]:"{}"}))},e.stringify=function(e){if(null==e||"symbol"==typeof e)return String(e);try{return JSON.stringify(e)}catch(n){return String(e)}},e}();n.TypeChecker=r},7393:function(e,n){var t,r,a;r=this,a=function(){"use strict";const e=(n={},window.hackedParams&&Object.keys(window.hackedParams).forEach((function(e){n[e]=window.hackedParams[e]})),window.location.search&&window.location.search.substring(1).split("&").forEach((function(e){var t=e.split("=").map((function(e){return decodeURIComponent(e)}));n[t[0]]=t[1]})),n);var n;function t(n,t){var r=t.precision||0,a=t.min||0,o=t.step||1,i=t.value||0,c=t.max||1,u=t.slide,l=e["ui-"+t.name]||t.name,s=void 0===t.uiPrecision?r:t.uiPrecision,d=t.uiMult||1;a/=o,c/=o,i/=o,n.innerHTML=`\n      <div class="gman-widget-outer">\n        <div class="gman-widget-label">${l}</div>\n        <div class="gman-widget-value"></div>\n        <input class="gman-widget-slider" type="range" min="${a}" max="${c}" value="${i}" />\n      </div>\n    `;var f=n.querySelector(".gman-widget-value"),m=n.querySelector(".gman-widget-slider");function h(e){f.textContent=(e*o*d).toFixed(s)}function g(e){var n=parseInt(e.target.value);h(n),u(e,{value:n*o})}return h(i),m.addEventListener("input",g),m.addEventListener("change",g),{elem:n,updateValue:e=>{e/=o,m.value=e,h(e)}}}function r(e){return t(document.createElement("div"),e)}var a=0;function o(){return"__widget_"+a++}function i(n){const t=document.createElement("div");t.className="gman-widget-outer";const r=document.createElement("label"),a=o();r.setAttribute("for",a),r.textContent=e["ui-"+n.name]||n.name,r.className="gman-checkbox-label";const i=document.createElement("input");return i.type="checkbox",i.checked=n.value,i.id=a,i.className="gman-widget-checkbox",t.appendChild(r),t.appendChild(i),i.addEventListener("change",(function(e){n.change(e,{value:e.target.checked})})),{elem:t,updateValue:function(e){i.checked=!!e}}}function c(){}const u={slider:function(e,n){const t=n.change||c;return n.name=n.name||n.key,n.value=e[n.key],n.slide=n.slide||function(r,a){e[n.key]=a.value,t()},r(n)},checkbox:function(e,n){const t=n.change||c;return n.value=e[n.key],n.name=n.name||n.key,n.change=function(r,a){e[n.key]=a.value,t()},i(n)},option:function(n,t){const r=t.change||c;return t.value=n[t.key],t.name=t.name||t.key,t.change=function(e,a){n[t.key]=a.value,r()},function(n){const t=document.createElement("div");t.className="gman-widget-outer";const r=document.createElement("label"),a=o();r.setAttribute("for",a),r.textContent=e["ui-"+n.name]||n.name,r.className="gman-widget-label";const i=document.createElement("select");return n.options.forEach(((t,r)=>{const a=document.createElement("option");a.textContent=e["ui-"+t]||t,a.value=r,a.selected=r===n.value,i.appendChild(a)})),i.className="gman-widget-select",t.appendChild(r),t.appendChild(i),i.addEventListener("change",(function(e){n.change(e,{value:i.selectedIndex})})),{elem:t,updateValue:function(e){i.selectedIndex=e}}}(t)}};return{setupUI:function(e,n,t){const r={};return t.forEach((function(t){const a=u[t.type](n,t);e.appendChild(a.elem),r[t.key]=a})),r},updateUI:function(e,n){Object.keys(e).forEach((t=>{e[t].updateValue(n[t])}))},setupSlider:function(e,n){var r=document.querySelector(e);if(r)return n.name||(n.name=e.substring(1)),t(r,n)},makeSlider:r,makeCheckbox:i}},void 0===(t=function(){return a.call(r)}.apply(n,[]))||(e.exports=t)}}]);