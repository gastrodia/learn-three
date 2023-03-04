import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import TWEEN from "@tweenjs/tween.js";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 16, 26)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0x999999, 2)
spotLight.position.set(-10, 10, 10)
spotLight.castShadow = true
scene.add(spotLight)

const boxGeometry = new THREE.BoxGeometry(4, 4, 4)
const boxMaterial = new THREE.MeshLambertMaterial({color: 0xfff000})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

const scope = 10

const tweenOne = new TWEEN.Tween({x: -scope})
tweenOne.to({x: scope}, 3000)
tweenOne.easing(TWEEN.Easing.Quadratic.Out)

const tweenTwo = new TWEEN.Tween({x: scope})
tweenTwo.to({x: -scope}, 3000)
tweenTwo.easing(TWEEN.Easing.Bounce.InOut)

tweenTwo.chain(tweenOne)
tweenOne.chain(tweenTwo)

const onUpdate = (e) => {
    box.position.x = e.x
}
tweenOne.onUpdate(onUpdate)
tweenTwo.onUpdate(onUpdate)

tweenOne.start()

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)


new OrbitControls(camera, renderer.domElement)
const render = () => {
    TWEEN.update()
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()