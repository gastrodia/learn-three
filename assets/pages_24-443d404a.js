import"./main-ef7dcc1b.js";import{S as f,b as w,A as p,f as g,d as u,M as b,a as d,g as y,z as C,C as x,W as M}from"./d-three.module-93d44c10.js";import{O as S}from"./d-OrbitControls-de4c2979.js";import{i as G}from"./d-dat.gui.module-dd30c9f2.js";const o=new G.GUI,{innerWidth:c,innerHeight:l}=window,n=new f,a=new w(45,c/l,.1,1e3);a.position.set(28,30,28);a.lookAt(n.position);const I=new p(6710886);n.add(I);const t=new g(16777215);t.castShadow=!0;t.position.set(-50,80,50);n.add(t);const L=new u(60,60),v=new b({color:10066329}),r=new d(L,v);r.rotation.x=-.5*Math.PI;r.receiveShadow=!0;n.add(r);const H=new y(8,50,50),e=new C({color:7829503,clearcoat:0,clearcoatRoughness:0,metalness:0,ior:1.5,reflectivity:.5,sheen:0,sheenRoughness:0,sheenColor:16777215,specularIntensity:0,transmission:0}),i=new d(H,e);i.castShadow=!0;i.position.y=8;n.add(i);const R={sheenColor:e.sheenColor.getHex()};console.log(e);o.add(t,"visible");o.add(t,"intensity",0,2);o.add(e,"clearcoat",0,1);o.add(e,"clearcoatRoughness",0,1);o.add(e,"metalness",0,1);o.add(e,"ior",1,2.333);o.add(e,"reflectivity",0,1);o.add(e,"sheen",0,1);o.add(e,"sheenRoughness",0,1);o.addColor(R,"sheenColor").onChange(m=>{e.sheenColor=new x(m)});o.add(e,"specularIntensity",0,1);const s=new M({antialias:!0});s.setSize(c,l);s.shadowMap.enabled=!0;document.body.appendChild(s.domElement);new S(a,s.domElement);const h=()=>{requestAnimationFrame(h),s.render(n,a)};h();
