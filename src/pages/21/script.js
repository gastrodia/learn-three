import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(30, 10, 30)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 30, 50)
scene.add(spotLight)

const floorGeometry = new THREE.PlaneGeometry(60, 60)
const floorMaterial = new THREE.MeshLambertMaterial({color: 0x999999})
const floor = new THREE.Mesh(floorGeometry, floorMaterial)
floor.rotation.x = -0.5 * Math.PI
floor.receiveShadow = true
scene.add(floor)

const boxGeometry = new THREE.BoxGeometry(8, 8, 8)
/**
 * @type {MeshPhongMaterial}
 * 一种用于具有镜面高光的光泽表面的材质。
 * 该材质使用非物理的Blinn-Phong模型来计算反射率。
 * 与MeshLambertMaterial中使用的Lambertian模型不同，
 * 该材质可以模拟具有镜面高光的光泽表面（例如涂漆木材）
 *
 * 拖动场景可以发现物体会反射光
 */
const boxMaterial = new THREE.MeshPhongMaterial({
    color: 0x7777ff,
    emissive: 0x000000, // 自发光
    specular: 0xff0000, // 材质的高光颜色
    shininess: 30 // 高亮的程度
})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.castShadow = true
box.position.y = 4
scene.add(box)

const control = {
    emissive: boxMaterial.emissive.getHex(),
    specular: boxMaterial.specular.getHex(),
}

console.log(boxMaterial)
gui.add(boxMaterial, 'wireframe')
gui.add(boxMaterial, 'shininess', 0, 100)
gui.add(spotLight, 'visible')
gui.addColor(control, 'emissive').onChange(e => {
    boxMaterial.emissive = new THREE.Color(e)
})
gui.addColor(control, 'specular').onChange(e => {
    boxMaterial.specular = new THREE.Color(e)
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