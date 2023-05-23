import"./main-ef7dcc1b.js";/* empty css                     */import{c as l}from"./d-createShader-b7bbb4a8.js";import{l as m}from"./d-dimension-5b273a01.js";const f=`attribute vec4 onePosition;
uniform mat4 viewMatrix;
void main() {
    gl_Position = viewMatrix * onePosition;
}`,d=`precision lowp float;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`,o=document.createElement("canvas");document.body.append(o);const R=500,b=500;o.width=R;o.height=b;o.style.backgroundColor="skyblue";const t=o.getContext("webgl"),i=l(t,f,d),r=t.getAttribLocation(i,"onePosition"),g=t.getUniformLocation(i,"viewMatrix"),a=new Float32Array([0,.25,-.25,-.25,.25,-.25]),u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u);t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const s=2;t.vertexAttribPointer(r,s,t.FLOAT,!1,0,0);t.enableVertexAttribArray(r);let[e,n]=[.1,1];const v=.01,c=()=>{(e>=1||e<=0)&&(n*=-1),e+=v*n;const A=m(.1,e,.1,0,0,0,0,.1,0);t.uniformMatrix4fv(g,!1,A),t.drawArrays(t.TRIANGLE_FAN,0,a.length/s),requestAnimationFrame(c)};c();
