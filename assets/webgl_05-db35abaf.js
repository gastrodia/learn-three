import"./main-ef7dcc1b.js";/* empty css                     */import{c as g}from"./d-createShader-b7bbb4a8.js";import{g as n}from"./d-random-4597f5b7.js";const t=document.createElement("canvas"),{innerWidth:d,innerHeight:l}=window;document.body.append(t);t.width=d;t.height=l;const o=t.getContext("webgl"),p=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 10.0;
        }
    `,f=`
        precision mediump float;
        uniform vec4 oneColor;
        void main() {
            gl_FragColor = oneColor;
        }
`,i=g(o,p,f),E=o.getAttribLocation(i,"onePosition"),b=o.getUniformLocation(i,"oneColor"),u=(e=0)=>Array.from({length:e}).map(()=>({x:n(-1,1,2),y:n(-1,1,2),r:n(0,1,2),g:n(0,1,2),b:n(0,1,2)})),C=u(100),P=()=>{for(const e of C){const{x:r,y:s,r:c,g:a,b:m}=e;o.vertexAttrib2f(E,r,s),o.uniform4f(b,c,a,m,1),o.drawArrays(o.POINTS,0,1)}};P();
