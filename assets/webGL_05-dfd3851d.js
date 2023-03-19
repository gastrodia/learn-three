import"./d-__uno-e58b1170.js";import{c as l}from"./d-createShader-fc86cf77.js";const t=(n,e,a=0)=>{const r=Math.min(n,e),c=Math.max(n,e)-r,g=Math.random()*c+r,m=10**(a||0);return Math.round(g*m)/m},i=document.createElement("canvas"),{innerWidth:u,innerHeight:p}=window;document.body.append(i);i.width=u;i.height=p;const o=i.getContext("webgl"),f=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 10.0;
        }
    `,h=`
        precision mediump float;
        uniform vec4 oneColor;
        void main() {
            gl_FragColor = oneColor;
        }
`,d=l(o,f,h),E=o.getAttribLocation(d,"onePosition"),C=o.getUniformLocation(d,"oneColor"),P=(n=0)=>Array.from({length:n}).map(()=>({x:t(-1,1,2),y:t(-1,1,2),r:t(0,1,2),g:t(0,1,2),b:t(0,1,2)})),b=P(100),v=()=>{for(const n of b){const{x:e,y:a,r,g:s,b:c}=n;o.vertexAttrib2f(E,e,a),o.uniform4f(C,r,s,c,1),o.drawArrays(o.POINTS,0,1)}};v();
