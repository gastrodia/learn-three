import"./d-__uno-b823e30e.js";import{c as f}from"./d-createShader-fc86cf77.js";import{A as m}from"./d-animationController-60d9be32.js";import{c as r,a as d,g as R,b}from"./d-getMatrix-349e889e.js";const o=document.createElement("canvas"),{innerWidth:E,innerHeight:u}=window;document.body.append(o);o.width=E;o.height=u;o.style.backgroundColor="powderblue";const t=o.getContext("webgl"),p=`
        attribute vec4 onePosition;
        uniform mat4 oneMat;
        void main() {
            gl_Position = oneMat * onePosition;
        }
    `,M=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,s=f(t,p,M),c=t.getAttribLocation(s,"onePosition"),v=t.getUniformLocation(s,"oneMat"),l=new Float32Array([0,.1,-.1,-.1,.1,-.1]),x=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,x);t.bufferData(t.ARRAY_BUFFER,l,t.STATIC_DRAW);const g=2;t.vertexAttribPointer(c,g,t.FLOAT,!1,0,0);t.enableVertexAttribArray(c);const a=.01;let n=1,e=0,i=0;new m(()=>{(e>1||e<-1)&&(n*=-1),e+=a*n,i+=a*n;const A=r(r(d(e,e),R(e)),b(i));t.uniformMatrix4fv(v,!1,A),t.drawArrays(t.TRIANGLES,0,l.length/g)},60);
