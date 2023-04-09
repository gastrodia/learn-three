// https://jamie-wong.com/2016/07/06/metaballs-and-webgl/
import 'uno.css'
import {createShader} from "@/utils/createShader";

const canvas = document.createElement('canvas')
// const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)
const WIDTH = 500
const HEIGHT = 500

canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = document.querySelector('#vertex-shader').textContent
const FRAGMENT_SHADER_SOURCE = document.querySelector('#fragment-shader').textContent

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const metaballs = gl.getUniformLocation(program, 'metaballs')

const points = new Float32Array([
    1.0, 1.0,
    -1.0, 1.0,
    -1.0, -1.0,
    1.0, -1.0
])
console.log(points)
const bytes = points.BYTES_PER_ELEMENT
const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, 0, 0)

gl.enableVertexAttribArray(onePosition)

const radius = 50
const x = WIDTH / 2
const y = HEIGHT / 2

const speed = 0.5
let direction = 1
const posY = {one: y + radius, two: y - radius}
const render = () => {
    if ( posY.one < posY.two || posY.one > y + radius * 2) direction *= -1
    posY.one += speed * direction
    posY.two -= speed * direction
    gl.uniform3fv(metaballs, new Float32Array([
        x, posY.one, radius,
        x, posY.two, radius
    ]))
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
    requestAnimationFrame(render)
}

render()