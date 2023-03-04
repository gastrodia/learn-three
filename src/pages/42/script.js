import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import modelFile from '@/assets/models/glb/bee.glb?url'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(20, 20, 10)
camera.lookAt(scene.position)

const hemisphereLight = new THREE.HemisphereLight(0x666666, 0xffffff, 3)
hemisphereLight.position.set(100, 100, 100)
scene.add(hemisphereLight)

const gltfLoader = new GLTFLoader()
gltfLoader.load(modelFile, model => {
    console.log(model)
    scene.add(model.scene)
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