import"./d-__uno-b823e30e.js";/* empty css                     */import{c as m}from"./d-createShader-b7bbb4a8.js";import{l as s}from"./d-image-3083d7b4.js";import{d as l}from"./d-dog-9508fb5d.js";import{u as i}from"./d-useTexture-52c9caa9.js";const A="/learn-three/assets/d-border-4d137829.png",t=document.createElement("canvas"),{innerWidth:g,innerHeight:b}=window;document.body.append(t);t.width=g;t.height=b;t.style.backgroundColor="powderblue";const e=t.getContext("webgl"),u=document.querySelector("#vertex-shader").textContent,f=document.querySelector("#fragment-shader").textContent,o=m(e,u,f),c=e.getAttribLocation(o,"onePosition"),d=e.getAttribLocation(o,"oneVertex"),x=e.getUniformLocation(o,"oneSampler"),E=e.getUniformLocation(o,"twoSampler"),r=new Float32Array([.5,.5,1,1,-.5,.5,0,1,-.5,-.5,0,0,.5,-.5,1,0]);console.log(r);const n=r.BYTES_PER_ELEMENT,p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p);e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW);const a=2;e.vertexAttribPointer(c,a,e.FLOAT,!1,n*4,0);e.enableVertexAttribArray(c);e.vertexAttribPointer(d,a,e.FLOAT,!1,n*4,n*2);e.enableVertexAttribArray(d);const[T,R]=await Promise.all([s(A),s(l)]),[C,S]=i(e,T,0),[H,h]=i(e,R,1);e.uniform1i(x,S);e.uniform1i(E,h);e.drawArrays(e.TRIANGLE_FAN,0,r.length/(a*2));
