/**
 * 将角度转换为弧度
 * @param {number} degrees 角度
 * @returns {number} 弧度
 */
export const degreeToRadians = degrees => degrees * Math.PI / 180
/**
 * vectorNormalize 归一化
 * @param vec {Float32Array<number> | number[]}
 * @returns {Float32Array<number>}
 */
export const vectorNormalize = (vec) => {
    const mod = Math.hypot(...vec)
    const v = vec.map(value => value / mod)
    return vec instanceof Float32Array ? v : new Float32Array(v)
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
    if (vec1.length !== vec2.length && vec1.length !== 3) {
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
 * @returns {Float32Array<number>}
 */
export const lookAt = (eyeX, eyeY, eyeZ, lookAtX, lookAtY, lookAtZ, upX, upY, upZ) => {
    const eye = new Float32Array([eyeX, eyeY, eyeZ])
    const target = new Float32Array([lookAtX, lookAtY, lookAtZ])
    const up = new Float32Array([upX, upY, upZ])
    const z = vectorNormalize(vectorMinus(eye, target))
    const x = vectorNormalize(vectorCross(up, z))
    const y = vectorNormalize(vectorCross(z, x))

    return new Float32Array([
        x[0], y[0], z[0], 0,
        x[1], y[1], z[1], 0,
        x[2], y[2], z[2], 0,
        -vectorDot(x, eye), -vectorDot(y, eye), -vectorDot(z, eye), 1
    ])
}

/**
 * getOrthogonalMatrix 获取正交投影矩阵
 * @param l {number} 左
 * @param r {number} 右
 * @param t {number} 上
 * @param b {number} 下
 * @param n {number} 近
 * @param f {number} 远
 * @return {Float32Array<number>}
 */
export const getOrthogonalMatrix = (l, r, t, b, n, f) => {
    const width = r - l
    const height = t - b
    const depth = f - n
    const tx = -(r + l) / width
    const ty = -(t + b) / height
    const tz = -(f + n) / depth
    return new Float32Array([
        2 / width, 0, 0, 0,
        0, 2 / height, 0, 0,
        0, 0, -2 / depth, 0,
        tx, ty, tz, 1
    ])
}

/**
 * getPerspectiveMatrix 获取透视投影矩阵
 * @param {number} fov 视野角度，单位为角度
 * @param {number} aspect 宽高比
 * @param {number} near 近平面距离
 * @param {number} far 远平面距离
 * @returns {Float32Array<number>} 透视投影矩阵，使用 Float32Array 表示
 */
export const getPerspectiveMatrix = (fov, aspect, near, far) => {
    const radians = degreeToRadians(fov)
    const f = 1 / Math.tan(radians / 2);
    const out = new Float32Array(16)
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        const nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
}