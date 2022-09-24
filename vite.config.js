import {defineConfig} from 'vite'
import {resolve, join} from 'path'
import {readdirSync} from 'fs'

const resolvePath = path => resolve(__dirname, path)

const dirOutput = (dir = '') => {
    const dirNames = readdirSync(resolve(__dirname, 'src', dir))
    const temp = {}
    for (let i = 0; i < dirNames.length; i++) {
        const item = dirNames[i]
        temp[`${dir}_${item}`] = join('src', dir, item, '/index.html')
    }
    return temp
}

export default defineConfig({
    base: '/',
    resolve: {
        alias: [
            {find: '@', replacement: resolvePath('./src')}
        ]
    },
    build: {
        target: 'es2022',
        rollupOptions: {
            input: {
                main: resolvePath('index.html'),
                ...dirOutput('pages'),
                ...dirOutput('examples'),
            }
        }
    }
})