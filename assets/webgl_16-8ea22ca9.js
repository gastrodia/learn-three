import"./d-__uno-b823e30e.js";/* empty css                     */import{c as A}from"./d-createShader-b7bbb4a8.js";import{A as f}from"./d-animationController-60d9be32.js";import{c as r,a as d,g as R,b}from"./d-getMatrix-3ac7aa35.js";const e=document.createElement("canvas"),{innerWidth:E,innerHeight:p}=window;document.body.append(e);e.width=E;e.height=p;e.style.backgroundColor="powderblue";const t=e.getContext("webgl"),u=`
        attribute vec4 onePosition;
        uniform mat4 oneMat;
        void main() {
            gl_Position = oneMat * onePosition;
        }
    `,M=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,s=A(t,u,M),c=t.getAttribLocation(s,"onePosition"),v=t.getUniformLocation(s,"oneMat"),l=new Float32Array([0,.1,-.1,-.1,.1,-.1]),x=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,x);t.bufferData(t.ARRAY_BUFFER,l,t.STATIC_DRAW);const g=2;t.vertexAttribPointer(c,g,t.FLOAT,!1,0,0);t.enableVertexAttribArray(c);const a=.01;let n=1,o=0,i=0;new f(()=>{(o>1||o<-1)&&(n*=-1),o+=a*n,i+=a*n;const m=r(r(d(o,o),R(o)),b(i));t.uniformMatrix4fv(v,!1,m),t.drawArrays(t.TRIANGLES,0,l.length/g)},60);
