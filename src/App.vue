<template>
  <div v-if="authenticated">
    <!-- navbar -->
    <the-header></the-header>
    <!-- content -->
    <div class="pt-24 py-27 bg-zinc-50 flex h-screen justify-center border-t border-gray-200">
      <!-- feed -->    
      <div class="lg:mr-12 w-100 lg:w-2/3 lg:overflow-y-auto lg:scrollbar-hide">
        <div class="md:mx-auto md:max-w-lg">
          <div class="flex flex-col w-100 bg-white border pb-3 rounded-md border-gray-200 mb-3" v-for="feed in 10" :key="feed">
            <div class="flex items-center justify-between px-4 py-3 border-b">
              <div class="flex items-center">
                <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mr-3">
                <p class="font-semibold text-sm">kimcoca</p>
              </div>
              <div class="cursor-pointer">
                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
              </div> 
            </div>
            <img src="http://picsum.photos/100" class="w-100 h-auto">
            <div class="flex justify-between p-3">
              <div class="flex space-x-3 items-center">
                <!-- <img src="./assets/icons/like.png" class="w-5 cursor-pointer"> -->
                <svg class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                <svg class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
              </div>
              <div class="cursor-pointer">
                <svg class="hover:opacity-60" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
              </div>
            </div>
            <!-- <p class="text-sm font-medium pl-3">좋아요 1,193개</p> -->
            <div class="flex px-3 py-1">
              <p class="font-semibold text-sm">kovopr_official</p>
              <p class="text-sm ml-1">'모마 23득점 활약' GS칼텍스, 셧아웃 승리!</p>
            </div>
            <div class="px-3 pb-1 text-indigo-900 text-sm">
              <span>#KOVO_결과</span>
              <span>#경기결과</span>
              <span>#여자부</span>
            </div>
            <div class="text-gray-400 text-sm pl-3 pb-2 cursor-pointer">
              댓글 16개 모두 보기
            </div>
            <!-- <div class="px-3 text-sm">
              <p>흥국생명 GS칼텍스</p>
              <p>2022.3.21(월) / 6R</p>
            </div> -->

            <div class="px-3 text-xs text-gray-400">
              12분 전
            </div>
          </div>
        </div>          
      </div>
      <!--// feed -->

      <!-- aside -->
      <div class="flex-1 flex-col hidden lg:flex">
        <div class="flex mb-6">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full">
          <div class="flex flex-col ml-3">
            <p class="text-sm font-semibold">thisisneverthat</p>
            <p class="text-sm text-gray-400 font-semibold">test</p>
          </div>
        </div>
        <div class="border bg-white p-3">
          <div class="header flex justify-between">
            <h4 class="text-gray-400 font-semibold">스토리</h4>
            <a class="font-semibold text-sm" href="#">모두 보기</a>
          </div>
          <div class="body flex items-center">
            <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full">
            <div class="flex flex-col text-sm ml-2">
              <p class="font-semibold">this isneverthat</p>
              <p class="text-gray-400">12분 전</p>
            </div>              
          </div>
        </div>
      </div>
      <!--// aside -->
    </div>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader
  },
  data() {
    return {
      homeActive: true,
      createActive: false,
      authenticated: false,
    }
  }
}
</script>
<style>

</style>