import"./__uno-9d578755.js";import{S as l,b as f,H as u,bd as w,W as x,bc as h}from"./three.module-b52a2031.js";import{O as g}from"./OrbitControls-2ca992f4.js";import{G as b,m as L}from"./bee-21131995.js";import{G as C}from"./dat.gui.module-dd30c9f2.js";import"./BufferGeometryUtils-ee8400c1.js";const G=new C,{innerWidth:s,innerHeight:r}=window,o=new l,a=new f(45,s/r,.1,1e3);a.position.set(20,20,10);a.lookAt(o.position);const c=new u(6710886,16777215,3);c.position.set(100,100,100);o.add(c);const H=new h,S=new b,n={animation:null,mixer:null,action:null,clip:null},m={index:0};S.load(L,e=>{o.add(e.scene),d(e,m.index),A(e)});const d=(e,t)=>{n.mixer=new w(e.scene),n.animation=e.animations[t],n.action=n.mixer.clipAction(n.animation).play(),n.clip=n.action.getClip()},A=e=>{G.add(m,"index",e.animations.map((t,p)=>p)).onChange(t=>{d(e,t)})},i=new x({antialias:!0});i.setSize(s,r);i.shadowMap.enabled=!0;document.body.appendChild(i.domElement);new g(a,i.domElement);const W=()=>{n.mixer&&n.action&&n.mixer.update(H.getDelta()),i.render(o,a)};i.setAnimationLoop(W);
