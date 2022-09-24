import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui"
import {createMultiMaterialObject} from "three/examples/jsm/utils/SceneUtils";
import {SVGLoader} from "three/examples/jsm/loaders/SVGLoader";
import svgPath from '@/assets/svg/radio.svg'

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

const svgLoader = new SVGLoader()

svgLoader.load(svgPath, svg => {
    // TODO path to geometry
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