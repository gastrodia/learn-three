/* 添加三维坐标系和平面 */
import * as THREE from 'three'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
camera.position.set(200, 200, 300)
camera.lookAt(scene.position)

// 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const planeGeometry = new THREE.PlaneGeometry(50, 50)
const planeMaterial = new THREE.MeshBasicMaterial({color: 'cyan'})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)

plane.position.set(25, 0, 25)
plane.rotation.x = -0.5 * Math.PI
scene.add(plane)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)