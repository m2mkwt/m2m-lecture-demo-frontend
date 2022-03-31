import { createStore } from 'vuex'
import axios from 'axios'
import postsModule from './modules/posts/index.js'

export const store = createStore({
    state: {
        loginState: true,
        memberNo: '',
        headers: {
            bearer: null
        },
        loginInfo: ''
    },
    actions: {
        LOGIN({ commit }, { id, password }) {
            console.log("[store_action] LOGIN Start!");
            const form = new FormData()
            form.append('id', id)
            form.append('password', password)

            return axios.post('/login_processing', form)
                .then(res => {
                    console.log('[store_action] /login_processing RESPONSE')
                    console.log(res)
                    if (res.data.isSuccess) {
                        this.memberNo = res.data.details.memberNo
                        this.loginInfo = res.data.details.memberNo + ' ' + res.data.details.loginId + ' ' + res.data.details.userName + ' ' + res.data.details.email
                        commit('LOGIN', res.headers)
                        axios.defaults.headers.common.Authorization = 'Bearer ' + res.headers.bearer
                    } else {
                        console.log(res.data.message)
                        alert(res.data.message)
                    }
                    return res.data
                })
                // .catch((res) => {
                //     console.log("[store_action] catch res:", res);
                //     console.log(res);
                //     alert(res.data.message)
                // })
        },
        LOGOUT({ commit }) {
            console.log("[store_action] LOGOUT Start!");
            commit('LOGOUT')
            return true
        },
        INFO({ commit }) {
            console.log("[store_action] INFO Start!");
            this.loginState = false
            const { bearer } = sessionStorage
            console.log("[store_action] bearer :")
            console.log(bearer)
            if (!bearer) return

            this.loginState = true
            this.memberNo = sessionStorage.memberNo
            this.loginInfo = sessionStorage.loginInfo
            axios.defaults.headers.common.Authorization = 'Bearer ' + bearer
            console.log("[store_action] loginState :")
            console.log(this.loginState)
        },
    },
    mutations: {
        LOGIN(state, { bearer }) {
            this.loginState = true
            sessionStorage.bearer = bearer
            sessionStorage.memberNo = this.memberNo
            sessionStorage.loginInfo = this.loginInfo
        },
        LOGOUT(state) {
            this.loginState = false
            sessionStorage.clear()
            axios.defaults.headers.common.Authorization = null
        }
    },
    modules: {
        posts: postsModule
    }
})