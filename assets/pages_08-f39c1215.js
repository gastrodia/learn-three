import"../d-__uno-a35406a8.js";import{S as p,b as w,c as b,A as g,f as u,d as M,M as l,a as L,B as S,e as x,o as y,W as C}from"../d-three.module-b52a2031.js";import{c as G}from"../d-SceneUtils-08d9a5b1.js";import{O as H}from"../d-OrbitControls-bc3a0338.js";import{i as A}from"../d-dat.gui.module-dd30c9f2.js";const{innerWidth:m,innerHeight:h}=window,i=new A.GUI,t=new p,a=new w(45,m/h,.1,1e3);a.position.set(-50,30,20);a.lookAt(t.position);const I=new b(200);t.add(I);const o=new g(5592405);t.add(o);const r=new u(16777215,1.2,150,Math.PI/4,0,2);r.position.set(-40,30,30);r.castShadow=!0;t.add(r);const v=new M(60,40),P=new l({color:16777215}),s=new L(v,P);s.receiveShadow=!0;s.rotation.x=-(Math.PI/2);t.add(s);const W=new S(6,10,6),B=[new l({opacity:.7,color:Math.random()*16777215,transparent:!0}),new x({color:0,wireframe:!0})],d=G(W,B);d.traverse(e=>e.castShadow=!0);d.position.y=5;t.add(d);const c={disabledSpotLight:!1,ambientLightStrength:o.intensity,ambientLightColor:o.color.getStyle()};i.add(c,"disabledSpotLight").onChange(e=>r.visible=!e);i.add(c,"ambientLightStrength",0,3,.1).onChange(e=>{o.intensity=e});i.addColor(c,"ambientLightColor").onChange(e=>{o.color=new y(e)});const n=new C({antialias:!0});n.setSize(m,h);n.shadowMap.enabled=!0;document.body.appendChild(n.domElement);new H(a,n.domElement);const f=()=>{requestAnimationFrame(f),n.render(t,a)};f();