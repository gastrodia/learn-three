import"./main-ef7dcc1b.js";import{S as m,b as h,A as b,c as f,d as g,M as x,a as i,f as y,i as M,B as S,g as G,as as L,y as c,W as u}from"./d-three.module-26890fb1.js";import{O as H}from"./d-OrbitControls-34f74cf0.js";import{G as W}from"./d-dat.gui.module-dd30c9f2.js";const A="/learn-three/assets/d-brick-wall-abe9f117.jpg",I="/learn-three/assets/d-floor-wood-bdea90a6.jpg";new W;const{innerWidth:p,innerHeight:l}=window,a=new m,n=new h(45,p/l,.1,1e3);n.position.set(30,40,-40);n.lookAt(a.position);const k=new b(6710886);a.add(k);const z=new f(200);a.add(z);const C=new g(60,100),E=new x({color:16777215}),d=new i(C,E);d.receiveShadow=!0;d.rotation.x=-(Math.PI/2);a.add(d);const e=new y(6710886);e.position.set(0,60,-60);e.castShadow=!0;e.shadow.camera.near=1;e.shadow.camera.far=100;e.distance=150;e.angle=.6;e.intensity=4;e.penumbra=0;a.add(e);const P=new M(e);a.add(P);const T=new S(20,20,20),U=new G(10,20,20),w=new L;w.load(A,s=>{const r=new c({map:s}),t=new i(T,r);t.castShadow=!0,t.position.y=10,t.position.z=20,a.add(t)});w.load(I,s=>{const r=new c({map:s}),t=new i(U,r);t.castShadow=!0,t.position.y=10,t.position.z=-20,a.add(t)});const o=new u({antialias:!0});o.setSize(p,l);o.shadowMap.enabled=!0;document.body.appendChild(o.domElement);new H(n,o.domElement);const j=()=>{o.render(a,n)};o.setAnimationLoop(j);