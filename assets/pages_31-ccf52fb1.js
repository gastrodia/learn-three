import"./main-ef7dcc1b.js";import{S as d,b as c,c as m,A as l,f,K as p,Z as w,e as h,M as b,W as u}from"./d-three.module-93d44c10.js";import{O as x}from"./d-OrbitControls-de4c2979.js";import{i as M}from"./d-dat.gui.module-dd30c9f2.js";import{c as S}from"./d-SceneUtils-32bd4542.js";new M.GUI;const{innerWidth:s,innerHeight:a}=window,t=new d,o=new c(45,s/a,.1,1e3);o.position.set(20,20,20);o.lookAt(t.position);const T=new m(100);t.add(T);const g=new l(6710886);t.add(g);const r=new f(16777215);r.castShadow=!0;r.position.set(-50,80,50);t.add(r);const e=new p;e.moveTo(0,0);e.lineTo(5,5);e.lineTo(10,5);e.lineTo(5,10);e.lineTo(0,10);const H={steps:2,bevelEnabled:!0,depth:10,bevelSize:1};console.log(e);const L=new w(e,H),A=[new h({color:16777215,wireframe:!0}),new b({color:16776960})],E=S(L,A);t.add(E);const n=new u({antialias:!0});n.setSize(s,a);n.shadowMap.enabled=!0;document.body.appendChild(n.domElement);new x(o,n.domElement);const i=()=>{requestAnimationFrame(i),n.render(t,o)};i();
