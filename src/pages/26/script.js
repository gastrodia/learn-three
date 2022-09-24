import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"

import Gosper from "@/utils/gosper"

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

// TODO next remove Gosper
// const points = new Gosper(3, 12).genGosper()
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
 * 基础线
 * @type {LineBasicMaterial}
 */
const material = new THREE.LineBasicMaterial({
    color: 0xff0000
})
console.log(material)
const line = new THREE.Line(lines, material)
scene.add(line)

const control = {
    color: material.color.getHex()
}
gui.addColor(control, 'color').onChange(e => {
    line.material.color = new THREE.Color(e)
})

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