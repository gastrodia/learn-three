import"./__uno-9d578755.js";import{S as r,b as d,A as c,f as m,B as w,M as h,a as p,W as b}from"./three.module-b52a2031.js";const{innerWidth:a,innerHeight:s}=window,e=new r,n=new d(45,a/s,.1,1e3);n.position.set(-10,10,10);n.lookAt(e.position);const l=new c(6710886);e.add(l);const o=new m(10066329);o.position.set(0,20,20);o.castShadow=!0;e.add(o);const f=new w(4,4,4),x=new h({color:16711935}),L=new p(f,x);e.add(L);const t=new b({antialias:!0});t.setSize(a,s);t.shadowMap.enabled=!0;document.body.appendChild(t.domElement);const i=()=>{requestAnimationFrame(i),t.render(e,n)};i();