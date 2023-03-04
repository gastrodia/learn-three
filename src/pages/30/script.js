import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils.js";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(50, 50, 100)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const points = []

const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xff0000})

for (let i = -20; i <= 0; i++) {
    const point = new THREE.Vector3(
        // i * 2, Math.sin(i) * 4, 0
        i * 2, i * 2, 0
        // Math.sin(i) * 4, i * 2, 0
    )
    const sphereGeometry = new THREE.SphereGeometry(.2)
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.copy(point)
    points.push(point)
    scene.add(sphere)
}

const latheGeometry = new THREE.LatheGeometry(points)
const material = [
    new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    }),
    new THREE.MeshLambertMaterial({
        color: 0xffff00
    })
]

const lathe = createMultiMaterialObject(latheGeometry, material)
scene.add(lathe)

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