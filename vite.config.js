import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

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
            }
        },

        plugins: [
            vue(),
            vueJsx()
        ],

        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
                '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
                '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
                '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
                '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
                '@utils': fileURLToPath(new URL('./src/utils', import.meta.url))
            }
        }
    }
})
