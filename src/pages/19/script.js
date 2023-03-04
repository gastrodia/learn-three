import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)

camera.position.set(-50, 30, 50)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const materialGroup = []

for (let i = 0; i < 6; i++) {
    /**
     * @type {MeshBasicMaterial}
     * 一个以简单着色（平面或线框）方式来绘制几何体的材质。
     * 这种材质不受光照的影响。
     */
    const basicMaterial = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff})
    materialGroup.push(basicMaterial)
}

/**
 * 材质组
 * @type {THREE.Mesh}
 */
const group = new THREE.Mesh()

const gap = 5
const pow = (Math.pow(gap, 2) / 2) - (gap / 2)
for (let x = 0; x < gap; x++) {
    for (let y = 0; y < gap; y++) {
        for (let z = 0; z < gap; z++) {
            const boxGeometry = new THREE.BoxGeometry(gap - .1, gap - .1, gap - .1)
            const box = new THREE.Mesh(boxGeometry, materialGroup)
            box.position.set(
                x * gap - pow,
                y * gap - pow,
                z * gap - pow,
            )
            group.add(box)
        }
    }
}

scene.add(group)

/*const boxGeometry = new THREE.BoxGeometry(8, 8, 8)
const box = new THREE.Mesh(boxGeometry, materialGroup)
scene.add(box)*/


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