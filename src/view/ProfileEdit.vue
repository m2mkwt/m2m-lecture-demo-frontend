<template>
  <the-header></the-header>
  <div class="bg-zinc-50 min-h-screen overflow-y-auto">
    <div class="max-w-4xl mx-auto pt-24">
      <div class="bg-white w-full border flex">
        <!-- aside menu -->
        <div class="w-1/4 border-r hidden md:block">
          <div class="py-4 px-7 cursor-pointer border-l-2 border-black w-full font-semibold">
            <!-- 프로필 편집 -->
            회원정보 수정
          </div>
        </div>
        <!-- content -->
        <div class="flex flex-1 py-6 pr-32">
          <div class="space-y-4">
            <!-- 1st row : 프로필 사진, 사용자 이름 -->
            <div class="flex space-x-6 items-center">
              <div class="w-40 flex justify-end">
                <div class="cursor-pointer w-10 h-10">
                  <img
                    class="rounded-full w-full h-full"
                    :src="imgName"
                  />
                </div>
              </div>
              <div class="flex-1">
                <div class="text-xl">{{ userName }}</div>
                <div
                  class="cursor-pointer text-blue-500 text-sm font-semibold"
                  @click.prevent.self="$refs.uploadfile.click();"
                >
                  프로필 사진 바꾸기
                </div>
                <input
                  ref="uploadfile"
                  style="display:none;"
                  type="file"
                  @change="handleFileChange"
                />
              </div>
            </div>
            <!-- 2nd row : 사용자 아이디 -->
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">아이디</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label
                    class="hidden"
                    for="LoginId"
                  >아이디</label>
                  <input
                    id="LoginId"
                    v-model="loginId"
                    :class="{'border-rose-600' : loginIdValidity === 'invalid'}"
                    class="rounded focus:outline-none py-2 pl-3 w-full border text-left"
                    type="text"
                    placeholder="아이디"
                    @blur="validateLoginIdInput"
                  />
                </div>
                <p
                  v-if="loginIdValidity === 'invalid'"
                  class="text-rose-600"
                >아이디를 입력해주세요.</p>
                <p
                  v-if="loginIdCheckValidity === 'invalid'"
                  class="text-rose-600"
                >동일한 아이디가 존재합니다.</p>
              </div>
            </div>
            <!-- 3rd row : 사용자 이름 -->
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">사용자 이름</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label
                    class="hidden"
                    for="userName"
                  >사용자 이름</label>
                  <input
                    id="userName"
                    v-model="userName"
                    :class="{'border-rose-600' : userNameValidity === 'invalid'}"
                    class="rounded focus:outline-none py-2 pl-3 w-full border text-left"
                    type="text"
                    @blur="validateNameInput"
                  />
                </div>
                <p
                  v-if="userNameValidity === 'invalid'"
                  class="text-rose-600"
                >사용자 이름을 입력해주세요.</p>
              </div>
            </div>
            <!-- 4th row : 이메일 -->
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">이메일</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label
                    class="hidden"
                    for="userEmailId"
                  >이메일 아이디</label>
                  <input
                    id="userEmailId"
                    v-model.trim="userEmailId"
                    :class="{'border-rose-600' : userEmailIdValidity === 'invalid'}"
                    class="w-40 border rounded py-2 pl-3 focus:outline-none"
                    type="text"
                    placeholder="이메일"
                    @blur="validateEmailInput"
                  >
                  <span class="px-1">@</span>
                  <label
                    class="hidden"
                    for="userEmailDomain"
                  >이메일 도메인</label>
                  <select
                    id="userEmailDomain"
                    v-model="userEmailDomain"
                    class="border w-40 rounded focus:outline-none py-2 pl-3"
                    :class="{'border-rose-600' : userEmailIdValidity === 'invalid'}"
                  >
                    <option
                      disabled
                      value=""
                    >선택</option>

                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="nate.com">nate.com</option>
                  </select>
                </div>
                <p
                  v-if="userEmailIdValidity === 'invalid'"
                  class="text-rose-600"
                >이메일을 입력해주세요.</p>
              </div>
            </div>
            <!-- 5th row : 성별 -->
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">성별</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label
                    class="hidden"
                    for="gender"
                  >성별</label>
                  <select
                    id="gender"
                    v-model="gender"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                  >
                    <option
                      disabled
                      value=""
                    >성별을 선택해주세요</option>
                    <option value="M">남성</option>
                    <option value="F">여성</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- 제출 버튼 & 비활성화 -->
            <div class="flex space-x-6 items-center">
              <div class="w-40"></div>
              <div class="flex-1 flex justify-between items-center">
                <button
                  :class="{'bg-opacity-100' : profileEditInputFieldValidity === 'valid'}"
                  class="bg-blue-500 rounded py-1 px-4 text-white font-semibold"
                  @focus="validateProfileEditInputField"
                  @click="editProfile"
                >
                  제출
                </button>
              </div>
            </div>

            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold"></div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <hr>
              </div>
            </div>

            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">기존비밀번호</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label
                    class="hidden"
                    for="oldPassword"
                  >기존비밀번호</label>
                  <input
                    id="oldPassword"
                    v-model="oldPassword"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="password"
                    placeholder="기존 비밀번호"
                  />
                </div>
              </div>
            </div>
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">신규비밀번호</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label
                    class="hidden"
                    for="newPassword"
                  >신규비밀번호</label>
                  <input
                    id="newPassword"
                    v-model="newPassword"
                    :class="{'border-rose-600' : userPwValidity === 'invalid'}"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="password"
                    placeholder="신규 비밀번호"
                    @blur="validatePwInput"
                  />
                </div>
                <p
                  v-if="userPwCheckValidity === 'invalid'"
                  class="text-rose-600"
                >특수문자와 대문자,소문자,숫자,공백을 확인해주세요.</p>
              </div>
            </div>
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">비밀번호확인</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label
                    class="hidden"
                    for="confirmPassword"
                  >비밀번호확인</label>
                  <input
                    id="confirmPassword"
                    v-model="passwordConfirm"
                    :class="{'border-rose-600' : userPwConfirmValidity === 'invalid'}"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="password"
                    placeholder="비밀번호 확인"
                    @blur="validatePwConfirmInput"
                  />
                </div>
                <p
                  v-if="userPwConfirmValidity === 'invalid'"
                  class="text-rose-600"
                >비밀번호를 동일하게 입력해주세요.</p>
              </div>
            </div>
            <!-- 제출 버튼 & 비활성화 -->
            <div class="flex space-x-6 items-center">
              <div class="w-40"></div>
              <div class="flex-1 flex justify-between items-center">
                <button
                  :class="{'bg-opacity-100' : pwEditInputFieldValidity === 'valid'}"
                  class="bg-blue-500 rounded py-1 px-4 text-white font-semibold"
                  @focus="validatePwEditInputField"
                  @click="editPassword"
                >
                  비밀번호변경
                </button>
              </div>
            </div>
          </div>
          <div class="flex-1"></div>
        </div>
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
import { store } from '../store'
import axios from "axios";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      memberNo: store.memberNo,
      mediaNo: "",
      oldLoginId: "",
      loginId: "",
      userName: "",
      email: "",
      userEmailId: '',
      userEmailDomain: '',
      gender: "",
      oldPassword: '',
      newPassword: '',
      passwordConfirm: '',

      imgName: "/src/assets/images/avatar.jpg",
      imgs: [],
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg",
      },

      userEmailIdValidity: 'pending',
      userNameValidity: 'pending',
      loginIdValidity: 'pending',
      userPwValidity: 'pending',
      userPwConfirmValidity: 'pending',
      userPwCheckValidity: 'pending',
      loginIdCheckValidity: 'pending',
      profileEditInputFieldValidity: 'pending',
      pwEditInputFieldValidity: 'pending'
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      let url = "/api/v1/profile/getProfile";
      axios
        .get(url, {
          params: {
            memberNo: store.memberNo,
          },
        })
        .then((res) => {
          let member = res.data.data.mvo;
          this.memberNo = member.memberNo;
          this.mediaNo = member.mediaNo;
          this.oldLoginId = this.loginId = member.loginId;
          this.userName = member.userName;
          this.userEmailId = member.email.split('@')[0];
          this.userEmailDomain = member.email.split('@')[1];
          this.gender = member.gender;
          this.userEmailDomain.value = member.email.split('@')[1];
          if (res.data.data.filename!="") {
            this.imgName = res.data.data.filename;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editProfile() {
      this.email = this.userEmailId + '@' + this.userEmailDomain;
      let data =  {
        memberNo: this.memberNo,
        loginId: this.loginId,
        userName: this.userName,
        email: this.email,
        gender: this.gender,
      }
      let url = "/api/v1/profile/editProfile";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          alert("회원정보 수정 성공");
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
          alert("회원정보 수정 실패");
        });
    },
    handleFileChange(event) {
      let reader = new FileReader();
      let img1 = event.target.files[0];
      let type = img1.type;
      //let size = img1.size;
      if (this.imgData.accept.indexOf(type) == -1) {
        alert("사진을 찾을수 없습니다！");
        return false;
      }
      let form = new FormData();
      form.append("fileList", img1, img1.name);
      form.append("memberNo", this.memberNo);
      form.append("mediaNo", this.mediaNo);
      form.append("uploadType", "profile");
      axios
        .post("/api/v1/common/uploadImg", form, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response.data.data);
          const fileInfo = response.data.data;
          const fileUri = fileInfo.fileUrl + "/" + fileInfo.fileName;
          console.log(fileUri);
          this.imgName = fileUri;
          reader.readAsDataURL(img1);
          var that = this;
          reader.onloadend = function () {
            that.imgs.push(fileUri);
          };
          this.$router.go();
        })
        .catch((error) => {
          console.log(error)
          alert("이미지 등록이 실패 하였습니다.");
        });
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
          if (this.oldLoginId === this.loginId) {
            this.loginIdCheckValidity = 'valid';
          } else if(res.data >= 1){
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
      let passwordValidation = passwordCheckReg.test(this.newPassword);
      if(this.newPassword === '' || passwordValidation === false) {
        this.userPwCheckValidity = 'invalid'
      } else {
          this.userPwCheckValidity = 'valid'
      } 
      //비밀번호 유효성 api호출
      console.log("비밀번호 중복체크 함수 실행");
      const password = this.newPassword;
      console.log("password : " + password)
      const headers = {'Content-Type': 'application/json'};
      axios.post("/api/v1/member/checkValidPw",
        JSON.stringify({
          password: password
        })
        ,{headers})
      .then((res)=>{
        console.log(res.data);
        if(this.newPassword === '' || passwordValidation === false) {
          this.userPwCheckValidity = 'invalid'
        } else {
        this.userPwCheckValidity = 'valid'
        }
        if(res.data === 0){
          this.userPwCheckValidity = 'valid';
        }else{
          this.userPwCheckValidity = 'invalid'
         this.newPassword = '';
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    validatePwConfirmInput() {
      // 비밀번호 = 비밀번호확인 체크
      if(this.passwordConfirm === '' || this.newPassword !== this.passwordConfirm) {
        this.userPwConfirmValidity = 'invalid'
        this.passwordConfirm = '';
      } else {
        this.userPwConfirmValidity = 'valid'
      } 
    },
    validateProfileEditInputField() {
      if(this.userEmailId !== '' && this.userName !== '' && this.loginId !== '') {
        this.profileEditInputFieldValidity = 'valid'
      }else {
        this.profileEditInputFieldValidity = 'invalid'
      }
    },
    validatePwEditInputField() {
      if(this.oldPassword != '' && this.newPassword !== '' && this.passwordConfirm !== '') {
        this.pwEditInputFieldValidity = 'valid'
      }else {
        this.pwEditInputFieldValidity = 'invalid'
      }
    },
    editPassword() {
      let data =  {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        memberNo: store.memberNo
      }
      console.log(data);
      let url = "/api/v1/profile/editPassword";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          alert("비밀번호 변경 성공");
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
          alert("비밀번호 변경 실패");
        });
    },
  },
};
</script>
