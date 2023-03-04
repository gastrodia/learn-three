import 'uno.css'

/* SpotLight 聚光灯*/
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

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const planeGeometry = new THREE.PlaneGeometry(80, 40, 120, 120)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.name = 'plane'
plane.receiveShadow = true
plane.rotation.x = -(Math.PI / 2)
scene.add(plane)

const spotLightBase = new THREE.SpotLight(0x999999)
spotLightBase.position.set(-50, 10, -20)
spotLightBase.lookAt(plane)
scene.add(spotLightBase)


const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(-5, 30, -5)
spotLight.castShadow = true
spotLight.target = plane
spotLight.shadow.camera.near = 1
spotLight.shadow.camera.far = 100
spotLight.distance = 60
spotLight.angle = 0.4
spotLight.intensity = 2
spotLight.penumbra = 1
scene.add(spotLight)

const debugCamera = new THREE.CameraHelper(spotLight.shadow.camera)

const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true
})

const cubeGeometry = new THREE.BoxGeometry(8, 8, 8)
const cubeMaterials = [
    new THREE.MeshLambertMaterial({
        opacity: .7,
        color: Math.random() * 0xffffff,
        transparent: true
    }),
    wireframeMaterial
]

const cube = createMultiMaterialObject(cubeGeometry, cubeMaterials)
cube.name = 'cube'
cube.traverse(e => e.castShadow = true)
cube.position.y = 4
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

const control = {
    disabledSpotLight: false,
    target: 'plane',
    debugCamera: false,
    distance: 60,
    angle: 0.4,
    intensity: 2,
    penumbra: 1,
    color: 0xffffff
}

gui.add(control, 'disabledSpotLight').onChange(e => spotLight.visible = !e)
gui.add(control, 'debugCamera').onChange(e => {
    e ? scene.add(debugCamera) : scene.remove(debugCamera)
})

gui.add(control, 'distance', 0, 200).onChange(e => spotLight.distance = e)
gui.add(control, 'angle', 0, 2 * Math.PI).onChange(e => spotLight.angle = e)
gui.add(control, 'intensity', 0, 5).onChange(e => spotLight.intensity = e)
gui.add(control, 'penumbra', 0, 1).onChange(e => spotLight.penumbra = e)
gui.addColor(control, 'color').onChange(e => {
    spotLight.color = new THREE.Color(e)
})

gui.add(control, 'target', ['plane', 'cube', 'sphere']).onChange(e => {
    spotLight.target = scene.getObjectByName(e)
})


const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

let step = 0

const render = () => {

    step += 0.04

    sphere.position.x = Math.sin(step) * 30
    sphere.position.y = Math.abs(Math.cos(step)) * 10 + 4

    spotLightHelper.update()
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()