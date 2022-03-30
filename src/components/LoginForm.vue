<template>
    <div class="bg-zinc-50 pt-32 min-h-screen">
        <form @submit.prevent="loginSubmit" class="flex flex-col max-w-sm mx-auto pt-8 pb-7 mb-3 justify-center items-center bg-white border rounded-sm">
            <div class="mb-9">
                <img class="w-44" src="../assets/images/logo.png">
            </div>
            <div class="flex flex-col gap-2 mb-4 text-xs text-gray-400 w-full px-14">
                <div class="flex items-center">
                    <label class="hidden" for="userLoginName">아이디</label>
                    <input type="text" v-model="id" class="bg-gray-50 w-full border rounded py-2 pl-3 focus:outline-none" id="userLoginName" placeholder="아이디">
                </div>
                <div>
                    <label class="hidden" for="password">비밀번호</label>
                    <input id="password" v-model.trim="password" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="text" placeholder="비밀번호">
                </div>
                <p class="text-rose-600" v-if="inputFieldValidity === 'invalid'">아이디와 비밀번호를 확인해주세요.</p>  <!--0320 은민 추가-->
                <div>
                    <button type="submit" @focus="validateInputField" :class="{'bg-opacity-100' : inputFieldValidity === 'valid'}" class="focus:outline-none bg-blue-500 font-semibold text-sm text-center text-white rounded py-1 mt-2 w-full bg-opacity-40">로그인</button>
                </div>
            </div>
            <div class="mt-6">
                <div class="text-xs cursor-pointer">비밀번호를 잊으셨나요?</div>
            </div>   
        </form>  
        <div class="max-w-sm mx-auto py-7 mb-14 bg-white border">
            <div class="flex justify-center">
                <p class="text-sm mr-1">계정이 없으신가요?</p>
                <router-link class="text-blue-500 text-sm font-semibold" to="/signup">가입하기</router-link>
            </div>
        </div>
        <div class="text-center">
            <div class="text-xs text-gray-400">© 2022 Instagram from Meta</div>
        </div>
    </div>
</template>
<script>
import router from '../router.js'
// import axios from 'axios'
import { store } from '../store'

export default {
    name: 'Login',
    data: () => ({
        id: '',
        password: '',
        loginState: false,
        loginToken: '',
        msg: '',
        memberNo: '',
        inputFieldValidity: true
    }),
    methods: {
        loginSubmit: function () {
            const id = this.id
            const password = this.password
            this.$store.dispatch('LOGIN', { id, password })
            .then((data) => {
                console.log(data);
                if (data.isSuccess) {
                    this.memberNo = data.memberNo
                    this.redirect()
                }
            })
            .catch(({ message }) => {
                console.log(message);
                this.msg = message
            })
        },
        redirect: function () {
            this.$emit('loginState', store.loginState)
            router.push({ name: 'Home' })
        }
    }
}
</script>
