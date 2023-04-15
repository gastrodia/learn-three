import"./d-__uno-b823e30e.js";/* empty css                     */import{c as A}from"./d-createShader-b7bbb4a8.js";import{g as f}from"./d-dimension-fd0fac23.js";const l=`attribute vec4 onePosition;
uniform mat4 viewMatrix;
void main() {
    gl_Position = viewMatrix * onePosition;
}`,d=`precision lowp float;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`,o=document.createElement("canvas");document.body.append(o);const g=500,R=500;o.width=g;o.height=R;o.style.backgroundColor="skyblue";const t=o.getContext("webgl"),i=A(t,l,d),r=t.getAttribLocation(i,"onePosition"),b=t.getUniformLocation(i,"viewMatrix"),a=new Float32Array([0,.25,-.25,-.25,.25,-.25]),u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u);t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const s=2;t.vertexAttribPointer(r,s,t.FLOAT,!1,0,0);t.enableVertexAttribArray(r);let[e,n]=[.1,1];const v=.01,c=()=>{(e>=1||e<=0)&&(n*=-1),e+=v*n;const m=f(.1,e,.1,0,0,0,0,.1,0);t.uniformMatrix4fv(b,!1,m),t.drawArrays(t.TRIANGLE_FAN,0,a.length/s),requestAnimationFrame(c)};c();
