import { createRouter, createWebHistory } from "vue-router";
import SignUpForm from './components/SignUpForm.vue'
import LoginForm from './components/LoginForm.vue'
import MyPage from './components/MyPage.vue'
import ProfileEdit from './components/ProfileEdit.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/signup'},
        { path: '/signup', component: SignUpForm },
        { path: '/login', component: LoginForm },
        { path: '/mypage', component: MyPage },
        { path: '/edit', component: ProfileEdit },
    ]
})

export default router