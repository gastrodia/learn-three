import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {mergeBufferGeometries} from "three/examples/jsm/utils/BufferGeometryUtils";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 0, 50)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const material = new THREE.MeshLambertMaterial({color: 0xffff00})

/*
const group = new THREE.Group()
const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100)
const torus = new THREE.Mesh(torusGeometry, material)
group.add(torus)

const boxGeometry = new THREE.BoxGeometry(5, 5, 5)
const cube = new THREE.Mesh(boxGeometry, material)
group.add(cube)
scene.add(group)
*/

const geometries = [
    new THREE.TorusGeometry(10, 2, 16, 100),
    new THREE.BoxGeometry(5, 5, 5)
]

const materials = [
    new THREE.MeshLambertMaterial({color: 0xffff00}),
    new THREE.MeshLambertMaterial({color: 0x00ffff})
]

const mergeGeometry = mergeBufferGeometries(geometries, true)
const mesh = new THREE.Mesh(mergeGeometry, materials)
scene.add(mesh)

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