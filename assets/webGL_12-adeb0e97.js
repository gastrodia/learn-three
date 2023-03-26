import"./d-__uno-b823e30e.js";import{c as a}from"./d-createShader-fc86cf77.js";import{A as c}from"./d-animationController-60d9be32.js";const t=document.createElement("canvas"),{innerWidth:l,innerHeight:A}=window;document.body.append(t);t.width=l;t.height=A;t.style.backgroundColor="powderblue";const o=t.getContext("webgl"),R=`
        attribute vec4 onePosition;
        attribute float oneRotate;
        void main() {
            gl_Position.x = onePosition.x * cos(oneRotate) - onePosition.y * sin(oneRotate);
            gl_Position.y = onePosition.x * sin(oneRotate) + onePosition.y * cos(oneRotate);
            gl_Position.z = onePosition.z;
            gl_Position.w = onePosition.w;
        }
    `,g=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,n=a(o,R,g),i=o.getAttribLocation(n,"onePosition"),b=o.getAttribLocation(n,"oneRotate"),r=new Float32Array([0,.1,-.1,-.1,.1,-.1]),d=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,d);o.bufferData(o.ARRAY_BUFFER,r,o.STATIC_DRAW);const s=2;o.vertexAttribPointer(i,s,o.FLOAT,!1,0,0);o.enableVertexAttribArray(i);const P=.02;let f=1,e=0;new c(()=>{e+=P*f,o.vertexAttrib1f(b,e),o.drawArrays(o.TRIANGLES,0,r.length/s)},60);
