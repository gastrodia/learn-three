import 'uno.css'

/* 克隆 多材质和线框 */
import * as THREE from 'three'
import {createMultiMaterialObject} from 'three/examples/jsm/utils/SceneUtils.js'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
camera.position.set(-200, 200, 400)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x494949)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff, 1, 1000, Math.PI / 4)
spotLight.position.set(-100, 340, -200)
scene.add(spotLight)

const cubeGeometry = new THREE.BoxGeometry(50, 50, 50)
const cubeMaterial = new THREE.MeshLambertMaterial({color: 'blue'})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.set(25, 25, 25)
scene.add(cube)


const cloneGeometry = cube.geometry.clone()
const materials = [
    new THREE.MeshLambertMaterial({
        opacity: 0.6,
        color: 0xff44ff,
        transparent: true
    }),
    new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true // 线框
    })
]

const cloneCube = createMultiMaterialObject(cloneGeometry, materials)
cloneCube.translateX(100)
cloneCube.translateY(25)
cloneCube.translateZ(25)
scene.add(cloneCube)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)