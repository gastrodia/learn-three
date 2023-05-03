export const getTranslateMatrix = (x = 0, y = 0, z = 0) => {
    return new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        x, y, z, 1.0
    ])
}

export const getScaleMatrix = (x = 1, y = 1, z = 1) => {
    return new Float32Array([
        x, 0.0, 0.0, 0.0,
        0.0, y, 0.0, 0.0,
        0.0, 0.0, z, 0.0,
        0.0, 0.0, 0.0, 1.0
    ])
}

export const getRotateZMatrix = (β = 0) => {
    const sin = Math.sin(β)
    const cos = Math.cos(β)
    return new Float32Array([
        cos, sin, 0.0, 0.0,
        -sin, cos, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ])
}

export const getRotateYMatrix = (θ = 0) => {
    const sin = Math.sin(θ)
    const cos = Math.cos(θ)
    return new Float32Array([
        cos, 0.0, -sin, 0.0,
        0.0, 1.0, 0.0, 0.0,
        sin, 0.0, cos, 0.0,
        0.0, 0.0, 0.0, 1.0
    ])
}

export const getRotateXMatrix = (α = 0) => {
    const sin = Math.sin(α)
    const cos = Math.cos(α)
    return new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, cos, sin, 0.0,
        0.0, -sin, cos, 0.0,
        0.0, 0.0, 0.0, 1.0
    ])
}

export const get4x4Matrices = (A, B) => {
    const result = new Float32Array(16);

    for (let i = 0; i < 4; i++) {
        result[i] = A[i] * B[0] + A[i + 4] * B[1] + A[i + 8] * B[2] + A[i + 12] * B[3]
        result[i + 4] = A[i] * B[4] + A[i + 4] * B[5] + A[i + 8] * B[6] + A[i + 12] * B[7]
        result[i + 8] = A[i] * B[8] + A[i + 4] * B[9] + A[i + 8] * B[10] + A[i + 12] * B[11]
        result[i + 12] = A[i] * B[12] + A[i + 4] * B[13] + A[i + 8] * B[14] + A[i + 12] * B[15]
    }

    return result;
}
