import { createRouter, createWebHistory } from "vue-router";
import SignUpForm from './components/SignUpForm.vue'
import LoginForm from './components/LoginForm.vue'
import MyPage from './components/MyPage.vue'
import ProfileEdit from './components/ProfileEdit.vue'
import Test from './components/Test.vue'
import { store } from './store'

const requireLogin = () => (to, from, next) => {
    console.log('login loginState : {}', store.loginState)
    if (store.loginState) {
        return next()
    }
    console.log('[Router / requireLogin] 로그인 후 이용가능한 화면입니다.')
    next("/login")
}

const requiresVisitor = () => (to, from, next) => {
    console.log('login loginState : {}', store.loginState)
    if (store.loginState) {
        return next("/main")
    }
    return next()
}

const routes = [{
        path: '/',
        redirect: 'Login',
    },
    {
        path: '/main',
        component: HomePage,
        name: 'Main',
        beforeEnter: requireLogin()
    },
    {
        path: '/home',
        component: HomePage,
        name: 'Home',
        beforeEnter: requireLogin()
    },
    {
        path: '/signup',
        component: SignUpForm,
        name: 'SignUp',
        beforeEnter: requiresVisitor()
    },
    {
        path: '/login',
        component: LoginForm,
        name: 'Login',
        beforeEnter: requiresVisitor()
    },
    {
        path: '/mypage',
        component: MyPage,
        name: 'MyPage',
        beforeEnter: requireLogin()
    },
    {
        path: '/edit',
        component: ProfileEdit,
        name: 'Profile',
        beforeEnter: requireLogin()
    },
    {
        path: '/test',
        component: Test,
        name: 'Test'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router