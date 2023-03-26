import"./d-__uno-b823e30e.js";import{c as A}from"./d-createShader-fc86cf77.js";import{A as b}from"./d-animationController-60d9be32.js";import{g}from"./d-random-4597f5b7.js";const v=(t=0)=>t/1e3/2,d=document.createElement("canvas");document.body.append(d);d.width=500;d.height=500;d.style.backgroundColor="powderblue";const r=d.getContext("webgl"),E=`
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
`,y=A(r,E,S),u=r.getAttribLocation(y,"onePosition"),C=r.getUniformLocation(y,"oneColor");r.uniform4f(C,0,0,1,1);const m=v(20),h=1-m,x=m-1,P={x:0,y:0},s=[],c=m*2;let i="x",f=!1,l=c,a=null;const p=()=>({x:g(-1,1,2),y:g(-1,1,2)}),R=()=>{const[t]=s,{x:e,y:o}=t;return e>=h||e<x||o>h||o<x},M=()=>{if(!a)return!1;const[t]=s,e=Math.abs(t.x-a.x),o=Math.abs(t.y-a.y);return Math.sqrt(Math.pow(e,2)+Math.pow(o,2))<m*4},_=()=>{const t=new b(()=>{if(R()){t.pause(),f=!1,alert(`game over: ${s.length-1}分`);return}a&&(r.vertexAttrib2f(u,a.x,a.y),r.drawArrays(r.POINTS,0,1));let e=0,o=0;s.forEach((n,w)=>{w?(n.x=e,n.y=o,e=n.x,o=n.y):(e=n.x,o=n.y,n[i]+=l),r.vertexAttrib2f(u,n.x,n.y),r.drawArrays(r.POINTS,0,1)}),M()&&(a=p(),s.push({x:e,y:o}))},8,!0)},O=()=>{f=!0,s.length=0,s.push({...P}),a=p(),_()},H={ArrowUp:()=>{i="y",l=c},ArrowRight:()=>{i="x",l=c},ArrowDown:()=>{i="y",l=c*-1},ArrowLeft:()=>{i="x",l=c*-1},Space:()=>{f||O()}};document.addEventListener("keydown",t=>{const{code:e}=t,o=H[e];o&&o()});
