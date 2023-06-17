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

const v0 = [-1.0, -1.0, 1.0]
const v1 = [-1.0, 1.0, 1.0]
const v2 = [1.0, 1.0, 1.0]
const v3 = [1.0, -1.0, 1.0]
const v4 = [-1.0, -1.0, -1.0]
const v5 = [-1.0, 1.0, -1.0]
const v6 = [1.0, 1.0, -1.0]
const v7 = [1.0, -1.0, -1.0]

const points = new Float32Array([
    ...v1, ...v0, ...v3, ...v2,
    ...v2, ...v3, ...v7, ...v6,
    ...v3, ...v0, ...v4, ...v7,
    ...v6, ...v5, ...v1, ...v2,
    ...v4, ...v5, ...v6, ...v7,
    ...v5, ...v4, ...v0, ...v1
])

const c0 = [1.0, 0.0, 0.0]
const c1 = [0.0, 1.0, 0.0]
const c2 = [0.0, 0.0, 1.0]
const c3 = [1.0, 0.0, 1.0]
const c4 = [0.0, 0.5, 0.0]
const c5 = [0.0, 0.5, 0.5]
const c6 = [0.5, 0.5, 0.0]
const c7 = [0.5, 0.0, 5.0]

const colors = new Float32Array([
    /*...c1, ...c0, ...c3, ...c2,
    ...c2, ...c3, ...c7, ...c6,
    ...c3, ...c0, ...c4, ...c7,
    ...c6, ...c5, ...c1, ...c2,
    ...c4, ...c5, ...c6, ...c7,
    ...c5, ...c4, ...c0, ...c1*/
    ...c0, ...c0, ...c0, ...c0,
    ...c1, ...c1, ...c1, ...c1,
    ...c2, ...c2, ...c2, ...c2,
    ...c3, ...c3, ...c3, ...c3,
    ...c4, ...c4, ...c4, ...c4,
    ...c5, ...c5, ...c5, ...c5,
])

const index = new Uint8Array([
    1, 0, 3, 1, 3, 2,
    5, 4, 7, 5, 7, 6,
    9, 8, 11, 9, 11, 10,
    13, 12, 15, 13, 15, 14,
    17, 16, 19, 17, 19, 18,
    21, 20, 23, 21, 23, 22
])

console.log(index.length)

const indexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, index, gl.STATIC_DRAW)

const size = 3

const buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(onePosition)


const colorBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW)
gl.vertexAttribPointer(oneColor, size, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(oneColor)

gl.enable(gl.DEPTH_TEST) // 开启深度

const perspectiveMatrix = getPerspectiveMatrix(45, WIDTH / HEIGHT, .1, 100)

let [x, y, z] = [3, 3, 3]
const render = () => {
    const mat = lookAt(x, y, z, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0)
    gl.uniformMatrix4fv(viewMatrix, false, get4x4Matrices(perspectiveMatrix, mat))
    gl.drawElements(gl.TRIANGLES, index.length, gl.UNSIGNED_BYTE, 0)
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
