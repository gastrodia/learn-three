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
    const resultMatrix = new Float32Array(16)
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = 0.0
            for (let k = 0; k < 4; k++) {
                sum += A[i * 4 + k] * B[k * 4 + j]
            }
            resultMatrix[i * 4 + j] = sum
        }
    }
    return resultMatrix
}

export const getMultiplyMatrices = (A, B) => {
    if (A.length % B.length !== 0) {
        throw new Error('Matrix dimensions are not compatible')
    }

    const numRowsA = A.length / B.length
    const numColsB = B[0].length

    const resultMatrix = new Array(numRowsA)
    for (let i = 0; i < numRowsA; i++) {
        resultMatrix[i] = new Array(numColsB).fill(0)
        for (let j = 0; j < numColsB; j++) {
            for (let k = 0; k < B.length; k++) {
                resultMatrix[i][j] += A[i * B.length + k] * B[k][j]
            }
        }
    }

    const flattenedMatrix = resultMatrix.flat()
    return new Float32Array(flattenedMatrix)
}
