import 'uno.css'
import {createShader} from "@/utils/createShader";

const canvas = document.createElement('canvas')
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
document.body.append(canvas)

canvas.width = WIDTH
canvas.height = HEIGHT

const gl = canvas.getContext('webgl')

const VERTEX_SHADER_SOURCE = `
        attribute vec4 onePosition;
        void main() {
            gl_Position = onePosition;
            gl_PointSize = 10.0;
        }
    `
const FRAGMENT_SHADER_SOURCE = `
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
`

const program = createShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE)

const onePosition = gl.getAttribLocation(program, 'onePosition')

class Paintbrush {
    /**
     * @type {{x:number, y: number}[]}
     */
    points = []
    paint = false

    render = () => {
        for (const point of this.points) {
            gl.vertexAttrib2f(onePosition, point.x, point.y)
            gl.drawArrays(gl.POINTS, 0 , 1)
        }
    }

    /**
     * @param e {MouseEvent}
     */
    setPoint = (e) => {
        const {target, clientX, clientY} = e
        const {left, top, width, height} = target.getBoundingClientRect()
        const halfWidth = width / 2
        const halfHeight = height / 2
        const x = (clientX - left - halfWidth) / halfWidth
        const y = (halfHeight - clientY - top) / halfHeight
        this.points.push({x, y})
    }

    /**
     * @param e {MouseEvent}
     */
    draw(e) {
        if (!this.paint) return
        this.setPoint(e)
        this.render()
    }
}


const brush = new Paintbrush()

document.addEventListener('mousedown', (e) => {
    brush.paint = true
    brush.draw(e)
})

document.addEventListener('mousemove', (e) => {
    if (!brush.paint) return
    brush.draw(e)
})

document.addEventListener('mouseup', () => {
    brush.paint = false
})