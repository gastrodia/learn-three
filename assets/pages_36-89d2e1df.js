import"./main-ef7dcc1b.js";import{S as u,b as h,A as b,f as g,E as x,a8 as A,C,a9 as c,aa as L,W as S}from"./d-three.module-93d44c10.js";import{O as y}from"./d-OrbitControls-de4c2979.js";import{i as E}from"./d-dat.gui.module-dd30c9f2.js";new E.GUI;const{innerWidth:d,innerHeight:m}=window,e=new u,o=new h(45,d/m,.1,1e3);o.position.set(0,0,160);o.lookAt(e.position);const G=new b(6710886);e.add(G);const a=new g(16777215);a.castShadow=!0;a.position.set(-50,80,50);e.add(a);const f=new x,H=new A({size:2,color:16777215,vertexColors:!0}),l=[],p=[];for(let n=-10;n<10;n++)for(let r=-10;r<10;r++)for(let s=-10;s<10;s++){l.push(n*4,r*4,s*4);const i=new C(16777215*Math.random());p.push(i.r,i.g,i.b)}f.setAttribute("position",new c(l,3));f.setAttribute("color",new c(p,3));const W=new L(f,H);e.add(W);const t=new S({antialias:!0});t.setSize(d,m);t.shadowMap.enabled=!0;document.body.appendChild(t.domElement);new y(o,t.domElement);const w=()=>{requestAnimationFrame(w),t.render(e,o)};w();
