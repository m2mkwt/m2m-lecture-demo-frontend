import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        // port: 3000,
        proxy: {
            '/login_processing': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            // '/login-error': {
            //     target: 'http://localhost:8090',
            //     changeOrigin: true
            // },
            // '/main': {
            //     target: 'http://localhost:8090',
            //     changeOrigin: true
            // },
            '/comment/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/media/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/post/list': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/comment/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/commonCode/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/member/idCheck': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/member/pwCheck': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/member/signup': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/idCheck': {
                target: 'http://localhost:8090',
                changeOrigin: true
            }
        }
    }
})