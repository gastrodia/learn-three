import"../d-__uno-a35406a8.js";import{S as u,b,c as y,d as M,M as h,a as w,e as x,B as C,g as S,s as G,t as H,p as z,W as L}from"../d-three.module-b52a2031.js";import{c as v}from"../d-SceneUtils-08d9a5b1.js";import{O as B}from"../d-OrbitControls-bc3a0338.js";import{i as I}from"../d-dat.gui.module-dd30c9f2.js";const{innerWidth:p,innerHeight:l}=window,n=new I.GUI,t=new u,c=new b(45,p/l,.1,1e3);c.position.set(-60,60,40);c.lookAt(t.position);const O=new y(200);t.add(O);const W=new M(80,40,120,120),A=new h({color:16777215}),r=new w(W,A);r.name="plane";r.receiveShadow=!0;r.rotation.x=-(Math.PI/2);t.add(r);const D=new x({color:0,wireframe:!0}),E=new C(8,20,8),P=[new h({color:Math.random()*16777215}),D],s=v(E,P);s.name="cube";s.traverse(a=>a.castShadow=!0);s.position.y=10;s.position.x=-16;t.add(s);const j=new S(4,20,20),T=new h({color:Math.random()*16777215}),i=new w(j,T);i.name="sphere";i.traverse(a=>a.castShadow=!0);i.position.y=4;i.position.x=16;t.add(i);const e=new G(16777215);e.position.set(20,20,0);e.castShadow=!0;e.shadow.camera.near=1;e.shadow.camera.far=80;e.shadow.camera.left=-20;e.shadow.camera.right=20;e.shadow.camera.top=20;e.shadow.camera.bottom=-20;e.intensity=1;e.shadow.mapSize.width=p;e.shadow.mapSize.height=l;e.target=r;t.add(e);const f=new H(e);t.add(f);const m=new z(e.shadow.camera);t.add(m);const o={intensity:1,x:20,y:20,z:20,debug:!0,target:"plane"};n.add(o,"intensity",0,3).onChange(a=>e.intensity=a);n.add(o,"x",-20,20).onChange(a=>{e.position.x=a});n.add(o,"y",-20,20).onChange(a=>{e.position.y=a});n.add(o,"z",-20,20).onChange(a=>{e.position.z=a});n.add(o,"debug").onChange(a=>{a?t.add(m):t.remove(m)});n.add(o,"target",["plane","cube","sphere"]).onChange(a=>{e.target=t.getObjectByName(a)});const d=new L({antialias:!0});d.setSize(p,l);d.shadowMap.enabled=!0;document.body.appendChild(d.domElement);new B(c,d.domElement);const g=()=>{f.update(),requestAnimationFrame(g),d.render(t,c)};g();
