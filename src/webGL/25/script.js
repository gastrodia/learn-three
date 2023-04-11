import 'uno.css'
import {createShader} from "@/utils/createShader";
import vertex from './index.vert?raw'
import fragment from './index.frag?raw'

const canvas = document.createElement('canvas')
// const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)
const WIDTH = 500
const HEIGHT = 500

canvas.width = WIDTH
canvas.height = HEIGHT

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = vertex
const FRAGMENT_SHADER_SOURCE = fragment

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')

const points = new Float32Array([
    1.0, 1.0,
    -1.0, 1.0,
    -1.0, -1.0,
    1.0, -1.0
])
const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

gl.enableVertexAttribArray(onePosition)
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
