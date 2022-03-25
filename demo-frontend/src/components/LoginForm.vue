<template>
    <div class="bg-zinc-50 h-screen pt-32">
        <form @submit.prevent="loginSubmit" class="flex flex-col max-w-sm mx-auto pt-8 pb-7 mb-3 justify-center items-center bg-white border rounded-sm">
            <div class="mb-9">
                <img class="w-44" src="../assets/images/logo.png">
            </div>
            <div class="flex flex-col gap-2 mb-4 text-xs text-gray-400">
                <div class="flex items-center">
                    <label class="hidden" for="userEmailId">이메일 아이디</label>
                    <input class="bg-gray-50 w-full border rounded py-2 pl-3 focus:outline-none" id="userEmailId" type="text" placeholder="이메일">
                    <span class="px-1">@</span>
                    <label class="hidden" for="userEmailDomain">이메일 도메인</label>
                    <select class="bg-gray-50 border w-full rounded focus:outline-none py-2 pl-3" id="userEmailDomain" v-model="userEmailDomain">
                        <option value="google.com">google.com</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                    </select>
                </div>
                <div>
                    <label class="hidden" for="password">비밀번호</label>
                    <input id="password" v-model.trim="password" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="text" placeholder="비밀번호">
                </div>
                <div>
                    <button class="bg-blue-500 font-semibold text-sm text-center text-white rounded py-1 mt-2 w-full bg-opacity-40">로그인</button>
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
export default {
    data() {
        return {
            userEmailId: '',
            password: '',
            userEmailDomain: 'google.com'
        }
    },
    methods: {
        loginSubmit() {
            console.log('userEmailDomain: '+ this.userEmailDomain)
            this.userEmailDomain = 'google.com'
        }
    }
}
</script>