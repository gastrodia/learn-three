import"./d-__uno-e58b1170.js";import{c as E}from"./d-createShader-fc86cf77.js";const i=document.createElement("canvas"),{innerWidth:f,innerHeight:v}=window;document.body.append(i);i.width=f;i.height=v;const n=i.getContext("webgl"),w=`
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 10.0;
        }
    `,P=`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`,b=E(n,w,P),H=n.getAttribLocation(b,"onePosition");class R{points=[];paint=!1;render=()=>{for(const t of this.points)n.vertexAttrib2f(H,t.x,t.y),n.drawArrays(n.POINTS,0,1)};setPoint=t=>{const{target:a,clientX:c,clientY:d}=t,{left:h,top:p,width:u,height:g}=a.getBoundingClientRect(),s=u/2,r=g/2,l=(c-h-s)/s,m=(r-d-p)/r;this.points.push({x:l,y:m})};draw(t){this.paint&&(this.setPoint(t),this.render())}}const e=new R;document.addEventListener("mousedown",o=>{e.paint=!0,e.draw(o)});document.addEventListener("mousemove",o=>{e.paint&&e.draw(o)});document.addEventListener("mouseup",()=>{e.paint=!1});
