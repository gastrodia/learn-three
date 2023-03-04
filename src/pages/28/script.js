import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 0, 100)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const shape = new THREE.Shape()

shape.moveTo(0, 0)

shape.lineTo(0, 30)
shape.bezierCurveTo(20, 30, 5, 30, 32, 32)
shape.splineThru([
    new THREE.Vector2(32, 30),
    new THREE.Vector2(28, 20),
    new THREE.Vector2(30, 0),
])
shape.quadraticCurveTo(20, 15, 0, 0)

const leftEye = new THREE.Path()
leftEye.absellipse(6, 20, 2, 3, 0, Math.PI * 2, true)
shape.holes.push(leftEye)

const rightEye = new THREE.Path()
rightEye.absellipse(23, 20, 2, 3, 0, Math.PI * 2, true)
shape.holes.push(rightEye)

const mouth = new THREE.Path()
mouth.absarc(16, 16, 2, 0, Math.PI, true)
shape.holes.push(mouth)

const shapeGeometry = new THREE.ShapeGeometry(shape)
const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: .7,
    // wireframe: true
})
const model = new THREE.Mesh(shapeGeometry, material)
scene.add(model)

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