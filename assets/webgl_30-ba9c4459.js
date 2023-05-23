import"./main-ef7dcc1b.js";/* empty css                     */import{c as d}from"./d-createShader-b7bbb4a8.js";import{a as R,l as m}from"./d-dimension-5b273a01.js";import{c as u}from"./d-getMatrix-3ac7aa35.js";const w=`attribute vec4 onePosition;
attribute vec4 oneColor;
varying vec4 twoColor;

uniform mat4 viewMatrix;
void main() {
    twoColor = oneColor;
    gl_Position = viewMatrix * onePosition;
}`,g=`precision lowp float;
varying vec4 twoColor;
void main() {
    gl_FragColor = twoColor;
}`,t=document.createElement("canvas");document.body.append(t);const l=500,A=500;t.width=l;t.height=A;t.style.backgroundColor="skyblue";const o=t.getContext("webgl"),a=d(o,w,g),f=o.getAttribLocation(a,"onePosition");o.getAttribLocation(a,"oneColor");const b=o.getUniformLocation(a,"viewMatrix"),p=[-1,-1,1],T=[-1,1,1],_=[1,1,1],C=[1,-1,1],x=[-1,-1,-1],M=[-1,1,-1],F=[1,1,-1],y=[1,-1,-1],B=new Float32Array([...p,...T,..._,...C,...x,...M,...F,...y]),D=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,D);o.bufferData(o.ARRAY_BUFFER,B,o.STATIC_DRAW);const v=new Uint8Array([1,0,3,1,3,2,2,3,7,2,7,6,3,0,4,3,4,7,6,5,1,6,1,2,4,5,6,4,6,7,5,4,0,5,0,1]),S=o.createBuffer();o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,S);o.bufferData(o.ELEMENT_ARRAY_BUFFER,v,o.STATIC_DRAW);const U=3;o.vertexAttribPointer(f,U,o.FLOAT,!1,0,0);o.enableVertexAttribArray(f);o.enable(o.DEPTH_TEST);const L=R(45,l/A,.1,100);let[e,r,i]=[3,3,3];const E=()=>{const n=m(e,r,i,0,0,0,0,1,0);o.uniformMatrix4fv(b,!1,u(L,n)),o.drawElements(o.TRIANGLES,v.length,o.UNSIGNED_BYTE,0)};E();const P={ArrowUp:()=>{r+=.1},ArrowDown:()=>{r-=.1},ArrowLeft:()=>{e-=.1},ArrowRight:()=>{e+=.1},Equal:()=>{i+=.1},Minus:()=>{i-=.1}};document.addEventListener("keydown",n=>{const{code:c}=n;console.log(c);const s=P[c];s&&(s(),E())});
