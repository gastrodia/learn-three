/* 半球光（HemisphereLight）*/
import * as THREE from 'three'
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const gui = new dat.GUI()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-100, 100, 100)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 20, 20)
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

// HemisphereLight 不能投影
const hemisphereLight = new THREE.HemisphereLight(0x666666, 0x080820, .6)
hemisphereLight.position.set(0, 500, 0)
scene.add(hemisphereLight)

const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight)
scene.add(hemisphereLightHelper)

const control = {
    hemisphereLight: true
}

gui.add(control, 'hemisphereLight').onChange(e => hemisphereLight.visible = e)

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