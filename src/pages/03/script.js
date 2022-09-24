/*添加材质灯光和阴影*/
import * as THREE from 'three'

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

// antialias 抗锯齿
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
// 开启阴影
renderer.shadowMapEnabled = true
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)