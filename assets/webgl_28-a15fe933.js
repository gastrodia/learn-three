import"./d-__uno-b823e30e.js";/* empty css                     */import{c as d}from"./d-createShader-b7bbb4a8.js";import{a as w,l as g}from"./d-dimension-5b273a01.js";import{c as p}from"./d-getMatrix-3ac7aa35.js";const R=`attribute vec4 onePosition;
attribute vec4 oneColor;
varying vec4 twoColor;

uniform mat4 viewMatrix;
void main() {
    twoColor = oneColor;
    gl_Position = viewMatrix * onePosition;
}`,C=`precision lowp float;
varying vec4 twoColor;
void main() {
    gl_FragColor = twoColor;
}`,t=document.createElement("canvas");document.body.append(t);const A=500,f=500;t.width=A;t.height=f;t.style.backgroundColor="skyblue";const o=t.getContext("webgl"),a=d(o,R,C),m=o.getAttribLocation(a,"onePosition"),v=o.getAttribLocation(a,"oneColor"),u=o.getUniformLocation(a,"viewMatrix"),s=new Float32Array([.75,1,-2,1,1,0,.25,-1,-2,1,1,0,1,-1,-2,1,1,0,.75,1,-1.5,0,1,0,.25,-1,-1.5,0,1,0,1,-1,-1.5,0,1,0,.75,1,-1,1,0,1,.25,-1,-1,1,0,1,1,-1,-1,1,0,1,-.75,1,-2,1,0,0,-.25,-1,-2,1,0,0,-1,-1,-2,1,0,0,-.75,1,-1.5,0,1,0,-.25,-1,-1.5,0,1,0,-1,-1,-1.5,0,1,0,-.75,1,-1,0,1,1,-.25,-1,-1,0,1,1,-1,-1,-1,1,0,0]),r=s.BYTES_PER_ELEMENT,x=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,x);o.bufferData(o.ARRAY_BUFFER,s,o.STATIC_DRAW);const c=3;o.vertexAttribPointer(m,c,o.FLOAT,!1,r*6,0);o.enableVertexAttribArray(m);o.vertexAttribPointer(v,c,o.FLOAT,!1,r*6,r*3);o.enableVertexAttribArray(v);o.enable(o.DEPTH_TEST);const T=w(150,A/f,.1,100);let[n,i,y]=[0,0,.2];const E=()=>{const e=g(n,i,y,0,0,0,0,1,0);o.uniformMatrix4fv(u,!1,p(T,e)),o.drawArrays(o.TRIANGLES,0,s.length/(c*2))};E();const _={ArrowUp:()=>{i+=.01},ArrowDown:()=>{i-=.01},ArrowLeft:()=>{n-=.01},ArrowRight:()=>{n+=.01}};document.addEventListener("keydown",e=>{const{code:b}=e,l=_[b];l&&(l(),E())});
