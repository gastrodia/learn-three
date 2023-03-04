import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import modelFile from '@/assets/models/glb/bee.glb?url'
import {GUI} from 'dat.gui'

const gui = new GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(20, 20, 10)
camera.lookAt(scene.position)

const hemisphereLight = new THREE.HemisphereLight(0x666666, 0xffffff, 3)
hemisphereLight.position.set(100, 100, 100)
scene.add(hemisphereLight)

const clock = new THREE.Clock()
const gltfLoader = new GLTFLoader()
const store = {
    animation: null,
    mixer: null,
    action: null,
    clip: null
}
const control = {
    index: 0
}
gltfLoader.load(modelFile, model => {
    scene.add(model.scene)
    animationSetup(model, control.index)
    guiSetup(model)
})

const animationSetup = (model, index) => {
    store.mixer = new THREE.AnimationMixer(model.scene)
    store.animation = model.animations[index]
    store.action = store.mixer.clipAction(store.animation).play()
    store.clip = store.action.getClip()
}

const guiSetup = (model) => {
    gui.add(control, 'index', model.animations.map((v, i) => i)).onChange(i => {
        animationSetup(model, i)
    })
}

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)
new OrbitControls(camera, renderer.domElement)
const render = () => {
    if (store.mixer && store.action) {
        store.mixer.update(clock.getDelta())
    }
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(render)
