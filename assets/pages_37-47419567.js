import"./__uno-9d578755.js";import{S as h,b,A as g,f as x,v as S,aD as A,w as F,aE as C,W as H,aF as a,o as L}from"./three.module-b52a2031.js";import{O as M}from"./OrbitControls-2ca992f4.js";import{i as v}from"./dat.gui.module-dd30c9f2.js";const z=new v.GUI,{innerWidth:f,innerHeight:m}=window,t=new h,n=new b(45,f/m,.1,1e3);n.position.set(0,0,160);n.lookAt(t.position);const E=new g(6710886);t.add(E);const s=new x(16777215);s.castShadow=!0;s.position.set(-50,80,50);t.add(s);const c=new S,l=new A({size:1,color:Math.random()*16777215,vertexColors:!1,sizeAttenuation:!0}),p=[],G=2e4;for(let d=0;d<G;d++)p.push(a.randFloatSpread(500),a.randFloatSpread(500),a.randFloatSpread(500));c.setAttribute("position",new F(p,3));const o=new C(c,l);t.add(o);const w={animation:!0,color:l.color.getHex()};z.add(w,"animation");const e=new H({antialias:!0});e.setSize(f,m);e.shadowMap.enabled=!0;document.body.appendChild(e.domElement);new M(n,e.domElement);let i=0,r=0;const W=60,u=()=>{w.animation&&(i+=.01,r+=1,o.rotation.x=i,o.rotation.z=i,r>=W&&(o.material.color=new L(Math.random()*16777215),r=0)),requestAnimationFrame(u),e.render(t,n)};u();
