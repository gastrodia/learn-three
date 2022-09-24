import {Vector2, ShaderMaterial} from 'three'

/**
 *
 * @param vertexShader
 * @param fragmentShader
 * @param x
 * @param y
 * @returns {ShaderMaterial}
 */
function createMaterial(vertexShader, fragmentShader, x, y) {
    const uniforms = {
        time: {
            type: 'f',
            value: 20
        },
        scale: {
            type: 'f',
            value: 0.1
        },
        alpha: {
            type: 'f',
            value: 0.1
        },
        resolution: {
            type: 'v2',
            value: new Vector2(x, y)
        }
    }


    return new ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true
    })
}

/**
 * getShader
 * @param shader
 * @returns {string}
 */
function getShader(shader = '') {
    return document.querySelector(shader).innerHTML
}

export {
    createMaterial,
    getShader
}