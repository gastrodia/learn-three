import"./d-__uno-b823e30e.js";import{c}from"./d-createShader-fc86cf77.js";import{A as f}from"./d-animationController-60d9be32.js";const t=document.createElement("canvas"),{innerWidth:A,innerHeight:l}=window;document.body.append(t);t.width=A;t.height=l;t.style.backgroundColor="powderblue";const o=t.getContext("webgl"),g=`
        attribute vec4 onePosition;
        varying vec4 twoPosition;
        void main() {
            twoPosition = onePosition;
            gl_Position = onePosition;
        }
    `,m=`
        precision mediump float;
        uniform float oneHeight;
        varying vec4 twoPosition;
        uniform float oneArray[5];
        void main() {
            for(int i = 0; i < 4; i++) {
                if(twoPosition.y > oneArray[i + 1] && twoPosition.y < oneArray[i]) {
                    if(twoPosition.y > oneHeight - float(i) * 0.25) {
                         gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
                    }
                }
            }
        }
`,n=c(o,g,m),r=o.getAttribLocation(n,"onePosition"),d=o.getUniformLocation(n,"oneHeight"),y=o.getUniformLocation(n,"oneArray"),a=new Float32Array([.5,.5,-.5,.5,-.5,-.5,.5,-.5]);o.uniform1fv(y,[.5,.25,0,-.25,-.5]);const u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u);o.bufferData(o.ARRAY_BUFFER,a,o.STATIC_DRAW);const s=2;o.vertexAttribPointer(r,s,o.FLOAT,!1,0,0);o.enableVertexAttribArray(r);const w=.01;let e=1,i=-.5;new f(()=>{(i>.5||i<-.5)&&(e*=-1),i+=w*e,o.uniform1f(d,i),o.drawArrays(o.TRIANGLE_FAN,0,a.length/s)},60);
