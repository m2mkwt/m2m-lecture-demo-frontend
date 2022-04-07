<template>
    <div class="bg-zinc-50 pt-16 min-h-screen">
        <form class="flex flex-col max-w-sm mx-auto pt-8 pb-7 mb-3 justify-center items-center bg-white border rounded-sm" @submit.prevent="signupSubmit">
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
                    <input id="userEmailId" v-model.trim="userEmailId" :class="{'border-rose-600' : userEmailIdValidity === 'invalid'}" class="bg-gray-50 w-full border rounded py-2 pl-3 focus:outline-none" type="text" placeholder="이메일" @blur="validateEmailInput">
                    <span class="px-1">@</span>
                    <label class="hidden" for="userEmailDomain">이메일 도메인</label>
                    <select id="userEmailDomain" v-model="userEmailDomain" class="bg-gray-50 border w-full rounded focus:outline-none py-2 pl-3" :class="{'border-rose-600' : userEmailIdValidity === 'invalid'}">
                        <option disabled value="">선택</option>
                        <option value="naver.com">naver.com</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="nate.com">nate.com</option>
                    </select>
                </div>
                <p v-if="userEmailIdValidity === 'invalid'" class="text-rose-600">이메일을 입력해주세요.</p>
                <div>
                    <label class="hidden" for="userName">사용자 이름</label>
                    <input id="userName" v-model="userName" :class="{'border-rose-600' : userNameValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="text" placeholder="사용자 이름" @blur="validateNameInput">
                </div>
                <p v-if="userNameValidity === 'invalid'" class="text-rose-600">사용자 이름을 입력해주세요.</p>
                <div>
                    <label class="hidden" for="loginId">아이디</label>
                    <input id="loginId" v-model="loginId" :class="{'border-rose-600' : loginIdValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="text" placeholder="아이디" @blur="validateLoginIdInput">
                </div>
                <p v-if="loginIdValidity === 'invalid'" class="text-rose-600">아이디를 입력해주세요.</p>
                <p v-if="loginIdCheckValidity === 'invalid'" class="text-rose-600">동일한 아이디가 존재합니다.</p>
                <div>
                    <label class="hidden" for="password">비밀번호</label>
                    <input id="password" v-model="password" :class="{'border-rose-600' : userPwCheckValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="password" placeholder="비밀번호" @blur="validatePwInput">
                </div>
                <p v-if="userPwCheckValidity === 'invalid'" class="text-rose-600">특수문자와 소문자,숫자,공백을 확인해주세요.</p>
                <div>
                    <label class="hidden" for="password">비밀번호 확인</label>
                    <input id="passwordConfirm" v-model="passwordConfirm" :class="{'border-rose-600' : userPwConfirmValidity === 'invalid'}" class="rounded focus:outline-none bg-gray-50 text-xs py-2 pl-3 w-full border text-left" type="password" placeholder="비밀번호 확인" @blur="validatePwConfirmInput">
                </div>
                <p v-if="userPwConfirmValidity === 'invalid'" class="text-rose-600">비밀번호를 동일하게 입력해주세요.</p>
                <div>
                    <button type="submit" :class="{'bg-opacity-100' : inputFieldValidity === 'valid'}" class="focus:outline-none bg-blue-500 font-semibold text-sm text-center text-white rounded py-1 mt-2 w-full bg-opacity-40" @focus="validateInputField">가입</button>
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
import axios from 'axios'
export default {
    data() {
        return {
            userEmailId: '',
            userEmailDomain: '',
            userName: '',
            loginId: '',
            password: '',
            passwordConfirm: '',
            userEmailIdValidity: 'pending',
            userNameValidity: 'pending',
            loginIdValidity: 'pending',
            userPwValidity: 'pending',
            userPwConfirmValidity: 'pending',
            inputFieldValidity: 'pending', 
            //패스워드 수정
            userPwCheckValidity: 'pending',
            //아이디 수정
            loginIdCheckValidity: 'pending',
        }
    },
    methods: {
        signupSubmit() {
            // 회원가입 api 호출
            console.log("회원가입 api 호출");
            console.log('userEmailId: ' + this.userEmailId);
            console.log('userEmailDomain: ' + this.userEmailDomain);
            console.log('userName: ' + this.userName);
            console.log('loginId: ' + this.loginId);
            console.log('password: ' + this.password);
            if (this.userEmailDomain==="") {
                    alert("이메일의 도메인을 확인해주세요")
                    this.$router.signupSubmit();
                    //this.$router.replace('/signup');     
            }

            axios.post('/api/v1/member/registMember', { 
                email: this.userEmailId+'@'+this.userEmailDomain,
                userName: this.userName,
                loginId: this.loginId,
                password: this.password 
             }).then(result => {
                console.log(result.data)
                 alert("가입을 축하드립니다.");
                this.$router.push('/login');
                
            }).catch(error=>{
                console.log(error)
                alert('입력란을 다시 확인해주세요.')
            })
        },
        validateEmailInput() {
            // 영어 + 숫자만 허용
            const emailCheckReg = /^[A-Za-z0-9+]*$/;
            let emailValidation = emailCheckReg.test(this.userEmailId);
            if (this.userEmailId === '' || emailValidation === false) {
                this.userEmailIdValidity = 'invalid'
                this.userEmailId = '';
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
        validateLoginIdInput() {
            // 영어 + 숫자만 허용
            const LoginIdCheckReg = /^[A-Za-z0-9+]*$/;
            let LoginIdValidation = LoginIdCheckReg.test(this.loginId);
            // 아이디 중복 체크 api 호출
            console.log("id 중복체크 함수 실행");
            const loginId = this.loginId;
            console.log("loginId : " + loginId)
            const headers = {'Content-Type': 'application/json'};
            axios.post("/api/v1/member/checkValidId", JSON.stringify({ loginId: loginId }), {headers}).then((res)=>{
                console.log(res.data);
                if(this.loginId === '' || LoginIdValidation === false) {
                    this.loginIdValidity = 'invalid'
                } else {
                    this.loginIdValidity = 'valid'
                } 
                if(res.data >= 1){
                    this.loginIdCheckValidity = 'invalid';
                    this.loginId = '';
                }else{
                    this.loginIdCheckValidity = 'valid';
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        validatePwInput() {
            // 최소 1개의 숫자 혹은 특수문자 포함하며 8~20자 사이 체크
            const passwordCheckReg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
            let passwordValidation = passwordCheckReg.test(this.password);
            if(this.password === '' || passwordValidation === false) {
                this.userPwCheckValidity = 'invalid'
            } else {
                this.userPwCheckValidity = 'valid'
            } 
            //비밀번호 유효성 api호출
            console.log("비밀번호 확인 함수 실행");
            const password = this.password;
            console.log("password : " + password)
            const headers = {'Content-Type': 'application/json'};
            axios.post("/api/v1/member/checkValidPw", JSON.stringify({password: password }), {headers}).then((res)=>{
                console.log(res.data);
                if(this.password === '' || passwordValidation === false) {
                    this.userPwCheckValidity = 'invalid'
                } else {
                    this.userPwCheckValidity = 'valid'
                } 
                if(res.data === 0){
                    this.userPwCheckValidity = 'valid';
                }else{
                    this.userPwCheckValidity = 'invalid'
                    this.password = '';
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        validatePwConfirmInput() {
            // 비밀번호 = 비밀번호확인 체크
            if(this.passwordConfirm === '' || this.password !== this.passwordConfirm) {
                this.userPwConfirmValidity = 'invalid'
                this.passwordConfirm = '';
            } else {
                this.userPwConfirmValidity = 'valid'
            } 
        },
        validateInputField() {
            if(this.userEmailId !== '' && this.userName !== '' && this.loginId !== '' && this.password !== '' && this.passwordConfirm !== '') {
                this.inputFieldValidity = 'valid'
            }else {
                this.inputFieldValidity = 'invalid'
            }
        },
        

    }
}
</script>