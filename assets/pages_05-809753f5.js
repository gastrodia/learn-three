import"./d-__uno-b823e30e.js";import{S as u,F as b,M as c,b as g,c as M,A as x,f as S,d as y,a as m,W as v,B as C}from"./d-three.module-b52a2031.js";import{i as G}from"./d-dat.gui.module-dd30c9f2.js";import{O as H}from"./d-OrbitControls-bc3a0338.js";const{innerWidth:l,innerHeight:h}=window,s=new G.GUI,e=new u;e.fog=new b("red",.001);e.overrideMaterial=new c({color:"blue"});const d=new g(45,l/h,.1,1e3);d.position.set(-200,200,400);d.lookAt(e.position);const L=new M(250);e.add(L);const A=new x(3947580);e.add(A);const p=new S(15658734);p.position.set(-100,340,-200);p.castShadow=!0;e.add(p);const n=new y(200,200),P=new c({color:16777215}),r=new m(n,P);r.name="plane";r.rotation.x=-.5*Math.PI;r.receiveShadow=!0;e.add(r);const i=new v({antialias:!0});i.setSize(l,h);i.shadowMap.enabled=!0;document.body.appendChild(i.domElement);const o={rotationSpeed:.04,createCube(){const t=new C(20,20,20),f=new c({color:Math.random()*16777215}),a=new m(t,f);a.position.x=Math.round(Math.random()*n.parameters.width)-n.parameters.width/2,a.position.y=10,a.position.z=Math.round(Math.random()*n.parameters.height)-n.parameters.height/2,a.castShadow=!0,e.add(a)},removeCube(){const t=e.children[e.children.length-1];e.remove(t)},getPlane(){console.log(e.getObjectByName("plane"))}};s.add(o,"rotationSpeed",0,1);s.add(o,"createCube");s.add(o,"removeCube");s.add(o,"getPlane");new H(d,i.domElement);const w=()=>{e.traverse(t=>{t instanceof m&&t!==r&&(t.rotation.x+=o.rotationSpeed,t.rotation.y+=o.rotationSpeed,t.rotation.z+=o.rotationSpeed)}),requestAnimationFrame(w),i.render(e,d)};w();