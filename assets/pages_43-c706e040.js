import"./main-ef7dcc1b.js";import{S as m,b as l,H as c,u as p,W as f}from"./d-three.module-26890fb1.js";import{O as h}from"./d-OrbitControls-34f74cf0.js";import{O as w}from"./d-OBJLoader-1b95c397.js";const b="/learn-three/assets/d-vespa-1e148ae9.obj",{innerWidth:t,innerHeight:a}=window,o=new m,n=new l(45,t/a,.1,1e3);n.position.set(0,0,20);n.lookAt(o.position);const i=new c(6710886,16777215,3);i.position.set(100,100,100);o.add(i);const H=new p({wireframe:!1}),u=new w;u.load(b,r=>{r.children.forEach(d=>{d.material=H}),r.position.y=-5,o.add(r)});const e=new f({antialias:!0});e.setSize(t,a);e.shadowMap.enabled=!0;document.body.appendChild(e.domElement);new h(n,e.domElement);const s=()=>{requestAnimationFrame(s),e.render(o,n)};s();