import"./d-__uno-e58b1170.js";import{S as l,b as h,c as w,A as M,f as b,M as i,V as u,g as x,a as G,al as L,e as g,W as y}from"./d-three.module-b52a2031.js";import{O as H}from"./d-OrbitControls-bc3a0338.js";import{i as S}from"./d-dat.gui.module-dd30c9f2.js";import{c as A}from"./d-SceneUtils-08d9a5b1.js";new S.GUI;const{innerWidth:c,innerHeight:m}=window,e=new l,n=new h(45,c/m,.1,1e3);n.position.set(50,50,100);n.lookAt(e.position);const W=new w(100);e.add(W);const C=new M(6710886);e.add(C);const s=new b(16777215);s.castShadow=!0;s.position.set(-50,80,50);e.add(s);const d=[],E=new i({color:16711680});for(let o=-20;o<=0;o++){const a=new u(o*2,o*2,0),p=new x(.2),r=new G(p,E);r.position.copy(a),d.push(a),e.add(r)}const I=new L(d),O=[new g({color:16777215,wireframe:!0}),new i({color:16776960})],T=A(I,O);e.add(T);const t=new y({antialias:!0});t.setSize(c,m);t.shadowMap.enabled=!0;document.body.appendChild(t.domElement);new H(n,t.domElement);const f=()=>{requestAnimationFrame(f),t.render(e,n)};f();
