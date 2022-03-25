<template>
    <the-header></the-header>
    <div class="bg-zinc-50 min-h-screen">
        <div class="max-w-4xl mx-auto pt-24">
            <!-- upper -->
            <div class="flex flex-col md:flex md:items-center space-x-6 px-4 pb-8 mb-0 md:mb-12 lg:px-12 lg:space-x-0 border-b">
                <div class="flex space-x-6 md:space-x-0">
                    <div class="cursor-pointer">
                        <img class="rounded-full w-20 md:w-32 lg:w-40" src="../assets/images/avatar_lg.jpg">
                    </div>
                    <div class="md:px-24 flex flex-col space-y-6">
                        <!-- 1st row -->
                        <div class="flex items-center space-x-5">
                            <div class="text-3xl font-thin">userId</div>
                            <div class="border rounded md:flex items-center hidden">
                                <router-link to="/edit" class="text-sm font-bold px-2 py-1">프로필 편집</router-link>
                                <!-- <a class="text-sm font-bold px-2 py-1" href="#">프로필 편집</a> -->
                            </div>
                            <div class="cursor-pointer">
                                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                        </div>
                        <!-- responsive1 -->
                        <div class="border rounded flex items-center justify-center md:hidden">
                            <router-link to="/edit" class="text-sm font-bold px-24 py-1">프로필 편집</router-link>
                            <!-- <a class="text-sm font-bold px-24 py-1" href="#">프로필 편집</a> -->
                        </div>
                        <!-- 2nd row -->
                        <div class="md:flex space-x-10 hidden">
                            <div class="flex space-x-2">
                                <div>게시물</div>
                                <div class="font-medium">5</div>
                            </div>
                            <div class="flex space-x-2">
                                <div>팔로워</div>
                                <div class="font-medium">0</div>
                            </div>
                            <div class="flex space-x-2">
                                <div>팔로우</div>
                                <div class="font-medium">288</div>
                            </div>
                        </div>
                        <!-- 3rd row -->
                        <div class="hidden md:block">
                            <div class="font-medium">Blah blah</div>
                        </div>
                    </div>
                </div>
                <div class="md:hidden pt-8">
                    <div class="font-medium">Blah blah</div>
                </div>
                
            </div>
            <!-- responsive 2 -->
            <div class="flex py-2 md:hidden justify-between border-b mb-12">
                <div class="flex flex-col flex-1 items-center">
                    <div class="text-gray-500 text-sm">게시물</div>
                    <div>5</div>
                </div>
                <div class="flex flex-col flex-1 items-center">
                    <div class="text-gray-500 text-sm">팔로워</div>
                    <div>0</div>
                </div>
                <div class="flex flex-col flex-1 items-center">
                    <div class="text-gray-500 text-sm">팔로우</div>
                    <div>20</div>
                </div>

            </div>
            <!-- photo area -->
            <div class="grid grid-cols-3 gap-7">
                <div class="cursor-pointer">
                    <img class="w-full" src="http://picsum.photos/100">
                </div>
                <div class="cursor-pointer">
                    <img class="w-full" src="http://picsum.photos/100">
                </div>
                <div class="cursor-pointer">
                    <img class="w-full" src="http://picsum.photos/100">
                </div>
                <div class="cursor-pointer">
                    <img class="w-full" src="http://picsum.photos/100">
                </div>
                <div class="cursor-pointer">
                    <img class="w-full" src="http://picsum.photos/100">
                </div>
                <div class="cursor-pointer">
                    <img class="w-full" src="http://picsum.photos/100">
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import TheHeader from '../components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader
  },    
}
</script>