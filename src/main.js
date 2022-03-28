import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router.js'
import axios from 'axios'

axios.defaults.baseURL = '';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const app = createApp(App)
app.use(router)
// axios 전역변수 설정
app.config.globalProperties.axios = axios
app.mount('#app')
