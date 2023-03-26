import"./d-__uno-b823e30e.js";import{c as s}from"./d-createShader-fc86cf77.js";import{A as c}from"./d-animationController-60d9be32.js";import{b as A}from"./d-getMatrix-349e889e.js";const o=document.createElement("canvas"),{innerWidth:l,innerHeight:m}=window;document.body.append(o);o.width=l;o.height=m;o.style.backgroundColor="powderblue";const t=o.getContext("webgl"),f=`
        attribute vec4 onePosition;
        uniform mat4 oneMat;
        void main() {
            gl_Position = oneMat * onePosition;
        }
    `,d=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,n=s(t,f,d),r=t.getAttribLocation(n,"onePosition"),R=t.getUniformLocation(n,"oneMat"),i=new Float32Array([0,.1,-.1,-.1,.1,-.1]),g=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,g);t.bufferData(t.ARRAY_BUFFER,i,t.STATIC_DRAW);const a=2;t.vertexAttribPointer(r,a,t.FLOAT,!1,0,0);t.enableVertexAttribArray(r);const b=.01;let E=1,e=0;new c(()=>{e+=b*E,t.uniformMatrix4fv(R,!1,A(e)),t.drawArrays(t.TRIANGLES,0,i.length/a)},60);
