import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

import {createMaterial, getShader} from './createMaterial'

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(20, 20, 20)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)


const boxGeometry = new THREE.BoxGeometry(8, 8, 8)

const vertexShader = getShader('#vertex-shader')
const fragmentShader1 = getShader('#fragment-shader-1')
const fragmentShader2 = getShader('#fragment-shader-2')
const fragmentShader3 = getShader('#fragment-shader-3')
const fragmentShader4 = getShader('#fragment-shader-4')
const fragmentShader5 = getShader('#fragment-shader-5')
const fragmentShader6 = getShader('#fragment-shader-6')

const material = [
    createMaterial(vertexShader, fragmentShader1, WIDTH, HEIGHT),
    createMaterial(vertexShader, fragmentShader2, WIDTH, HEIGHT),
    createMaterial(vertexShader, fragmentShader3, WIDTH, HEIGHT),
    createMaterial(vertexShader, fragmentShader4, WIDTH, HEIGHT),
    createMaterial(vertexShader, fragmentShader5, WIDTH, HEIGHT),
    createMaterial(vertexShader, fragmentShader6, WIDTH, HEIGHT)
]

const box = new THREE.Mesh(boxGeometry, material)
box.position.y = 4
scene.add(box)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

const step = .01
const render = () => {
    /*box.rotation.x += step
    box.rotation.y += step
    box.rotation.z += step*/

 /*   box.material.forEach(v => {
        v.uniforms.time.value += 0.005
    })*/
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()