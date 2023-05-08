import 'uno.css'
import {createShader} from "@/utils/createShader";
import {getRandomNumber} from "@/utils/random";

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
            gl_PointSize = 10.0;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
        precision mediump float;
        uniform vec4 oneColor;
        void main() {
            gl_FragColor = oneColor;
        }
`

// 在片元着色器中使用 uniform 必须指定精度 低精度 lowp 中精度 mediump 高精度 highp

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)


const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneColor = gl.getUniformLocation(program, 'oneColor');


const genPoints = (length = 0) => {
    return Array.from({length}).map(() => ({
        x: getRandomNumber(-1, 1, 2),
        y: getRandomNumber(-1, 1, 2),
        r: getRandomNumber(0, 1, 2),
        g: getRandomNumber(0, 1, 2),
        b: getRandomNumber(0, 1, 2)
    }))
}

const points = genPoints(100)

const render = () => {
    for (const point of points) {
        const {x, y, r, g, b} = point
        gl.vertexAttrib2f(onePosition, x, y)
        gl.uniform4f(oneColor, r, g, b, 1.0)
        gl.drawArrays(gl.POINTS, 0, 1)
    }
}

render()
