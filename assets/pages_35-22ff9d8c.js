import"./__uno-9d578755.js";import{S as p,b as c,A as w,f as l,aB as h,aC as b,W as S}from"./three.module-b52a2031.js";import{O as g}from"./OrbitControls-2ca992f4.js";import{i as u}from"./dat.gui.module-dd30c9f2.js";new u.GUI;const{innerWidth:s,innerHeight:d}=window,e=new p,n=new c(45,s/d,.1,1e3);n.position.set(0,0,160);n.lookAt(e.position);const x=new w(6710886);e.add(x);const r=new l(16777215);r.castShadow=!0;r.position.set(-50,80,50);e.add(r);for(let o=-10;o<10;o++)for(let i=-10;i<10;i++){const f=new h({color:16777215*Math.random()}),a=new b(f);a.position.set(o*4,i*4,0),e.add(a)}const t=new S({antialias:!0});t.setSize(s,d);t.shadowMap.enabled=!0;document.body.appendChild(t.domElement);new g(n,t.domElement);const m=()=>{requestAnimationFrame(m),t.render(e,n)};m();
