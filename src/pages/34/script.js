import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"
import {ParametricGeometries} from "three/examples/jsm/geometries/ParametricGeometries"
import {ParametricGeometry} from "three/examples/jsm/geometries/ParametricGeometry"

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(40, 40, 40)
camera.lookAt(scene.position)

/*const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)*/

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const material = new THREE.MeshLambertMaterial({color: 0x007700, side: THREE.DoubleSide})

/* 克莱因瓶 */
const kleinGeometry = new ParametricGeometry(ParametricGeometries.klein, 25, 25)
const klein = new THREE.Mesh(kleinGeometry, material)
scene.add(klein)

/* 2d莫比乌斯环 */
const mobiusGeometry = new ParametricGeometry(ParametricGeometries.mobius, 25, 25)
const mobius = new THREE.Mesh(mobiusGeometry, material)
mobius.position.x = 10
scene.add(mobius)

/* 3d莫比乌斯环 */
const mobius3dGeometry = new ParametricGeometry(ParametricGeometries.mobius3d, 25, 100)
const mobius3d = new THREE.Mesh(mobius3dGeometry, material)
mobius3d.position.x = 18
scene.add(mobius3d)

/* 平面 */
const planeGeometry = new ParametricGeometry(ParametricGeometries.plane(10, 10), 10, 10)
const plane = new THREE.Mesh(planeGeometry, material)
plane.position.x = 22
scene.add(plane)

/* 自定义参数化 */
/**
 * @param {number} r
 * @type {ParametricGeometry.parameters.func}
 */
function wareGen(r = 10) {
    return (u, v, v3) => {
        const result = v3 || new THREE.Vector3()
        const x = Math.sin(u) * r
        const z = Math.sin(v / 2) * 2 * r
        const y = (Math.sin(u * 4 * Math.PI) + Math.cos(v * 2 * Math.PI)) * 2.8
        return result.set(x, y, z)
    }
}

const wareGeometry = new ParametricGeometry(wareGen(20), 25, 25)
const ware = new THREE.Mesh(wareGeometry, material)
ware.position.x = -30
scene.add(ware)

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