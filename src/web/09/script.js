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
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 100.0;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')

/*
Int8Array 8位整型
Uint8Array 8位无符号整型
Int16Array 16位整型
Uint16Array 16位无符号整型
Int32Array 32位整型
Uint32Array 32位无符号整型
Float32Array 单精度32位浮点型
Float64Array 双精度64位浮点型
* */
// 类型化数组
const points = new Float32Array([
    0.5, 0.5,
    -0.5, 0.5,
    -0.5, -0.5,
    0.2, -0.2,
])

const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)


const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

gl.enableVertexAttribArray(onePosition)

/*
gl.LINES 多条独立的线段 count 只能为偶数个
gl.LINE_STRIP 依次连接相邻的点 不会闭合起点和终点
gl.LINE_LOOP 依次连接相邻的点 闭合起点与终点
gl.TRIANGLES 填充三角形 count 生效为三的倍数
gl.TRIANGLE_FAN 飘带状填充三角形
gl.TRIANGLE_STRIP 条带状填充三角形
* */

gl.drawArrays(gl.TRIANGLE_STRIP, 0, points.length / size )
