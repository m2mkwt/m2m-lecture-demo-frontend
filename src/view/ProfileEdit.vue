<template>
  <the-header></the-header>
  <div class="bg-zinc-50 min-h-screen overflow-y-auto">
    <div class="max-w-4xl mx-auto pt-24">
      <div class="bg-white w-full border flex">
        <!-- aside menu -->
        <div class="w-1/4 border-r hidden md:block">
          <div
            class="py-4 px-7 cursor-pointer border-l-2 border-black w-full font-semibold">
            <!-- 프로필 편집 -->
            회원정보 수정
          </div>
          <!-- <div class="py-4 px-7 cursor-pointer">비밀번호 변경</div>
          <div class="py-4 px-7 cursor-pointer">이메일 및 SMS</div> -->
        </div>
        <!-- content -->
        <div class="flex flex-1 py-6 pr-32">
          <div class="space-y-4">
            <!-- 1st row -->
            <div class="flex space-x-6 items-center">
              <div class="w-40 flex justify-end">
                <div class="cursor-pointer w-10">
                  <img :src="imgName" />
                </div>
              </div>
              <div class="flex-1">
                <div class="text-xl">{{ userName }}</div>
                <div @click.prevent.self="this.$refs.uploadfile.click();" class="cursor-pointer text-blue-500 text-sm font-semibold">
                  프로필 사진 바꾸기
                </div>
                <input ref="uploadfile" style="display:none;" @change="handleFileChange" type="file" />
              </div>
            </div>
            <!-- 2nd row -->
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">아이디</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="LoginId">아이디</label>
                  <input
                    id="LoginId"
                    v-model="loginId"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <!-- 3rd row -->
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">사용자 이름</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="userName">사용자 이름</label>
                  <input
                    id="userName"
                    v-model="userName"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <!-- 4th row -->

            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">이메일</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="email">이메일</label>
                  <input
                    id="email"
                    v-model="email"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <!-- 성별 -->
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">성별</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="gender">성별</label>
                  <input
                    id="gender"
                    v-model="gender"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                    placeholder="성별(남성/여성)"
                  />
                </div>
              </div>
            </div>
            <!-- 제출 버튼 & 비활성화 -->
            <div class="flex space-x-6 items-center">
              <div class="w-40"></div>
              <div class="flex-1 flex justify-between items-center">
                <button
                  class="bg-blue-500 rounded py-1 px-4 text-white font-semibold"
                  @click="updateProfile"
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
                  <label class="hidden" for="oldPassword">기존비밀번호</label>
                  <input
                    id="oldPassword"
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
                  <label class="hidden" for="newPassword">신규비밀번호</label>
                  <input
                    @blur="validatePwInput"
                    v-model="newPassword"
                    :class="{'border-rose-600' : userPwValidity === 'invalid'}"
                    id="newPassword"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="password"
                    placeholder="신규 비밀번호"
                  />
                </div>
                <p class="text-rose-600" v-if="userPwCheckValidity === 'invalid'">특수문자와 대문자,소문자,숫자,공백을 확인해주세요.</p>
              </div>
            </div>
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">비밀번호확인</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="confirmPassword">비밀번호확인</label>
                  <input
                    @blur="validatePwConfirmInput"
                    v-model="passwordConfirm"
                    :class="{'border-rose-600' : userPwConfirmValidity === 'invalid'}"
                    id="confirmPassword"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="password"
                    placeholder="비밀번호 확인"
                  />
                </div>
                <p class="text-rose-600" v-if="userPwConfirmValidity === 'invalid'">비밀번호를 동일하게 입력해주세요.</p>
              </div>
            </div>
            <!-- 제출 버튼 & 비활성화 -->
            <div class="flex space-x-6 items-center">
              <div class="w-40"></div>
              <div class="flex-1 flex justify-between items-center">
                <button
                  class="bg-blue-500 rounded py-1 px-4 text-white font-semibold"
                  @click="editPassword"
                >
                  비밀번호변경
                </button>
                <!-- <a class="text-blue-500 text-sm font-semibold" href="#">
                  계정을 일시적으로 비활성화
                </a> -->
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
      memberNo: "",
      loginId: "",
      userName: "",
      email: "",
      gender: "",

      imgName: "/avatar.jpg",
      imgs: [],
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg",
      },

      oldPassword: '',
      newPassword: '',
      passwordConfirm: '',
      userPwValidity: 'pending',
      userPwConfirmValidity: 'pending',
    };
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
          console.log(res);
          let member = res.data;
          this.memberNo = member.memberNo;
          this.loginId = member.loginId;
          this.userName = member.userName;
          this.email = member.email;
          let gender = member.gender;
          if (gender == "F")
              this.gender = "여성";
          else
              this.gender = "남성";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editProfile() {
      let temp = "";
      if (this.gender == "남성") temp = "M";
      else temp = "F";
      let data =  {
        memberNo: this.memberNo,
        loginId: this.loginId,
        userName: this.userName,
        email: this.email,
        gender: temp
      }
      let url = "/api/v1/profile/editProfile";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          alert("회원정보 수정 성공");
        })
        .catch((err) => {
          console.log(err);
          alert("회원정보 수정 실패");
        });
    },
    handleFileChange(event) {
      let reader = new FileReader();
      let img1 = event.target.files[0];
      let type = img1.type; //     ，
      let size = img1.size; //     ，
      if (this.imgData.accept.indexOf(type) == -1) {
        alert("사진을 찾을수 없습니다！");
        return false;
      }
      let form = new FormData();
      form.append("fileList", img1, img1.name);
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
        })
        .catch((error) => {
          alert("이미지 등록이 실패 하였습니다.");
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
    editPassword() {
      let data =  {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        memberNo: store.memberNo
      }
      let url = "/api/v1/profile/editPassword";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          alert("비밀번호 변경 성공");
        })
        .catch((err) => {
          console.log(err);
          alert("비밀번호 변경 실패");
        });
    },
  },
  mounted() {
    this.getProfile();
  },
};
</script>
