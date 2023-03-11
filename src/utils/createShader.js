/**
 * 创建着色器程序
 * @param gl {WebGLRenderingContext}
 * @param VERTEX_CODE {string}
 * @param FRAGMENT_CODE {string}
 * @returns {WebGLProgram}
 */
export const createShader = (gl, VERTEX_CODE, FRAGMENT_CODE) => {
    // 创建着色器
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

    // 指定着色器与源码
    gl.shaderSource(vertexShader, VERTEX_CODE)
    gl.shaderSource(fragmentShader, FRAGMENT_CODE)

    // 编译着色器
    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)

    // 创建程序
    const program = gl.createProgram()

    // 为程序指定着色器
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)

    // 连接程序
    gl.linkProgram(program)

    // 使用程序
    gl.useProgram(program)

    return program
}