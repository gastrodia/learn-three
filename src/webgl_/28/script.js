import 'uno.css'
import {createShader} from "@/utils/createShader";
import VERTEX_SHADER_SOURCE from './index.vert?raw'
import FRAGMENT_SHADER_SOURCE from './index.frag?raw'
import {getPerspectiveMatrix, lookAt} from '@/utils/dimension'
import {get4x4Matrices} from '@/utils/getMatrix'
const canvas = document.createElement('canvas')
// const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)
const WIDTH = 500
const HEIGHT = 500

canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.backgroundColor = 'skyblue'

const gl = canvas.getContext('webgl')

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneColor = gl.getAttribLocation(program, 'oneColor')
const viewMatrix = gl.getUniformLocation(program, 'viewMatrix')
const points = new Float32Array([
    0.75, 1.0, -2.0, 1.0, 1.0, 0.0,
    0.25, -1.0, -2.0, 1.0, 1.0, 0.0,
    1.0, -1.0, -2.0, 1.0, 1.0, 0.0,

    0.75, 1.0, -1.5, 0.0, 1.0, 0.0,
    0.25, -1.0, -1.5, 0.0, 1.0, 0.0,
    1.0, -1.0, -1.5, 0.0, 1.0, 0.0,

    0.75, 1.0, -1.0, 1.0, 0.0, 1.0,
    0.25, -1.0, -1.0, 1.0, 0.0, 1.0,
    1.0, -1.0, -1.0, 1.0, 0.0, 1.0,

    -0.75, 1.0, -2.0, 1.0, 0.0, 0.0,
    -0.25, -1.0, -2.0, 1.0, 0.0, 0.0,
    -1.0, -1.0, -2.0, 1.0, 0.0, 0.0,

    -0.75, 1.0, -1.5, 0.0, 1.0, 0.0,
    -0.25, -1.0, -1.5, 0.0, 1.0, 0.0,
    -1.0, -1.0, -1.5, 0.0, 1.0, 0.0,

    -0.75, 1.0, -1.0, 0.0, 1.0, 1.0,
    -0.25, -1.0, -1.0, 0.0, 1.0, 1.0,
    -1.0, -1.0, -1.0, 1.0, 0.0, 0.0
])
const bytes = points.BYTES_PER_ELEMENT

const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const size = 3
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, bytes * 6, 0)
gl.enableVertexAttribArray(onePosition)

gl.vertexAttribPointer(oneColor, size, gl.FLOAT, false, bytes * 6, bytes * 3)
gl.enableVertexAttribArray(oneColor)
gl.enable(gl.DEPTH_TEST) // 开启深度

const perspectiveMatrix = getPerspectiveMatrix(150, WIDTH / HEIGHT, .1, 100)

let [x, y, z] = [0.0, 0, 0.2]
const render = () => {
    const mat = lookAt(x, y, z, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0)
    gl.uniformMatrix4fv(viewMatrix, false, get4x4Matrices(perspectiveMatrix, mat))
    gl.drawArrays(gl.TRIANGLES, 0, (points.length) / (size * 2))
}

render()

const keyCodeMap = {
    ArrowUp: () => {
        y += 0.01
    },
    ArrowDown: () => {
        y -= 0.01
    },
    ArrowLeft: () => {
        x -= 0.01
    },
    ArrowRight: () => {
        x += 0.01
    }
}

document.addEventListener('keydown', (e) => {
    const {code} = e
    const handler = keyCodeMap[code]
    if (!handler) return
    handler()
    render()
})
