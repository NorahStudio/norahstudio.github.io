(()=>{"use strict";var e,t={3117:function(e,t,i){var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,r=0,o=t.length;r<o;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.Facing=t.setupScene=void 0;var r=i(9950),o=[1,0,0],a=[0,1,0],c=[0,0,1],s=[1,1,0],u=[.5,0,1],l=[0,1,1],f=[1,.5,0],g=[-.5,.5,-.5],h=[-.5,-.5,-.5],p=[.5,-.5,-.5],d=[-.5,.5,.5],v=[-.5,-.5,.5],_=[.5,-.5,.5],m=(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n([],g,!0),h,!0),h,!0),p,!0),p,!0),g,!0),d,!0),v,!0),v,!0),_,!0),_,!0),d,!0),g,!0),d,!0),h,!0),v,!0),p,!0),_,!0),n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n([],g,!0),p,!0),h,!0),d,!0),v,!0),_,!0),g,!0),_,!0),p,!0),g,!0),d,!0),_,!0),h,!0),_,!0),v,!0),h,!0),p,!0),_,!0),g,!0),d,!0),v,!0),g,!0),v,!0),h,!0));function y(e){for(var t=n(n(n(n(n(n(n(n(n(n(n(n([],o,!0),f,!0),s,!0),a,!0),l,!0),c,!0),u,!0),c,!0),l,!0),a,!0),s,!0),f,!0),i=[],r=0;r<e;r++)i.push.apply(i,t);return i}var R,b=[.5,0,1,.5,.5,.5,1,.5,.5,.5,.5,0,0,0,.5,1/Math.pow(2,.5),0,1/Math.pow(2,.5),0,0,.5,0,.5,1/Math.pow(2,.5),.5,1,1,.5,.5,.5,.5,1,1,1,1,.5,.5,1,.5,1,.5,1,.5,1,.5,1,.5,1];t.setupScene=function(e){for(var t=e.brickPositions,i=t.length,n=new Float32Array(16*i),o=[],a=0;a<i;++a){var c=16*a*4;o.push(new Float32Array(n.buffer,c,16))}var s,u;return o.forEach((function(e,i){switch(r.m4.translation2(100*t[i].position[0],100*t[i].position[1],100*t[i].position[2],e),t[i].facing){case R.EU:r.m4.yRotate2(e,(0,r.degToRad)(0),e);break;case R.NU:r.m4.yRotate2(e,(0,r.degToRad)(270),e);break;case R.WU:r.m4.yRotate2(e,(0,r.degToRad)(180),e);break;case R.SU:r.m4.yRotate2(e,(0,r.degToRad)(90),e);break;case R.EN:r.m4.xRotate2(e,(0,r.degToRad)(90),e);break;case R.WN:r.m4.yRotate2(e,(0,r.degToRad)(270),e),r.m4.xRotate2(e,(0,r.degToRad)(90),e);break;case R.WS:r.m4.yRotate2(e,(0,r.degToRad)(180),e),r.m4.xRotate2(e,(0,r.degToRad)(90),e);break;case R.ES:r.m4.xRotate2(e,(0,r.degToRad)(270),e);break;case R.ED:r.m4.xRotate2(e,(0,r.degToRad)(180),e),r.m4.yRotate2(e,(0,r.degToRad)(0),e);break;case R.ND:r.m4.xRotate2(e,(0,r.degToRad)(180),e),r.m4.yRotate2(e,(0,r.degToRad)(90),e);break;case R.WD:r.m4.xRotate2(e,(0,r.degToRad)(180),e),r.m4.yRotate2(e,(0,r.degToRad)(180),e);break;case R.SD:r.m4.xRotate2(e,(0,r.degToRad)(180),e),r.m4.yRotate2(e,(0,r.degToRad)(270),e);break;default:throw new Error("Unknown Facing: ".concat(t[i].facing))}})),{numInstances:i,placeData:n,places:o,unitBrick:(s=t.length/12,{unitPixel:100,geometry:new Float32Array((u=100,m.map((function(e){return e*u})))),color:new Float32Array(y(Math.ceil(s))),textureCoords:new Float32Array(b)})}},function(e){e[e.EU=0]="EU",e[e.NU=1]="NU",e[e.WU=2]="WU",e[e.SU=3]="SU",e[e.ED=4]="ED",e[e.ND=5]="ND",e[e.WD=6]="WD",e[e.SD=7]="SD",e[e.EN=8]="EN",e[e.WN=9]="WN",e[e.WS=10]="WS",e[e.ES=11]="ES"}(R=t.Facing||(t.Facing={}))},7361:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function c(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(4329),a=i(5566),c=window;c._debug||(c._debug={}),function(){n(this,void 0,void 0,(function(){var e,t;return r(this,(function(i){switch(i.label){case 0:return e=document.getElementById("canvas"),document.body.appendChild(e),[4,a.BrickRenderer.create({canvas:e,isOrthographic:!0})];case 1:return(t=i.sent()).drawScene(),(0,o.setupUi)({renderer:t,canvasWidth:e.width,canvasHeight:e.height}),[2]}}))}))}()},5566:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function c(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BrickRenderer=void 0;var a=i(9950),c=i(2276),s=i(4148),u=o(i(7205)),l=o(i(2143)),f=i(3793),g=i(3117),h=i(9005),p=function(){function e(e){var t=e.canvas,i=e.isOrthographic,n=e.image;this.canvas=t;var r=(0,h.loadScene)(),o=(0,g.setupScene)(r),c=this._updateProjection({isOrthographic:null!=r.isOrthographic?r.isOrthographic:i,rotation:null!=r.camera?r.camera:[(0,a.degToRad)(40),(0,a.degToRad)(25),(0,a.degToRad)(0)]}),p=c.projection,d=c.projectionMatrix;this.projection=p,this.projectionMatrix=d;var v=this.projection,_=v.translation,m=v.rotation,y=v.scale;this._translation=_,this._rotation=m,this._scale=y;var R=s.TypeChecker.checkExists(t.getContext("webgl",{antialias:!0}));this.gl=R,this.extAngleInstancedArrays=s.TypeChecker.checkExists(R.getExtension("ANGLE_instanced_arrays"));var b=(0,f.createProgram)(R,u.default,l.default);this.program=b;var x=o.unitBrick,T=x.geometry,E=x.color,F=x.textureCoords;this.geometryLength=T.length,this.geometryPosLocation=R.getAttribLocation(b,"a_geometryPos"),this.geometryPosBuffer=s.TypeChecker.checkExists(R.createBuffer()),R.bindBuffer(R.ARRAY_BUFFER,this.geometryPosBuffer),R.bufferData(R.ARRAY_BUFFER,T,R.STATIC_DRAW),this.vertexTextureCoordsLocation=R.getAttribLocation(b,"a_vertexTextureCoords"),this.vertexTextureCoordsBuffer=s.TypeChecker.checkExists(R.createBuffer()),R.bindBuffer(R.ARRAY_BUFFER,this.vertexTextureCoordsBuffer),R.bufferData(R.ARRAY_BUFFER,F,R.STATIC_DRAW),this.colorLocation=R.getAttribLocation(b,"a_color"),this.colorBuffer=s.TypeChecker.checkExists(R.createBuffer()),R.bindBuffer(R.ARRAY_BUFFER,this.colorBuffer),R.bufferData(R.ARRAY_BUFFER,E,R.STATIC_DRAW),this.placeData=o.placeData,this.places=o.places,this.numInstances=o.numInstances,this.positionLocation=R.getAttribLocation(b,"a_postion"),this.positionBuffer=s.TypeChecker.checkExists(R.createBuffer()),R.bindBuffer(R.ARRAY_BUFFER,this.positionBuffer),R.bufferData(R.ARRAY_BUFFER,E,R.STATIC_DRAW),R.bufferData(R.ARRAY_BUFFER,this.placeData.byteLength,R.DYNAMIC_DRAW),this.matrixLocation=s.TypeChecker.checkExists(R.getUniformLocation(b,"u_matrix")),this.textureLocation=s.TypeChecker.checkExists(R.getUniformLocation(b,"u_texture")),R.activeTexture(R.TEXTURE0),this.texture=s.TypeChecker.checkExists(R.createTexture()),R.bindTexture(R.TEXTURE_2D,this.texture),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.CLAMP_TO_EDGE),R.texImage2D(R.TEXTURE_2D,0,R.RGBA,R.RGBA,R.UNSIGNED_BYTE,n),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.NEAREST)}return e.create=function(t){var i=t.canvas,o=t.isOrthographic;return n(this,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return[4,(r="/assets/puzzle_toy_sprite.png",a=new Image,a.src=r,new Promise((function(e){a.addEventListener("load",(function(){e(a)}))})))];case 1:return t=n.sent(),[2,new e({canvas:i,isOrthographic:o,image:t})]}var r,a}))}))},e.prototype.isOrthographic=function(){return"orthographic"===this.projection.type},e.prototype.updateProjection=function(e){var t=this._updateProjection({isOrthographic:e,rotation:this.rotation}),i=t.projection,n=t.projectionMatrix;this.projection=i,this.projectionMatrix=n;var r=this.projection,o=r.translation,a=r.rotation,c=r.scale;this._translation[0]=o[0],this._translation[1]=o[1],this._translation[2]=o[2],this._rotation[0]=a[0],this._rotation[1]=a[1],this._rotation[2]=a[2],this._scale[0]=c[0],this._scale[1]=c[1],this._scale[2]=c[2]},e.prototype._updateProjection=function(e){var t=e.isOrthographic,i=e.rotation,n=this.canvas,r=t?{type:"orthographic",translation:[n.clientWidth/2,n.clientHeight/2,0],rotation:i,scale:[1,1,1]}:{type:"perspective",translation:[n.clientWidth/2,n.clientHeight/2,-400],rotation:i,scale:[1,1,1],fieldOfViewRadians:(0,a.degToRad)(100)};switch(r.type){case"orthographic":return{projection:r,projectionMatrix:a.m4.projection(this.canvas.clientWidth,this.canvas.clientHeight,4e3)};case"perspective":var o=r.fieldOfViewRadians,c=n.clientWidth/n.clientHeight,s=a.m4.perspective(o,c,1,2e3);return{projection:r,projectionMatrix:s=a.m4.translate(s,n.clientWidth/-2,n.clientHeight/-2,0)};default:throw new Error}},Object.defineProperty(e.prototype,"translation",{get:function(){return this._translation},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this._rotation},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},enumerable:!1,configurable:!0}),e.prototype.drawScene=function(){var e=this.gl,t=this.extAngleInstancedArrays;(0,c.resizeCanvasToDisplaySize)(this.canvas),e.viewport(0,0,this.canvas.width,this.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.enable(e.CULL_FACE),e.enable(e.DEPTH_TEST),e.useProgram(this.program),e.enableVertexAttribArray(this.geometryPosLocation),e.bindBuffer(e.ARRAY_BUFFER,this.geometryPosBuffer);var i=3,n=e.FLOAT,r=!1,o=0;e.vertexAttribPointer(this.geometryPosLocation,i,n,r,o,0),e.bindBuffer(e.ARRAY_BUFFER,this.positionBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.placeData);for(var s=0;s<4;++s){var u=this.positionLocation+s;e.enableVertexAttribArray(u);var l=16*s;e.vertexAttribPointer(u,4,e.FLOAT,!1,64,l),t.vertexAttribDivisorANGLE(u,1)}e.enableVertexAttribArray(this.vertexTextureCoordsLocation),e.bindBuffer(e.ARRAY_BUFFER,this.vertexTextureCoordsBuffer),i=2,n=e.FLOAT,r=!1,o=0,e.vertexAttribPointer(this.vertexTextureCoordsLocation,i,n,r,o,0),e.enableVertexAttribArray(this.colorLocation),e.bindBuffer(e.ARRAY_BUFFER,this.colorBuffer),i=3,n=e.FLOAT,r=!1,o=0,e.vertexAttribPointer(this.colorLocation,i,n,r,o,0),t.vertexAttribDivisorANGLE(this.colorLocation,1);var f=a.m4.translate(this.projectionMatrix,this._translation[0],this._translation[1],this._translation[2]);f=a.m4.xRotate(f,this._rotation[0]+(0,a.degToRad)(0)),f=a.m4.yRotate(f,this._rotation[1]+(0,a.degToRad)(0)),f=a.m4.zRotate(f,this._rotation[2]),f=a.m4.scale(f,this._scale[0],this._scale[1],this._scale[2]),e.uniformMatrix4fv(this.matrixLocation,!1,f),e.bindTexture(e.TEXTURE_2D,this.texture),e.uniform1i(this.textureLocation,0);var g=e.TRIANGLES,h=this.geometryLength/3,p=this.numInstances;t.drawArraysInstancedANGLE(g,0,h,p)},e}();t.BrickRenderer=p},9005:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loadScene=void 0;var n=i(9950),r=i(3117);t.loadScene=function(){var e=[(0,n.degToRad)(51),(0,n.degToRad)(-186),(0,n.degToRad)(11)];return{brickPositions:[{position:[.5,1.5,.5],facing:r.Facing.ES},{position:[-.5,1.5,.5],facing:r.Facing.WN},{position:[-.5,1.5,-.5],facing:r.Facing.ES},{position:[-1.5,1.5,-.5],facing:r.Facing.WU},{position:[-1.5,.5,-.5],facing:r.Facing.ND},{position:[-1.5,.5,-1.5],facing:r.Facing.WS},{position:[-.5,.5,-1.5],facing:r.Facing.ED},{position:[-.5,1.5,-1.5],facing:r.Facing.SU},{position:[-.5,1.5,-.5],facing:r.Facing.WN},{position:[.5,1.5,-.5],facing:r.Facing.ES},{position:[.5,1.5,.5],facing:r.Facing.WN},{position:[1.5,1.5,.5],facing:r.Facing.EU},{position:[1.5,.5,.5],facing:r.Facing.ND},{position:[1.5,.5,-.5],facing:r.Facing.SU},{position:[1.5,-.5,-.5],facing:r.Facing.ND},{position:[1.5,-.5,-1.5],facing:r.Facing.ES},{position:[.5,-.5,-1.5],facing:r.Facing.WD},{position:[.5,.5,-1.5],facing:r.Facing.EU},{position:[-.5,.5,-1.5],facing:r.Facing.WU},{position:[-.5,-.5,-1.5],facing:r.Facing.WD},{position:[.5,-.5,-1.5],facing:r.Facing.EU},{position:[.5,-1.5,-1.5],facing:r.Facing.SD},{position:[.5,-1.5,-.5],facing:r.Facing.EN},{position:[-.5,-1.5,-.5],facing:r.Facing.WS},{position:[-.5,-1.5,.5],facing:r.Facing.WN},{position:[.5,-1.5,.5],facing:r.Facing.EN},{position:[.5,-1.5,-.5],facing:r.Facing.WS},{position:[1.5,-1.5,-.5],facing:r.Facing.ED},{position:[1.5,-.5,-.5],facing:r.Facing.SU},{position:[1.5,-.5,.5],facing:r.Facing.ND},{position:[1.5,.5,.5],facing:r.Facing.SU},{position:[1.5,.5,1.5],facing:r.Facing.EN},{position:[.5,.5,1.5],facing:r.Facing.WU},{position:[.5,-.5,1.5],facing:r.Facing.ED},{position:[-.5,-.5,1.5],facing:r.Facing.WU},{position:[-.5,-1.5,1.5],facing:r.Facing.ND},{position:[-.5,-1.5,.5],facing:r.Facing.ES},{position:[-1.5,-1.5,.5],facing:r.Facing.WD},{position:[-1.5,-.5,.5],facing:r.Facing.NU},{position:[-1.5,-.5,-.5],facing:r.Facing.SD},{position:[-1.5,.5,-.5],facing:r.Facing.SU},{position:[-1.5,.5,.5],facing:r.Facing.NU},{position:[-1.5,-.5,.5],facing:r.Facing.SD},{position:[-1.5,-.5,1.5],facing:r.Facing.WN},{position:[-.5,-.5,1.5],facing:r.Facing.ED},{position:[-.5,.5,1.5],facing:r.Facing.WU},{position:[.5,.5,1.5],facing:r.Facing.ED},{position:[.5,1.5,1.5],facing:r.Facing.NU}],isOrthographic:!0,camera:e}}},4329:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.setupUi=void 0;var r=i(9950),o=n(i(7393));t.setupUi=function(e){var t=e.renderer,i=e.canvasWidth,n=e.canvasHeight,a=t.translation,c=t.rotation,s=document.getElementById("ui"),u=o.default.makeCheckbox({name:"Orthographic projection",value:t.isOrthographic(),change:function(e,i){t.updateProjection(i.value),t.drawScene()}}).elem;function l(e){return function(i,n){a[e]=n.value,t.drawScene()}}function f(e){return function(i,n){var o=(0,r.degToRad)(n.value);c[e]=o,t.drawScene()}}null==s||s.prepend(u),o.default.setupSlider("#x",{name:"Viewport X",value:a[0],slide:l(0),max:i}),o.default.setupSlider("#y",{name:"Viewport Y",value:a[1],slide:l(1),max:n}),o.default.setupSlider("#angleX",{name:"Viewport angle X",value:(0,r.radToDeg)(c[0]),slide:f(0),min:-360,max:360}),o.default.setupSlider("#angleY",{name:"Viewport angle Y",value:(0,r.radToDeg)(c[1]),slide:f(1),min:-360,max:360}),o.default.setupSlider("#angleZ",{name:"Viewport angle Z",value:(0,r.radToDeg)(c[2]),slide:f(2),min:-360,max:360})}},3793:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loadImage=t.createProgram=void 0;var n=i(4148);function r(e,t,i){var r=n.TypeChecker.checkExists(e.createShader(i));return e.shaderSource(r,t),e.compileShader(r),r}t.createProgram=function(e,t,i){var o=n.TypeChecker.checkExists(e.createProgram()),a=r(e,t,e.VERTEX_SHADER),c=r(e,i,e.FRAGMENT_SHADER);e.attachShader(o,a),e.deleteShader(a),e.attachShader(o,c),e.deleteShader(c),e.linkProgram(o);var s=e.getProgramInfoLog(o);return s&&console.log(s),(s=e.getShaderInfoLog(a))&&console.log(s),(s=e.getShaderInfoLog(c))&&console.log(s),o},t.loadImage=function(e){var t=new Image;return t.src=e,new Promise((function(e){t.addEventListener("load",(function(){e(t)}))}))}},2143:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n="precision mediump float;\n\n// Passed in from the vertex shader.\nvarying vec4 v_color;\nvarying vec2 v_vertexTextureCoords;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n  vec4 textureColor = texture2D(u_texture, v_vertexTextureCoords);\n  if (textureColor.a > 0.0) {\n    if (textureColor.r < 0.1) {\n      gl_FragColor = textureColor;\n    } else if (textureColor.r < 0.3) {\n      gl_FragColor = vec4(v_color.rgb * textureColor.r, 0.4);\n    } else {\n      gl_FragColor = v_color;\n    }\n  } else {\n    gl_FragColor = v_color;\n  }\n}\n"},7205:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n="attribute vec4 a_geometryPos;\nattribute vec2 a_vertexTextureCoords;\nattribute vec4 a_color;\nattribute mat4 a_postion;\n\nuniform mat4 u_matrix;\n\nvarying vec4 v_color;\nvarying vec2 v_vertexTextureCoords;\n\nvoid main() {\n  // Multiply the position by the matrix.\n  gl_Position = u_matrix * a_postion * a_geometryPos;\n\n  // Pass the color to the fragment shader.\n  v_color = a_color;\n  v_vertexTextureCoords = a_vertexTextureCoords;\n}\n"}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var o=i[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,i,r,o)=>{if(!i){var a=1/0;for(l=0;l<e.length;l++){for(var[i,r,o]=e[l],c=!0,s=0;s<i.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](i[s])))?i.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,r,o]},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={954:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var r,o,[a,c,s]=i,u=0;if(a.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var l=s(n)}for(t&&t(i);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return n.O(l)},i=self.webpackChunkenjoy_life3000=self.webpackChunkenjoy_life3000||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var r=n.O(void 0,[258],(()=>n(7361)));r=n.O(r)})();