import"./__uno-a35406a8.js";import{c as n}from"./createShader-2da800f0.js";const o=document.createElement("canvas"),{innerWidth:t,innerHeight:e}=window;document.body.append(o);o.width=t;o.height=e;const i=o.getContext("webgl"),c=`
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
