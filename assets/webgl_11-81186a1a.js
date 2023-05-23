import"./main-ef7dcc1b.js";/* empty css                     */import{c as s}from"./d-createShader-b7bbb4a8.js";import{A as l}from"./d-animationController-60d9be32.js";const o=document.createElement("canvas"),{innerWidth:A,innerHeight:b}=window;document.body.append(o);o.width=A;o.height=b;o.style.backgroundColor="powderblue";const t=o.getContext("webgl"),d=`
        attribute vec4 onePosition;
        attribute float oneScale;
        void main() {
            gl_Position = vec4(onePosition.x * oneScale, onePosition.y * oneScale, onePosition.z, 1.0);
        }
    `,f=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,i=s(t,d,f),r=t.getAttribLocation(i,"onePosition"),R=t.getAttribLocation(i,"oneScale"),a=new Float32Array([0,.1,-.1,-.1,.1,-.1]),g=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,g);t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const c=2;t.vertexAttribPointer(r,c,t.FLOAT,!1,0,0);t.enableVertexAttribArray(r);const m=.01;let n=1,e=-1;new l(()=>{(e>1||e<-1)&&(n*=-1),e+=m*n,t.vertexAttrib1f(R,e),t.drawArrays(t.TRIANGLES,0,a.length/c)},60);
