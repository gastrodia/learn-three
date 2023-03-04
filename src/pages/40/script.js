import 'uno.css'

import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 0, 50)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

function genSprite() {
    const width = 16
    const height = 16
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')
    const gradient = context.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2)
    gradient.addColorStop(0, 'rgba(255,255,255,1)')
    gradient.addColorStop(0.2, 'rgba(0,255,255,1)')
    gradient.addColorStop(0.4, 'rgba(0,0,255,1)')
    gradient.addColorStop(1, 'rgba(0,0,0,1)')

    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)
    const texture = new THREE.Texture(canvas)
    texture.needsUpdate = true
    return texture
}

const pointsMaterial = new THREE.PointsMaterial({
    size: 3,
    map: genSprite(),
    depthWrite: false,
    transparent: true,
    opacity: .7,
    blending: THREE.AdditiveBlending
})

const geometry = new THREE.TorusGeometry(10, 3, 16, 100 )
const point = new THREE.Points(geometry, pointsMaterial)
scene.add(point)

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