import"../d-__uno-a35406a8.js";import{S as h,b as x,c as u,f as b,d as g,M,a as c,B as v,ac as C,o as l,W as H}from"../d-three.module-b52a2031.js";import{O as G}from"../d-OrbitControls-bc3a0338.js";import{i as S}from"../d-dat.gui.module-dd30c9f2.js";const s=new S.GUI,{innerWidth:m,innerHeight:w}=window,o=new h,t=new x(45,m/w,.1,1e3);t.position.set(30,10,30);t.lookAt(o.position);const y=new u(200);o.add(y);const a=new b(16777215);a.castShadow=!0;a.position.set(-50,30,50);o.add(a);const I=new g(60,60),L=new M({color:10066329}),i=new c(I,L);i.rotation.x=-.5*Math.PI;i.receiveShadow=!0;o.add(i);const P=new v(8,8,8),e=new C({color:7829503,emissive:0,specular:16711680,shininess:30}),d=new c(P,e);d.castShadow=!0;d.position.y=4;o.add(d);const p={emissive:e.emissive.getHex(),specular:e.specular.getHex()};console.log(e);s.add(e,"wireframe");s.add(e,"shininess",0,100);s.add(a,"visible");s.addColor(p,"emissive").onChange(r=>{e.emissive=new l(r)});s.addColor(p,"specular").onChange(r=>{e.specular=new l(r)});const n=new H({antialias:!0});n.setSize(m,w);n.shadowMap.enabled=!0;document.body.appendChild(n.domElement);new G(t,n.domElement);const f=()=>{requestAnimationFrame(f),n.render(o,t)};f();
