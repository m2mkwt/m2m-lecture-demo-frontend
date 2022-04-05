<template>
    <nav class="z-20 bg-white fixed inset-x-0 border-b top-0">
      <div class="max-w-4xl mx-auto py-3">
        <div class="flex justify-between px-5 lg:px-0">
            <!-- logo -->
            <router-link class="flex items-center" to="/">
              <img src="../../assets/images/logo.png" class="h-7 cursor-pointer">
            </router-link>
            <!-- searchbar -->
            <!-- <div class="hidden md:relative md:flex md:items-center">
              <input type="text" class="rounded-lg p-2 pl-11 text-sm focus:outline-none bg-gray-100" placeholder="검색">
              <svg class="absolute left-4 top-3" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
            </div> -->
            <!-- menu group & avatar -->
            <div class="flex items-center space-x-7">
              <div class="cursor-pointer" v-if="homeActive">
                <router-link to="/">
                  <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
                </router-link>
              </div>
              <div class="cursor-pointer" v-else>
                <router-link to="/">
                  <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                </router-link>
              </div>
              <div v-if="createActive">
                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 5.545l-.117.006-.112.02a1 1 0 00-.764.857l-.007.117V11H6.544l-.116.007a1 1 0 00-.877.876L5.545 12l.007.117a1 1 0 00.877.876l.116.007h4.457l.001 4.454.007.116a1 1 0 00.876.877l.117.007.117-.007a1 1 0 00.876-.877l.007-.116V13h4.452l.116-.007a1 1 0 00.877-.876l.007-.117-.007-.117a1 1 0 00-.877-.876L17.455 11h-4.453l.001-4.455-.007-.117a1 1 0 00-.876-.877zM8.552.999h6.896c2.754 0 4.285.579 5.664 1.912 1.255 1.297 1.838 2.758 1.885 5.302L23 8.55v6.898c0 2.755-.578 4.286-1.912 5.664-1.298 1.255-2.759 1.838-5.302 1.885l-.338.003H8.552c-2.754 0-4.285-.579-5.664-1.912-1.255-1.297-1.839-2.758-1.885-5.302L1 15.45V8.551c0-2.754.579-4.286 1.912-5.664C4.21 1.633 5.67 1.05 8.214 1.002L8.552 1z"></path></svg>
              </div>
    
              <div @click="toggleDialog" class="cursor-pointer" v-else>
                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
              </div>
              <div class="relative cursor-pointer w-6 h-6">
                <img class="rounded-full w-full h-full" :src="imgName" @click="toggleMenu()" @error="replaceByDefault">
                <div v-show="menuDisplayed" class="absolute right-0 top-full w-52 bg-white shadow-md rounded">
                  <div class="text-left text-sm w-full">
                    <div class="w-full h-full px-4">
                      <router-link to="/mypage" class="py-2 flex items-center w-full">
                        <svg class="mr-3" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle></svg>
                        <span>마이페이지</span>
                      </router-link>
                    </div>
                    <div class="px-4 py-2 flex items-center w-full border-t">
                      <span @click="logOut()">로그아웃</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <button class="relative cursor-pointer group">
                <img class="w-6" src="../../assets/images/avatar.jpg">
                <div class="absolute right-0 hidden group-focus:block top-full min-w-full w-max pl-3 pr-32 bg-white shadow-md rounded">
                  <div class="text-left text-sm w-full">
                    <router-link to="mypage" class="py-2 flex items-center w-full">
                      <svg class="mr-3" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle></svg>
                      <span>프로필</span>
                    </router-link>
                  </div>
                </div>
              </button> -->
            </div>
        </div>
      </div>
    </nav>
    <base-dialog @close="toggleDialog" :dialogActive="dialogActive">
      <div class="w-full z-40 h-max px-10 max-w-6xl mx-auto">
        <form @submit.prevent="addPost">
        <div class="bg-white rounded text-xl h-full">
          <!-- top -->
          <div class="flex flex-col">
            <div class="flex items-center justify-between py-2 px-5 border-b">
              <!-- back btn -->
              <svg class="cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
              <!-- tit -->
              <p class="text-base font-semibold">새 게시물 만들기</p>
              <!-- share -->
              <button class="cursor-pointer text-blue-400 text-base font-semibold">공유하기</button>
            </div>
          </div>
          <!-- content -->
          <div class="flex">
            <!-- <div @click.prevent.self="this.$refs.uploadfile.click();" class="flex-1 z-50 cursor-pointer text-blue-400 text-base font-semibold text-center"
              style="justify-content: center; ">
              파일 업로드 하기 -->
              <!-- <div @click.prevent.self="this.$refs.uploadfile.click();" class="flex-1 z-50 cursor-pointer flex flex-col justify-center text-center items-center align-center"> -->
              <div v-if="this.mediaNo == 0" @click.prevent.self="this.$refs.uploadfile.click();" class="flex-1 z-50 cursor-pointer flex flex-col justify-center items-center">
                <!-- <div> -->
                  <svg aria-label="이미지나 동영상과 같은 미디어를 나타내는 아이콘" color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                  <p>클릭하여 사진을 업로드하세요</p>
                <!-- </div> -->
              </div>
              <div v-else class="flex-1 z-50 cursor-pointer flex flex-col justify-center items-center">
                <img class="w-full" :src="imgName">
              </div>
              <input ref="uploadfile" style="display: none" @change="handleFileChange" type="file" />
              
            <!-- </div> -->
            <!-- <input ref="uploadfile" style="display: none;" change="handleFileChange" type="file" /> -->
            <div class="flex-1 border-l">
              <div class="flex flex-col h-full">
                <!-- top -->
                <div class="flex items-center px-4 py-3">
                  <div class="flex items-center">
                      <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mr-4">
                      <p class="font-semibold text-sm">kimcoca</p>
                  </div>
                </div>
                <!-- content -->
                <div class="flex-1">
                  <label class="hidden" for="content">댓글</label>
                  <textarea
                    @input="setLength" 
                    ref="content" 
                    name="content" 
                    id="content" 
                    rows="15" 
                    placeholder="문구 입력..."
                    class="focus:outline-none text-sm py-2 pl-3 w-full text-left resize-none scrollbar-hide"
                    v-model="content">
                  </textarea>
                </div>
                <!-- counter -->
                <div class="flex px-4 py-4 justify-between">
                  <svg color="#8e8e8e" fill="#8e8e8e" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                  <div class="text-xs text-gray-400">{{ length }}/{{ maxLength }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </base-dialog>  
</template>

<script>
import { ref, watch } from 'vue'
import BaseDialog from '../ui/BaseDialog.vue'
import axios from 'axios'
import { store } from '../../store'
import img from '../../assets/images/avatar.jpg'
export default {
  data() {
    return {
      content: '',
      length: 0,
      maxLength: 2000,
      imgName: '',
      imgs: [],
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg",
      },
      menuDisplayed: false,
      mediaNo: 0,
      memberNo: store.memberNo
    }
  },
  methods: {
    replaceByDefault(e) {
      e.target.src = img
    },
    setLength(event) {
      this.length = event.target.value.length
    },
     addPost(){
      // const contentReg = /^(\S{1,}\s?){5,}$/ 
      // let contentValidation = contentReg.test(this.content);
      // if(this.content === '' || contentValidation === false) {
      //   this.contentValidity = 'invalid'
      //   alert("5글자 이상 입력하세요.")
      // } else {
      //   this.contentValidity = 'valid'
        axios.post('/api/v1/post/addPost', { 
                        memberNo : store.memberNo,
                        content : this.content,
                        mediaNo : this.mediaNo
                     }).then(result => {
                console.log(result.data)
                this.$router.go();
            }).catch(error=>{
                console.log(error)
            })
    },
    toggleMenu() {
      this.menuDisplayed = !this.menuDisplayed
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
      form.append("memberNo", this.memberNo);
      form.append("mediaNo", this.mediaNo);
      form.append("postNo", 0);
      form.append("uploadType", "post");
      axios
        .post("/api/v1/common/uploadImg", form, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.data);
          const fileInfo = response.data.data;
          const fileUri = fileInfo.fileUrl + "/" + fileInfo.fileName;
          console.log(fileUri);
          this.imgName = fileUri;
          this.mediaNo = fileInfo.mediaNo;
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
    getMember() {
      console.log('getMember api 호출');
      axios.get("/api/v1/mypage/getMember",{
        params: {
          memberNo : store.memberNo
        }
      }).then((res)=>{
        console.log(res);
        this.member = res.data.data.mvo;
        if (this.member.mediaNo > 0)
          this.imgName = res.data.data.imgName;
            console.log('imgName : ' + this.imgName);
      }).catch((err) => {
        console.log(err);
      });
     },
    logOut() {
        this.$store.dispatch('LOGOUT')
        .then((data) => {
          console.log("logOut data: " + data);
          if (data) {
            console.log('로그아웃 성공!')
            alert('로그아웃 되었습니다.')
            this.redirect()
          }
        })
        .catch(({ message}) => {
          console.log("logOut catch: " + message);
          console.log(message);
          // this.msg = message
        })
      },
      redirect() {
        this.$router.push('/login');
      }
  },
  components: {
    BaseDialog
  },
  setup() {
    const dialogActive = ref(false)
    const toggleDialog = () => {
      dialogActive.value = !dialogActive.value
    }
    watch(dialogActive, () => {
      if(dialogActive.value) {
          window.scrollTo(0,0)
          document.body.style.overflow = 'hidden'
      }else{
          window.addEventListener("scroll", function() {
              let scrollX = window.scrollX
              let scrollY = window.scrollY
              window.scrollTo(scrollX, scrollY)
          })
          document.body.style.overflow = 'auto'
      }
    })
    return { dialogActive, toggleDialog }     
  },
  mounted() {
    this.getMember()
  }
}
</script>