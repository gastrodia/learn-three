/* 环境光 */
import * as THREE from 'three'
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const gui = new dat.GUI()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-50, 30, 20)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x555555)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff, 1.2, 150, Math.PI / 4, 0, 2)
spotLight.position.set(-40, 30, 30)
spotLight.castShadow = true
scene.add(spotLight)

const planeGeometry = new THREE.PlaneGeometry(60, 40)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true
plane.rotation.x = -(Math.PI / 2)
scene.add(plane)


const cubeGeometry = new THREE.BoxGeometry(6, 10, 6)
const cubeMaterials = [
    new THREE.MeshLambertMaterial({
        opacity: .7,
        color: Math.random() * 0xffffff,
        transparent: true
    }),
    new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true
    })
]
const cube = createMultiMaterialObject(cubeGeometry, cubeMaterials)
cube.traverse(e => e.castShadow = true)
cube.position.y = 5
scene.add(cube)


const control = {
    disabledSpotLight: false,
    ambientLightStrength: ambientLight.intensity,
    ambientLightColor: ambientLight.color.getStyle(),
}

gui.add(control, 'disabledSpotLight').onChange(e => spotLight.visible = !e)
gui.add(control, 'ambientLightStrength', 0, 3, 0.1).onChange(e => {
    ambientLight.intensity = e
})
gui.addColor(control, 'ambientLightColor').onChange(e => {
    ambientLight.color = new THREE.Color(e)
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