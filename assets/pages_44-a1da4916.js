import"./d-__uno-e58b1170.js";import{S as h,b as f,f as x,d as y,M as a,a as r,B as b,g as M,W as S}from"./d-three.module-b52a2031.js";import{O as u}from"./d-OrbitControls-bc3a0338.js";const{innerWidth:i,innerHeight:c}=window,e=new h,t=new f(45,i/c,.1,1e3);t.position.set(0,16,26);t.lookAt(e.position);const d=new x(16777215,2);d.position.set(-10,10,10);d.castShadow=!0;e.add(d);const G=new y(20,10),g=new a({color:6710886}),l=new r(G,g);l.rotation.x=-Math.PI*.5;l.receiveShadow=!0;e.add(l);const E=new b(4,4,4),L=new a({color:4095}),n=new r(E,L);n.castShadow=!0;n.position.y=2;n.position.x=6;e.add(n);const C=new M(2),H=new a({color:16773120}),s=new r(C,H);s.castShadow=!0;s.position.y=2;s.position.x=-6;e.add(s);const o=new S({antialias:!0});o.setSize(i,c);o.shadowMap.enabled=!0;document.body.appendChild(o.domElement);const W=m=>{m.clientX/i*2-1;const w=m.clientY/c*-2+1;console.log(w)};o.domElement.addEventListener("click",W);new u(t,o.domElement);const p=()=>{requestAnimationFrame(p),o.render(e,t)};p();
