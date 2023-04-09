import"./d-__uno-b823e30e.js";/* empty css                     */import{c as r}from"./d-createShader-b7bbb4a8.js";const o=document.createElement("canvas"),{innerWidth:a,innerHeight:s}=window;document.body.append(o);o.width=a;o.height=s;o.style.backgroundColor="powderblue";const t=o.getContext("webgl"),c=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 100.0;
        }
    `,A=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,R=r(t,c,A),e=t.getAttribLocation(R,"onePosition"),n=new Float32Array([.5,.5,-.5,.5,-.5,-.5,.2,-.2]),d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d);t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW);const i=2;t.vertexAttribPointer(e,i,t.FLOAT,!1,0,0);t.enableVertexAttribArray(e);t.drawArrays(t.TRIANGLE_STRIP,0,n.length/i);
