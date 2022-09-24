import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(30, 30, 30)
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
 * @type {MeshLambertMaterial}
 * 一种非光泽表面的材质，没有镜面高光。
 * 该材质使用基于非物理的 Lambertian 模型来计算反射率。
 * 这可以很好地模拟一些表面（例如未经处理的木材或石材）
 * 但不能模拟具有镜面高光的光泽表面（例如涂漆木材）。
 */
const boxMaterial = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
    emissive: 0x0000ff // 自发光
})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.castShadow = true
box.position.y = 4
scene.add(box)

const control = {
    emissive: boxMaterial.emissive.getHex()
}

gui.add(boxMaterial, 'wireframe')
gui.add(spotLight, 'visible')
gui.addColor(control, 'emissive').onChange(e => {
    boxMaterial.emissive = new THREE.Color(e)
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