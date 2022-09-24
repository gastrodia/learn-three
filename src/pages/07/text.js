import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import fontJson from '@/assets/fonts/helvetiker_regular.typeface.json?url'

const fontLoader = new FontLoader()

const loadFont = new Promise((resolve, reject) => {
    return fontLoader.load(fontJson, resolve)
})

const genTextGeometry = (text, font) => new TextGeometry(text, {
    font, // 字体
    size: 6, // 字体大小
    height: 2, // 挤出文本的厚度
    curveSegments: 1, // 表示文本的）曲线上点的数量
    bevelEnabled: true, // 是否开启斜角
    bevelThickness: 0, // 文本上斜角的深度
    bevelSize: 0, // 斜角与原始文本轮廓之间的延伸距离
    bevelOffset: 0, // 斜角偏移
    bevelSegments: 5 // 斜角的分段数
})

export {
    loadFont,
    genTextGeometry
}