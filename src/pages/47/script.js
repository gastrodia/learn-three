import 'uno.css'

import * as THREE from 'three'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(-10, 10, 10)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0x999999)
spotLight.position.set(0, 20, 20)
spotLight.castShadow = true
scene.add(spotLight)

const boxGeometry = new THREE.BoxGeometry(4, 4, 4)
const material = new THREE.MeshLambertMaterial({color: 0xff00ff})
const box = new THREE.Mesh(boxGeometry, material)
scene.add(box)


const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)


const render = () => {

    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()