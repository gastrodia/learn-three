import"./main-ef7dcc1b.js";/* empty css                     */import{c as D}from"./d-createShader-b7bbb4a8.js";import{a as U,l as S}from"./d-dimension-5b273a01.js";import{c as L}from"./d-getMatrix-3ac7aa35.js";const P=`attribute vec4 onePosition;
attribute vec4 oneColor;
varying vec4 twoColor;

uniform mat4 viewMatrix;
void main() {
    twoColor = oneColor;
    gl_Position = viewMatrix * onePosition;
}`,h=`precision lowp float;
varying vec4 twoColor;
void main() {
    gl_FragColor = twoColor;
}`,t=document.createElement("canvas");document.body.append(t);const C=500,p=500;t.width=C;t.height=p;t.style.backgroundColor="skyblue";const o=t.getContext("webgl"),w=D(o,P,h),x=o.getAttribLocation(w,"onePosition"),B=o.getAttribLocation(w,"oneColor"),I=o.getUniformLocation(w,"viewMatrix"),l=[-1,-1,1],A=[-1,1,1],f=[1,1,1],E=[1,-1,1],R=[-1,-1,-1],v=[-1,1,-1],u=[1,1,-1],d=[1,-1,-1],Y=new Float32Array([...A,...l,...E,...f,...f,...E,...d,...u,...E,...l,...R,...d,...u,...v,...A,...f,...R,...v,...u,...d,...v,...R,...l,...A]),e=[1,0,0],n=[0,1,0],r=[0,0,1],c=[1,0,1],i=[0,.5,0],s=[0,.5,.5],H=new Float32Array([...e,...e,...e,...e,...n,...n,...n,...n,...r,...r,...r,...r,...c,...c,...c,...c,...i,...i,...i,...i,...s,...s,...s,...s]),T=new Uint8Array([1,0,3,1,3,2,5,4,7,5,7,6,9,8,11,9,11,10,13,12,15,13,15,14,17,16,19,17,19,18,21,20,23,21,23,22]);console.log(T.length);const N=o.createBuffer();o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,N);o.bufferData(o.ELEMENT_ARRAY_BUFFER,T,o.STATIC_DRAW);const y=3,k=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,k);o.bufferData(o.ARRAY_BUFFER,Y,o.STATIC_DRAW);o.vertexAttribPointer(x,y,o.FLOAT,!1,0,0);o.enableVertexAttribArray(x);const G=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,G);o.bufferData(o.ARRAY_BUFFER,H,o.STATIC_DRAW);o.vertexAttribPointer(B,y,o.FLOAT,!1,0,0);o.enableVertexAttribArray(B);o.enable(o.DEPTH_TEST);const O=U(45,C/p,.1,100);let[b,g,m]=[3,3,3];const M=()=>{const a=S(b,g,m,0,0,0,0,1,0);o.uniformMatrix4fv(I,!1,L(O,a)),o.drawElements(o.TRIANGLES,T.length,o.UNSIGNED_BYTE,0)};M();const W={ArrowUp:()=>{g+=.1},ArrowDown:()=>{g-=.1},ArrowLeft:()=>{b-=.1},ArrowRight:()=>{b+=.1},Equal:()=>{m+=.1},Minus:()=>{m-=.1}};document.addEventListener("keydown",a=>{const{code:_}=a;console.log(_);const F=W[_];F&&(F(),M())});
