import 'uno.css'
import {createShader} from "@/utils/createShader";

const canvas = document.createElement('canvas')
// const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

const WIDTH = 600
const HEIGHT = 600
canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
        attribute vec4 onePosition;
        varying vec2 vPosition;
        void main() {
            vPosition = onePosition.xy;
            gl_Position = onePosition;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
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
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const radius = gl.getUniformLocation(program, 'radius')
const w = gl.getUniformLocation(program, 'w')
const h = gl.getUniformLocation(program, 'h')

// 类型化数组
const points = new Float32Array([
    0.5, 0.5,
    -0.5, 0.5,
    -0.5, -0.5,
    0.5, -0.5,
    0.5, 0.5
])

const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)


const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

gl.enableVertexAttribArray(onePosition)

gl.uniform1f(w, 0.5)
gl.uniform1f(h, 0.5)
gl.uniform1f(radius, 0.2)

gl.drawArrays(gl.TRIANGLE_FAN, 0, points.length / size)
