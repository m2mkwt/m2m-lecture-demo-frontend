import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        reactivityTransform: true
    })],
    base: './',
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
            '/api/v1/post/selectPostList': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/post/getList': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/post/addPost': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/post/removePost': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/post/editPost': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/post/cmtPost': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/comment/selectCommentlist': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/comment/likePost': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/comment/editComment': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/comment/removeComment': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/comment/addComment': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/commonCode/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/member/registMember': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/member/checkValidId': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/member/checkValidPw': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/mypage/getMember': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/mypage/getPostCnt': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/mypage/searchPostList': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/profile/getProfile': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/profile/editProfile': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/api/v1/profile/editPassword': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '/idCheck': {
                target: 'http://localhost:8090',
                changeOrigin: true
            },
            '^/api/v1/*': {
                target: 'http://localhost:8090',
                changeOrigin: true
            }
        }
    }
})