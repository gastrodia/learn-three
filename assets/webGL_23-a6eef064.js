import"./d-__uno-b823e30e.js";import{c as p}from"./d-createShader-b7bbb4a8.js";import{l as v}from"./d-image-3083d7b4.js";import{u as y}from"./d-useTexture-52c9caa9.js";const S="/learn-three/assets/d-ikun-a25f5975.jpg",h=n=>{const e=n.getBoundingClientRect(),{left:s,top:f,width:g,height:i}=e;return[l=>{const b=l.clientX-s,E=l.clientY-f,x=b/g*2-1,R=(i-E)/i*2-1;return[x,R]},e]},o=document.createElement("canvas");document.body.append(o);o.width=500;o.height=500;const t=o.getContext("webgl"),F=document.querySelector("#vertex-shader").textContent,T=document.querySelector("#fragment-shader").textContent,r=p(t,F,T),m=t.getAttribLocation(r,"onePosition"),A=t.getAttribLocation(r,"oneVertex"),_=t.getUniformLocation(r,"oneSampler"),w=t.getUniformLocation(r,"lookAt"),a=new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,1,-1,1,0]);console.log(a);const c=a.BYTES_PER_ELEMENT,L=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,L);t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const u=2;t.vertexAttribPointer(m,u,t.FLOAT,!1,c*4,0);t.enableVertexAttribArray(m);t.vertexAttribPointer(A,u,t.FLOAT,!1,c*4,c*2);t.enableVertexAttribArray(A);const C=await v(S),[H,B]=y(t,C);t.uniform1i(_,B);const[U]=h(o),d=(n=0,e=0)=>{t.uniform2fv(w,new Float32Array([n,e])),t.drawArrays(t.TRIANGLE_FAN,0,4)};d();o.addEventListener("mousemove",n=>{const[e,s]=U(n);d(e,s)});
