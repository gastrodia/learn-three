const p=t=>t*Math.PI/180,c=t=>{const n=Math.hypot(...t),r=t.map(s=>s/n);return t instanceof Float32Array?r:new Float32Array(r)},d=(t=[],n=[])=>{if(t.length!==n.length&&t.length!==3)throw new Error("vec1 and vec2 must have the 3 length");return new Float32Array([t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]])},F=(t=[],n=[])=>{if(t.length!==n.length&&t.length!==3)throw new Error("vec1 and vec2 must have the 3 length");return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]},M=(t=[],n=[])=>new Float32Array([t[0]-n[0],t[1]-n[1],t[2]-n[2]]),m=(t,n,r,s,l,a,o,e,y)=>{const h=new Float32Array([t,n,r]),u=new Float32Array([s,l,a]),A=new Float32Array([o,e,y]),g=c(M(h,u)),i=c(d(A,g)),w=c(d(g,i));return new Float32Array([i[0],w[0],g[0],0,i[1],w[1],g[1],0,i[2],w[2],g[2],0,-F(i,h),-F(w,h),-F(g,h),1])},x=(t,n,r,s,l,a)=>{const o=n-t,e=r-s,y=a-l,h=-(n+t)/o,u=-(r+s)/e,A=-(a+l)/y;return new Float32Array([2/o,0,0,0,0,2/e,0,0,0,0,-2/y,0,h,u,A,1])},z=(t,n,r,s)=>{const l=p(t),a=1/Math.tan(l/2),o=new Float32Array(16);if(o[0]=a/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,s!=null&&s!==1/0){const e=1/(r-s);o[10]=(s+r)*e,o[14]=2*s*r*e}else o[10]=-1,o[14]=-2*r;return o};export{z as a,x as g,m as l};
