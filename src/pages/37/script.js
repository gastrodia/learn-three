import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 0, 160)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

// TODO https://threejs.org/docs/index.html?q=Float32BufferAttribute#api/zh/materials/PointsMaterial
const geometry = new THREE.BufferGeometry()
const material = new THREE.PointsMaterial({
    size: 1,
    color: Math.random() * 0xffffff,
    vertexColors: false,
    sizeAttenuation: true // 指定点的大小是否因相机深度而衰减。（仅限透视摄像头。）默认为true。
})

const vertices = []

const num = 20000
for (let i = 0; i < num; i++) {
    vertices.push(
        // 在区间 [- range / 2, range / 2] 内随机一个浮点数
        // 即区间 [-2000 / 2, 2000 / 2]
        THREE.MathUtils.randFloatSpread(500),
        THREE.MathUtils.randFloatSpread(500),
        THREE.MathUtils.randFloatSpread(500)
    )
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
const points = new THREE.Points(geometry, material)
scene.add(points)

const control = {
    animation: true,
    color: material.color.getHex()
}

gui.add(control, 'animation')
/*gui.addColor(control, 'color').onChange(e => {
    points.material.color = new THREE.Color(e)
})*/


const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

let step = 0
let time = 0
const gap = 60
const render = () => {
    if (control.animation) {
        step += 0.01
        time += 1
        points.rotation.x = step
        // points.rotation.y = step
        points.rotation.z = step
        if (time >= gap) {
            points.material.color = new THREE.Color(Math.random() * 0xffffff)
            time = 0
        }
    }
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()