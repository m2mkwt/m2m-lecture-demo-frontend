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
            '/api/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/commonCode/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/deptMember/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            }
        }
    }
})