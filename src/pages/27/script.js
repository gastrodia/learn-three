import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(28, 30, 28)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const points = [
    {x: 0, y: 0, z: 0},
    {x: 10, y: 0, z: 0},
    {x: 0, y: 10, z: 0},
    {x: 0, y: 10, z: 10},
    {x: 10, y: 0, z: 10},
    {x: 0, y: 0, z: 10},
    {x: 0, y: 0, z: 0}
]
const lines = new THREE.BufferGeometry().setFromPoints(points)

/**
 * 虚线
 * @type {LineDashedMaterial}
 */
const material = new THREE.LineDashedMaterial({
    color: 0xff0000,
    dashSize: 1,
    gapSize: 1,
    scale: 1
})

const line = new THREE.Line(lines, material)
line.computeLineDistances() // 必须调用这个
scene.add(line)

gui.add(material, 'dashSize', 0, 10, .1)
gui.add(material, 'gapSize', 0, 10, .1)
gui.add(material, 'scale', 0, 10, .1)

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