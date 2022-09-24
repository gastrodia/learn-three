import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 16, 26)
camera.lookAt(scene.position)

const spotLight = new THREE.SpotLight(0xffffff, 2)
spotLight.position.set(-10, 10, 10)
spotLight.castShadow = true
scene.add(spotLight)

const planeGeometry = new THREE.PlaneGeometry(20, 10)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0x666666})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -Math.PI * .5
plane.receiveShadow = true
scene.add(plane)

const boxGeometry = new THREE.BoxGeometry(4, 4, 4)
const boxMaterial = new THREE.MeshLambertMaterial({color: 0x000fff})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.castShadow = true
box.position.y = 2
box.position.x = 6
scene.add(box)

const sphereGeometry = new THREE.SphereGeometry(2)
const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xfff000})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.castShadow = true
sphere.position.y = 2
sphere.position.x = -6
scene.add(sphere)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

const onClick = e => {
    const x = (e.clientX / WIDTH) * 2 - 1
    const y = (e.clientY / HEIGHT) * -2 + 1
    console.log(y)
}

renderer.domElement.addEventListener('click', onClick)
new OrbitControls(camera, renderer.domElement)
const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()