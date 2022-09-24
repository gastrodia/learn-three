/* 平面光光源（RectAreaLight）*/
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import dat from "dat.gui";
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib"
import {LensflareElement, Lensflare} from "three/examples/jsm/objects/Lensflare";

import textureFlare0Img from '@/assets/textures/flares/lensflare0.png'
import textureFlare3Img from '@/assets/textures/flares/lensflare3.png'

RectAreaLightUniformsLib.init()

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const gui = new dat.GUI()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-10, 10, 40)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x1c1c1c)
scene.add(ambientLight)

const planeGeometry = new THREE.PlaneGeometry(60, 40, 120, 120)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.name = 'plane'
plane.receiveShadow = true
plane.rotation.x = -(Math.PI / 2)
scene.add(plane)

const directionalLight = new THREE.DirectionalLight(0x333333)
directionalLight.position.set(20, 5, -20)
directionalLight.castShadow = true
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 80
directionalLight.shadow.camera.left = -20
directionalLight.shadow.camera.right = 20
directionalLight.shadow.camera.top = 20
directionalLight.shadow.camera.bottom = -20

directionalLight.intensity = 1
directionalLight.shadow.mapSize.width = WIDTH
directionalLight.shadow.mapSize.height = HEIGHT
scene.add(directionalLight)

/* 加载纹理 */
const textureLoader = new THREE.TextureLoader()
const textureFlare0 = textureLoader.load(textureFlare0Img)
const textureFlare3 = textureLoader.load(textureFlare3Img)

const flareColor = new THREE.Color(0x00ff00)

const lensFlare = new Lensflare()

const mainFlare = new LensflareElement(textureFlare0, 350, 0.0, flareColor)
// 主光晕
lensFlare.addElement(mainFlare)
// 其他光影
lensFlare.addElement(new LensflareElement(textureFlare3, 60, 0.6, flareColor))
lensFlare.addElement(new LensflareElement(textureFlare3, 70, 0.7, flareColor))
lensFlare.addElement(new LensflareElement(textureFlare3, 120, 0.9, flareColor))
lensFlare.addElement(new LensflareElement(textureFlare3, 70, 1.0, flareColor))
directionalLight.add(lensFlare)

gui.addColor(mainFlare, 'color')
gui.add(mainFlare, 'size', 0, 500)
gui.add(mainFlare, 'distance', 0, 1)

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