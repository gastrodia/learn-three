import"./d-__uno-b823e30e.js";import{S as d,b as c,c as m,A as l,f,h as p,am as w,e as h,M as b,W as u}from"./d-three.module-b52a2031.js";import{O as x}from"./d-OrbitControls-bc3a0338.js";import{i as M}from"./d-dat.gui.module-dd30c9f2.js";import{c as S}from"./d-SceneUtils-08d9a5b1.js";new M.GUI;const{innerWidth:r,innerHeight:s}=window,t=new d,o=new c(45,r/s,.1,1e3);o.position.set(20,20,20);o.lookAt(t.position);const T=new m(100);t.add(T);const g=new l(6710886);t.add(g);const a=new f(16777215);a.castShadow=!0;a.position.set(-50,80,50);t.add(a);const e=new p;e.moveTo(0,0);e.lineTo(5,5);e.lineTo(10,5);e.lineTo(5,10);e.lineTo(0,10);const H={steps:2,bevelEnabled:!0,depth:10,bevelSize:1};console.log(e);const L=new w(e,H),A=[new h({color:16777215,wireframe:!0}),new b({color:16776960})],E=S(L,A);t.add(E);const n=new u({antialias:!0});n.setSize(r,s);n.shadowMap.enabled=!0;document.body.appendChild(n.domElement);new x(o,n.domElement);const i=()=>{requestAnimationFrame(i),n.render(t,o)};i();