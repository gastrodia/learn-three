import"./d-__uno-b823e30e.js";import{c as r}from"./d-createShader-fc86cf77.js";const t=document.createElement("canvas"),{innerWidth:a,innerHeight:s}=window;document.body.append(t);t.width=a;t.height=s;t.style.backgroundColor="powderblue";const o=t.getContext("webgl"),c=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 100.0;
        }
    `,l=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,A=r(o,c,l),n=o.getAttribLocation(A,"onePosition"),e=new Float32Array([.5,.5,-.5,.5,-.5,-.5,.5,-.5]),d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d);o.bufferData(o.ARRAY_BUFFER,e,o.STATIC_DRAW);const i=2;o.vertexAttribPointer(n,i,o.FLOAT,!1,0,0);o.enableVertexAttribArray(n);console.log(e);o.drawArrays(o.POINTS,0,e.length/i);
