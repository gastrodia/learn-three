import 'uno.css'
import {createShader} from "@/utils/createShader";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = WIDTH
canvas.height = HEIGHT

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 100.0;
        }
    `

// attribute 只能在顶点着色器中使用 不能在片元着色器中使用
// attribute vec4 onePosition 中 onePosition 的默认值是(0.0, 0.0, 0.0, 1.0)

const FRAGMENT_SHADER_SOURCE = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
/*

gl.vertexAttrib4f(onePosition, .5, .5, 0, 1.0)
// vertexAttrib3f // x,y,z
// vertexAttrib2f // x,y
// vertexAttrib1f // x

gl.drawArrays(gl.POINTS, 0 , 1)
*/

const halfBoxWidth = 100 / 1000 / 2 // gl_PointSize = 100.0
const speed = .01
let x = halfBoxWidth, direction = 1
const render = () => {
    if (x > 1 - halfBoxWidth || x < halfBoxWidth) direction *= -1
    x += speed * direction
    gl.vertexAttrib1f(onePosition, x)
    gl.drawArrays(gl.POINTS, 0 , 1)
    requestAnimationFrame(render)
}

render()
