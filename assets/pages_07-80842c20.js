import"./d-__uno-e58b1170.js";import{h as u,i as G,S as T,b as v,c as S,A as x,f as C,d as M,M as l,a as g,R as z,C as L,j as H,k as I,g as A,T as E,B as O,l as P,D as j,I as F,m as W,n as k,e as B,W as D}from"./d-three.module-b52a2031.js";import{c as R}from"./d-SceneUtils-08d9a5b1.js";import{O as q}from"./d-OrbitControls-bc3a0338.js";import{F as J,f as K,T as N}from"./d-helvetiker_regular.typeface-0615f21a.js";const o=new u,e=0,t=-4;o.moveTo(e+5,t+5);o.bezierCurveTo(e+5,t+5,e+4,t,e,t);o.bezierCurveTo(e-6,t,e-6,t+7,e-6,t+7);o.bezierCurveTo(e-6,t+11,e-3,t+15.4,e+5,t+19);o.bezierCurveTo(e+12,t+15.4,e+16,t+11,e+16,t+7);o.bezierCurveTo(e+16,t+7,e+16,t,e+10,t);o.bezierCurveTo(e+7,t,e+5,t+5,e+5,t+5);const Q=new G(o),U=new J,V=new Promise((n,a)=>U.load(K,n)),X=(n,a)=>new N(n,{font:a,size:6,height:2,curveSegments:1,bevelEnabled:!0,bevelThickness:0,bevelSize:0,bevelOffset:0,bevelSegments:5}),{innerWidth:h,innerHeight:f}=window,r=new T,m=new v(45,h/f,.1,1e3);m.position.set(-50,30,20);m.lookAt(r.position);const Y=new S(200);r.add(Y);const Z=new x(5592405);r.add(Z);const c=new C(16777215,1.2,150,Math.PI/4,0,2);c.position.set(-40,30,30);c.castShadow=!0;r.add(c);const _=new M(60,40),$=new l({color:16777215}),d=new g(_,$);d.receiveShadow=!0;d.rotation.x=-(Math.PI/2);r.add(d);const ee=await V,te=X("Three.js",ee),oe=[new z(2,5,30),new L(5,30),new H(5,5,10,30),new I(5,5,32),new A(5),new E(5),new O(5,5,5),new P(5),new j(5),new F(5),new W(3,1,10,100),new k(3,1,50,10),te,Q];let w=0;oe.forEach((n,a)=>{const y=[new l({opacity:.7,color:Math.random()*16777215,transparent:!0}),new B({color:0,wireframe:!0})],s=R(n,y);s.position.x=a%5*12-24,s.position.y=4,s.position.z=-12+w*12,s.traverse(b=>b.castShadow=!0),(a+1)%5===0&&w++,r.add(s)});const i=new D({antialias:!0});i.setSize(h,f);i.shadowMap.enabled=!0;document.body.appendChild(i.domElement);new q(m,i.domElement);const p=()=>{requestAnimationFrame(p),i.render(r,m)};p();
