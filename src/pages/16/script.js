import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
// core 为场景中的物体统一添加 MeshDepthMaterial
// 物体的外观将受物体到相机的距离影响
scene.overrideMaterial = new THREE.MeshDepthMaterial()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 50, 1000)
// ===

camera.position.set(-50, 40, 50)
camera.lookAt(scene.position)

const control = {
    cameraNear: camera.near,
    cameraFar: camera.far,
    createCube() {
        const cubeGeometry = new THREE.BoxGeometry(5, 5, 5)
        const cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff})
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.position.x = Math.round(Math.random() * 100) - 50
        cube.position.y = Math.round(Math.random() * 10)
        cube.position.z = Math.round(Math.random() * 200) - 150
        scene.add(cube)
    }
}


gui.add(control, 'cameraNear', 0, 100).onChange(e => {
    camera.near = e
    camera.updateProjectionMatrix()
})
gui.add(control, 'cameraFar', 0, 1000).onChange(e => {
    camera.far = e
    camera.updateProjectionMatrix()
})
gui.add(control, 'createCube')

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

let i = 0
while (i < 20) {
    control.createCube()
    i++
}

const step = 0.01
const render = () => {
    scene.traverse((e) => {
        e.rotation.x += step
        e.rotation.y += step
        e.rotation.z += step
    })
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()