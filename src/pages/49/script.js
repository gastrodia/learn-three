import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GUI} from 'dat.gui'
import brickWallUrl from '@/assets/textures/general/brick-wall.jpg?url'
import floorWoodUrl from '@/assets/textures/general/floor-wood.jpg?url'

const gui = new GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(30, 40, -40)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const axesHelper = new THREE.AxesHelper(200)
scene.add(axesHelper)

const planeGeometry = new THREE.PlaneGeometry(60, 100)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plan = new THREE.Mesh(planeGeometry, planeMaterial)
plan.receiveShadow = true
plan.rotation.x = -(Math.PI / 2)

scene.add(plan)

const spotLight = new THREE.SpotLight(0x666666, )
spotLight.position.set(0, 60, -60)
spotLight.castShadow = true
spotLight.shadow.camera.near = 1
spotLight.shadow.camera.far = 100
spotLight.distance = 150
spotLight.angle = 0.6
spotLight.intensity = 4
spotLight.penumbra = 0
scene.add(spotLight)

const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

const boxGeometry = new THREE.BoxGeometry(20, 20, 20)
const sphereGeometry = new THREE.SphereGeometry(10, 20, 20)

const loader = new THREE.TextureLoader()

loader.load(brickWallUrl, (texture) => {
    const boxMaterial = new THREE.MeshStandardMaterial({
        map: texture
    })

    const box = new THREE.Mesh(boxGeometry, boxMaterial)
    box.castShadow = true
    box.position.y = 10
    box.position.z = 20

    scene.add(box)
})

loader.load(floorWoodUrl, (texture) => {
    const sphereMaterial = new THREE.MeshStandardMaterial({
        map: texture
    })

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.castShadow = true
    sphere.position.y = 10
    sphere.position.z = -20

    scene.add(sphere)
})


const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)
new OrbitControls(camera, renderer.domElement)
const render = () => {

    renderer.render(scene, camera)
}
renderer.setAnimationLoop(render)
