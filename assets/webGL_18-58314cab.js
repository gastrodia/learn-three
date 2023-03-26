import"./d-__uno-b823e30e.js";import{c}from"./d-createShader-fc86cf77.js";import{A as g}from"./d-animationController-60d9be32.js";const t=document.createElement("canvas"),{innerWidth:A,innerHeight:l}=window;document.body.append(t);t.width=A;t.height=l;t.style.backgroundColor="powderblue";const o=t.getContext("webgl"),f=`
        attribute vec4 onePosition;
        varying vec4 twoPosition;
        void main() {
            twoPosition = onePosition;
            gl_Position = onePosition;
        }
    `,m=`
        precision mediump float;
        uniform float oneHeight;
        varying vec4 twoPosition;
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, twoPosition.x > oneHeight && twoPosition.y > oneHeight ? 1.0 : 0.0);
        }
`,i=c(o,f,m),r=o.getAttribLocation(i,"onePosition"),d=o.getUniformLocation(i,"oneHeight"),s=new Float32Array([.5,.5,-.5,.5,-.5,-.5,.5,-.5]),R=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,R);o.bufferData(o.ARRAY_BUFFER,s,o.STATIC_DRAW);const a=2;o.vertexAttribPointer(r,a,o.FLOAT,!1,0,0);o.enableVertexAttribArray(r);const w=.01;let n=1,e=-.5;new g(()=>{(e>.5||e<-.5)&&(n*=-1),e+=w*n,o.uniform1f(d,e),o.drawArrays(o.TRIANGLE_FAN,0,s.length/a)},60);
