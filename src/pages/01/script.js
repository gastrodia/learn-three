import 'uno.css'

import * as THREE from 'three'

const {innerWidth: WIDTH, innerHeight: HEIGHT} = window

// 创建场景
const scene = new THREE.Scene()

// 创建相机
/**
 * OrthographicCamera 正交相机 无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变。
 * left — 摄像机视锥体左侧面。
 * right — 摄像机视锥体右侧面。
 * top — 摄像机视锥体上侧面。
 * bottom — 摄像机视锥体下侧面。
 * near — 摄像机视锥体近端面。
 * far — 摄像机视锥体远端面。
 *
 * 这些参数一起定义了摄像机的视锥体
 */
const camera = new THREE.OrthographicCamera(WIDTH / -2, WIDTH / 2, HEIGHT / -2, HEIGHT / 2, 1, 1000)
// 调整相机位置 相机默认位置为(0, 0, 0)
camera.position.set(400, 200, 300)
// 跳整完后使相机看向场景
camera.lookAt(scene.position)

// 环境光 环境光会均匀的照亮场景中的所有物体。
// 环境光不能用来投射阴影，因为它没有方向。
const ambientLight = new THREE.AmbientLight()
// 将环境光添加到场景中
scene.add(ambientLight)

// 点光源 例如 灯泡 向各个方向都发射光 光源照射在物体上可以有投影
const pointLight = new THREE.PointLight()
pointLight.position.set(400, 400, 400)
scene.add(pointLight)

// 创建物体 正方体
// 正方体几何
const geometry = new THREE.BoxGeometry(80, 80, 80)
// 材质
const material = new THREE.MeshLambertMaterial()
// 正方体网格
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染器的尺寸
renderer.setSize(WIDTH, HEIGHT)
document.body.appendChild(renderer.domElement)
// 执行渲染
renderer.render(scene, camera)