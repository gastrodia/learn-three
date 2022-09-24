import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import modelFile from '@/assets/models/obj/vespa.obj?url'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 0, 20)
camera.lookAt(scene.position)

const hemisphereLight = new THREE.HemisphereLight(0x666666, 0xffffff, 3)
hemisphereLight.position.set(100, 100, 100)
scene.add(hemisphereLight)

const normalMaterial = new THREE.MeshNormalMaterial(
    {
        wireframe: false
    }
)
const objLoader = new OBJLoader()
objLoader.load(modelFile, mesh => {
    mesh.children.forEach(v => {
        v.material = normalMaterial
    })
    // mesh.scale.set(6, 6, 6)
    mesh.position.y = -5
    scene.add(mesh)
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