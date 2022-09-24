import * as THREE from 'three'
import dat from "dat.gui"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window
const gui = new dat.GUI()
const scene = new THREE.Scene()
/* 添加雾化效果 */
// 线性雾化
// scene.fog = new THREE.Fog('red', 0.001, 1000)
// 指数型雾化
scene.fog = new THREE.FogExp2('red', 0.001)

/* 为场景中的所有物体都使用相同的材质 */
scene.overrideMaterial = new THREE.MeshLambertMaterial({color: 'blue'})

const camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 1000)
camera.position.set(-200, 200, 400)
camera.lookAt(scene.position)

const axesHelper = new THREE.AxesHelper(250)
scene.add(axesHelper)

const ambientLight = new THREE.AmbientLight(0x3c3c3c)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xeeeeee)
spotLight.position.set(-100, 340, -200)
spotLight.castShadow = true
scene.add(spotLight)

const planeGeometry = new THREE.PlaneGeometry(200, 200)
const planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
// 为物体设置名字
plane.name = 'plane'
plane.rotation.x = -0.5 * Math.PI
plane.receiveShadow = true
scene.add(plane)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

const control = {
    rotationSpeed: 0.04,
    createCube() {
        const cubeGeometry = new THREE.BoxGeometry(20, 20, 20)
        const cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff})
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.position.x = Math.round((Math.random() * planeGeometry.parameters.width)) - planeGeometry.parameters.width / 2
        cube.position.y = 10
        cube.position.z = Math.round((Math.random() * planeGeometry.parameters.height)) - planeGeometry.parameters.height / 2
        cube.castShadow = true
        scene.add(cube)
    },

    removeCube() {
        const last = scene.children[scene.children.length - 1]
        // 移除场景中的对象
        scene.remove(last)
    },

    getPlane() {
        // 在场景中通过名字来获取物体
        console.log(scene.getObjectByName('plane'))
    }
}

gui.add(control, 'rotationSpeed', 0, 1)
gui.add(control, 'createCube')
gui.add(control, 'removeCube')
gui.add(control, 'getPlane')

// 场景操作
new OrbitControls(camera, renderer.domElement)

const render = () => {
    // 遍历 场景中的对象
    scene.traverse(e => {
        if (e instanceof THREE.Mesh && e !== plane) {
            e.rotation.x += control.rotationSpeed;
            e.rotation.y += control.rotationSpeed;
            e.rotation.z += control.rotationSpeed;
        }
    })

    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

render()