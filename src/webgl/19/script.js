import 'uno.css'
import {createShader} from "@/utils/createShader";
import {AnimationController} from "@/utils/animationController";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
        attribute vec4 onePosition;
        varying vec4 twoPosition;
        void main() {
            twoPosition = onePosition;
            gl_Position = onePosition;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
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
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneHeight = gl.getUniformLocation(program, 'oneHeight')
const oneArray = gl.getUniformLocation(program, 'oneArray')

const points = new Float32Array([
    0.5, 0.5,
    -0.5, 0.5,
    -0.5, -0.5,
    0.5, -0.5
])

gl.uniform1fv(oneArray, [0.5, 0.25, 0, -0.25, -0.5])

const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

gl.enableVertexAttribArray(onePosition)

const step = 0.01
let direction = 1
let x = -0.5
new AnimationController(() => {
    if (x > 0.5 || x < -0.5) direction *= -1
    x += step * direction
    gl.uniform1f(oneHeight, x)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, points.length / size)
}, 60)
