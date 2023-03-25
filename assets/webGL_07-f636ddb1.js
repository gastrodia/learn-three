import"./d-__uno-b823e30e.js";import{c as i}from"./d-createShader-fc86cf77.js";const t=document.createElement("canvas"),{innerWidth:r,innerHeight:a}=window;document.body.append(t);t.width=r;t.height=a;t.style.backgroundColor="powderblue";const o=t.getContext("webgl"),s=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 100.0;
        }
    `,c=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,l=i(o,s,c),n=o.getAttribLocation(l,"onePosition"),e=new Float32Array([.5,.5,-.5,.5,-.5,-.5,.5,-.5]),A=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,A);o.bufferData(o.ARRAY_BUFFER,e,o.STATIC_DRAW);const d=2;o.vertexAttribPointer(n,d,o.FLOAT,!1,0,0);o.enableVertexAttribArray(n);console.log(e);o.drawArrays(o.POINTS,0,e.length/2);
