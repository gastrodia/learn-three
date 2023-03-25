import 'uno.css'
import {createShader} from "@/utils/createShader";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
        attribute vec4 onePosition;
        attribute float oneSize;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = oneSize;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneSize = gl.getAttribLocation(program, 'oneSize')

// 类型化数组
const points = new Float32Array([
    0.5, 0.5, 10.0,
    -0.5, 0.5, 20.0,
    -0.5, -0.5, 30.0,
    0.5, -0.5, 40.0
])

const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const positionSize = 2

const BYTE = points.BYTES_PER_ELEMENT // 获取到每个元素的字节数

gl.vertexAttribPointer(onePosition, positionSize, gl.FLOAT, false, BYTE * 3, 0)

gl.enableVertexAttribArray(onePosition)

const sizeSize = 1
gl.vertexAttribPointer(oneSize, sizeSize, gl.FLOAT, false, BYTE * 3, BYTE * 2)

gl.enableVertexAttribArray(oneSize)

gl.drawArrays(gl.POINTS, 0, points.length / (positionSize + sizeSize) )
