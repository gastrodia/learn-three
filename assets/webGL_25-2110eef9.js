import"./d-__uno-b823e30e.js";import{c as e}from"./d-createShader-b7bbb4a8.js";const r=`attribute vec4 onePosition;
void main() {
    gl_Position = onePosition;
}`,a=`precision lowp float;

void main() {
    float x = abs(gl_FragCoord.x) / 500.0;
    float y = abs(gl_FragCoord.y) / 500.0;
    gl_FragColor = vec4(x, y, 0.0, 1.0);
}`,t=document.createElement("canvas");document.body.append(t);const i=500,s=500;t.width=i;t.height=s;const o=t.getContext("webgl"),c=e(o,r,a),n=o.getAttribLocation(c,"onePosition"),A=new Float32Array([1,1,-1,1,-1,-1,1,-1]),l=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,l);o.bufferData(o.ARRAY_BUFFER,A,o.STATIC_DRAW);const R=2;o.vertexAttribPointer(n,R,o.FLOAT,!1,0,0);o.enableVertexAttribArray(n);o.drawArrays(o.TRIANGLE_FAN,0,4);
