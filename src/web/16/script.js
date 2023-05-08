import 'uno.css'
import {createShader} from "@/utils/createShader";
import {AnimationController} from "@/utils/animationController";
import {get4x4Matrices, getRotateZMatrix, getScaleMatrix, getTranslateMatrix} from "@/utils/getMatrix";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
        attribute vec4 onePosition;
        uniform mat4 oneMat;
        void main() {
            gl_Position = oneMat * onePosition;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneMat = gl.getUniformLocation(program, 'oneMat')

const points = new Float32Array([
    0.0, 0.1,
    -0.1, -0.1,
    0.1, -0.1
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
let deg = 0
new AnimationController(() => {
    if (x > 1 || x < -1) direction *= -1
    x += step * direction
    deg += step * direction
    const v = get4x4Matrices(get4x4Matrices(getScaleMatrix(x, x), getTranslateMatrix(x)), getRotateZMatrix(deg))
    gl.uniformMatrix4fv(oneMat, false, v)
    gl.drawArrays(gl.TRIANGLES, 0, points.length / size)
}, 60)
