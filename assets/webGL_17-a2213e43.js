import"./d-__uno-b823e30e.js";import{c as s}from"./d-createShader-fc86cf77.js";import{A}from"./d-animationController-60d9be32.js";const t=document.createElement("canvas"),{innerWidth:l,innerHeight:f}=window;document.body.append(t);t.width=l;t.height=f;t.style.backgroundColor="powderblue";const o=t.getContext("webgl"),m=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
        }
    `,d=`
        precision mediump float;
        uniform float oneOpacity;
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, oneOpacity);
        }
`,i=s(o,m,d),r=o.getAttribLocation(i,"onePosition"),p=o.getUniformLocation(i,"oneOpacity"),a=new Float32Array([.5,.5,-.5,.5,-.5,-.5,.5,-.5]),R=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,R);o.bufferData(o.ARRAY_BUFFER,a,o.STATIC_DRAW);const c=2;o.vertexAttribPointer(r,c,o.FLOAT,!1,0,0);o.enableVertexAttribArray(r);const g=.01;let n=1,e=0;new A(()=>{(e>1||e<0)&&(n*=-1),e+=g*n,o.uniform1f(p,e),o.drawArrays(o.TRIANGLE_FAN,0,a.length/c)},60);
