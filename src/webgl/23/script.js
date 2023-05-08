import 'uno.css'
import {createShader} from "@/utils/createShader";
import {loadImage} from '@/utils/image'
import ikun from '@/assets/textures/other/ikun.jpg?url'
import {useTexture} from "@/utils/useTexture";
import {useWebglXY} from "@/utils/useWebglXY";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = 500
canvas.height = 500
// canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = document.querySelector('#vertex-shader').textContent
const FRAGMENT_SHADER_SOURCE = document.querySelector('#fragment-shader').textContent

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneVertex = gl.getAttribLocation(program, 'oneVertex')
const oneSampler = gl.getUniformLocation(program, 'oneSampler')
const lookAt = gl.getUniformLocation(program, 'lookAt')

const points = new Float32Array([
    1.0, 1.0, 1.0, 1.0,
    -1.0, 1.0, 0.0, 1.0,
    -1.0, -1.0, 0.0, 0.0,
    1.0, -1.0, 1.0, 0.0,
])
console.log(points)
const bytes = points.BYTES_PER_ELEMENT
const buffer = gl.createBuffer()

gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW)

const size = 2
gl.vertexAttribPointer(onePosition, size, gl.FLOAT, false, bytes * 4, 0)
gl.enableVertexAttribArray(onePosition)

gl.vertexAttribPointer(oneVertex, size, gl.FLOAT, false, bytes * 4, bytes * 2)
gl.enableVertexAttribArray(oneVertex)

const image = await loadImage(ikun)

const [texture, textureIndex] = useTexture(gl, image)

gl.uniform1i(oneSampler, textureIndex)

const [onmousemove] = useWebglXY(canvas)

const render = (x = 0, y = 0) => {
    gl.uniform2fv(lookAt, new Float32Array([x, y]))
    gl.drawArrays(gl.TRIANGLE_FAN, 0, (points.length) / (size * 2))
}

render()

// 注册mousemove事件监听器
canvas.addEventListener('mousemove', e => {
    const [x, y] = onmousemove(e)
    render(x, y)
});