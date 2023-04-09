/**
 *
 * @param target
 * @returns {[(function(MouseEvent): [number,number]),DOMRect]}
 */
export const useWebglXY = (target) => {
    const rect = target.getBoundingClientRect()
    const {left, top, width, height} = rect
    /**
     * @param e {MouseEvent}
     * @returns {[number,number]}
     */
    const eventHandler = (e) => {
        // 获取相对于canvas元素的鼠标位置
        const x = e.clientX - left
        const y = e.clientY - top

        // 将相对坐标转换为webgl坐标
        const webglX = (x / width) * 2 - 1
        const webglY = ((height - y) / height) * 2 - 1
        return [webglX, webglY]
    }

    return [eventHandler, rect]
}