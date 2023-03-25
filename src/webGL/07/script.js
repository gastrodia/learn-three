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
    0.5, -0.5,
])

// 创建缓冲区
const buffer = gl.createBuffer()

/*
bindBuffer target
gl.ARRAY_BUFFER 表示缓冲区存储的是顶点数据
gl.ELEMENT_ARRAY_BUFFER 表示缓冲区存储的是顶点的索引值
* */
// 将 buffer 绑定到webgl上
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

/*
bufferData usage:
gl.STATIC_DRAW 写入一次 绘制多次
gl.STREAM_DRAW 写入一次 绘制若干次
gl.DYNAMIC_DRAW 写入多次绘制多次
* */
// 将顶点数据写入buffer
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)


/*
vertexAttribPointer type:
gl.FLOAT 浮点型
gl.UNSIGNED_BYTE 无符号字节
gl.SHORT 短整型
gl.INT 整型
gl.UNSIGNED_SHORT 无符号短整型
gl.UNSIGNED_INT 无符号整型

vertexAttribPointer normalized: 是否归一化
vertexAttribPointer stride 两个相邻顶点间的字节
vertexAttribPointer offset 偏移量
* */
// 给attribute变量赋值
const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

// 激活attribute顶点
// 可使用  gl.disableVertexAttribArray 禁用
gl.enableVertexAttribArray(onePosition)

console.log(points)

gl.drawArrays(gl.POINTS, 0, points.length / 2 )
