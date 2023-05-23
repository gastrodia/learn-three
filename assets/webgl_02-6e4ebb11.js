import"./main-ef7dcc1b.js";/* empty css                     */import{c as t}from"./d-createShader-b7bbb4a8.js";const o=document.createElement("canvas"),{innerWidth:e,innerHeight:i}=window;o.width=e;o.height=i;const n=o.getContext("webgl"),c=`
        void main() {
            gl_Position = vec4(0.5, 0.5, 0.0, 1.0);
            gl_PointSize = 100.0;
        }
    `,r=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,a=t(n,c,r);console.log(a);n.drawArrays(n.POINTS,0,1);document.body.append(o);
