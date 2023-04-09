import"./d-__uno-b823e30e.js";/* empty css                     */import{c}from"./d-createShader-b7bbb4a8.js";import{A as l}from"./d-animationController-60d9be32.js";import{g as m}from"./d-getMatrix-349e889e.js";const e=document.createElement("canvas"),{innerWidth:A,innerHeight:f}=window;document.body.append(e);e.width=A;e.height=f;e.style.backgroundColor="powderblue";const t=e.getContext("webgl"),d=`
        attribute vec4 onePosition;
        uniform mat4 oneMat;
        void main() {
            gl_Position = oneMat * onePosition;
        }
    `,g=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,r=c(t,d,g),i=t.getAttribLocation(r,"onePosition"),R=t.getUniformLocation(r,"oneMat"),a=new Float32Array([0,.1,-.1,-.1,.1,-.1]),b=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,b);t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const s=2;t.vertexAttribPointer(i,s,t.FLOAT,!1,0,0);t.enableVertexAttribArray(i);const E=.01;let n=1,o=0;new l(()=>{(o>1||o<-1)&&(n*=-1),o+=E*n,t.uniformMatrix4fv(R,!1,m(o,o)),t.drawArrays(t.TRIANGLES,0,a.length/s)},60);
