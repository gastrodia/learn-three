import"./d-__uno-b823e30e.js";/* empty css                     */import{c}from"./d-createShader-b7bbb4a8.js";import{A as l}from"./d-animationController-60d9be32.js";const o=document.createElement("canvas"),{innerWidth:A,innerHeight:b}=window;document.body.append(o);o.width=A;o.height=b;o.style.backgroundColor="powderblue";const t=o.getContext("webgl"),d=`
        attribute vec4 onePosition;
        attribute float oneTranslate;
        void main() {
            gl_Position = vec4(onePosition.x + oneTranslate, onePosition.y, onePosition.z, 1.0);
        }
    `,f=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,r=c(t,d,f),i=t.getAttribLocation(r,"onePosition"),R=t.getAttribLocation(r,"oneTranslate"),a=new Float32Array([0,.1,-.1,-.1,.1,-.1]),g=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,g);t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const s=2;t.vertexAttribPointer(i,s,t.FLOAT,!1,0,0);t.enableVertexAttribArray(i);const m=.01;let n=1,e=-1;new l(()=>{(e>1||e<-1)&&(n*=-1),e+=m*n,t.vertexAttrib1f(R,e),t.drawArrays(t.TRIANGLES,0,a.length/s)},60);
