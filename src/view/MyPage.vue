<template>
    <the-header></the-header>
    <div class="bg-zinc-50 min-h-screen">
        <div class="max-w-4xl mx-auto pt-24">
            <!-- upper -->
            <div class="flex flex-col md:flex md:items-center px-4 pb-8 mb-0 md:mb-12 lg:px-12 lg:space-x-0 border-b">
                <div class="flex space-x-6 md:space-x-0">
                    <div class="cursor-pointer">
                        <img class="rounded-full w-20 md:w-32 lg:w-40" src="../assets/images/avatar_lg.jpg" @error="replaceByProfileDefault">
                    </div>
                    <div class="md:px-24 flex flex-col space-y-6">
                        <!-- 1st row -->
                        <div class="flex items-center space-x-5">
                            <div class="text-3xl font-thin">{{ member.userName }}</div>
                            <div class="border rounded md:flex items-center hidden">
                                <router-link to="/edit" class="text-sm font-bold px-2 py-1">프로필 편집</router-link>
                            </div>
                            <!-- 설정 아이콘 안써서 주석처리 -->
                            <!-- <div class="cursor-pointer">
                                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div> -->
                        </div>
                        <!-- responsive1 -->
                        <div class="border rounded flex items-center justify-center md:hidden">
                            <router-link to="/edit" class="text-sm font-bold px-24 py-1">프로필 편집</router-link>
                        </div>
                        <!-- 2nd row -->
                        <div class="md:flex space-x-10 hidden">
                            <div class="flex space-x-2">
                                <div>게시물</div>
                                <div class="font-medium">{{ myPostCount }}</div>
                            </div>
                            <!-- 팔로우 기능 안써서 주석처리 -->
                            <!-- <div class="flex space-x-2">
                                <div>팔로워</div>   
                                <div class="font-medium">0</div>
                            </div>
                            <div class="flex space-x-2">
                                <div>팔로우</div>
                                <div class="font-medium">288</div>
                            </div> -->
                        </div>
                        <!-- 3rd row -->
                        <!-- 소개 안써서 주석처리 -->
                        <!-- <div class="hidden md:block">
                            <div class="font-medium">Blah blah</div>
                        </div> -->
                    </div>
                </div>
                <!-- <div class="md:hidden pt-8">
                    <div class="font-medium">Blah blah</div>
                </div> -->
            </div>
            <!-- responsive 2 -->
            <div class="flex py-2 md:hidden justify-between border-b mb-12">
                <div class="flex flex-col flex-1 items-center">
                    <div class="text-gray-500 text-sm">게시물</div>
                    <div>{{ myPostCount }}</div>
                </div>
                <!-- 팔로우 기능 안쓰니까 지워야 하지 않을까 ...? -->
                <!-- <div class="flex flex-col flex-1 items-center">
                    <div class="text-gray-500 text-sm">팔로워</div>
                    <div>0</div>
                </div>
                <div class="flex flex-col flex-1 items-center">
                    <div class="text-gray-500 text-sm">팔로우</div>
                    <div>288</div>
                </div> -->
            </div>
            <!-- photo area 게시물이 존재할 경우 -->
            <div class="grid grid-cols-3 gap-7" v-show="myPostCount >= 1">
                <div @click="getPostList(post_no)" class="cursor-pointer relative" v-for="(myImages,post_no) in myPostList" v-bind:key="myImages.post_no">
                    <img class="w-full" :src="myImages.filename" @error="replaceByDefault">
                    <!-- <img class="w-full" src="myImages.fileName"> -->
                    <div class="opacity-0 hover:opacity-100 ease-in duration-300 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold text-lg bg-black/[.09]">
                        <div class="flex items-center justify-center">
                            <svg class="w-5 mr-1" color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="#fff" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            <p>23</p>
                        </div>
                    </div>
                </div>
                <!-- 원본 -->
                <!-- <div @click="toggleDialog" class="cursor-pointer relative" v-for="feed in 6" :key="feed">
                    <img class="w-full" src="http://picsum.photos/100">
                    <div class="opacity-0 hover:opacity-100 ease-in duration-300 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold text-lg bg-black/[.09]">
                        <div class="flex items-center justify-center">
                            <svg class="w-5 mr-1" color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="#fff" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            <p>23</p>
                        </div>
                    </div>
                </div> -->
            </div>
            <!-- photo area 게시물이 존재하지 않을 경우 -->
            <div class="h-96 text-center bg-zinc-50 pt-12 pb-14 " v-show="myPostCount === 0">
                <p class="text-center font-bold inline-block align-middle text-lg">소중한 순간을 포착하여 공유해보세요.</p>
            </div>
        </div>
        <the-footer></the-footer>
        <base-dialog @close="toggleDialog" :dialogActive = "dialogActive">
            <div class="w-full z-40 h-max px-10 max-w-6xl mx-auto">
                <!-- 모달창 -->
                <div class="bg-white rounded text-xl h-full">
                    <div class="flex">
                        <!-- photo -->
                        <div class="w-7/12">
                            <img class="h-full w-full" src="http://picsum.photos/100" @error="replaceByDefault">
                        </div>
                        <!-- content -->
                        <div class="flex-1 flex flex-col">
                            <!-- top -->
                            <div class="flex items-center justify-between px-4 py-3 border-b">
                                <div class="flex items-center">
                                    <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mr-4" @error="replaceByDefault">
                                    <p class="font-semibold text-sm">{{ member.userName }}</p>
                                </div>
                                <div class="cursor-pointer" @click="toggleModal">
                                    <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                </div> 
                            </div>
                            <!-- content -->
                            <div class="flex flex-1 px-4 pt-3 border-b">
                                <div class="flex space-x-4">
                                    <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full" @error="replaceByDefault">
                                    <div class="flex flex-col">
                                        <p class="font-semibold text-sm">{{ member.userName }}</p>
                                        <p class="text-gray-500 text-xs pt-2">{{myPostDetailList.content}}</p>
                                    </div>
                                </div>
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
                                <p class="text-sm font-semibold pt-3 pb-2">좋아요 {{myPostDetailList.likeCnt}}개</p>
                                <!-- info : date -->
                                <p class="text-gray-500 text-xs">{{myPostDetailList.createdt}}</p>    
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
        <base-modal @close="toggleModal" :modalActive="modalActive">
            <div class="bg-white rounded-lg z-50 w-96">
                <div class="flex flex-col w-ful">
                    <div class="cursor-pointer border-b border-gray-300 py-3 w-full text-center text-red-500 font-semibold" @click="removePost">삭제</div>
                    <div class="cursor-pointer py-3 w-full text-center" @click="toggleModal" :modalActive="false">취소</div>
                </div>
            </div>        
        </base-modal>
    </div>
