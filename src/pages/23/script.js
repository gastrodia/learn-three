import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(28, 30, 28)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const floorGeometry = new THREE.PlaneGeometry(60, 60)
const floorMaterial = new THREE.MeshLambertMaterial({color: 0x999999})
const floor = new THREE.Mesh(floorGeometry, floorMaterial)
floor.rotation.x = -0.5 * Math.PI
floor.receiveShadow = true
scene.add(floor)

const boxGeometry = new THREE.SphereGeometry(8, 50, 50)
/**
 * @type {MeshStandardMaterial}
 * 一种基于物理的标准材质
 * 这种方法与旧方法的不同之处在于，
 * 不使用近似值来表示光与表面的相互作用，
 * 而是使用物理上正确的模型。
 * 不是在特定照明下调整材质以使其看起来很好，
 * 而是可以创建一种材质，能够“正确”地应对所有光照场景。
 */
const boxMaterial = new THREE.MeshStandardMaterial({
    color: 0x7777ff,
    emissive: 0x000000,
    // 材质与金属的相似度。
    // 非金属材质，如木材或石材，使用0.0，
    // 金属使用1.0，通常没有中间值。
    // 默认值为0.0。0.0到1.0之间的值可用于生锈金属的外观。
    metalness: .5,
    // 材质的粗糙程度。
    // 0.0表示平滑的镜面反射，
    // 1.0表示完全漫反射。默认值为1.0。
    roughness: 1
})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.castShadow = true
box.position.y = 8
scene.add(box)

const control = {
    emissive: boxMaterial.emissive.getHex(),
}

console.log(boxMaterial)
gui.add(spotLight, 'visible')
gui.add(spotLight, 'intensity', 0, 2)
gui.add(boxMaterial, 'wireframe')
gui.add(boxMaterial, 'metalness', 0, 1)
gui.add(boxMaterial, 'roughness', 0, 1)
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