import"./d-__uno-b823e30e.js";/* empty css                     */import{c as D}from"./d-createShader-b7bbb4a8.js";const P=`attribute vec4 onePosition;
uniform mat4 viewMatrix;
void main() {
    gl_Position = viewMatrix * onePosition;
}`,S=`precision lowp float;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`,u=t=>{const n=Math.sqrt(t.reduce((a,c)=>a+c**2,0)),e=t.map(a=>a/n);return e instanceof Float32Array?e:new Float32Array(e)},f=(t=[],n=[])=>{if(t.length!==n.length&&t.length!==3)throw new Error("vec1 and vec2 must have the 3 length");return new Float32Array([t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]])},g=(t=[],n=[])=>{if(t.length!==n.length&&t.length!==3)throw new Error("vec1 and vec2 must have the 3 length");return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]},h=(t=[],n=[])=>new Float32Array([t[0]-n[0],t[1]-n[1],t[2]-n[2]]),H=(t,n,e,a,c,b,p,_,M)=>{const w=new Float32Array([t,n,e]),T=new Float32Array([a,c,b]),C=new Float32Array([p,_,M]),r=u(h(T,w)),i=u(f(C,r)),l=u(f(r,i)),m=h([0,0,0],w);return new Float32Array([i[0],l[0],r[0],0,i[1],l[1],r[1],0,i[2],l[2],r[2],0,g(i,m),g(l,m),g(r,m),1])},s=document.createElement("canvas");document.body.append(s);const U=500,B=500;s.width=U;s.height=B;s.style.backgroundColor="skyblue";const o=s.getContext("webgl"),y=D(o,P,S),F=o.getAttribLocation(y,"onePosition"),I=o.getUniformLocation(y,"viewMatrix"),E=new Float32Array([0,.25,-.25,-.25,.25,-.25]),L=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,L);o.bufferData(o.ARRAY_BUFFER,E,o.STATIC_DRAW);const R=2;o.vertexAttribPointer(F,R,o.FLOAT,!1,0,0);o.enableVertexAttribArray(F);let[A,d]=[.1,1];const N=.01,x=()=>{(A>=1||A<=0)&&(d*=-1),A+=N*d;const t=H(.1,A,.1,0,0,0,0,.1,0);o.uniformMatrix4fv(I,!1,t),o.drawArrays(o.TRIANGLE_FAN,0,E.length/R),requestAnimationFrame(x)};x();
