
/**
 * vectorNormalize 归一化
 * @param vec {Float32Array<number> | number[]}
 * @returns {Float32Array<number>}
 */
export const vectorNormalize = (vec) => {
    const mod = Math.sqrt(vec.reduce((sum, value) => sum + value ** 2, 0))
    const v = vec.map(value => value / mod)
    return v instanceof Float32Array ? v : new Float32Array(v)
}

/**
 * vectorCross 叉积
 * @param vec1 {Float32Array<number> | number[]}
 * @param vec2 {Float32Array<number> | number[]}
 * @returns {Float32Array<number>}
 */
export const vectorCross = (vec1 = [], vec2 = []) => {
    if (vec1.length !== vec2.length && vec1.length !== 3) {
        throw new Error('vec1 and vec2 must have the 3 length')
    }
    return new Float32Array([
        vec1[1] * vec2[2] - vec1[2] * vec2[1],
        vec1[2] * vec2[0] - vec1[0] * vec2[2],
        vec1[0] * vec2[1] - vec1[1] * vec2[0]
    ])
}

/**
 * vectorDot
 * @param vec1 {Float32Array<number> | number[]}
 * @param vec2 {Float32Array<number> | number[]}
 * @returns {number}
 */

export const vectorDot = (vec1 = [], vec2 = []) => {
    if (vec1.length!== vec2.length && vec1.length!== 3) {
        throw new Error('vec1 and vec2 must have the 3 length')
    }
    return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2]
}

/**
 * vectorMinus 求两个向量的差
 * @param vec1 {Float32Array<number> | number[]}
 * @param vec2 {Float32Array<number> | number[]}
 * @returns {Float32Array<number>}
 */
export const vectorMinus = (vec1 = [], vec2 = []) => {
    return new Float32Array([
        vec1[0] - vec2[0],
        vec1[1] - vec2[1],
        vec1[2] - vec2[2]
    ])
}
/**
 * getViewMatrix 获取视图矩阵
 * @param eyeX {number}
 * @param eyeY {number}
 * @param eyeZ {number}
 * @param lookAtX {number}
 * @param lookAtY {number}
 * @param lookAtZ {number}
 * @param upX {number}
 * @param upY {number}
 * @param upZ {number}
 */
export const getViewMatrix = (eyeX, eyeY, eyeZ, lookAtX, lookAtY, lookAtZ, upX, upY, upZ) => {
    const eye = new Float32Array([eyeX, eyeY, eyeZ])
    const lookAt = new Float32Array([lookAtX, lookAtY, lookAtZ])
    const up = new Float32Array([upX, upY, upZ])

    const zAxis = vectorNormalize(vectorMinus(lookAt, eye))
    const xAxis = vectorNormalize(vectorCross(up, zAxis))
    const yAxis = vectorNormalize(vectorCross(zAxis, xAxis))
    const minusEye = vectorMinus([0, 0, 0], eye)

    return new Float32Array([
        xAxis[0],                   yAxis[0],                   zAxis[0],                   0,
        xAxis[1],                   yAxis[1],                   zAxis[1],                   0,
        xAxis[2],                   yAxis[2],                   zAxis[2],                   0,
        vectorDot(xAxis, minusEye), vectorDot(yAxis, minusEye), vectorDot(zAxis, minusEye), 1
    ])
}
