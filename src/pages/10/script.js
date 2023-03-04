import 'uno.css'

/* PointLight 点光源*/
import * as THREE from 'three'
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const gui = new dat.GUI()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-60, 60, 40)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const planeGeometry = new THREE.PlaneGeometry(80, 40, 120, 120)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.name = 'plane'
plane.receiveShadow = true
plane.rotation.x = -(Math.PI / 2)
scene.add(plane)

const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true
})

const cubeGeometry = new THREE.BoxGeometry(8, 20, 8)
const cubeMaterials = [
    new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
    }),
    wireframeMaterial
]

const cube = createMultiMaterialObject(cubeGeometry, cubeMaterials)
cube.name = 'cube'
cube.traverse(e => e.castShadow = true)
cube.position.y = 10
cube.position.x = -16
scene.add(cube)

const sphereGeometry = new THREE.SphereGeometry(4, 20, 20) // 球体
const sphereMaterial = new THREE.MeshLambertMaterial({
    color: Math.random() * 0xffffff
})

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.name = 'sphere'
sphere.traverse(e => e.castShadow = true)
sphere.position.y = 4
sphere.position.x = 16
scene.add(sphere)

const pointLight = new THREE.PointLight(0x999999)
pointLight.position.set(0, 4, 0)
pointLight.castShadow = true
pointLight.intensity = 1 // 光照的强度 默认值是1
pointLight.distance = 100 // 光源照射的距离
scene.add(pointLight)

const pointLightHelper = new THREE.PointLightHelper(pointLight)
scene.add(pointLightHelper)

const debugCamera = new THREE.CameraHelper(pointLight.shadow.camera)
// scene.add(debugCamera)

const control = {
    speed: 0.01,
    intensity: 1,
    distance: 100,
    color: 0x999999,
    debug: false
}

gui.add(control, 'speed', 0, 0.1)
gui.add(control, 'intensity', 0, 3).onChange(e => pointLight.intensity = e)
gui.add(control, 'distance', 0, 100).onChange(e => pointLight.distance = e)
gui.addColor(control, 'color').onChange(e => {
    pointLight.color = new THREE.Color(e)
})
gui.add(control, 'debug').onChange(e => {
    e ? scene.add(debugCamera) : scene.remove(debugCamera)
})

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

let phase = 0

const render = () => {
    pointLightHelper.update()
    phase += control.speed

    pointLight.position.z = Math.sin(phase) * 24
    pointLight.position.x = Math.cos(phase) * 24
    pointLight.position.y = Math.abs(Math.sin(phase) * 24)

    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()