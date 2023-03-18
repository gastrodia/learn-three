import {defineConfig} from 'vite'
import {resolve, join} from 'path'
import {readdirSync} from 'fs'
import UnoCSS from 'unocss/vite'
import {presetUno} from 'unocss'

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
    base: '/learn-three',
    resolve: {
        alias: [
            {find: '@', replacement: resolvePath('./src')}
        ]
    },
    build: {
        target: 'esNext',
        rollupOptions: {
            input: {
                main: resolvePath('index.html'),
                ...dirOutput('pages'),
                ...dirOutput('examples'),
                ...dirOutput('webGL'),
            }
        }
    },
    plugins: [
        UnoCSS({
            presets: [presetUno()]
        })
    ]
})