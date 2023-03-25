import"./d-__uno-b823e30e.js";import{c as t}from"./d-createShader-fc86cf77.js";const o=document.createElement("canvas"),{innerWidth:e,innerHeight:i}=window;o.width=e;o.height=i;const n=o.getContext("webgl"),c=`
        void main() {
            gl_Position = vec4(0.5, 0.5, 0.0, 1.0);
            gl_PointSize = 100.0;
        }
    `,a=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,r=t(n,c,a);console.log(r);n.drawArrays(n.POINTS,0,1);document.body.append(o);
