<template>
  <the-header></the-header>
  <div class="bg-zinc-50 min-h-screen overflow-y-auto">
    <div class="max-w-4xl mx-auto pt-24">
      <div class="bg-white w-full border flex">
        <!-- aside menu -->
        <div class="w-1/4 border-r hidden md:block">
          <div
            class="py-4 px-7 cursor-pointer border-l-2 border-black w-full font-semibold"
          >
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
                <!-- <div class="text-xs text-gray-400">
                  사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진
                  이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
                </div>
                <div class="text-xs text-gray-400">
                  이름은 14일 안에 두 번만 변경할 수 있습니다.
                </div> -->
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
                <!-- <div class="text-xs text-gray-400">
                  대부분의 경우 14일 이내에 사용자 이름을 다시 joo7289(으)로
                  변경할 수 있습니다.
                </div> -->
              </div>
            </div>
            <!-- 4th row -->
            <!-- <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">소개</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="userName">소개</label>
                  <textarea
                    class="rounded border w-full"
                    name=""
                    id=""
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div> -->
            <!-- 이메일 -->
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
            <!-- 전화번호 -->
            <!-- <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">전화번호</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="userName">이름</label>
                  <input
                    id="userName"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                    value="이름"
                  />
                </div>
              </div>
            </div> -->
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
                  <label class="hidden" for="userName">이름</label>
                  <input
                    id="userName"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                    value="이름"
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
                  <label class="hidden" for="userName">이름</label>
                  <input
                    id="userName"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                    value="이름"
                  />
                </div>
              </div>
            </div>
            <div class="flex space-x-6">
              <div class="w-40 flex justify-end pt-2">
                <div class="font-semibold">비밀번호확인</div>
              </div>
              <div class="flex-1 flex flex-col space-y-3">
                <div>
                  <label class="hidden" for="userName">이름</label>
                  <input
                    id="userName"
                    class="rounded focus:outline-none text-sm font-medium py-2 pl-3 w-full border text-left"
                    type="text"
                    value="이름"
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
          alert("수정성공");
        })
        .catch((err) => {
          console.log(err);
          alert("수정실패");
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
    editPassword() {
      let data =  {
        memberNo: this.memberNo,
        loginId: this.loginId,
      }
      let url = "/api/v1/profile/editProfile";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
          alert("수정성공");
        })
        .catch((err) => {
          console.log(err);
          alert("수정실패");
        });
    },
  },
  mounted() {
    this.getProfile();
  },
};
</script>
