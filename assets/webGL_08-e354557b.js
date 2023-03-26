import"./d-__uno-b823e30e.js";import{c as A}from"./d-createShader-fc86cf77.js";const e=document.createElement("canvas"),{innerWidth:l,innerHeight:b}=window;document.body.append(e);e.width=l;e.height=b;e.style.backgroundColor="powderblue";const t=e.getContext("webgl"),E=`
        attribute vec4 onePosition;
        attribute float oneSize;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = oneSize;
        }
    `,g=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,i=A(t,E,g),r=t.getAttribLocation(i,"onePosition"),a=t.getAttribLocation(i,"oneSize"),n=new Float32Array([.5,.5,10,-.5,.5,20,-.5,-.5,30,.5,-.5,40]),S=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,S);t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW);const s=2,o=n.BYTES_PER_ELEMENT;console.log(o);t.vertexAttribPointer(r,s,t.FLOAT,!1,o*3,0);t.enableVertexAttribArray(r);const c=1;t.vertexAttribPointer(a,c,t.FLOAT,!1,o*3,o*2);t.enableVertexAttribArray(a);t.drawArrays(t.POINTS,0,n.length/(s+c));
