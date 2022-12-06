import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const require = src => fileURLToPath(new URL(src, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
        publicDir: './public',

        build: {
            rollupOptions: {
                input: {
                    background: './src/background.js',
                    content: './src/content.js',
                    popup: './src/popup.js',
                    options: './src/options.js'
                },
                output: {
                    dir: './extension-dist',
                    entryFileNames: '[name].js'
                }
            },

            watch: {
                buildDelay: 1000,
                // chokidar: '**/*',
                clearScreen: false,
                // exclude: ['node_modules/**'],
                include: ['src/**', 'public/**']
            }
        },

        plugins: [
            vue(),
            vueJsx()
        ],

        resolve: {
            alias: {
                '@': require('./src'),
                '@assets': require('./src/assets'),
                '@components': require('./src/components'),
                '@router': require('./src/router'),
                '@store': require('./src/store'),
                '@views': require('./src/views'),
                '@utils': require('./src/utils')
            }
        }
    }
})
