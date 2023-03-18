import"../d-__uno-a35406a8.js";import{S as at,b as ut,A as ct,f as ft,ae as ht,W as dt,a as lt}from"../d-three.module-b52a2031.js";import{O as mt}from"../d-OrbitControls-bc3a0338.js";import{i as $t}from"../d-dat.gui.module-dd30c9f2.js";import{F as Mt,T as vt,f as gt}from"../d-helvetiker_regular.typeface-5b6a5138.js";import{c as pt}from"../d-_commonjsHelpers-28e086c5.js";var P={},yt={get exports(){return P},set exports(m){P=m}};(function(m,I){(function(T,L){m.exports=L()})(pt,function(){var T=1e3,L=6e4,V=36e5,G="millisecond",x="second",O="minute",b="hour",g="day",k="week",M="month",q="quarter",p="year",_="date",B="Invalid Date",rt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,it=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,st={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(r,n,t){var i=String(r);return!i||i.length>=n?r:""+Array(n+1-i.length).join(t)+r},ot={s:U,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(i,2,"0")+":"+U(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,M),o=t-e<0,s=n.clone().add(i+(o?-1:1),M);return+(-(i+(t-e)/(o?e-s:s-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M,y:p,w:k,d:g,D:_,h:b,m:O,s:x,ms:G,Q:q}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},W="en",S={};S[W]=st;var J=function(r){return r instanceof j},F=function r(n,t,i){var e;if(!n)return W;if(typeof n=="string"){var o=n.toLowerCase();S[o]&&(e=o),t&&(S[o]=t,e=o);var s=n.split("-");if(!e&&s.length>1)return r(s[0])}else{var a=n.name;S[a]=n,e=a}return!i&&e&&(W=e),e||!i&&W},h=function(r,n){if(J(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new j(t)},u=ot;u.l=F,u.i=J,u.w=function(r,n){return h(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var j=function(){function r(t){this.$L=F(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,o=i.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(rt);if(s){var a=s[2]-1||0,f=(s[7]||"0").substring(0,3);return o?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==B},n.isSame=function(t,i){var e=h(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return h(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<h(t)},n.$g=function(t,i,e){return u.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,o=!!u.u(i)||i,s=u.p(t),a=function(H,l){var w=u.w(e.$u?Date.UTC(e.$y,l,H):new Date(e.$y,l,H),e);return o?w:w.endOf(g)},f=function(H,l){return u.w(e.toDate()[H].apply(e.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},c=this.$W,d=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(s){case p:return o?a(1,0):a(31,11);case M:return o?a(1,d):a(0,d+1);case k:var Y=this.$locale().weekStart||0,A=(c<Y?c+7:c)-Y;return a(o?y-A:y+(6-A),d);case g:case _:return f(v+"Hours",0);case b:return f(v+"Minutes",1);case O:return f(v+"Seconds",2);case x:return f(v+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,o=u.p(t),s="set"+(this.$u?"UTC":""),a=(e={},e[g]=s+"Date",e[_]=s+"Date",e[M]=s+"Month",e[p]=s+"FullYear",e[b]=s+"Hours",e[O]=s+"Minutes",e[x]=s+"Seconds",e[G]=s+"Milliseconds",e)[o],f=o===g?this.$D+(i-this.$W):i;if(o===M||o===p){var c=this.clone().set(_,1);c.$d[a](f),c.init(),this.$d=c.set(_,Math.min(this.$D,c.daysInMonth())).$d}else a&&this.$d[a](f);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,i){var e,o=this;t=Number(t);var s=u.p(i),a=function(d){var y=h(o);return u.w(y.date(y.date()+Math.round(d*t)),o)};if(s===M)return this.set(M,this.$M+t);if(s===p)return this.set(p,this.$y+t);if(s===g)return a(1);if(s===k)return a(7);var f=(e={},e[O]=L,e[b]=V,e[x]=T,e)[s]||1,c=this.$d.getTime()+t*f;return u.w(c,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||B;var o=t||"YYYY-MM-DDTHH:mm:ssZ",s=u.z(this),a=this.$H,f=this.$m,c=this.$M,d=e.weekdays,y=e.months,v=function(l,w,N,z){return l&&(l[w]||l(i,o))||N[w].slice(0,z)},Y=function(l){return u.s(a%12||12,l,"0")},A=e.meridiem||function(l,w,N){var z=l<12?"AM":"PM";return N?z.toLowerCase():z},H={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:u.s(c+1,2,"0"),MMM:v(e.monthsShort,c,y,3),MMMM:v(y,c),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:v(e.weekdaysMin,this.$W,d,2),ddd:v(e.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(a),HH:u.s(a,2,"0"),h:Y(1),hh:Y(2),a:A(a,f,!0),A:A(a,f,!1),m:String(f),mm:u.s(f,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:s};return o.replace(it,function(l,w){return w||H[l]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var o,s=u.p(i),a=h(t),f=(a.utcOffset()-this.utcOffset())*L,c=this-a,d=u.m(this,a);return d=(o={},o[p]=d/12,o[M]=d,o[q]=d/3,o[k]=(c-f)/6048e5,o[g]=(c-f)/864e5,o[b]=c/V,o[O]=c/L,o[x]=c/T,o)[s]||c,e?d:u.a(d)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return S[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),o=F(t,i,!0);return o&&(e.$L=o),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),Q=j.prototype;return h.prototype=Q,[["$ms",G],["$s",x],["$m",O],["$H",b],["$W",g],["$M",M],["$y",p],["$D",_]].forEach(function(r){Q[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),h.extend=function(r,n){return r.$i||(r(n,j,h),r.$i=!0),h},h.locale=F,h.isDayjs=J,h.unix=function(r){return h(1e3*r)},h.en=S[W],h.Ls=S,h.p={},h})})(yt);const R=P;new $t.GUI;const{innerWidth:K,innerHeight:X}=window,D=new at,E=new ut(45,K/X,.1,1e3);E.position.set(0,0,28);E.lookAt(D.position);const wt=new ct(6710886);D.add(wt);const Z=new ft(16777215);Z.castShadow=!0;Z.position.set(0,10,28);D.add(Z);const St=new Mt,Dt=new ht({color:7829503}),tt=(m,I)=>{const T=new vt(m,{font:I,size:6,height:4,curveSegments:4,bevelEnabled:!0,bevelThickness:1,bevelSize:.3,bevelOffset:.1,bevelSegments:1});return new lt(T,Dt)},xt=m=>new Promise(I=>St.load(m,I));let et=null;const $={text:null,time:""};xt(gt).then(m=>{et=m,$.time=R().format("HH:mm:ss"),$.text=tt($.time,m),$.text.geometry.center(),D.add($.text)});const C=new dt({antialias:!0});C.setSize(K,X);C.shadowMap.enabled=!0;document.body.appendChild(C.domElement);new mt(E,C.domElement);const nt=()=>{if($.text){const m=R().format("HH:mm:ss");$.time!==m&&(D.remove($.text),$.text.geometry.dispose(),$.text.material.dispose(),$.text=tt(m,et),$.text.geometry.center(),D.add($.text))}requestAnimationFrame(nt),C.render(D,E)};nt();