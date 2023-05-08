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

const v0 = [-1.0, -1.0,  1.0]
const v1 = [-1.0,  1.0,  1.0]
const v2 = [ 1.0,  1.0,  1.0]
const v3 = [ 1.0, -1.0,  1.0]
const v4 = [-1.0, -1.0, -1.0]
const v5 = [-1.0,  1.0, -1.0]
const v6 = [ 1.0,  1.0, -1.0]
const v7 = [ 1.0, -1.0, -1.0]

const points = new Float32Array([
    ...v1, 1.0, 1.0, 0.0,
    ...v0, 1.0, 1.0, 0.0,
    ...v3, 1.0, 1.0, 0.0,

    ...v1, 0.0, 1.0, 0.0,
    ...v3, 0.0, 1.0, 0.0,
    ...v2, 0.0, 1.0, 0.0,

    ...v2, 1.0, 0.0, 1.0,
    ...v3, 1.0, 0.0, 1.0,
    ...v7, 1.0, 0.0, 1.0,

    ...v2, 1.0, 0.0, 1.0,
    ...v7, 1.0, 0.0, 0.0,
    ...v6, 1.0, 0.0, 0.0,

    ...v3, 0.0, 1.0, 0.0,
    ...v0, 0.0, 1.0, 0.0,
    ...v4, 0.0, 1.0, 1.0,

    ...v3, 0.0, 1.0, 1.0,
    ...v4, 0.0, 1.0, 1.0,
    ...v7, 1.0, 0.0, 0.0,

    //
    ...v6, 1.0, 1.0, 1.0,
    ...v5, 1.0, 1.0, 0.0,
    ...v1, 1.0, 1.0, 0.0,

    ...v6, 0.0, 1.0, 0.0,
    ...v1, 1.0, 1.0, 0.0,
    ...v2, 1.0, 1.0, 0.0,

    ...v4, 1.0, 0.0, 1.0,
    ...v5, 1.0, 1.0, 1.0,
    ...v6, 1.0, 0.0, 1.0,

    ...v4, 1.0, 0.0, 0.0,
    ...v6, 1.0, 0.0, 0.0,
    ...v7, 1.0, 0.0, 0.0,

    ...v5, 1.0, 1.0, 0.0,
    ...v4, 0.0, 1.0, 0.0,
    ...v0, 0.0, 1.0, 0.0,

    ...v5, 0.0, 1.0, 1.0,
    ...v0, 0.0, 1.0, 1.0,
    ...v1, 1.0, 0.0, 1.0
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

const perspectiveMatrix = getPerspectiveMatrix(45, WIDTH / HEIGHT, .1, 100)

let [x, y, z] = [3, 3, 3]
const render = () => {
    const mat = lookAt(x, y, z, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0)
    gl.uniformMatrix4fv(viewMatrix, false, get4x4Matrices(perspectiveMatrix, mat))
    gl.drawArrays(gl.TRIANGLES, 0, (points.length) / (size * 2))
}

render()

const keyCodeMap = {
    ArrowUp: () => {
        y += 0.1
    },
    ArrowDown: () => {
        y -= 0.1
    },
    ArrowLeft: () => {
        x -= 0.1
    },
    ArrowRight: () => {
        x += 0.1
    },
    Equal: () => {
        z += 0.1
    },
    Minus: () => {
        z -= 0.1
    }
}

document.addEventListener('keydown', (e) => {
    const {code} = e
    console.log(code)
    const handler = keyCodeMap[code]
    if (!handler) return
    handler()
    render()
})
