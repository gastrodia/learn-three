import * as THREE from 'three'
import spriteImg from '@/assets/textures/particles/sprite-sheet.png'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const scene = new THREE.Scene()
const camera = new THREE.OrthographicCamera(0, WIDTH, HEIGHT, 0, -10, 10)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

let index = 0

const textureLoader = new THREE.TextureLoader()

const material = new THREE.SpriteMaterial({
    blending: THREE.AdditiveBlending,
    map: textureLoader.load(spriteImg)
})

material.map.offset = new THREE.Vector2(0.2 * index, 0)
material.map.repeat = new THREE.Vector2(1 / 5, 1)
material.depthTest = false
const size = 100
const sprite = new THREE.Sprite(material)
sprite.scale.set(size, size, 0)
sprite.position.x = size / 2
sprite.position.y = size / 2
scene.add(sprite)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

const step = 4
let direction = 1
const render = () => {
    sprite.position.x += (step * direction)
    if ((sprite.position.x > WIDTH - (size / 2)) || (sprite.position.x < size / 2)) {
        direction *= -1
        index += 1
        sprite.material.map.offset.set((1 / 5) * (index % 4), 0)
    }
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()