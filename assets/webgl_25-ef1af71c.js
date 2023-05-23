import"./main-ef7dcc1b.js";import{c as a}from"./d-createShader-b7bbb4a8.js";const i=`attribute vec4 onePosition;
void main() {
    gl_Position = onePosition;
}`,s=`precision lowp float;

void main() {
    float x = abs(gl_FragCoord.x) / 500.0;
    float y = abs(gl_FragCoord.y) / 500.0;
    gl_FragColor = vec4(x, y, 0.0, 1.0);
}`,t=document.createElement("canvas");document.body.append(t);const c=500,A=500;t.width=c;t.height=A;const o=t.getContext("webgl"),l=a(o,i,s),n=o.getAttribLocation(l,"onePosition"),e=new Float32Array([1,1,-1,1,-1,-1,1,-1]),g=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,g);o.bufferData(o.ARRAY_BUFFER,e,o.STATIC_DRAW);const r=2;o.vertexAttribPointer(n,r,o.FLOAT,!1,0,0);o.enableVertexAttribArray(n);o.drawArrays(o.TRIANGLE_FAN,0,e.length/r);
