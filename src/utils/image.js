/**
 *
 * @param src {string}
 * @returns {Promise<HTMLImageElement>}
 */
export const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => {
            resolve(image)
        }
        image.onerror = (error) => {
            reject(error)
        }
        image.src = src
    })
}