</template>
<script>
import { ref, watch } from 'vue'
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import BaseDialog from '../components/ui/BaseDialog.vue'
import BaseModal from '../components/ui/BaseModal.vue'
import { store } from '../store'
import img from '../assets/images/errorImage.png'
import avatarImg from '../assets/images/avatar.jpg'
import axios from 'axios'
export default {
    data() {
        return {
            comment: '',
            member: {},
            myPostCount: '',
            myPostList: [],
            post_no : '',
            myPostDetailList: {}
        }
    },
    components: {
        TheHeader,
        TheFooter,
        BaseDialog,
        BaseModal
    },
    methods: {
        replaceByDefault(e) {
            e.target.src = img
        },
        replaceByProfileDefault(e) {
            e.target.src = avatarImg
        },
        setFocus() {
            this.$refs.comment.focus()
        },
        getMember() {
            // console.log('회원 정보 조회 api 호출')
            // console.log('현재 로그인한 user의 memberNo: ' + store.memberNo);
	        axios.get("/api/v1/mypage/getMember",{
                params: {
                    memberNo : store.memberNo
                }
            }).then((res)=>{
		        // console.log(res);
                this.member = res.data.data;
                // console.log(member);
	        }).catch((err) => {
		        console.log(err);
	        });
        },
        // * 쿼리 잘못되어있어 주석처리하고 erarchPostList에서 res.data.count 사용
        // getPostCnt() {
        //     console.log('내가 작성한 게시물 갯수 조회 api 호출')
	    //     axios.get("/api/v1/mypage/getPostCnt",{
        //         params: {
        //             memberNo : store.memberNo
        //         }
        //     }).then((res)=>{
		//         console.log(res);
        //         this.myPostCount = res.data.count;
        //         console.log('내 게시물 갯수: ' + this.myPostCount);
	    //     }).catch((err) => {
		//         console.log(err);
	    //     });
        // },
        searchPostList() {
            console.log('내가 작성한 게시물 조회 api 호출')
	        axios.get("/api/v1/mypage/searchPostList",{
                params: {
                    memberNo : store.memberNo
                }
            }).then((res)=>{
		        console.log(res);
                this.myPostCount = res.data.count;
                this.myPostList = res.data.data;
	        }).catch((err) => {
		        console.log(err);
	        });            
        },
        removePost() {
	        axios.post("/api/v1/post/removePost",{
                postNo : this.post_no
            }).then((res)=>{
		        console.log(res);
                this.$router.go();
	        }).catch((err) => {
		        console.log(err);
	        });            
        },
        updatePost() {
	        axios.post("/api/v1/post/editPost",{
                postNo : this.post_no
            }).then((res)=>{
		        console.log(res);
                //this.$router.go();
	        }).catch((err) => {
		        console.log(err);
	        });            
        },
        getPostList(index) {
            let post_no = this.myPostList[index].post_no;
            axios.get("/api/v1/post/getPost" ,{
                params: {
                    postNo : post_no
                }
            }).then((res)=>{
                console.log(res);
                this.post_no = post_no ;
                this.myPostDetailList = res.data.data;
                this.searchPostList();
                this.toggleDialog(index)
            }).catch((err) => {
                console.log(err);
            });            
        }
    },
    setup() {
        const dialogActive = ref(false)
        const modalActive = ref(false)
        const toggleDialog = (index) => {
            dialogActive.value = !dialogActive.value
        } 
        const toggleModal = () => {
            modalActive.value = !modalActive.value
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
        watch(modalActive, () => {
            if(modalActive.value) {
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
        return { dialogActive, modalActive, toggleDialog, toggleModal } 
    },
    mounted() {
        this.getMember(),
        // this.getPostCnt(),
        this.searchPostList()
        
        //this.getPostList()
    }    
}
</script>