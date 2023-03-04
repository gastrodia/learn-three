import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(20, 20, 20)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const shape = new THREE.Shape()

shape.moveTo(0, 0)
shape.lineTo(5, 5)
shape.lineTo(10, 5)
shape.lineTo(5, 10)
shape.lineTo(0, 10)
// shape.lineTo(0, 0)

const extrudeOptions = {
    steps: 2, // 用于沿着挤出样条的深度细分的点的数量
    bevelEnabled: true, // 是否斜角
    depth: 10, // 深度
    bevelSize: 1 // 斜角与原始形状轮廓之间的延伸距离
}
console.log(shape)
const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeOptions)
const material = [
    new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    }),
    new THREE.MeshLambertMaterial({
        color: 0xffff00
    })
]

const extrude = createMultiMaterialObject(extrudeGeometry, material)
scene.add(extrude)
// gui.add(extrude, 'steps', 0, 10)

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