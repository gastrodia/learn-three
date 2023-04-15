import 'uno.css'
import {createShader} from "@/utils/createShader";
import VERTEX_SHADER_SOURCE from './index.vert?raw'
import FRAGMENT_SHADER_SOURCE from './index.frag?raw'
import {getViewMatrix, getOrthogonalMatrix} from '@/utils/dimension'
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
const viewMatrix = gl.getUniformLocation(program, 'viewMatrix')
const points = new Float32Array([
    0.0, 0.25,
    -0.25, -0.25,
    0.25, -0.25
])
const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

gl.enableVertexAttribArray(onePosition)

let [eye, direction] = [0.1, 1]
const speed = 0.01
const orthogonalMatrix = getOrthogonalMatrix(1, 1, -1, -1, 0, 10)
const render = () => {
    if (eye >= 1 || eye <= 0) direction *= -1
    eye += speed * direction
    const mat = getViewMatrix(
        0.0, eye, 0.1,
        0.0, 0.0, 0.0,
        0.0, 0.1, 0.0
    )
    gl.uniformMatrix4fv(viewMatrix, false, get4x4Matrices(mat, orthogonalMatrix))
    gl.drawArrays(gl.TRIANGLE_FAN, 0, (points.length) / (size))

    requestAnimationFrame(render)
}

render()
