import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-40, 20, 40)
camera.lookAt(scene.position)

const planeGeometry = new THREE.PlaneGeometry(60, 40, 20, 20)
const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0x333333
})

const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = Math.PI / -2
scene.add(plane)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)


const cubeGeometry = new THREE.BoxGeometry(6, 6, 6)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    name: 'MeshBasicMaterial',
    transparent: true,
    opacity: .5
})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.y = 3
scene.add(cube)

gui.add(cubeMaterial, 'name')
gui.add(cubeMaterial, 'wireframe')
gui.add(cubeMaterial, 'opacity', 0, 1, 0.01)
gui.add(cubeMaterial, 'transparent')
gui.add(cubeMaterial, 'visible')

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