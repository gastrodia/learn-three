import"./d-__uno-e58b1170.js";import{S as h,b as l,A as m,aD as p,Q as g,m as w,aE as b,W as u,aG as S}from"./d-three.module-b52a2031.js";import{O as C}from"./d-OrbitControls-bc3a0338.js";const{innerWidth:d,innerHeight:s}=window,o=new h,a=new l(45,d/s,.1,1e3);a.position.set(0,0,50);a.lookAt(o.position);const f=new m(6710886);o.add(f);function x(){const n=document.createElement("canvas");n.width=16,n.height=16;const i=n.getContext("2d"),e=i.createRadialGradient(16/2,16/2,0,16/2,16/2,16/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(0,255,255,1)"),e.addColorStop(.4,"rgba(0,0,255,1)"),e.addColorStop(1,"rgba(0,0,0,1)"),i.fillStyle=e,i.fillRect(0,0,16,16);const r=new S(n);return r.needsUpdate=!0,r}const y=new p({size:3,map:x(),depthWrite:!1,transparent:!0,opacity:.7,blending:g}),A=new w(10,3,16,100),E=new b(A,y);o.add(E);const t=new u({antialias:!0});t.setSize(d,s);t.shadowMap.enabled=!0;document.body.appendChild(t.domElement);new C(a,t.domElement);const c=()=>{requestAnimationFrame(c),t.render(o,a)};c();
