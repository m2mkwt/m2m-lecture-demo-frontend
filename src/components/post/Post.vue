<template>
<div class="bg-white border rounded border-gray-200 mb-6">
    <!-- top -->
    <div class="flex items-center justify-between px-4 py-3 border-b">
        <div class="flex items-center">
            <img :src="filename" class="w-8 h-8 rounded-full mr-3">
            <p class="font-semibold text-sm">{{ userName }}</p>
        </div>
        <div class="cursor-pointer">
            <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
        </div> 
    </div>
    <!-- photo -->
    <div class="w-full">
        <img class="w-full" :src="filename">
    </div>
    <div class="px-3 pt-3 pb-1">
        <!-- action -->
        <div class="flex justify-between">
            <div class="flex space-x-3 items-center">
                <svg class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                <svg @click="setFocus(index)" class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            </div>
            <div class="cursor-pointer">
                <svg class="hover:opacity-60" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </div>
        </div>
        <!-- info : like -->
        <p class="text-sm font-semibold pt-3 pb-2">좋아요 {{ likeCount }}개</p>
        <!-- info : content -->
            <!-- line -->
            <div class="line-clamp-2 text-sm">
                <!-- user id -->
                <span class="font-semibold text-sm">{{ userName }}</span>
                {{ text }}                             
            </div>  
            <button class="text-gray-400 text-sm">더 보기</button>                             
    </div>
    <!-- comment : list -->
    <div class="px-3">
        <button @click="toggleDialog(index)" class="text-gray-500 text-sm">댓글 {{ commentNo }}개 보기</button>
    </div>
    <!-- info : created date -->
    <div class="px-3 pt-2 pb-5">
        <p class="text-xs text-gray-500">{{ createdt }}</p>
    </div>
    <!-- comment : create -->
    <div class="px-3 py-2 border-t flex justify-between items-center">
        <div class="flex items-center flex-1">
            <div class="w-6">
                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
            </div>
            <div class="flex items-center flex-1">
                <label class="hidden" for="comment">댓글</label>
                <textarea ref="comment" 
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
<base-dialog @close="toggleDialog" :dialogActive = "dialogActive">
    <div class="w-full z-40 h-max px-10 max-w-6wl mx-auto">
        <div class="bg-white rounded text-xl h-full">
            <div class="flex">
                <!-- photo -->
                <div class="w-7/12">
                    <img class="h-full w-full" :src="filename">
                </div>   
                <!-- content -->
                <div class="flex-1 flex flex-col">
                    <!-- top -->
                    <div class="flex items-center justify-between px-4 py-3 border-b">
                        <div class="flex items-center">
                            <img :src="filename" class="w-8 h-8 rounded-full mr-4">
                            <p class="font-semibold text-sm">{{ userName }}</p>
                        </div>
                        <div class="cursor-pointer" @click="toggleModal">
                            <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </div> 
                    </div>
                    <!-- content -->
                    <div class="flex flex-col flex-1 px-4 pt-3 space-y-6 border-b overflow-y-auto">
                        <comment 
                            v-for="(comment, index) in comments"
                            :comment="comment"
                            :key="comment.id"
                            :user-name="comment.userName"
                            :media-id="comment.mediaId"
                            :text="comment.text"
                            :createdt="comment.createdt"
                        ></comment>
                        <!-- comment1: dummy data 1 -->
                        <!-- <div class="flex space-x-4">
                            <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mt-1">
                            <div class="flex flex-col space-y-4">
                                <div class="leading-none">
                                    <span class="font-semibold text-sm mr-2">{{ comment[index].userName }}</span>
                                    <span class="text-sm">🌸💚🌷💓Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi. Velit nisi consequuntur minus praesentium alias enim?</span>
                                </div>
                                <p class="text-gray-500 text-xs">112주</p>
                            </div>
                        </div> -->
                        <!-- comment2: dummy data 2 -->
                        <!-- <div class="flex space-x-4">
                            <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mt-1">
                            <div class="flex flex-col space-y-4">
                                <div class="leading-none">
                                    <span class="font-semibold text-sm mr-2">rolarola</span>
                                    <span class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi.😝😝😝</span>
                                </div>
                                <p class="text-gray-500 text-xs">112주</p>
                            </div>
                        </div> -->
                        <!-- comment3: dummy data 3 -->
                        <!-- <div class="flex space-x-4">
                            <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mt-1">
                            <div class="flex flex-col space-y-4">
                                <div class="leading-none">
                                    <span class="font-semibold text-sm mr-2">oceanby</span>
                                    <span class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab culpa distinctio nemo praesentium cumque eveniet, vitae, qui quae facilis maxime autem modi.🤎🤎🙈</span>
                                </div>
                                <p class="text-gray-500 text-xs">112주</p>
                            </div>
                        </div> -->
                    </div>
                    <div class="px-3 py-4 border-b">
                        <!-- action -->
                        <div class="flex justify-between">
                            <div class="flex space-x-3 items-center">
                                <svg class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                                <svg @click="setFocus()" class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                            <div class="cursor-pointer">
                                <svg class="hover:opacity-60" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                            </div>
                        </div>
                        <!-- info : like -->
                        <p class="text-sm font-semibold pt-3 pb-2">좋아요 {{ likeCount }}개</p>
                        <!-- info : date -->
                        <p class="text-gray-500 text-xs">{{ createdt }}</p>    
                    </div> 
                    <!-- comment : create -->
                    <div class="px-3 py-2 border-t flex justify-between items-center">
                        <div class="flex items-center flex-1">
                            <div class="w-6">
                                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                            </div>
                            <div class="flex items-center flex-1">
                                <label class="hidden" for="comment">댓글</label>
                                <textarea ref="comment" 
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
        </div>
    </div>
</base-dialog>  
</template>
<script>
import { ref, watch } from 'vue'
import BaseDialog from '../ui/BaseDialog.vue'
import Comment from '../comment/Comment.vue'
export default {
    data() {
        return {
            open: false
        }
    },
    props: [
        'userName',
        'text',
        'createdt',
        'commentNo',
        'comments',
        'filename',
        'likeCount'
    ],
    components: {
        BaseDialog,
        Comment
    },
    methods: {
        setFocus(index) {
            this.$refs.comment.focus()
        },
    },
    setup() {
        const dialogActive = ref(false)
        const toggleDialog = (index) => {
            dialogActive.value = !dialogActive.value
        }
        watch(dialogActive, () => {
            //console.log("dialogActive", dialogActive.value)
            if(dialogActive.value) {
                //console.log("dialogActive")
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

