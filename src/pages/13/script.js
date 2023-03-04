import 'uno.css'

/* 平面光光源（RectAreaLight）*/
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui";
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib"

import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper";

// 不支持阴影。
// 只支持 MeshStandardMaterial 和 MeshPhysicalMaterial 两种材质。
// 必须在你的场景中加入 RectAreaLightUniformsLib ，并调用init()。

RectAreaLightUniformsLib.init()

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const gui = new dat.GUI()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-10, 50, 40)
camera.lookAt(scene.position)


const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const planeGeometry = new THREE.PlaneGeometry(60, 20, 120, 120)
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080,
    roughness: 1,
    metalness: 0
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.name = 'plane'
plane.receiveShadow = true
plane.rotation.x = -(Math.PI / 2)
scene.add(plane)

/* 1 */
const light_1 = new THREE.RectAreaLight(0xff0000, 10, 4, 10)
light_1.position.set(-4, 5, -10)
light_1.rotation.x = -Math.PI
scene.add(light_1)

const planGeometry_1 = new THREE.PlaneGeometry(light_1.width, light_1.height)
// side: THREE.BackSide 只能从后面观察到
// FrontSide 前面
// DoubleSize 双侧
const planMaterial_1 = new THREE.MeshBasicMaterial({side: THREE.BackSide, color: light_1.color})
const plane_1 = new THREE.Mesh(planGeometry_1, planMaterial_1)
light_1.add(plane_1)

/* 2 */
const light_2 = new THREE.RectAreaLight(0x00ff00, 10, 4, 10)
light_2.position.set(0, 5, -10)
light_2.rotation.x = -Math.PI
scene.add(light_2)

const planGeometry_2 = new THREE.PlaneGeometry(light_2.width, light_2.height)
const planMaterial_2 = new THREE.MeshBasicMaterial({side: THREE.BackSide, color: light_2.color})
const plane_2 = new THREE.Mesh(planGeometry_2, planMaterial_2)
light_2.add(plane_2)

/* 3 */
const light_3 = new THREE.RectAreaLight(0x0000ff, 10, 4, 10)
light_3.position.set(4, 5, -10)
light_3.rotation.x = -Math.PI
scene.add(light_3)

const planGeometry_3 = new THREE.PlaneGeometry(light_3.width, light_3.height)
const planMaterial_3 = new THREE.MeshBasicMaterial({side: THREE.BackSide, color: light_3.color})
const plane_3 = new THREE.Mesh(planGeometry_3, planMaterial_3)
light_3.add(plane_3)

const light_4 = new THREE.RectAreaLight(0xff00ff, 10, 4, 10)
light_4.position.set(24, 5, -10)
light_4.rotation.x = -Math.PI
scene.add(light_4)

const rectAreaLightHelper = new RectAreaLightHelper(light_4)
scene.add(rectAreaLightHelper)

const control = {
    intensity: 10
}

gui.add(control, 'intensity', 0, 20).onChange(e => {
    light_1.intensity = e
    light_2.intensity = e
    light_3.intensity = e
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