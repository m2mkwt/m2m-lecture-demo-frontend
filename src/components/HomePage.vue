<template>
<!-- navbar -->
    <the-header></the-header>
    <!-- content -->
    <div class="bg-zinc-50 min-h-screen">
        <div class="max-w-4xl mx-auto pt-24">
            <div class="md:flex">
                <div class="flex-1 overflow-y-auto scrollbar-hide">
                    <div class="bg-white border rounded border-gray-200 mb-6" v-for="feed in 10" :key="feed">
                        <!-- top -->
                        <div class="flex items-center justify-between px-4 py-3 border-b">
                            <div class="flex items-center">
                                <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mr-3">
                                <p class="font-semibold text-sm">kimcoca</p>
                            </div>
                            <div class="cursor-pointer">
                                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                            </div> 
                        </div>
                        <!-- photo -->
                        <div class="w-full">
                            <img class="w-full" src="http://picsum.photos/100">
                        </div>
                        
                        <div class="px-3 pt-3 pb-1">
                            <!-- action -->
                            <div class="flex justify-between">
                                <div class="flex space-x-3 items-center">
                                    <svg class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                                    <svg class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </div>
                                <div class="cursor-pointer">
                                    <svg class="hover:opacity-60" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </div>
                            </div>
                            <!-- info : like -->
                            <p class="text-sm font-semibold pt-3 pb-2">좋아요 1,193개</p>
                            <!-- info : content -->
                                <!-- line -->
                                <div class="line-clamp-2 text-sm">
                                    <!-- user id -->
                                    <span class="font-semibold text-sm">by.ybo</span>
                                   [📟인턴십/취업이 연계된 #해커톤: 4월 12일까지 등록 마감] 데이터 분석과 문제해결 능력으로 지속가능한 세상을 만들어갈 미래의 주역, 여러분을 위해 특별히 준비된 장벽없는코딩(#codewithoutbarriers)의 첫 해커톤! 링크는 걸스인텍 페이스북 페이지를 참고해주세요 
                                   
                                </div>   
                                <button class="text-gray-400 text-sm">더 보기</button>                             
                        </div>
                        <!-- comment : list -->
                        <div class="px-3">
                            <button class="text-gray-500 text-sm">댓글 1개 보기</button>
                        </div>
                        <!-- info : created date -->
                        <div class="px-3 pt-2 pb-5">
                            <p class="text-xs text-gray-500">4시간 전</p>
                        </div>
                        <!-- comment : create -->
                        <div class="px-3 py-2 border-t flex justify-between items-center">
                            <div class="flex items-center flex-1">
                                <div class="w-6">
                                    <svg aria-label="이모티콘" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                                </div>
                                <div class="flex items-center flex-1">
                                    <label class="hidden" for="comment">댓글</label>
                                    <textarea 
                                        name="comment" id="comment" rows="1" placeholder="댓글 달기..."
                                        class="focus:outline-none text-sm py-2 pl-3 w-full text-left resize-none scrollbar-hide"
                                        v-model="comment">
                                    </textarea>
                                </div>
                            </div>
                            <div class="w-7">
                                <button class="text-blue-500 text-sm font-semibold">게시</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:w-2/5 relative pl-7 pt-8">
                    <div class="fixed">
                        <!-- profile -->
                        <div class="flex items-center mb-6">
                            <div class="flex items-center pr-32">
                                <img src="../assets/images/avatar_lg.jpg" class="w-14 h-14 rounded-full">
                                <div class="flex flex-col ml-4">
                                    <p class="text-sm font-semibold">thisisneverthat</p>
                                    <p class="text-sm text-gray-400">test</p>
                                </div>
                            </div>
                            <div class="text-blue-500 text-xs font-semibold">전환</div>
                        </div>
                        <!-- 추천영역 -->
                        <div>
                            <div class="flex items-center">
                                <div class="text-gray-400 font-semibold text-sm pr-40">회원님을 위한 추천</div>
                                <div class="text-black text-xs font-semibold">모두보기</div>
                            </div>

                            <div class="text-gray-300 text-xs">
                                © 2022 INSTAGRAM FROM META
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
export default {
    data() {
        return {
           comment: '' 
        }
    },
    components: {
    TheHeader,
    TheFooter
    },     
}
</script>