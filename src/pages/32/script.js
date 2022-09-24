import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(20, 20, 20)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)


const points = []

const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xff0000})

for (let i = 0; i <= 4 * Math.PI; i += (Math.PI / 2)) {
    const point = new THREE.Vector3(
        i * 2, Math.sin(i) * 4, 0
    )
    const sphereGeometry = new THREE.SphereGeometry(.1)
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.copy(point)
    points.push(point)
    scene.add(sphere)
}
// 生产路径
const path = new THREE.CatmullRomCurve3(points)
const lineGeometry = new THREE.BufferGeometry()
// 线段坐标从路径中获取
lineGeometry.setFromPoints(path.getPoints(100))
const lineMaterial = new THREE.LineBasicMaterial({color: 0xff0000})
const line = new THREE.Line(lineGeometry, lineMaterial)
scene.add(line)
/**
 * path — Curve - 一个由基类Curve继承而来的3D路径。 Default is a quadratic bezier curve.
 * tubularSegments — Integer - 组成这一管道的分段数，默认值为64。
 * radius — Float - 管道的半径，默认值为1。
 * radialSegments — Integer - 管道横截面的分段数目，默认值为8。
 * closed — Boolean 管道的两端是否闭合，默认值为false。
 * @type {TubeGeometry}
 */
const tubeGeometry = new THREE.TubeGeometry(path, 64, 1.6, 8, false)
const material = [
    new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    }),
    new THREE.MeshLambertMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: .8
    })
]

const tube = createMultiMaterialObject(tubeGeometry, material)
scene.add(tube)

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