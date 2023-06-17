import"./main-ef7dcc1b.js";/* empty css                     */import{c as s}from"./d-createShader-b7bbb4a8.js";const t=document.createElement("canvas");document.body.append(t);const a=600,c=600;t.width=a;t.height=c;t.style.backgroundColor="powderblue";const o=t.getContext("webgl"),f=`
        attribute vec4 onePosition;
        varying vec2 vPosition;
        void main() {
            vPosition = onePosition.xy;
            gl_Position = onePosition;
        }
    `,l=`
        precision mediump float;
        uniform float radius;
        uniform float w;
        uniform float h;
        varying vec2 vPosition;
        
        void setColor (vec2 target, vec2 position) {
            float d = distance(target, position);
            if (d > radius)
            {
                discard;
            }
            else
            {
                gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
            }
        }
        
        void main() {
            float x = vPosition.x;
            float y = vPosition.y;
            
            vec2 topLeft = vec2(-w + radius, h - radius);
            vec2 topRight = vec2(w - radius, h - radius);
            vec2 bottomLeft = vec2(-w + radius, -h + radius);
            vec2 bottomRight = vec2(w - radius, -h + radius);
            
            if (x < topLeft.x && y > topLeft.y)
            {
                setColor(topLeft, vPosition);
            }
            else if (x > topRight.x && y > topRight.y)
            { 
                setColor(topRight, vPosition);
            }
            else if (x < bottomLeft.x && y < bottomLeft.y)
            {
                setColor(bottomLeft, vPosition);
            }
            else if (x > bottomRight.x && y < bottomRight.y)
            {
                setColor(bottomRight, vPosition);               
            }
            else
            {
                gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
            }
        }
`,i=s(o,f,l),e=o.getAttribLocation(i,"onePosition"),v=o.getUniformLocation(i,"radius"),d=o.getUniformLocation(i,"w"),m=o.getUniformLocation(i,"h"),n=new Float32Array([.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5]),g=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,g);o.bufferData(o.ARRAY_BUFFER,n,o.STATIC_DRAW);const r=2;o.vertexAttribPointer(e,r,o.FLOAT,!1,0,0);o.enableVertexAttribArray(e);o.uniform1f(d,.5);o.uniform1f(m,.5);o.uniform1f(v,.2);o.drawArrays(o.TRIANGLE_FAN,0,n.length/r);
