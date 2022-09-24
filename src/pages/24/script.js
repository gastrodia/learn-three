import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from "dat.gui";

const gui = new dat.GUI()
const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, .1, 1000)
camera.position.set(28, 30, 28)
camera.lookAt(scene.position)

const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-50, 80, 50)
scene.add(spotLight)

const floorGeometry = new THREE.PlaneGeometry(60, 60)
const floorMaterial = new THREE.MeshLambertMaterial({color: 0x999999})
const floor = new THREE.Mesh(floorGeometry, floorMaterial)
floor.rotation.x = -0.5 * Math.PI
floor.receiveShadow = true
scene.add(floor)

const boxGeometry = new THREE.SphereGeometry(8, 50, 50)
/**
 * @type {MeshPhysicalMaterial}
 * 一种基于物理的标准材质
 * 这种方法与旧方法的不同之处在于，
 * 不使用近似值来表示光与表面的相互作用，
 * 而是使用物理上正确的模型。
 * 不是在特定照明下调整材质以使其看起来很好，
 * 而是可以创建一种材质，能够“正确”地应对所有光照场景。
 */
const boxMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x7777ff,
    // 表示clear coat层的强度，范围从0.0到1.0m，
    // 当需要在表面加一层薄薄的半透明材质的时候，可以使用与clear coat相关的属性，默认为0.0;
    clearcoat: 0,
    // clear coat层的粗糙度，由0.0到1.0。 默认为0.0
    clearcoatRoughness: 0,
    metalness: 0,
    // 为非金属材质所设置的折射率，范围由1.0到2.333。默认为1.5。
    ior: 1.5,
    //反射率，由0.0到1.0。默认为0.5, 相当于折射率1.5。
    // 这模拟了非金属材质的反射率。当metalness为1.0时，此属性无效。
    reflectivity: 0.5,
    // 光泽层的强度,范围是0.0到1.0。默认为0.0。
    sheen: 0,
    // 光泽层的粗糙度，由0.0到1.0。默认值是1.0。
    sheenRoughness: 0,
    // 光泽颜色，默认为0xffffff白色。
    sheenColor: 0xffffff,
    // 用于控制非金属材质高光反射强度的浮点值。漫反射材质对应的值为0。范围从0.0到1.0。 默认值为0.0。
    specularIntensity: 0,
    // 透光率（或者说透光性），范围从0.0到1.0。默认值是0.0。
    // 很薄的透明或者半透明的塑料、玻璃材质即便在几乎完全透明的情况下仍旧会保留反射的光线，透光性属性用于这种类型的材质。
    // 当透光率不为0的时候, opacity透明度应设置为1.
    transmission: 0
})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.castShadow = true
box.position.y = 8
scene.add(box)

const control = {
    sheenColor: boxMaterial.sheenColor.getHex()
}

console.log(boxMaterial)
gui.add(spotLight, 'visible')
gui.add(spotLight, 'intensity', 0, 2)
gui.add(boxMaterial, 'clearcoat', 0, 1)
gui.add(boxMaterial, 'clearcoatRoughness', 0, 1)
gui.add(boxMaterial, 'metalness', 0, 1)
gui.add(boxMaterial, 'ior', 1, 2.333)
gui.add(boxMaterial, 'reflectivity', 0, 1)
gui.add(boxMaterial, 'sheen', 0, 1)
gui.add(boxMaterial, 'sheenRoughness', 0, 1)
gui.addColor(control, 'sheenColor').onChange(e => {
    boxMaterial.sheenColor = new THREE.Color(e)
})
gui.add(boxMaterial, 'specularIntensity', 0, 1)

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