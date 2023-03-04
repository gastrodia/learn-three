import 'uno.css'

/* 动画扩展你的首个场景 */
import * as THREE from 'three'
import Stats from "stats.js"
import dat from 'dat.gui'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

/**
 * 参数   mode     模式    意义
 * 0     FPS      刷新频率,一秒渲染次数
 * 1     MS       刷新周期，渲染一次时间
 */

const initStats = () => {
    const stats = new Stats()
    stats.setMode(0)
    document.body.appendChild(stats.domElement)
    return stats
}

const stats = initStats()

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
camera.position.set(-200, 200, 300)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(250)
scene.add(axesHelper)

/* 聚光灯 */
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(-100, 340, -200)
// 开启投影
spotLight.castShadow = true
scene.add(spotLight)

/* 平面 */
const planeGeometry = new THREE.PlaneGeometry(200, 200)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
// 接受投影
plane.receiveShadow = true
plane.position.set(100, 0, 100)
plane.rotation.x = -0.5 * Math.PI
scene.add(plane)

/* 立方体 */
const cubeGeometry = new THREE.BoxGeometry(50, 50, 50)
const cubeMaterial = new THREE.MeshLambertMaterial({color: 'blue'})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.set(25, 25, 25)
// 开启投影
cube.castShadow = true
scene.add(cube)

/* 球体 */
const sphereGeometry = new THREE.SphereGeometry(20)
const sphereMaterial = new THREE.MeshLambertMaterial({color: 'green'})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.set(100 - 20, 20, 100 - 20)
sphere.castShadow = true
scene.add(sphere)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)
// renderer.render(scene, camera)

let step = 0
const controls = {
    rotationSpeed: 0.04,
    bouncingSpeed: 0.04
}

const gui = new dat.GUI()
gui.add(controls, 'rotationSpeed', 0, 1)
gui.add(controls, 'bouncingSpeed', 0, 1)

const render = () => {
    cube.rotation.x += controls.rotationSpeed
    cube.rotation.y += controls.rotationSpeed
    cube.rotation.z += controls.rotationSpeed

    step += controls.bouncingSpeed
    sphere.position.x = 120 + (40 * (Math.cos(step)))
    sphere.position.y = 20 + (40 * Math.abs(Math.sin(step)))

    stats.update()
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

const onWindowResize = (e) => {
    const {innerWidth: _WIDTH, innerHeight: _HEIGHT} = e.target
    camera.aspect = _WIDTH / _HEIGHT
    camera.updateProjectionMatrix()
    renderer.setSize(_WIDTH, _HEIGHT)
}

new OrbitControls(camera, renderer.domElement)
window.addEventListener('resize', onWindowResize)

render()