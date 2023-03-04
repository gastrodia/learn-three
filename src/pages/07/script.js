import 'uno.css'

/* 几何体 */
import * as THREE from 'three'
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import heartGeometry from './heart'
import {loadFont, genTextGeometry} from './text'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-50, 30, 20)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x555555)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff, 1.2, 150, Math.PI / 4, 0, 2)
spotLight.position.set(-40, 30, 30)
spotLight.castShadow = true
scene.add(spotLight)

const planeGeometry = new THREE.PlaneGeometry(60, 40)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true
plane.rotation.x = -(Math.PI / 2)
scene.add(plane)

const font = await loadFont
const textGeometry = genTextGeometry('Three.js', font)

const geometry = [
    new THREE.RingGeometry(2, 5, 30),
    new THREE.CircleGeometry(5, 30), // 圆形
    new THREE.CylinderGeometry(5, 5, 10, 30), // 圆柱
    new THREE.ConeGeometry(5, 5, 32), // 圆锥
    new THREE.SphereGeometry(5), // 球体
    new THREE.TetrahedronGeometry(5), // 四面体
    new THREE.BoxGeometry(5, 5, 5), // 六面体
    new THREE.OctahedronGeometry(5), // 八面体
    new THREE.DodecahedronGeometry(5), // 十二面体
    new THREE.IcosahedronGeometry(5), // 二十面体
    new THREE.TorusGeometry(3, 1, 10, 100), // 环形
    new THREE.TorusKnotGeometry(3, 1, 50, 10), // 圆环缓冲扭结几何体
    textGeometry,
    heartGeometry
]


let col = 0
geometry.forEach((geom, index) => {
    const materials = [
        new THREE.MeshLambertMaterial({
            opacity: .7,
            color: Math.random() * 0xffffff,
            transparent: true
        }),
        new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true
        })
    ]
    const mesh = createMultiMaterialObject(geom, materials)
    mesh.position.x = ((index % 5) * 12) - 24
    mesh.position.y = 4
    mesh.position.z = -12 + (col * 12)
    mesh.traverse(e => e.castShadow = true)


    if ((index + 1) % 5 === 0) {
        col++
    }
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