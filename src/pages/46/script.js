import * as THREE from 'three'
import {FlyControls} from "three/examples/jsm/controls/FlyControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import modelFile from '@/assets/models/obj/city.obj?url'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-80, 60, 200)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0x999999)
spotLight.position.set(0, 200, 200)
spotLight.castShadow = true
scene.add(spotLight)

let loaded = false
const objLoader = new OBJLoader()
objLoader.load(modelFile, (model) => {
    scene.add(model)
    loaded = true
})

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

const clock = new THREE.Clock()
const flyControls = new FlyControls(camera, renderer.domElement)
flyControls.movementSpeed = 25
flyControls.rollSpeed = Math.PI / 12
flyControls.autoForward = false
flyControls.dragToLook = true

const render = () => {
    if (loaded) {
        flyControls.update(clock.getDelta())
    }
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()