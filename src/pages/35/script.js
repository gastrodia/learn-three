import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 0, 160)
camera.lookAt(scene.position)

/*const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)*/

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)


for (let x = -10; x < 10; x++) {
    for (let y = -10; y < 10; y++) {
        const material = new THREE.SpriteMaterial({color: 0xffffff * Math.random()})
        const sprite = new THREE.Sprite(material)
        sprite.position.set(x * 4, y * 4, 0)
        scene.add(sprite)
    }
}

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