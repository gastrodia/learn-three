import{aj as x,ak as T,b6 as v,Z as k}from"./d-three.module-93d44c10.js";class z extends x{constructor(t){super(t)}load(t,e,n,r){const h=this,i=new T(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(t,function(c){const u=h.parse(JSON.parse(c));e&&e(u)},n,r)}parse(t){return new F(t)}}class F{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=S(t,e,this.data);for(let h=0,i=r.length;h<i;h++)n.push(...r[h].toShapes());return n}}function S(a,t,e){const n=Array.from(a),r=t/e.resolution,h=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,i=[];let c=0,u=0;for(let l=0;l<n.length;l++){const d=n[l];if(d===`
`)c=0,u-=h;else{const p=w(d,r,c,u,e);c+=p.offsetX,i.push(p.path)}}return i}function w(a,t,e,n,r){const h=r.glyphs[a]||r.glyphs["?"];if(!h){console.error('THREE.Font: character "'+a+'" does not exists in font family '+r.familyName+".");return}const i=new v;let c,u,l,d,p,y,b,f;if(h.o){const s=h._cachedOutline||(h._cachedOutline=h.o.split(" "));for(let o=0,g=s.length;o<g;)switch(s[o++]){case"m":c=s[o++]*t+e,u=s[o++]*t+n,i.moveTo(c,u);break;case"l":c=s[o++]*t+e,u=s[o++]*t+n,i.lineTo(c,u);break;case"q":l=s[o++]*t+e,d=s[o++]*t+n,p=s[o++]*t+e,y=s[o++]*t+n,i.quadraticCurveTo(p,y,l,d);break;case"b":l=s[o++]*t+e,d=s[o++]*t+n,p=s[o++]*t+e,y=s[o++]*t+n,b=s[o++]*t+e,f=s[o++]*t+n,i.bezierCurveTo(p,y,b,f,l,d);break}}return{offsetX:h.ha*t,path:i}}class C extends k{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const r=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}const P="/learn-three/assets/d-helvetiker_regular.typeface-d5c54676.json";export{z as F,C as T,P as f};
