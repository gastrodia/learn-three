import"./d-__uno-e58b1170.js";import{at as Ct,au as Lt,ay as at,N as W,V as pt,az as Rt,U as Ot,h as jt,ah as bt,v as Gt,w as gt,av as ct,S as Vt,b as Bt,c as Wt,A as qt,f as Ht,W as zt}from"./d-three.module-b52a2031.js";import{O as Ft}from"./d-OrbitControls-bc3a0338.js";import{i as Ut}from"./d-dat.gui.module-dd30c9f2.js";class wt extends Ct{constructor(j){super(j),this.defaultDPI=90,this.defaultUnit="px"}load(j,F,G,E){const I=this,v=new Lt(I.manager);v.setPath(I.path),v.setRequestHeader(I.requestHeader),v.setWithCredentials(I.withCredentials),v.load(j,function(tt){try{F(I.parse(tt))}catch(Q){E?E(Q):console.error(Q),I.manager.itemError(j)}},G,E)}parse(j){const F=this;function G(i,s){if(i.nodeType!==1)return;const e=T(i);let t=!1,c=null;switch(i.nodeName){case"svg":s=z(i,s);break;case"style":I(i);break;case"g":s=z(i,s);break;case"path":s=z(i,s),i.hasAttribute("d")&&(c=E(i));break;case"rect":s=z(i,s),c=Q(i);break;case"polygon":s=z(i,s),c=X(i);break;case"polyline":s=z(i,s),c=K(i);break;case"circle":s=z(i,s),c=V(i);break;case"ellipse":s=z(i,s),c=B(i);break;case"line":s=z(i,s),c=ot(i);break;case"defs":t=!0;break;case"use":s=z(i,s);const y=(i.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),d=i.viewportElement.getElementById(y);d?G(d,s):console.warn("SVGLoader: 'use node' references non-existent node id: "+y);break}c&&(s.fill!==void 0&&s.fill!=="none"&&c.color.setStyle(s.fill),S(c,nt),k.push(c),c.userData={node:i,style:s});const u=i.childNodes;for(let r=0;r<u.length;r++){const y=u[r];t&&y.nodeName!=="style"&&y.nodeName!=="defs"||G(y,s)}e&&(H.pop(),H.length>0?nt.copy(H[H.length-1]):nt.identity())}function E(i){const s=new ct,e=new W,t=new W,c=new W;let u=!0,r=!1;const y=i.getAttribute("d");if(y===""||y==="none")return null;const d=y.match(/[a-df-z][^a-df-z]*/ig);for(let m=0,a=d.length;m<a;m++){const l=d[m],x=l.charAt(0),g=l.slice(1).trim();u===!0&&(r=!0,u=!1);let o;switch(x){case"M":o=p(g);for(let n=0,w=o.length;n<w;n+=2)e.x=o[n+0],e.y=o[n+1],t.x=e.x,t.y=e.y,n===0?s.moveTo(e.x,e.y):s.lineTo(e.x,e.y),n===0&&c.copy(e);break;case"H":o=p(g);for(let n=0,w=o.length;n<w;n++)e.x=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&r===!0&&c.copy(e);break;case"V":o=p(g);for(let n=0,w=o.length;n<w;n++)e.y=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&r===!0&&c.copy(e);break;case"L":o=p(g);for(let n=0,w=o.length;n<w;n+=2)e.x=o[n+0],e.y=o[n+1],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&r===!0&&c.copy(e);break;case"C":o=p(g);for(let n=0,w=o.length;n<w;n+=6)s.bezierCurveTo(o[n+0],o[n+1],o[n+2],o[n+3],o[n+4],o[n+5]),t.x=o[n+2],t.y=o[n+3],e.x=o[n+4],e.y=o[n+5],n===0&&r===!0&&c.copy(e);break;case"S":o=p(g);for(let n=0,w=o.length;n<w;n+=4)s.bezierCurveTo(b(e.x,t.x),b(e.y,t.y),o[n+0],o[n+1],o[n+2],o[n+3]),t.x=o[n+0],t.y=o[n+1],e.x=o[n+2],e.y=o[n+3],n===0&&r===!0&&c.copy(e);break;case"Q":o=p(g);for(let n=0,w=o.length;n<w;n+=4)s.quadraticCurveTo(o[n+0],o[n+1],o[n+2],o[n+3]),t.x=o[n+0],t.y=o[n+1],e.x=o[n+2],e.y=o[n+3],n===0&&r===!0&&c.copy(e);break;case"T":o=p(g);for(let n=0,w=o.length;n<w;n+=2){const O=b(e.x,t.x),et=b(e.y,t.y);s.quadraticCurveTo(O,et,o[n+0],o[n+1]),t.x=O,t.y=et,e.x=o[n+0],e.y=o[n+1],n===0&&r===!0&&c.copy(e)}break;case"A":o=p(g,[3,4],7);for(let n=0,w=o.length;n<w;n+=7){if(o[n+5]==e.x&&o[n+6]==e.y)continue;const O=e.clone();e.x=o[n+5],e.y=o[n+6],t.x=e.x,t.y=e.y,v(s,o[n],o[n+1],o[n+2],o[n+3],o[n+4],O,e),n===0&&r===!0&&c.copy(e)}break;case"m":o=p(g);for(let n=0,w=o.length;n<w;n+=2)e.x+=o[n+0],e.y+=o[n+1],t.x=e.x,t.y=e.y,n===0?s.moveTo(e.x,e.y):s.lineTo(e.x,e.y),n===0&&c.copy(e);break;case"h":o=p(g);for(let n=0,w=o.length;n<w;n++)e.x+=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&r===!0&&c.copy(e);break;case"v":o=p(g);for(let n=0,w=o.length;n<w;n++)e.y+=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&r===!0&&c.copy(e);break;case"l":o=p(g);for(let n=0,w=o.length;n<w;n+=2)e.x+=o[n+0],e.y+=o[n+1],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&r===!0&&c.copy(e);break;case"c":o=p(g);for(let n=0,w=o.length;n<w;n+=6)s.bezierCurveTo(e.x+o[n+0],e.y+o[n+1],e.x+o[n+2],e.y+o[n+3],e.x+o[n+4],e.y+o[n+5]),t.x=e.x+o[n+2],t.y=e.y+o[n+3],e.x+=o[n+4],e.y+=o[n+5],n===0&&r===!0&&c.copy(e);break;case"s":o=p(g);for(let n=0,w=o.length;n<w;n+=4)s.bezierCurveTo(b(e.x,t.x),b(e.y,t.y),e.x+o[n+0],e.y+o[n+1],e.x+o[n+2],e.y+o[n+3]),t.x=e.x+o[n+0],t.y=e.y+o[n+1],e.x+=o[n+2],e.y+=o[n+3],n===0&&r===!0&&c.copy(e);break;case"q":o=p(g);for(let n=0,w=o.length;n<w;n+=4)s.quadraticCurveTo(e.x+o[n+0],e.y+o[n+1],e.x+o[n+2],e.y+o[n+3]),t.x=e.x+o[n+0],t.y=e.y+o[n+1],e.x+=o[n+2],e.y+=o[n+3],n===0&&r===!0&&c.copy(e);break;case"t":o=p(g);for(let n=0,w=o.length;n<w;n+=2){const O=b(e.x,t.x),et=b(e.y,t.y);s.quadraticCurveTo(O,et,e.x+o[n+0],e.y+o[n+1]),t.x=O,t.y=et,e.x=e.x+o[n+0],e.y=e.y+o[n+1],n===0&&r===!0&&c.copy(e)}break;case"a":o=p(g,[3,4],7);for(let n=0,w=o.length;n<w;n+=7){if(o[n+5]==0&&o[n+6]==0)continue;const O=e.clone();e.x+=o[n+5],e.y+=o[n+6],t.x=e.x,t.y=e.y,v(s,o[n],o[n+1],o[n+2],o[n+3],o[n+4],O,e),n===0&&r===!0&&c.copy(e)}break;case"Z":case"z":s.currentPath.autoClose=!0,s.currentPath.curves.length>0&&(e.copy(c),s.currentPath.currentPoint.copy(e),u=!0);break;default:console.warn(l)}r=!1}return s}function I(i){if(!(!i.sheet||!i.sheet.cssRules||!i.sheet.cssRules.length))for(let s=0;s<i.sheet.cssRules.length;s++){const e=i.sheet.cssRules[s];if(e.type!==1)continue;const t=e.selectorText.split(/,/gm).filter(Boolean).map(c=>c.trim());for(let c=0;c<t.length;c++){const u=Object.fromEntries(Object.entries(e.style).filter(([,r])=>r!==""));U[t[c]]=Object.assign(U[t[c]]||{},u)}}}function v(i,s,e,t,c,u,r,y){if(s==0||e==0){i.lineTo(y.x,y.y);return}t=t*Math.PI/180,s=Math.abs(s),e=Math.abs(e);const d=(r.x-y.x)/2,m=(r.y-y.y)/2,a=Math.cos(t)*d+Math.sin(t)*m,l=-Math.sin(t)*d+Math.cos(t)*m;let x=s*s,g=e*e;const o=a*a,n=l*l,w=o/x+n/g;if(w>1){const yt=Math.sqrt(w);s=yt*s,e=yt*e,x=s*s,g=e*e}const O=x*n+g*o,et=(x*g-O)/O;let st=Math.sqrt(Math.max(0,et));c===u&&(st=-st);const Z=st*s*l/e,it=-st*e*a/s,ut=Math.cos(t)*Z-Math.sin(t)*it+(r.x+y.x)/2,kt=Math.sin(t)*Z+Math.cos(t)*it+(r.y+y.y)/2,ht=tt(1,0,(a-Z)/s,(l-it)/e),xt=tt((a-Z)/s,(l-it)/e,(-a-Z)/s,(-l-it)/e)%(Math.PI*2);i.currentPath.absellipse(ut,kt,s,e,ht,ht+xt,u===0,t)}function tt(i,s,e,t){const c=i*e+s*t,u=Math.sqrt(i*i+s*s)*Math.sqrt(e*e+t*t);let r=Math.acos(Math.max(-1,Math.min(1,c/u)));return i*t-s*e<0&&(r=-r),r}function Q(i){const s=h(i.getAttribute("x")||0),e=h(i.getAttribute("y")||0),t=h(i.getAttribute("rx")||i.getAttribute("ry")||0),c=h(i.getAttribute("ry")||i.getAttribute("rx")||0),u=h(i.getAttribute("width")),r=h(i.getAttribute("height")),y=1-.551915024494,d=new ct;return d.moveTo(s+t,e),d.lineTo(s+u-t,e),(t!==0||c!==0)&&d.bezierCurveTo(s+u-t*y,e,s+u,e+c*y,s+u,e+c),d.lineTo(s+u,e+r-c),(t!==0||c!==0)&&d.bezierCurveTo(s+u,e+r-c*y,s+u-t*y,e+r,s+u-t,e+r),d.lineTo(s+t,e+r),(t!==0||c!==0)&&d.bezierCurveTo(s+t*y,e+r,s,e+r-c*y,s,e+r-c),d.lineTo(s,e+c),(t!==0||c!==0)&&d.bezierCurveTo(s,e+c*y,s+t*y,e,s+t,e),d}function X(i){function s(u,r,y){const d=h(r),m=h(y);c===0?t.moveTo(d,m):t.lineTo(d,m),c++}const e=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,t=new ct;let c=0;return i.getAttribute("points").replace(e,s),t.currentPath.autoClose=!0,t}function K(i){function s(u,r,y){const d=h(r),m=h(y);c===0?t.moveTo(d,m):t.lineTo(d,m),c++}const e=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,t=new ct;let c=0;return i.getAttribute("points").replace(e,s),t.currentPath.autoClose=!1,t}function V(i){const s=h(i.getAttribute("cx")||0),e=h(i.getAttribute("cy")||0),t=h(i.getAttribute("r")||0),c=new bt;c.absarc(s,e,t,0,Math.PI*2);const u=new ct;return u.subPaths.push(c),u}function B(i){const s=h(i.getAttribute("cx")||0),e=h(i.getAttribute("cy")||0),t=h(i.getAttribute("rx")||0),c=h(i.getAttribute("ry")||0),u=new bt;u.absellipse(s,e,t,c,0,Math.PI*2);const r=new ct;return r.subPaths.push(u),r}function ot(i){const s=h(i.getAttribute("x1")||0),e=h(i.getAttribute("y1")||0),t=h(i.getAttribute("x2")||0),c=h(i.getAttribute("y2")||0),u=new ct;return u.moveTo(s,e),u.lineTo(t,c),u.currentPath.autoClose=!1,u}function z(i,s){s=Object.assign({},s);let e={};if(i.hasAttribute("class")){const r=i.getAttribute("class").split(/\s/).filter(Boolean).map(y=>y.trim());for(let y=0;y<r.length;y++)e=Object.assign(e,U["."+r[y]])}i.hasAttribute("id")&&(e=Object.assign(e,U["#"+i.getAttribute("id")]));function t(r,y,d){d===void 0&&(d=function(a){return a.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),a}),i.hasAttribute(r)&&(s[y]=d(i.getAttribute(r))),e[r]&&(s[y]=d(e[r])),i.style&&i.style[r]!==""&&(s[y]=d(i.style[r]))}function c(r){return Math.max(0,Math.min(1,h(r)))}function u(r){return Math.max(0,h(r))}return t("fill","fill"),t("fill-opacity","fillOpacity",c),t("fill-rule","fillRule"),t("opacity","opacity",c),t("stroke","stroke"),t("stroke-opacity","strokeOpacity",c),t("stroke-width","strokeWidth",u),t("stroke-linejoin","strokeLineJoin"),t("stroke-linecap","strokeLineCap"),t("stroke-miterlimit","strokeMiterLimit",u),t("visibility","visibility"),s}function b(i,s){return i-(s-i)}function p(i,s,e){if(typeof i!="string")throw new TypeError("Invalid input: "+typeof i);const t={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},c=0,u=1,r=2,y=3;let d=c,m=!0,a="",l="";const x=[];function g(O,et,st){const Z=new SyntaxError('Unexpected character "'+O+'" at index '+et+".");throw Z.partial=st,Z}function o(){a!==""&&(l===""?x.push(Number(a)):x.push(Number(a)*Math.pow(10,Number(l)))),a="",l=""}let n;const w=i.length;for(let O=0;O<w;O++){if(n=i[O],Array.isArray(s)&&s.includes(x.length%e)&&t.FLAGS.test(n)){d=u,a=n,o();continue}if(d===c){if(t.WHITESPACE.test(n))continue;if(t.DIGIT.test(n)||t.SIGN.test(n)){d=u,a=n;continue}if(t.POINT.test(n)){d=r,a=n;continue}t.COMMA.test(n)&&(m&&g(n,O,x),m=!0)}if(d===u){if(t.DIGIT.test(n)){a+=n;continue}if(t.POINT.test(n)){a+=n,d=r;continue}if(t.EXP.test(n)){d=y;continue}t.SIGN.test(n)&&a.length===1&&t.SIGN.test(a[0])&&g(n,O,x)}if(d===r){if(t.DIGIT.test(n)){a+=n;continue}if(t.EXP.test(n)){d=y;continue}t.POINT.test(n)&&a[a.length-1]==="."&&g(n,O,x)}if(d===y){if(t.DIGIT.test(n)){l+=n;continue}if(t.SIGN.test(n)){if(l===""){l+=n;continue}l.length===1&&t.SIGN.test(l)&&g(n,O,x)}}t.WHITESPACE.test(n)?(o(),d=c,m=!1):t.COMMA.test(n)?(o(),d=c,m=!0):t.SIGN.test(n)?(o(),d=u,a=n):t.POINT.test(n)?(o(),d=r,a=n):g(n,O,x)}return o(),x}const A=["mm","cm","in","pt","pc","px"],L={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function h(i){let s="px";if(typeof i=="string"||i instanceof String)for(let t=0,c=A.length;t<c;t++){const u=A[t];if(i.endsWith(u)){s=u,i=i.substring(0,i.length-u.length);break}}let e;return s==="px"&&F.defaultUnit!=="px"?e=L.in[F.defaultUnit]/F.defaultDPI:(e=L[s][F.defaultUnit],e<0&&(e=L[s].in*F.defaultDPI)),e*parseFloat(i)}function T(i){if(!(i.hasAttribute("transform")||i.nodeName==="use"&&(i.hasAttribute("x")||i.hasAttribute("y"))))return null;const s=M(i);return H.length>0&&s.premultiply(H[H.length-1]),nt.copy(s),H.push(s),s}function M(i){const s=new at,e=_;if(i.nodeName==="use"&&(i.hasAttribute("x")||i.hasAttribute("y"))){const t=h(i.getAttribute("x")),c=h(i.getAttribute("y"));s.translate(t,c)}if(i.hasAttribute("transform")){const t=i.getAttribute("transform").split(")");for(let c=t.length-1;c>=0;c--){const u=t[c].trim();if(u==="")continue;const r=u.indexOf("("),y=u.length;if(r>0&&r<y){const d=u.slice(0,r),m=p(u.slice(r+1));switch(e.identity(),d){case"translate":if(m.length>=1){const a=m[0];let l=0;m.length>=2&&(l=m[1]),e.translate(a,l)}break;case"rotate":if(m.length>=1){let a=0,l=0,x=0;a=m[0]*Math.PI/180,m.length>=3&&(l=m[1],x=m[2]),Y.makeTranslation(-l,-x),P.makeRotation(a),f.multiplyMatrices(P,Y),Y.makeTranslation(l,x),e.multiplyMatrices(Y,f)}break;case"scale":if(m.length>=1){const a=m[0];let l=a;m.length>=2&&(l=m[1]),e.scale(a,l)}break;case"skewX":m.length===1&&e.set(1,Math.tan(m[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":m.length===1&&e.set(1,0,0,Math.tan(m[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":m.length===6&&e.set(m[0],m[2],m[4],m[1],m[3],m[5],0,0,1);break}}s.premultiply(e)}}return s}function S(i,s){function e(r){D.set(r.x,r.y,1).applyMatrix3(s),r.set(D.x,D.y)}function t(r){const y=r.xRadius,d=r.yRadius,m=Math.cos(r.aRotation),a=Math.sin(r.aRotation),l=new pt(y*m,y*a,0),x=new pt(-d*a,d*m,0),g=l.applyMatrix3(s),o=x.applyMatrix3(s),n=_.set(g.x,o.x,0,g.y,o.y,0,0,0,1),w=Y.copy(n).invert(),st=P.copy(w).transpose().multiply(w).elements,Z=$(st[0],st[1],st[4]),it=Math.sqrt(Z.rt1),ut=Math.sqrt(Z.rt2);if(r.xRadius=1/it,r.yRadius=1/ut,r.aRotation=Math.atan2(Z.sn,Z.cs),!((r.aEndAngle-r.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ht=Y.set(it,0,0,0,ut,0,0,0,1),xt=P.set(Z.cs,Z.sn,0,-Z.sn,Z.cs,0,0,0,1),yt=ht.multiply(xt).multiply(n),At=It=>{const{x:Et,y:Nt}=new pt(Math.cos(It),Math.sin(It),0).applyMatrix3(yt);return Math.atan2(Nt,Et)};r.aStartAngle=At(r.aStartAngle),r.aEndAngle=At(r.aEndAngle),R(s)&&(r.aClockwise=!r.aClockwise)}}function c(r){const y=C(s),d=q(s);r.xRadius*=y,r.yRadius*=d;const m=y>Number.EPSILON?Math.atan2(s.elements[1],s.elements[0]):Math.atan2(-s.elements[3],s.elements[4]);r.aRotation+=m,R(s)&&(r.aStartAngle*=-1,r.aEndAngle*=-1,r.aClockwise=!r.aClockwise)}const u=i.subPaths;for(let r=0,y=u.length;r<y;r++){const m=u[r].curves;for(let a=0;a<m.length;a++){const l=m[a];l.isLineCurve?(e(l.v1),e(l.v2)):l.isCubicBezierCurve?(e(l.v0),e(l.v1),e(l.v2),e(l.v3)):l.isQuadraticBezierCurve?(e(l.v0),e(l.v1),e(l.v2)):l.isEllipseCurve&&(J.set(l.aX,l.aY),e(J),l.aX=J.x,l.aY=J.y,N(s)?t(l):c(l))}}}function R(i){const s=i.elements;return s[0]*s[4]-s[1]*s[3]<0}function N(i){const s=i.elements,e=s[0]*s[3]+s[1]*s[4];if(e===0)return!1;const t=C(i),c=q(i);return Math.abs(e/(t*c))>Number.EPSILON}function C(i){const s=i.elements;return Math.sqrt(s[0]*s[0]+s[1]*s[1])}function q(i){const s=i.elements;return Math.sqrt(s[3]*s[3]+s[4]*s[4])}function $(i,s,e){let t,c,u,r,y;const d=i+e,m=i-e,a=Math.sqrt(m*m+4*s*s);return d>0?(t=.5*(d+a),y=1/t,c=i*y*e-s*y*s):d<0?c=.5*(d-a):(t=.5*a,c=-.5*a),m>0?u=m+a:u=m-a,Math.abs(u)>2*Math.abs(s)?(y=-2*s/u,r=1/Math.sqrt(1+y*y),u=y*r):Math.abs(s)===0?(u=1,r=0):(y=-.5*u/s,u=1/Math.sqrt(1+y*y),r=y*u),m>0&&(y=u,u=-r,r=y),{rt1:t,rt2:c,cs:u,sn:r}}const k=[],U={},H=[],_=new at,Y=new at,P=new at,f=new at,J=new W,D=new pt,nt=new at,rt=new DOMParser().parseFromString(j,"image/svg+xml");return G(rt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:rt.documentElement}}static createShapes(j){const G={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},E={loc:G.ORIGIN,t:0};function I(b,p,A,L){const h=b.x,T=p.x,M=A.x,S=L.x,R=b.y,N=p.y,C=A.y,q=L.y,$=(S-M)*(R-C)-(q-C)*(h-M),k=(T-h)*(R-C)-(N-R)*(h-M),U=(q-C)*(T-h)-(S-M)*(N-R),H=$/U,_=k/U;if(U===0&&$!==0||H<=0||H>=1||_<0||_>1)return null;if($===0&&U===0){for(let Y=0;Y<2;Y++)if(v(Y===0?A:L,b,p),E.loc==G.ORIGIN){const P=Y===0?A:L;return{x:P.x,y:P.y,t:E.t}}else if(E.loc==G.BETWEEN){const P=+(h+E.t*(T-h)).toPrecision(10),f=+(R+E.t*(N-R)).toPrecision(10);return{x:P,y:f,t:E.t}}return null}else{for(let f=0;f<2;f++)if(v(f===0?A:L,b,p),E.loc==G.ORIGIN){const J=f===0?A:L;return{x:J.x,y:J.y,t:E.t}}const Y=+(h+H*(T-h)).toPrecision(10),P=+(R+H*(N-R)).toPrecision(10);return{x:Y,y:P,t:H}}}function v(b,p,A){const L=A.x-p.x,h=A.y-p.y,T=b.x-p.x,M=b.y-p.y,S=L*M-T*h;if(b.x===p.x&&b.y===p.y){E.loc=G.ORIGIN,E.t=0;return}if(b.x===A.x&&b.y===A.y){E.loc=G.DESTINATION,E.t=1;return}if(S<-Number.EPSILON){E.loc=G.LEFT;return}if(S>Number.EPSILON){E.loc=G.RIGHT;return}if(L*T<0||h*M<0){E.loc=G.BEHIND;return}if(Math.sqrt(L*L+h*h)<Math.sqrt(T*T+M*M)){E.loc=G.BEYOND;return}let R;L!==0?R=T/L:R=M/h,E.loc=G.BETWEEN,E.t=R}function tt(b,p){const A=[],L=[];for(let h=1;h<b.length;h++){const T=b[h-1],M=b[h];for(let S=1;S<p.length;S++){const R=p[S-1],N=p[S],C=I(T,M,R,N);C!==null&&A.find(q=>q.t<=C.t+Number.EPSILON&&q.t>=C.t-Number.EPSILON)===void 0&&(A.push(C),L.push(new W(C.x,C.y)))}}return L}function Q(b,p,A){const L=new W;p.getCenter(L);const h=[];return A.forEach(T=>{T.boundingBox.containsPoint(L)&&tt(b,T.points).forEach(S=>{h.push({identifier:T.identifier,isCW:T.isCW,point:S})})}),h.sort((T,M)=>T.point.x-M.point.x),h}function X(b,p,A,L,h){(h==null||h==="")&&(h="nonzero");const T=new W;b.boundingBox.getCenter(T);const M=[new W(A,T.y),new W(L,T.y)],S=Q(M,b.boundingBox,p);S.sort((k,U)=>k.point.x-U.point.x);const R=[],N=[];S.forEach(k=>{k.identifier===b.identifier?R.push(k):N.push(k)});const C=R[0].point.x,q=[];let $=0;for(;$<N.length&&N[$].point.x<C;)q.length>0&&q[q.length-1]===N[$].identifier?q.pop():q.push(N[$].identifier),$++;if(q.push(b.identifier),h==="evenodd"){const k=q.length%2===0,U=q[q.length-2];return{identifier:b.identifier,isHole:k,for:U}}else if(h==="nonzero"){let k=!0,U=null,H=null;for(let _=0;_<q.length;_++){const Y=q[_];k?(H=p[Y].isCW,k=!1,U=Y):H!==p[Y].isCW&&(H=p[Y].isCW,k=!0)}return{identifier:b.identifier,isHole:k,for:U}}else console.warn('fill-rule: "'+h+'" is currently not implemented.')}let K=999999999,V=-999999999,B=j.subPaths.map(b=>{const p=b.getPoints();let A=-999999999,L=999999999,h=-999999999,T=999999999;for(let M=0;M<p.length;M++){const S=p[M];S.y>A&&(A=S.y),S.y<L&&(L=S.y),S.x>h&&(h=S.x),S.x<T&&(T=S.x)}return V<=h&&(V=h+1),K>=T&&(K=T-1),{curves:b.curves,points:p,isCW:Rt.isClockWise(p),identifier:-1,boundingBox:new Ot(new W(T,L),new W(h,A))}});B=B.filter(b=>b.points.length>1);for(let b=0;b<B.length;b++)B[b].identifier=b;const ot=B.map(b=>X(b,B,K,V,j.userData?j.userData.style.fillRule:void 0)),z=[];return B.forEach(b=>{if(!ot[b.identifier].isHole){const A=new jt;A.curves=b.curves,ot.filter(h=>h.isHole&&h.for===b.identifier).forEach(h=>{const T=B[h.identifier],M=new bt;M.curves=T.curves,A.holes.push(M)}),z.push(A)}}),z}static getStrokeStyle(j,F,G,E,I){return j=j!==void 0?j:1,F=F!==void 0?F:"#000",G=G!==void 0?G:"miter",E=E!==void 0?E:"butt",I=I!==void 0?I:4,{strokeColor:F,strokeWidth:j,strokeLineJoin:G,strokeLineCap:E,strokeMiterLimit:I}}static pointsToStroke(j,F,G,E){const I=[],v=[],tt=[];if(wt.pointsToStrokeWithBuffers(j,F,G,E,I,v,tt)===0)return null;const Q=new Gt;return Q.setAttribute("position",new gt(I,3)),Q.setAttribute("normal",new gt(v,3)),Q.setAttribute("uv",new gt(tt,2)),Q}static pointsToStrokeWithBuffers(j,F,G,E,I,v,tt,Q){const X=new W,K=new W,V=new W,B=new W,ot=new W,z=new W,b=new W,p=new W,A=new W,L=new W,h=new W,T=new W,M=new W,S=new W,R=new W,N=new W,C=new W;G=G!==void 0?G:12,E=E!==void 0?E:.001,Q=Q!==void 0?Q:0,j=m(j);const q=j.length;if(q<2)return 0;const $=j[0].equals(j[q-1]);let k,U=j[0],H;const _=F.strokeWidth/2,Y=1/(q-1);let P=0,f,J,D,nt,rt=!1,mt=0,i=Q*3,s=Q*2;e(j[0],j[1],X).multiplyScalar(_),p.copy(j[0]).sub(X),A.copy(j[0]).add(X),L.copy(p),h.copy(A);for(let a=1;a<q;a++){k=j[a],a===q-1?$?H=j[1]:H=void 0:H=j[a+1];const l=X;if(e(U,k,l),V.copy(l).multiplyScalar(_),T.copy(k).sub(V),M.copy(k).add(V),f=P+Y,J=!1,H!==void 0){e(k,H,K),V.copy(K).multiplyScalar(_),S.copy(k).sub(V),R.copy(k).add(V),D=!0,V.subVectors(H,U),l.dot(V)<0&&(D=!1),a===1&&(rt=D),V.subVectors(H,k),V.normalize();const x=Math.abs(l.dot(V));if(x>Number.EPSILON){const g=_/x;V.multiplyScalar(-g),B.subVectors(k,U),ot.copy(B).setLength(g).add(V),N.copy(ot).negate();const o=ot.length(),n=B.length();B.divideScalar(n),z.subVectors(H,k);const w=z.length();switch(z.divideScalar(w),B.dot(N)<n&&z.dot(N)<w&&(J=!0),C.copy(ot).add(k),N.add(k),nt=!1,J?D?(R.copy(N),M.copy(N)):(S.copy(N),T.copy(N)):u(),F.strokeLineJoin){case"bevel":r(D,J,f);break;case"round":y(D,J),D?c(k,T,S,f,0):c(k,R,M,f,1);break;case"miter":case"miter-clip":default:const O=_*F.strokeMiterLimit/o;if(O<1)if(F.strokeLineJoin!=="miter-clip"){r(D,J,f);break}else y(D,J),D?(z.subVectors(C,T).multiplyScalar(O).add(T),b.subVectors(C,S).multiplyScalar(O).add(S),t(T,f,0),t(z,f,0),t(k,f,.5),t(k,f,.5),t(z,f,0),t(b,f,0),t(k,f,.5),t(b,f,0),t(S,f,0)):(z.subVectors(C,M).multiplyScalar(O).add(M),b.subVectors(C,R).multiplyScalar(O).add(R),t(M,f,1),t(z,f,1),t(k,f,.5),t(k,f,.5),t(z,f,1),t(b,f,1),t(k,f,.5),t(b,f,1),t(R,f,1));else J?(D?(t(A,P,1),t(p,P,0),t(C,f,0),t(A,P,1),t(C,f,0),t(N,f,1)):(t(A,P,1),t(p,P,0),t(C,f,1),t(p,P,0),t(N,f,0),t(C,f,1)),D?S.copy(C):R.copy(C)):D?(t(T,f,0),t(C,f,0),t(k,f,.5),t(k,f,.5),t(C,f,0),t(S,f,0)):(t(M,f,1),t(C,f,1),t(k,f,.5),t(k,f,.5),t(C,f,1),t(R,f,1)),nt=!0;break}}else u()}else u();!$&&a===q-1&&d(j[0],L,h,D,!0,P),P=f,U=k,p.copy(S),A.copy(R)}if(!$)d(k,T,M,D,!1,f);else if(J&&I){let a=C,l=N;rt!==D&&(a=N,l=C),D?(nt||rt)&&(l.toArray(I,0*3),l.toArray(I,3*3),nt&&a.toArray(I,1*3)):(nt||!rt)&&(l.toArray(I,1*3),l.toArray(I,3*3),nt&&a.toArray(I,0*3))}return mt;function e(a,l,x){return x.subVectors(l,a),x.set(-x.y,x.x).normalize()}function t(a,l,x){I&&(I[i]=a.x,I[i+1]=a.y,I[i+2]=0,v&&(v[i]=0,v[i+1]=0,v[i+2]=1),i+=3,tt&&(tt[s]=l,tt[s+1]=x,s+=2)),mt+=3}function c(a,l,x,g,o){X.copy(l).sub(a).normalize(),K.copy(x).sub(a).normalize();let n=Math.PI;const w=X.dot(K);Math.abs(w)<1&&(n=Math.abs(Math.acos(w))),n/=G,V.copy(l);for(let O=0,et=G-1;O<et;O++)B.copy(V).rotateAround(a,n),t(V,g,o),t(B,g,o),t(a,g,.5),V.copy(B);t(B,g,o),t(x,g,o),t(a,g,.5)}function u(){t(A,P,1),t(p,P,0),t(T,f,0),t(A,P,1),t(T,f,1),t(M,f,0)}function r(a,l,x){l?a?(t(A,P,1),t(p,P,0),t(T,f,0),t(A,P,1),t(T,f,0),t(N,f,1),t(T,x,0),t(S,x,0),t(N,x,.5)):(t(A,P,1),t(p,P,0),t(M,f,1),t(p,P,0),t(N,f,0),t(M,f,1),t(M,x,1),t(R,x,0),t(N,x,.5)):a?(t(T,x,0),t(S,x,0),t(k,x,.5)):(t(M,x,1),t(R,x,0),t(k,x,.5))}function y(a,l){l&&(a?(t(A,P,1),t(p,P,0),t(T,f,0),t(A,P,1),t(T,f,0),t(N,f,1),t(T,P,0),t(k,f,.5),t(N,f,1),t(k,f,.5),t(S,P,0),t(N,f,1)):(t(A,P,1),t(p,P,0),t(M,f,1),t(p,P,0),t(N,f,0),t(M,f,1),t(M,P,1),t(N,f,0),t(k,f,.5),t(k,f,.5),t(N,f,0),t(R,P,1)))}function d(a,l,x,g,o,n){switch(F.strokeLineCap){case"round":o?c(a,x,l,n,.5):c(a,l,x,n,.5);break;case"square":if(o)X.subVectors(l,a),K.set(X.y,-X.x),V.addVectors(X,K).add(a),B.subVectors(K,X).add(a),g?(V.toArray(I,1*3),B.toArray(I,0*3),B.toArray(I,3*3)):(V.toArray(I,1*3),V.toArray(I,3*3),B.toArray(I,0*3));else{X.subVectors(x,a),K.set(X.y,-X.x),V.addVectors(X,K).add(a),B.subVectors(K,X).add(a);const w=I.length;g?(V.toArray(I,w-1*3),B.toArray(I,w-2*3),B.toArray(I,w-4*3)):(V.toArray(I,w-2*3),B.toArray(I,w-1*3),B.toArray(I,w-4*3))}break}}function m(a){let l=!1;for(let g=1,o=a.length-1;g<o;g++)if(a[g].distanceTo(a[g+1])<E){l=!0;break}if(!l)return a;const x=[];x.push(a[0]);for(let g=1,o=a.length-1;g<o;g++)a[g].distanceTo(a[g+1])>=E&&x.push(a[g]);return x.push(a[a.length-1]),x}}}const Dt="/learn-three/assets/d-radio-b637c4db.svg";new Ut.GUI;const{innerWidth:Mt,innerHeight:Pt}=window,lt=new Vt,dt=new Bt(45,Mt/Pt,.1,1e3);dt.position.set(20,20,20);dt.lookAt(lt.position);const Xt=new Wt(100);lt.add(Xt);const Yt=new qt(6710886);lt.add(Yt);const Tt=new Ht(16777215);Tt.castShadow=!0;Tt.position.set(-50,80,50);lt.add(Tt);const vt=new wt;vt.load(Dt,Qt=>{});const ft=new zt({antialias:!0});ft.setSize(Mt,Pt);ft.shadowMap.enabled=!0;document.body.appendChild(ft.domElement);new Ft(dt,ft.domElement);const St=()=>{requestAnimationFrame(St),ft.render(lt,dt)};St();
