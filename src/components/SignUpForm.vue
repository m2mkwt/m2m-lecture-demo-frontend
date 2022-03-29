<template>
    <div class="bg-zinc-50 pt-16 min-h-screen">
        <form @submit.prevent="signupSubmit" class="flex flex-col max-w-sm mx-auto pt-8 pb-7 mb-3 justify-center items-center bg-white border rounded-sm">
            <div>
                <img class="w-44" src="../assets/images/logo.png">
            </div>
            <div class="flex flex-col items-center my-3 font-semibold text-gray-400">
                <p>친구들의 사진과 동영상을 보려면</p>
                <p>가입하세요.</p>
            </div>
            <div class="flex flex-col gap-2 mb-4 text-xs text-gray-400">
                <div class="flex items-center">
                    <label class="hidden" for="userEmailId">이메일 아이디</label>
                    <input @blur="validateEmailInput" v-model.trim="userEmailId" :class="{'border-rose-600' : userEmailIdValidity === 'invalid'}" class="bg-gray-50 w-full border rounded py-2 pl-3 focus:outline-none" id="userEmailId" type="text" placeholder="이메일">
                    <span class="px-1">@</span>
                    <label class="hidden" for="userEmailDomain">이메일 도메인</label>
                    <select class="bg-gray-50 border w-full rounded focus:outline-none py-2 pl-3" :class="{'border-rose-600' : userEmailIdValidity === 'invalid'}" id="userEmailDomain">
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="nate.com">nate.com</option>
                    </select>
                </div>
                <p class="text-rose-600" v-if="userEmailIdValidity === 'invalid'">이메일을 입력해주세요.</p>
                <div>
                    <label class="hidden" for="userName">사용자 이름</label>
                    <input @blur="validateNameInput" id="userName" v-model="userName" :class="{'border-rose-600' : userNameValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="text" placeholder="사용자 이름">
                </div>
                <p class="text-rose-600" v-if="userNameValidity === 'invalid'">사용자 이름을 입력해주세요.</p>
                <div>
                    <label class="hidden" for="userLoginName">아이디</label>
                    <input @blur="validateLoginNameInput" id="userLoginName" v-model="userLoginName" :class="{'border-rose-600' : userLoginNameValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="text" placeholder="아이디">
                </div>
                <p class="text-rose-600" v-if="userLoginNameValidity === 'invalid'">아이디를 입력해주세요.</p>
                <div>
                    <label class="hidden" for="password">비밀번호</label>
                    <input @blur="validatePwInput" id="password" v-model="password" :class="{'border-rose-600' : userPwValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="password" placeholder="비밀번호">
                </div>
                <p class="text-rose-600" v-if="userPwValidity === 'invalid'">비밀번호를 입력해주세요.</p>
                <div>
                    <label class="hidden" for="password">비밀번호 확인</label>
                    <input @blur="validatePwConfirmInput" id="password" v-model="passwordConfirm" :class="{'border-rose-600' : userPwConfirmValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="password" placeholder="비밀번호 확인">
                </div>
                <p class="text-rose-600" v-if="userPwConfirmValidity === 'invalid'">비밀번호를 한번 더 입력해주세요.</p>
                <div>
                    <button @focus="validateInputField" :class="{'bg-opacity-100' : inputFieldValidity === 'valid'}" class="focus:outline-none bg-blue-500 font-semibold text-sm text-center text-white rounded py-1 mt-2 w-full bg-opacity-40">가입</button>
                </div>
            </div>
        </form>  
        <div class="max-w-sm mx-auto py-7 mb-14 bg-white border">
            <div class="flex justify-center">
                <p class="text-sm mr-1">계정이 있으신가요?</p>
                <router-link class="text-blue-500 text-sm" to="/login">로그인</router-link>
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
            userName: '',
            userLoginName: '',
            password: '',
            passwordConfirm: '',
            userGender: 'male',
            userEmailIdValidity: 'pending',
            userNameValidity: 'pending',
            userLoginNameValidity: 'pending',
            userPwValidity: 'pending',
            userPwConfirmValidity: 'pending',
            inputFieldValidity: 'pending'
        }
    },
    methods: {
        signupSubmit() {
            console.log('userName:'+ this.userName)
            this.userName = ''
            console.log('userEmailDomain: '+ this.userEmailDomain)
            this.userEmailDomain = 'google.com'
            console.log('radio')
            console.log(this.userGender)
            this.userGender = 'male'
        },
        validateEmailInput() {
            if (this.userEmailId === '') {
                this.userEmailIdValidity = 'invalid'
            } else {
                this.userEmailIdValidity = 'valid'
            }
        },
        validateNameInput() {
            if(this.userName === '') {
                this.userNameValidity = 'invalid'
            } else {
                this.userNameValidity = 'valid'
            } 
        },
        validateLoginNameInput() {
            if(this.userLoginName === '') {
                this.userLoginNameValidity = 'invalid'
            } else {
                this.userLoginNameValidity = 'valid'
            } 
        },
        validatePwInput() {
            if(this.password === '') {
                this.userPwValidity = 'invalid'
            } else {
                this.userPwValidity = 'valid'
            } 
        },
        validatePwConfirmInput() {
            if(this.passwordConfirm === '') {
                this.userPwConfirmValidity = 'invalid'
            } else {
                this.userPwConfirmValidity = 'valid'
            } 
        },
        validateInputField() {
            if(this.userEmailId !== '' && this.userName !== '' && this.userNickname !== '' && this.password !== '' && this.passwordConfirm !== '' && this.userGender !== '') {
                this.inputFieldValidity = 'valid'
            }else {
                this.inputFieldValidity = 'invalid'
            }
        }
    }
}
</script>