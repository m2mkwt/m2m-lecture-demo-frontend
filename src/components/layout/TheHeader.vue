<template>
    <nav class="z-20 bg-white fixed inset-x-0 border-b top-0">
      <div class="max-w-4xl mx-auto py-3">
        <div class="flex justify-between px-5 lg:px-0">
            <!-- logo -->
            <router-link class="flex items-center" to="/">
              <img src="../../assets/images/logo.png" class="h-7 cursor-pointer">
            </router-link>
            <!-- searchbar -->
            <div class="hidden md:relative md:flex md:items-center">
              <input type="text" class="rounded-lg p-2 pl-11 text-sm focus:outline-none bg-gray-100" placeholder="검색">
              <svg class="absolute left-4 top-3" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
            </div>
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
              <router-link to="/mypage" class="relative cursor-pointer">
                <img class="w-6" src="../../assets/images/avatar.jpg">
                <div class="absolute right-0 hidden group-focus:block top-full min-w-full w-max pl-3 pr-32 bg-white shadow-md rounded">
                  <div class="text-left text-sm w-full">
                    <router-link to="mypage" class="py-2 flex items-center w-full">
                      <svg class="mr-3" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle></svg>
                      <span>프로필</span>
                    </router-link>
                  </div>
                </div>
              </router-link>
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
        <div class="bg-white rounded text-xl h-full">
          <!-- top -->
          <div class="flex flex-col">
            <div class="flex items-center justify-between py-2 px-5 border-b">
              <!-- back btn -->
              <svg class="cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
              <!-- tit -->
              <p class="text-base font-semibold">새 게시물 만들기</p>
              <!-- share -->
              <p class="cursor-pointer text-blue-400 text-base font-semibold">공유하기</p>
            </div>
          </div>
          <!-- content -->
          <div class="flex">
            <div class="flex-1">
              <img class="w-full" src="http://picsum.photos/100">
            </div>
            <div class="flex-1">
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
      </div>
    </base-dialog>  
</template>

<script>
import { ref, watch } from 'vue'
import BaseDialog from '../ui/BaseDialog.vue'
export default {
  data() {
    return {
      content: '',
      length: 0,
      maxLength: 2000
    }
  },
  methods: {
    setLength(event) {
      this.length = event.target.value.length
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
  }
}
</script>