import"./__uno-9d578755.js";import{c as n}from"./createShader-b7bbb4a8.js";const o=document.createElement("canvas"),{innerWidth:t,innerHeight:e}=window;document.body.append(o);o.width=t;o.height=e;const i=o.getContext("webgl"),c=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 10.0;
        }
    `,a=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,r=n(i,c,a);console.log(r);
