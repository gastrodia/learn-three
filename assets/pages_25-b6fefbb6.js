import"./d-__uno-e58b1170.js";import{N as u,af as w,S,b,A as y,f as v,B as x,a as L,W as G}from"./d-three.module-b52a2031.js";import{O as H}from"./d-OrbitControls-bc3a0338.js";import{i as M}from"./d-dat.gui.module-dd30c9f2.js";function r(d,h,p,g){const l={time:{type:"f",value:20},scale:{type:"f",value:.1},alpha:{type:"f",value:.1},resolution:{type:"v2",value:new u(p,g)}};return new w({uniforms:l,vertexShader:d,fragmentShader:h,transparent:!0})}function n(d=""){return document.querySelector(d).innerHTML}new M.GUI;const{innerWidth:e,innerHeight:t}=window,o=new S,i=new b(45,e/t,.1,1e3);i.position.set(20,20,20);i.lookAt(o.position);const A=new y(6710886);o.add(A);const m=new v(16777215);m.castShadow=!0;m.position.set(-50,80,50);o.add(m);const W=new x(8,8,8),a=n("#vertex-shader"),C=n("#fragment-shader-1"),E=n("#fragment-shader-2"),I=n("#fragment-shader-3"),T=n("#fragment-shader-4"),q=n("#fragment-shader-5"),B=n("#fragment-shader-6"),O=[r(a,C,e,t),r(a,E,e,t),r(a,I,e,t),r(a,T,e,t),r(a,q,e,t),r(a,B,e,t)],c=new L(W,O);c.position.y=4;o.add(c);const s=new G({antialias:!0});s.setSize(e,t);s.shadowMap.enabled=!0;document.body.appendChild(s.domElement);new H(i,s.domElement);const f=()=>{requestAnimationFrame(f),s.render(o,i)};f();
