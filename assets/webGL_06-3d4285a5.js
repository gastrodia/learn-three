import"./d-__uno-b823e30e.js";import{c as w}from"./d-createShader-fc86cf77.js";import{g as f}from"./d-random-4597f5b7.js";class v{constructor(e,t,o=!1){this.interval=1e3/t,this.then=Date.now(),this.callback=e,this.loop=this.loop.bind(this),this.requestId=null,this.paused=!1,o&&this.callback(),this.loop()}loop(){if(this.paused)return;this.clear(),this.requestId=requestAnimationFrame(this.loop);const e=Date.now(),t=e-this.then;t>this.interval&&(this.then=e-t%this.interval,this.callback())}clear(){cancelAnimationFrame(this.requestId)}pause(){this.paused=!0,this.clear()}resume(){this.paused&&(this.paused=!1,this.loop())}}const A=(s=0)=>s/1e3/2,h=document.createElement("canvas");document.body.append(h);h.width=500;h.height=500;h.style.backgroundColor="powderblue";const n=h.getContext("webgl"),E=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 20.0;
        }
    `,S=`
        precision mediump float;
        uniform vec4 oneColor;
        void main() {
            gl_FragColor = oneColor;
        }
`,x=w(n,E,S),m=n.getAttribLocation(x,"onePosition"),C=n.getUniformLocation(x,"oneColor");n.uniform4f(C,0,0,1,1);const d=A(20),p=1-d,g=d-1,P={x:0,y:0},a=[],i=d*2;let c="x",u=!1,l=i,r=null;const y=()=>({x:f(-1,1,2),y:f(-1,1,2)}),R=()=>{const[s]=a,{x:e,y:t}=s;return e>=p||e<g||t>p||t<g},M=()=>{if(!r)return!1;const[s]=a,e=Math.abs(s.x-r.x),t=Math.abs(s.y-r.y);return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))<d*4},_=()=>{const s=new v(()=>{if(R()){s.pause(),u=!1,alert(`game over: ${a.length-1}分`);return}r&&(n.vertexAttrib2f(m,r.x,r.y),n.drawArrays(n.POINTS,0,1));let e=0,t=0;a.forEach((o,b)=>{b?(o.x=e,o.y=t,e=o.x,t=o.y):(e=o.x,t=o.y,o[c]+=l),n.vertexAttrib2f(m,o.x,o.y),n.drawArrays(n.POINTS,0,1)}),M()&&(r=y(),a.push({x:e,y:t}))},8,!0)},k=()=>{u=!0,a.length=0,a.push({...P}),r=y(),_()},q={ArrowUp:()=>{c="y",l=i},ArrowRight:()=>{c="x",l=i},ArrowDown:()=>{c="y",l=i*-1},ArrowLeft:()=>{c="x",l=i*-1},Space:()=>{u||k()}};document.addEventListener("keydown",s=>{const{code:e}=s,t=q[e];t&&t()});
