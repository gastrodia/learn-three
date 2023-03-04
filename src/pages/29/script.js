import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"
import {ConvexGeometry} from "three/examples/jsm/geometries/ConvexGeometry";

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

for (let i = 0; i < 20; i++) {
    const point = new THREE.Vector3(
        Math.round(Math.random() * 30) + 10,
        Math.round(Math.random() * 30) + 10,
        Math.round(Math.random() * 30) + 10
    )
    const sphereGeometry = new THREE.SphereGeometry(.2)
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.copy(point)
    points.push(point)
    scene.add(sphere)
}

const convexGeometry = new ConvexGeometry(points)
const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
    wireframe: true
})
const convex = new THREE.Mesh(convexGeometry, material)
scene.add(convex)

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