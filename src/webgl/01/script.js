import 'uno.css'

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

canvas.width = WIDTH
canvas.height = HEIGHT

const gl = canvas.getContext('webgl2')

// 清空canvas颜色
gl.clearColor(1.0, 0.0, 0.0, 1.0)

// 清空canvas

// COLOR_BUFFER_BIT 清空颜色缓存 => clearColor
// DEPTH_BUFFER_BIT 清空深度缓冲区 => clearDepth(1.0)
// STENCIL_BUFFER_BIT 清空模板缓冲区 => clearStencil(0)
gl.clear(gl.COLOR_BUFFER_BIT)

// 两个函数需要搭配同时使用才能生效

document.body.append(canvas)