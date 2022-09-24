/* DirectionalLight 平行光（太阳光）*/
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
/* core START */
const directionalLight = new THREE.DirectionalLight(0xffffff)
directionalLight.position.set(20, 20, 0)
directionalLight.castShadow = true
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 80
directionalLight.shadow.camera.left = -20
directionalLight.shadow.camera.right = 20
directionalLight.shadow.camera.top = 20
directionalLight.shadow.camera.bottom = -20

directionalLight.intensity = 1
directionalLight.shadow.mapSize.width = WIDTH
directionalLight.shadow.mapSize.height = HEIGHT
directionalLight.target = plane
scene.add(directionalLight)

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
scene.add(directionalLightHelper)
/* core END */

const debugCamera = new THREE.CameraHelper(directionalLight.shadow.camera)
scene.add(debugCamera)

const control = {
    intensity: 1,
    x: 20,
    y: 20,
    z: 20,
    debug: true,
    target: 'plane'
}

gui.add(control, 'intensity', 0, 3).onChange(e => directionalLight.intensity = e)
gui.add(control, 'x', -20, 20).onChange(e => {
    directionalLight.position.x = e
})

gui.add(control, 'y', -20, 20).onChange(e => {
    directionalLight.position.y = e
})

gui.add(control, 'z', -20, 20).onChange(e => {
    directionalLight.position.z = e
})

gui.add(control, 'debug').onChange(e => {
    e ? scene.add(debugCamera) : scene.remove(debugCamera)
})

gui.add(control, 'target', ['plane', 'cube', 'sphere']).onChange(e => {
    directionalLight.target = scene.getObjectByName(e)
})

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

const render = () => {
    directionalLightHelper.update()
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()