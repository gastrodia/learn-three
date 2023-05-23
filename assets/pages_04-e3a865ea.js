import"./main-ef7dcc1b.js";import{S as B,b as _,c as j,f as O,d as q,M as z,a as T,B as F,g as J,W as N}from"./d-three.module-93d44c10.js";import{c as U}from"./d-_commonjsHelpers-28e086c5.js";import{i as V}from"./d-dat.gui.module-dd30c9f2.js";import{O as K}from"./d-OrbitControls-de4c2979.js";var R={},Q={get exports(){return R},set exports(i){R=i}};(function(i,G){(function(r,s){i.exports=s()})(U,function(){var r=function(){function s(n){return a.appendChild(n.dom),n}function d(n){for(var o=0;o<a.children.length;o++)a.children[o].style.display=o===n?"block":"none";p=n}var p=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(n){n.preventDefault(),d(++p%a.children.length)},!1);var c=(performance||Date).now(),l=c,e=0,b=s(new r.Panel("FPS","#0ff","#002")),E=s(new r.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=s(new r.Panel("MB","#f08","#201"));return d(0),{REVISION:16,dom:a,addPanel:s,showPanel:d,begin:function(){c=(performance||Date).now()},end:function(){e++;var n=(performance||Date).now();if(E.update(n-c,200),n>l+1e3&&(b.update(1e3*e/(n-l),100),l=n,e=0,v)){var o=performance.memory;v.update(o.usedJSHeapSize/1048576,o.jsHeapSizeLimit/1048576)}return n},update:function(){c=this.end()},domElement:a,setMode:d}};return r.Panel=function(s,d,p){var a=1/0,c=0,l=Math.round,e=l(window.devicePixelRatio||1),b=80*e,E=48*e,v=3*e,n=2*e,o=3*e,f=15*e,u=74*e,h=30*e,w=document.createElement("canvas");w.width=b,w.height=E,w.style.cssText="width:80px;height:48px";var t=w.getContext("2d");return t.font="bold "+9*e+"px Helvetica,Arial,sans-serif",t.textBaseline="top",t.fillStyle=p,t.fillRect(0,0,b,E),t.fillStyle=d,t.fillText(s,v,n),t.fillRect(o,f,u,h),t.fillStyle=p,t.globalAlpha=.9,t.fillRect(o,f,u,h),{dom:w,update:function(H,k){a=Math.min(a,H),c=Math.max(c,H),t.fillStyle=p,t.globalAlpha=1,t.fillRect(0,0,b,f),t.fillStyle=d,t.fillText(l(H)+" "+s+" ("+l(a)+"-"+l(c)+")",v,n),t.drawImage(w,o+e,f,u-e,h,o,f,u-e,h),t.fillRect(o+u-e,f,e,h),t.fillStyle=p,t.globalAlpha=.9,t.fillRect(o+u-e,f,e,l((1-H/k)*h))}}},r})})(Q);const X=R,Y=()=>{const i=new X;return i.setMode(0),document.body.appendChild(i.domElement),i},Z=Y(),{innerWidth:L,innerHeight:W}=window,m=new B,g=new _(45,L/W,.1,1e3);g.position.set(-200,200,300);g.lookAt(m.position);const $=new j(250);m.add($);const A=new O(16777215);A.position.set(-100,340,-200);A.castShadow=!0;m.add(A);const ee=new q(200,200),te=new z({color:16777215}),P=new T(ee,te);P.receiveShadow=!0;P.position.set(100,0,100);P.rotation.x=-.5*Math.PI;m.add(P);const ne=new F(50,50,50),oe=new z({color:"blue"}),x=new T(ne,oe);x.position.set(25,25,25);x.castShadow=!0;m.add(x);const ae=new J(20),ie=new z({color:"green"}),M=new T(ae,ie);M.position.set(100-20,20,100-20);M.castShadow=!0;m.add(M);const y=new N({antialias:!0});y.setSize(L,W);y.shadowMap.enabled=!0;document.body.appendChild(y.domElement);let I=0;const S={rotationSpeed:.04,bouncingSpeed:.04},C=new V.GUI;C.add(S,"rotationSpeed",0,1);C.add(S,"bouncingSpeed",0,1);const D=()=>{x.rotation.x+=S.rotationSpeed,x.rotation.y+=S.rotationSpeed,x.rotation.z+=S.rotationSpeed,I+=S.bouncingSpeed,M.position.x=120+40*Math.cos(I),M.position.y=20+40*Math.abs(Math.sin(I)),Z.update(),requestAnimationFrame(D),y.render(m,g)},re=i=>{const{innerWidth:G,innerHeight:r}=i.target;g.aspect=G/r,g.updateProjectionMatrix(),y.setSize(G,r)};new K(g,y.domElement);window.addEventListener("resize",re);D();
