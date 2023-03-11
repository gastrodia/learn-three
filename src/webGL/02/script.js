import 'uno.css'
import {createShader} from "@/utils/createShader";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

canvas.width = WIDTH
canvas.height = HEIGHT

const gl = canvas.getContext('webgl')

// 着色器 控制渲染（可控）在js中是以字符串形式存储

// 1.顶点着色器 [x, y, z]
// 2.片元着色器 片元可以理解为一个个像素

// js => (顶点着色器和片元着色器)[webGL程序] => 浏览器[渲染]


// 顶点着色器代码
const VERTEX_SHADER_SOURCE = `
        void main() {
            gl_Position = vec4(0.5, 0.5, 0.0, 1.0);
            gl_PointSize = 100.0;
        }
    `

// 片元卓着色器代码
const FRAGMENT_SHADER_SOURCE = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`

/*
在顶点着色器的 Position 中 vec4(x, y, z, w) // w代码 齐次坐标 即坐标为 [x/w, y/w, z/w]
PointSize 为点的大小
*/
// 在片元着色器中 FragColor 的 vec4(r, g, b, a)

/*

// 创建着色器
const vertexShader = gl.createShader(gl.VERTEX_SHADER)
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

// 指定着色器与源码
gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE)

// 编译着色器
gl.compileShader(vertexShader)
gl.compileShader(fragmentShader)

// 创建程序
const program = gl.createProgram()

// 为程序指定着色器
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)

// 连接程序
gl.linkProgram(program)

// 使用程序
gl.useProgram(program)
*/

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)
console.log(program)
// 执行绘制
// gl.POINTS 绘制点 , 起始点坐标 使用几个顶点
gl.drawArrays(gl.POINTS, 0 , 1)
// gl.LINES 绘制线
// gl.TRIANGLES 绘制三角形


document.body.append(canvas)