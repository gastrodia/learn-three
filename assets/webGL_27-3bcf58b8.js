import"./d-__uno-b823e30e.js";/* empty css                     */import{c as f}from"./d-createShader-b7bbb4a8.js";import{g as l,a as A}from"./d-dimension-fd0fac23.js";import{c as g}from"./d-getMatrix-349e889e.js";const d=`attribute vec4 onePosition;
uniform mat4 viewMatrix;
void main() {
    gl_Position = viewMatrix * onePosition;
}`,R=`precision lowp float;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`,o=document.createElement("canvas");document.body.append(o);const b=500,p=500;o.width=b;o.height=p;o.style.backgroundColor="skyblue";const t=o.getContext("webgl"),r=f(t,d,R),i=t.getAttribLocation(r,"onePosition"),u=t.getUniformLocation(r,"viewMatrix"),a=new Float32Array([0,.25,-.25,-.25,.25,-.25]),v=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,v);t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const s=2;t.vertexAttribPointer(i,s,t.FLOAT,!1,0,0);t.enableVertexAttribArray(i);let[e,n]=[.1,1];const x=.01,E=A(1,1,-1,-1,0,10),c=()=>{(e>=1||e<=0)&&(n*=-1),e+=x*n;const m=l(0,e,.1,0,0,0,0,.1,0);t.uniformMatrix4fv(u,!1,g(m,E)),t.drawArrays(t.TRIANGLE_FAN,0,a.length/s),requestAnimationFrame(c)};c();
