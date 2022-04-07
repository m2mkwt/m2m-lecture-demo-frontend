import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router.js'
import axios from 'axios'
import { store } from './store'


axios.defaults.baseURL = '';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
    response => response,
    (error) => {
        // console.log(response);
        console.log("ERROR Data :", error.response.data);
        if (error.response.status === 401) {
            const { loginInfo } = sessionStorage
            if (!loginInfo) {
                alert(error.response.data.message)
            }
            sessionStorage.clear()
            router.push({ Name: 'Login' })
            location.reload()
        }
        return Promise.reject(error)
    }
)

const app = createApp({
        extends: App,
        beforeCreate() {
            this.$store.dispatch('INFO')
        }
    })
    app.use(router)
    app.use(store)
    app.mount('#app');
// axios 전역변수 설정
// app.config.globalProperties.axios = axios