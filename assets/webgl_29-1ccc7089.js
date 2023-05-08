import"./d-__uno-b823e30e.js";/* empty css                     */import{c as y}from"./d-createShader-b7bbb4a8.js";import{a as M,l as _}from"./d-dimension-5b273a01.js";import{c as P}from"./d-getMatrix-3ac7aa35.js";const F=`attribute vec4 onePosition;
attribute vec4 oneColor;
varying vec4 twoColor;

uniform mat4 viewMatrix;
void main() {
    twoColor = oneColor;
    gl_Position = viewMatrix * onePosition;
}`,L=`precision lowp float;
varying vec4 twoColor;
void main() {
    gl_FragColor = twoColor;
}`,i=document.createElement("canvas");document.body.append(i);const u=500,R=500;i.width=u;i.height=R;i.style.backgroundColor="skyblue";const o=i.getContext("webgl"),b=y(o,F,L),C=o.getAttribLocation(b,"onePosition"),x=o.getAttribLocation(b,"oneColor"),S=o.getUniformLocation(b,"viewMatrix"),a=[-1,-1,1],t=[-1,1,1],s=[1,1,1],e=[1,-1,1],n=[-1,-1,-1],c=[-1,1,-1],r=[1,1,-1],l=[1,-1,-1],d=new Float32Array([...t,1,1,0,...a,1,1,0,...e,1,1,0,...t,0,1,0,...e,0,1,0,...s,0,1,0,...s,1,0,1,...e,1,0,1,...l,1,0,1,...s,1,0,1,...l,1,0,0,...r,1,0,0,...e,0,1,0,...a,0,1,0,...n,0,1,1,...e,0,1,1,...n,0,1,1,...l,1,0,0,...r,1,1,1,...c,1,1,0,...t,1,1,0,...r,0,1,0,...t,1,1,0,...s,1,1,0,...n,1,0,1,...c,1,1,1,...r,1,0,1,...n,1,0,0,...r,1,0,0,...l,1,0,0,...c,1,1,0,...n,0,1,0,...a,0,1,0,...c,0,1,1,...a,0,1,1,...t,1,0,1]),A=d.BYTES_PER_ELEMENT,h=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,h);o.bufferData(o.ARRAY_BUFFER,d,o.STATIC_DRAW);const g=3;o.vertexAttribPointer(C,g,o.FLOAT,!1,A*6,0);o.enableVertexAttribArray(C);o.vertexAttribPointer(x,g,o.FLOAT,!1,A*6,A*3);o.enableVertexAttribArray(x);o.enable(o.DEPTH_TEST);const D=M(45,u/R,.1,100);let[f,E,m]=[3,3,3];const T=()=>{const v=_(f,E,m,0,0,0,0,1,0);o.uniformMatrix4fv(S,!1,P(D,v)),o.drawArrays(o.TRIANGLES,0,d.length/(g*2))};T();const H={ArrowUp:()=>{E+=.1},ArrowDown:()=>{E-=.1},ArrowLeft:()=>{f-=.1},ArrowRight:()=>{f+=.1},Equal:()=>{m+=.1},Minus:()=>{m-=.1}};document.addEventListener("keydown",v=>{const{code:w}=v;console.log(w);const p=H[w];p&&(p(),T())});
