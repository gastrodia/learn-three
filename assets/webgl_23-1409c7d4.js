import"./main-ef7dcc1b.js";import{c as p}from"./d-createShader-b7bbb4a8.js";import{l as h}from"./d-image-3083d7b4.js";import{u as v}from"./d-useTexture-52c9caa9.js";const y="/learn-three/assets/d-ikun-a25f5975.jpg",S=n=>{const e=n.getBoundingClientRect(),{left:c,top:f,width:g,height:l}=e;return[m=>{const b=m.clientX-c,E=m.clientY-f,x=b/g*2-1,R=(l-E)/l*2-1;return[x,R]},e]},o=document.createElement("canvas");document.body.append(o);o.width=500;o.height=500;const t=o.getContext("webgl"),F=document.querySelector("#vertex-shader").textContent,T=document.querySelector("#fragment-shader").textContent,r=p(t,F,T),A=t.getAttribLocation(r,"onePosition"),u=t.getAttribLocation(r,"oneVertex"),_=t.getUniformLocation(r,"oneSampler"),w=t.getUniformLocation(r,"lookAt"),s=new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,1,-1,1,0]);console.log(s);const a=s.BYTES_PER_ELEMENT,L=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,L);t.bufferData(t.ARRAY_BUFFER,s,t.STATIC_DRAW);const i=2;t.vertexAttribPointer(A,i,t.FLOAT,!1,a*4,0);t.enableVertexAttribArray(A);t.vertexAttribPointer(u,i,t.FLOAT,!1,a*4,a*2);t.enableVertexAttribArray(u);const C=await h(y),[H,B]=v(t,C);t.uniform1i(_,B);const[U]=S(o),d=(n=0,e=0)=>{t.uniform2fv(w,new Float32Array([n,e])),t.drawArrays(t.TRIANGLE_FAN,0,s.length/(i*2))};d();o.addEventListener("mousemove",n=>{const[e,c]=U(n);d(e,c)});
