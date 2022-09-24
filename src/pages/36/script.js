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
    size: 2, // 设置点的大小
    color: 0xffffff,
    vertexColors: true // 是否采用每个粒子自己的颜色
})

const vertices = []
const colors = []

for (let x = -10; x < 10; x++) {
    for (let y = -10; y < 10; y++) {
        for (let z = -10; z < 10; z++) {
            vertices.push(x * 4, y * 4, z * 4)
            const color = new THREE.Color(0xffffff * Math.random())
            colors.push(color.r, color.g, color.b)
        }
    }
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
const points = new THREE.Points(geometry, material)
scene.add(points)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()