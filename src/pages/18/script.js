import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)

camera.position.set(-50, 30, 50)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

const groundGeometry = new THREE.PlaneGeometry(60, 40)
const groundMaterial = new THREE.MeshLambertMaterial({color: 0x333333})
const ground = new THREE.Mesh(groundGeometry, groundMaterial)
ground.rotation.x = Math.PI / -2
scene.add(ground)

const normalMaterial = new THREE.MeshNormalMaterial(
    {
        wireframe: false
    }
)

const boxGeometry = new THREE.BoxGeometry(8, 8, 8)
const sphereGeometry = new THREE.SphereGeometry(8)
const planeGeometry = new THREE.PlaneGeometry(8, 12)

const box = new THREE.Mesh(boxGeometry, normalMaterial)
const sphere = new THREE.Mesh(sphereGeometry, normalMaterial)
const plane = new THREE.Mesh(planeGeometry, normalMaterial)

box.position.y = 4
sphere.position.y = 8
plane.position.y = 6

// 定义材质是否使用平面着色进行渲染。默认值为false (方便观察球的旋转)
sphere.material.flatShading = true
// 指定平面为双面可见
plane.material.side = THREE.DoubleSide

const geometry = {
    box,
    sphere,
    plane
}

const control = {
    active: 'box'
}

let activeGeometry = geometry[control.active]
scene.add(activeGeometry)

gui.add(control, 'active', Object.keys(geometry)).onChange((e) => {
    scene.remove(activeGeometry)
    activeGeometry = geometry[e]
    scene.add(activeGeometry)
})

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

const step = 0.01
const render = () => {
    activeGeometry.rotation.x += step
    activeGeometry.rotation.y += step
    activeGeometry.rotation.z += step
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()