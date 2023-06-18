import"./main-ef7dcc1b.js";/* empty css                     */import{c as g}from"./d-createShader-b7bbb4a8.js";import{a as m,l as E}from"./d-dimension-5b273a01.js";import{c as d}from"./d-getMatrix-3ac7aa35.js";const w=`attribute vec4 onePosition;
attribute vec4 oneNormal;
varying vec4 twoColor;

uniform mat4 viewMatrix;
void main() {
    vec4 oneColor = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 view = viewMatrix * onePosition;

    vec4 uLightColor = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 uLightPosition = vec4(-5.0, 6.0, 10.0, 1.0);

    vec4 uAmbientColor = vec4(0.2, 0.2, 0.2, 1.0);

    vec4 uLightDirection = normalize(uLightPosition - view);

    vec4 unAmbientColor = uAmbientColor * oneColor;

    float deg = dot(uLightDirection,  oneNormal);

    vec4 unLightColor = uLightColor * oneColor * deg;


    twoColor = uAmbientColor + unLightColor;
    gl_Position = view;
}`,C=`precision lowp float;
varying vec4 twoColor;
void main() {
    gl_FragColor = twoColor;
}`,n=document.createElement("canvas");document.body.append(n);const l=500,v=500;n.width=l;n.height=v;n.style.backgroundColor="skyblue";const o=n.getContext("webgl"),c=g(o,w,C),A=o.getAttribLocation(c,"onePosition");o.getAttribLocation(c,"oneNormal");const R=o.getUniformLocation(c,"viewMatrix"),b=[-1,-1,1],L=[-1,1,1],p=[1,1,1],T=[1,-1,1],_=[-1,-1,-1],h=[-1,1,-1],x=[1,1,-1],M=[1,-1,-1],D=new Float32Array([...b,...L,...p,...T,..._,...h,...x,...M]),u=new Uint8Array([1,0,3,1,3,2,2,3,7,2,7,6,3,0,4,3,4,7,6,5,1,6,1,2,4,5,6,4,6,7,5,4,0,5,0,1]),F=3,y=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,y);o.bufferData(o.ARRAY_BUFFER,D,o.STATIC_DRAW);const B=o.createBuffer();o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,B);o.bufferData(o.ELEMENT_ARRAY_BUFFER,u,o.STATIC_DRAW);o.vertexAttribPointer(A,F,o.FLOAT,!1,0,0);o.enableVertexAttribArray(A);o.enable(o.DEPTH_TEST);const P=m(45,l/v,.1,100);let[e,r,i]=[3,3,3];const f=()=>{const t=E(e,r,i,0,0,0,0,1,0);o.uniformMatrix4fv(R,!1,d(P,t)),o.drawElements(o.TRIANGLES,u.length,o.UNSIGNED_BYTE,0)};f();const S={ArrowUp:()=>{r+=.1},ArrowDown:()=>{r-=.1},ArrowLeft:()=>{e-=.1},ArrowRight:()=>{e+=.1},Equal:()=>{i+=.1},Minus:()=>{i-=.1}};document.addEventListener("keydown",t=>{const{code:a}=t;console.log(a);const s=S[a];s&&(s(),f())});
