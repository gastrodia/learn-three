var k=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);import"../d-__uno-a35406a8.js";import{S as U,b as D,A as j,f as B,B as L,M as q,a as G,W as N}from"../d-three.module-b52a2031.js";import{O as W}from"../d-OrbitControls-bc3a0338.js";var tt=k(c=>{var g={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-g.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?g.Bounce.In(t*2)*.5:g.Bounce.Out(t*2-1)*.5+.5}}},v;typeof self>"u"&&typeof process<"u"&&process.hrtime?v=function(){var t=process.hrtime();return t[0]*1e3+t[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?v=self.performance.now.bind(self.performance):Date.now!==void 0?v=Date.now:v=function(){return new Date().getTime()};var u=v,P=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(i){return e._tweens[i]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,i){e===void 0&&(e=u()),i===void 0&&(i=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],a=!i;s&&s.update(e,a)===!1&&!i&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),d={Linear:function(t,e){var i=t.length-1,n=i*e,r=Math.floor(n),s=d.Utils.Linear;return e<0?s(t[0],t[1],n):e>1?s(t[i],t[i-1],i-n):s(t[r],t[r+1>i?i:r+1],n-r)},Bezier:function(t,e){for(var i=0,n=t.length-1,r=Math.pow,s=d.Utils.Bernstein,a=0;a<=n;a++)i+=r(1-e,n-a)*r(e,a)*t[a]*s(n,a);return i},CatmullRom:function(t,e){var i=t.length-1,n=i*e,r=Math.floor(n),s=d.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(r=Math.floor(n=i*(1+e))),s(t[(r-1+i)%i],t[r],t[(r+1)%i],t[(r+2)%i],n-r)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-n)-t[0]):e>1?t[i]-(s(t[i],t[i],t[i-1],t[i-1],n-i)-t[i]):s(t[r?r-1:0],t[r],t[i<r+1?i:r+1],t[i<r+2?i:r+2],n-r)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=d.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var n=e;n>1;n--)i*=n;return t[e]=i,i}}(),CatmullRom:function(t,e,i,n,r){var s=(i-t)*.5,a=(n-e)*.5,h=r*r,f=r*h;return(2*e-2*i+s+a)*f+(-3*e+3*i-2*s-a)*h+s*r+e}}},T=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),O=new P,H=function(){function t(e,i){i===void 0&&(i=O),this._object=e,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=g.Linear.None,this._interpolationFunction=d.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=T.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,i){return this._valuesEnd=Object.create(e),i!==void 0&&(this._duration=i),this},t.prototype.duration=function(e){return this._duration=e,this},t.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?u()+parseFloat(e):e:u(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(e,i,n,r){for(var s in n){var a=e[s],h=Array.isArray(a),f=h?"array":typeof a,p=!h&&Array.isArray(n[s]);if(!(f==="undefined"||f==="function")){if(p){var l=n[s];if(l.length===0)continue;l=l.map(this._handleRelativeValue.bind(this,a)),n[s]=[a].concat(l)}if((f==="object"||h)&&a&&!p){i[s]=h?[]:{};for(var M in a)i[s][M]=a[M];r[s]=h?[]:{},this._setupProperties(a,i[s],n[s],r[s])}else typeof i[s]>"u"&&(i[s]=a),h||(i[s]*=1),p?r[s]=n[s].slice().reverse():r[s]=i[s]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=u()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=u()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,i=this._chainedTweens.length;e<i;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return this._group=e,this},t.prototype.delay=function(e){return this._delayTime=e,this},t.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return this._yoyo=e,this},t.prototype.easing=function(e){return this._easingFunction=e,this},t.prototype.interpolation=function(e){return this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,i){if(e===void 0&&(e=u()),i===void 0&&(i=!0),this._isPaused)return!0;var n,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;i&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var a=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var h=0,f=this._chainedTweens.length;h<f;h++)this._chainedTweens[h].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,i,n,r){for(var s in n)if(i[s]!==void 0){var a=i[s]||0,h=n[s],f=Array.isArray(e[s]),p=Array.isArray(h),l=!f&&p;l?e[s]=this._interpolationFunction(h,r):typeof h=="object"&&h?this._updateProperties(e[s],a,h,r):(h=this._handleRelativeValue(a,h),typeof h=="number"&&(e[s]=a+(h-a)*r))}},t.prototype._handleRelativeValue=function(e,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?e+parseFloat(i):parseFloat(i)},t.prototype._swapEndStartRepeatValues=function(e){var i=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=i},t}(),Q="18.6.4",z=T.nextId,o=O,$=o.getAll.bind(o),J=o.removeAll.bind(o),K=o.add.bind(o),X=o.remove.bind(o),Y=o.update.bind(o),c={Easing:g,Group:P,Interpolation:d,now:u,Sequence:T,nextId:z,Tween:H,VERSION:Q,getAll:$,removeAll:J,add:K,remove:X,update:Y};const{innerWidth:R,innerHeight:E}=window,w=new U,I=new D(45,R/E,.1,1e3);I.position.set(0,16,26);I.lookAt(w.position);const Z=new j(6710886);w.add(Z);const C=new B(10066329,2);C.position.set(-10,10,10);C.castShadow=!0;w.add(C);const V=new L(4,4,4),m=new q({color:16773120}),x=new G(V,m);w.add(x);const S=10,_=new c.Tween({x:-S});_.to({x:S},3e3);_.easing(c.Easing.Quadratic.Out);const y=new c.Tween({x:S});y.to({x:-S},3e3);y.easing(c.Easing.Bounce.InOut);y.chain(_);_.chain(y);const A=t=>{x.position.x=t.x};_.onUpdate(A);y.onUpdate(A);_.start();const b=new N({antialias:!0});b.setSize(R,E);b.shadowMap.enabled=!0;document.body.appendChild(b.domElement);new W(I,b.domElement);const F=()=>{c.update(),requestAnimationFrame(F),b.render(w,I)};F()});export default tt();
