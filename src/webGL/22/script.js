import 'uno.css'
import {createShader} from "@/utils/createShader";
import {loadImage} from '@/utils/image'
import dog from '@/assets/textures/other/dog.gif?url'
import border from '@/assets/textures/other/border.png?url'
import {useTexture} from "@/utils/useTexture";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = WIDTH
canvas.height = HEIGHT
canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = document.querySelector('#vertex-shader').textContent
const FRAGMENT_SHADER_SOURCE = document.querySelector('#fragment-shader').textContent

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneVertex = gl.getAttribLocation(program, 'oneVertex')
const oneSampler = gl.getUniformLocation(program, 'oneSampler')
const twoSampler = gl.getUniformLocation(program, 'twoSampler')

const points = new Float32Array([
    0.5, 0.5, 1.0, 1.0,
    -0.5, 0.5, 0.0, 1.0,
    -0.5, -0.5, 0.0, 0.0,
    0.5, -0.5, 1.0, 0.0,
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

const [borderImage, dogImage] = await Promise.all([loadImage(border), loadImage(dog)])

const [borderTexture, borderTextureIndex] = useTexture(gl, borderImage, 0)
const [dogTexture, dogTextureIndex] = useTexture(gl, dogImage, 1)

gl.uniform1i(oneSampler, borderTextureIndex)
gl.uniform1i(twoSampler, dogTextureIndex)

gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
