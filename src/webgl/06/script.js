import 'uno.css'
import {createShader} from "@/utils/createShader";
import {AnimationController} from "@/utils/animationController";
import {calcWebGlBoxHalfWidth} from "@/utils/webGlBoxHalfWidth";
import {getRandomNumber} from "@/utils/random";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = 500
canvas.height = 500
canvas.style.backgroundColor = 'powderblue'

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 20.0;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
        precision mediump float;
        uniform vec4 oneColor;
        void main() {
            gl_FragColor = oneColor;
        }
`

// 在片元着色器中使用 uniform 必须指定精度 低精度 lowp 中精度 mediump 高精度 highp

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')
const oneColor = gl.getUniformLocation(program, 'oneColor')
gl.uniform4f(oneColor, 0, 0, 1, 1.0)

const boxHalfWidth = calcWebGlBoxHalfWidth(20)
const positive = 1 - boxHalfWidth
const reverse = boxHalfWidth - 1
const header = {x: 0, y: 0}
const snake = []
const originalSpend = boxHalfWidth * 2

let direction = 'x'
let gaming = false
let speed = originalSpend

let food = null

const genFood = () => {
    return {x: getRandomNumber(-1, 1, 2), y: getRandomNumber(-1, 1, 2)}
}
const gameOver = () => {
    const [head] = snake
    const {x, y} = head
    return x >= positive || x < reverse || y > positive || y < reverse
}

const isEat = () => {
    if (!food) return false
    const [head] = snake
    const x = Math.abs(head.x - food.x)
    const y = Math.abs(head.y - food.y)
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    return distance < boxHalfWidth * 4
}

const render = () => {
    const action = new AnimationController(() => {
        if (gameOver()) {
            action.pause()
            gaming = false
            alert(`game over: ${snake.length - 1}分`)
            return
        }

        if (food) {
            gl.vertexAttrib2f(onePosition, food.x, food.y)
            gl.drawArrays(gl.POINTS, 0, 1)
        }

        let preX = 0, preY = 0
        snake.forEach((point, index) => {

            if (index) {
                point.x = preX
                point.y = preY

                preX = point.x
                preY = point.y

            } else {
                preX = point.x
                preY = point.y

                point[direction] += speed
            }
            gl.vertexAttrib2f(onePosition, point.x, point.y)
            gl.drawArrays(gl.POINTS, 0, 1)
        })


        if (isEat()) {
            food = genFood()
            snake.push({x: preX, y: preY})
        }
    }, 8, true)
}


const gameStart = () => {
    gaming = true
    snake.length = 0
    snake.push({...header})
    food = genFood()
    render()
}


const handlerMap = {
    ArrowUp: () => {
        direction = 'y'
        speed = originalSpend
    },

    ArrowRight: () => {
        direction = 'x'
        speed = originalSpend
    },

    ArrowDown: () => {
        direction = 'y'
        speed = originalSpend * -1
    },

    ArrowLeft: () => {
        direction = 'x'
        speed = originalSpend * -1
    },

    Space: () => {
        if (gaming) return
        gameStart()
    }
}


document.addEventListener('keydown', (e) => {
    const {code} = e
    const handler = handlerMap[code]
    if (!handler) return
    handler()
})