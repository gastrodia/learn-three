import 'uno.css'
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import dat from "dat.gui"
import {FontLoader} from "three/examples/jsm/loaders/FontLoader.js";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry.js";
import dayjs from "dayjs"
import fontJson from '@/assets/fonts/helvetiker_regular.typeface.json?url'

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(0, 0, 28)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(0, 10, 28)
scene.add(spotLight)

const fontLoader = new FontLoader()
const textMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x7777ff
})

const genText = (text, font) => {
    const textGeometry = new TextGeometry(text, {
        font,
        size: 6, // 字体大小
        height: 4, // 挤出文本的厚度
        curveSegments: 4, // 表示文本的）曲线上点的数量
        bevelEnabled: true, // 是否开启斜角
        bevelThickness: 1, // 文本上斜角的深度
        bevelSize: .3, // 斜角与原始文本轮廓之间的延伸距离
        bevelOffset: .1, // 斜角偏移
        bevelSegments: 1 // 斜角的分段数
    })

    return new THREE.Mesh(textGeometry, textMaterial)
}


const loadFont = (typeface) => new Promise(resolve =>
    fontLoader.load(typeface, resolve))


let font = null
const text = {
    text: null,
    time: ''
}

loadFont(fontJson).then((_font) => {
    font = _font
    text.time = dayjs().format('HH:mm:ss')
    text.text = genText(text.time, _font)
    text.text.geometry.center()
    scene.add(text.text)
})


const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement)

const render = () => {
    if (text.text) {
        const time = dayjs().format('HH:mm:ss')
        if (text.time !== time) {
            scene.remove(text.text)
            text.text.geometry.dispose()
            text.text.material.dispose()
            text.text = genText(time, font)
            text.text.geometry.center()
            scene.add(text.text)
        }
    }
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()