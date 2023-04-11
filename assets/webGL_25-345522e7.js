import"./d-__uno-b823e30e.js";import{c as e}from"./d-createShader-b7bbb4a8.js";const r=`attribute vec4 onePosition;
void main() {
    gl_Position = onePosition;
}`,a=`precision lowp float;

void main() {
    float x = abs(gl_FragCoord.x) / 500.0;
    float y = abs(gl_FragCoord.y) / 500.0;
    gl_FragColor = vec4(x, y, 0.0, 1.0);
}`,t=document.createElement("canvas");document.body.append(t);const i=500,s=500;t.width=i;t.height=s;const o=t.getContext("webgl"),c=r,A=a,l=e(o,c,A),n=o.getAttribLocation(l,"onePosition"),f=new Float32Array([1,1,-1,1,-1,-1,1,-1]),g=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,g);o.bufferData(o.ARRAY_BUFFER,f,o.STATIC_DRAW);const R=2;o.vertexAttribPointer(n,R,o.FLOAT,!1,0,0);o.enableVertexAttribArray(n);o.drawArrays(o.TRIANGLE_FAN,0,4);
