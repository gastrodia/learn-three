import"./d-__uno-e58b1170.js";import{S as g,b as G,A as u,d,M,a as n,aa as x,B as v,g as S,ab as A,W as C}from"./d-three.module-b52a2031.js";import{O as H}from"./d-OrbitControls-bc3a0338.js";import{i as I}from"./d-dat.gui.module-dd30c9f2.js";const L=new I.GUI,{innerWidth:l,innerHeight:w}=window,t=new g,a=new G(45,l/w,.1,1e3);a.position.set(-50,30,50);a.lookAt(t.position);const W=new u(16777215);t.add(W);const E=new d(60,40),O=new M({color:3355443}),p=new n(E,O);p.rotation.x=Math.PI/-2;t.add(p);const i=new x({wireframe:!1}),P=new v(8,8,8),k=new S(8),z=new d(8,12),h=new n(P,i),m=new n(k,i),c=new n(z,i);h.position.y=4;m.position.y=8;c.position.y=6;m.material.flatShading=!0;c.material.side=A;const s={box:h,sphere:m,plane:c},y={active:"box"};let e=s[y.active];t.add(e);L.add(y,"active",Object.keys(s)).onChange(f=>{t.remove(e),e=s[f],t.add(e)});const o=new C({antialias:!0});o.setSize(l,w);o.shadowMap.enabled=!0;document.body.appendChild(o.domElement);new H(a,o.domElement);const r=.01,b=()=>{e.rotation.x+=r,e.rotation.y+=r,e.rotation.z+=r,requestAnimationFrame(b),o.render(t,a)};b();
