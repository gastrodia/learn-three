import"./main-ef7dcc1b.js";import{S as m,b as p,A as f,f as l,E as w,J as h,I as z,W as x}from"./d-three.module-26890fb1.js";import{O as y}from"./d-OrbitControls-34f74cf0.js";import{i as S}from"./d-dat.gui.module-dd30c9f2.js";const i=new S.GUI,{innerWidth:a,innerHeight:r}=window,e=new m,t=new p(45,a/r,.1,1e3);t.position.set(28,30,28);t.lookAt(e.position);const g=new f(6710886);e.add(g);const o=new l(16777215);o.castShadow=!0;o.position.set(-50,80,50);e.add(o);const u=[{x:0,y:0,z:0},{x:10,y:0,z:0},{x:0,y:10,z:0},{x:0,y:10,z:10},{x:10,y:0,z:10},{x:0,y:0,z:10},{x:0,y:0,z:0}],L=new w().setFromPoints(u),s=new h({color:16711680,dashSize:1,gapSize:1,scale:1}),d=new z(L,s);d.computeLineDistances();e.add(d);i.add(s,"dashSize",0,10,.1);i.add(s,"gapSize",0,10,.1);i.add(s,"scale",0,10,.1);const n=new x({antialias:!0});n.setSize(a,r);n.shadowMap.enabled=!0;document.body.appendChild(n.domElement);new y(t,n.domElement);const c=()=>{requestAnimationFrame(c),n.render(e,t)};c();