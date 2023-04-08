import 'uno.css'
import {createShader} from "@/utils/createShader";
import {loadImage} from '@/utils/image'
import dog from '@/assets/textures/other/dog.gif'

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

const image = await loadImage(dog)
console.log(image)

// 创建 texture 纹理对象
const texture = gl.createTexture()
// gl.deleteTexture 删除纹理

// 图片坐标与 webgl坐标不一致 图标坐标在左上角 webgl需要的texture坐标则是左下角

// 翻转图片
// gl.UNPACK_FLIP_Y_WEBGL 绕y轴旋转
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)

// 开启纹理单元 管理纹理对象 每个纹理单元管理一张纹理对象
gl.activeTexture(gl.TEXTURE)

// 绑定纹理对象
// bindTexture type:  gl.TEXTURE_2D 二维纹理 gl.TEXTURE_CUBE_MAP 立方体纹理
gl.bindTexture(gl.TEXTURE_2D, texture)

// 处理放大缩小逻辑
/*
texParameteri target 同上

texParameteri pname:
gl.TEXTURE_MAG_FILTER 放大
gl.TEXTURE_MIN_FILTER 缩小
gl.TEXTURE_WRAP_S 水平填充
gl.TEXTURE_WRAP_T 垂直填充

texParameteri param:
(gl.TEXTURE_MAG_FILTER 和 gl.TEXTURE_MIN_FILTER)
gl.NEAREST 使用像素颜色值
gl.LINEAR 使用加权平均值

(gl.TEXTURE_WRAP_S 和 gl.TEXTURE_WRAP_T)
gl.REPEAT 平铺
gl.MIRRORED_REPEAT 镜像对称
gl.CLAMP_TO_EDGE 边缘延伸
 */
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)

// 水平 垂直填充逻辑
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

// 配置纹理对象
/*
texImage2D target: 同上
texImage2D level

texImage2D internalformat 图像格式：
gl.RGB
gl.RGBA
gl.ALPHA
gl.LUMINANCE 使用物体表面的红绿蓝 分量的加权平均值
gl.LUMINANCE_ALPHA 使用物体表面的红绿蓝 分量的加权平均值 支持透明度

texImage2D format 纹理的内部格式 必须和 internalformat相同

texImage2D type 纹理数据的数据类型
gl.UNSIGNED_BYTE 每个颜色分量占据一个字节
gl.UNSIGNED_SHORT_5_6_5 RGB分量分别占据5 6 5比特
gl.UNSIGNED_SHORT_4_4_4_4 RGBA分量分别占据4 4 4 4比特
gl.UNSIGNED_SHORT_5_5_5_1 RGBA分量分别占据5 5 5 1比特

texImage2D image 对应的image对象
 */
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)

gl.uniform1i(oneSampler, 0)

gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
