import"./d-__uno-b823e30e.js";import{c}from"./d-createShader-fc86cf77.js";const n=document.createElement("canvas"),{innerWidth:s,innerHeight:a}=window;document.body.append(n);n.width=s;n.height=a;const t=n.getContext("webgl"),d=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 100.0;
        }
    `,g=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,m=c(t,d,g),l=t.getAttribLocation(m,"onePosition"),e=100/1e3/2,E=.01;let o=e,i=1;const r=()=>{(o>1-e||o<e)&&(i*=-1),o+=E*i,t.vertexAttrib1f(l,o),t.drawArrays(t.POINTS,0,1),requestAnimationFrame(r)};r();
