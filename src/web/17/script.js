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
        void main() {
            gl_Position = onePosition;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
        precision mediump float;
        uniform float oneOpacity;
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, oneOpacity);
        }
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneOpacity = gl.getUniformLocation(program, 'oneOpacity')

const points = new Float32Array([
    0.5, 0.5,
    -0.5, 0.5,
    -0.5, -0.5,
    0.5, -0.5
])

const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

gl.enableVertexAttribArray(onePosition)

const step = 0.01
let direction = 1
let x = 0
new AnimationController(() => {
    if (x > 1 || x < 0) direction *= -1
    x += step * direction
    gl.uniform1f(oneOpacity, x)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, points.length / size)
}, 60)
