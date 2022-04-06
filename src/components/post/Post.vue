<template>
<div>
<div class="bg-white border rounded border-gray-200 mb-6">
    <!-- top -->
    <div class="flex items-center justify-between px-4 py-3 border-b">
        <div class="flex items-center">
            <img :src="mfilename" class="w-8 h-8 rounded-full mr-3" @error="replaceByDefault">
            <p class="font-semibold text-sm">{{ loginId }}</p>
        </div>
        <div class="cursor-pointer" v-if="(memberNo != this.$store.memberNo)===false" v-on:click="toggleModal">
            <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
        </div> 
    </div>
    <!-- photo -->
    <div class="w-full cursor-pointer" @click="getPostList()">
        <img class="w-full" :src="pfilename" @error="replaceByDefault">
    </div>
    <div class="px-3 pt-3 pb-1">
        <!-- action -->
        <div class="flex justify-between">
            <div class="flex space-x-3 items-center">
                <div @click="likesFromList('Y')" v-if="likeStatus">
                    <svg aria-label="좋아요 취소" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>   
                </div>
                <div @click="likesFromList('N')" v-else>
                    <svg aria-label="좋아요" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                </div>
                <svg @click="toggleDialog(index)" class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            </div>
            <!-- <div class="cursor-pointer">
                <svg class="hover:opacity-60" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </div> -->
        </div>
        <!-- info : like -->
        <p class="text-sm font-semibold pt-3 pb-2">좋아요 {{ likeCnt }}개</p>
        <!-- info : content -->
            <!-- line -->
            <div class="line-clamp-2 text-sm">
                <!-- user id -->
                <span class="font-semibold text-sm">{{ loginId }}</span>
                {{ content }}                             
            </div>  
            <!-- <button class="text-gray-400 text-sm">더 보기</button>                              -->
    </div>
    <!-- comment : list -->
    <div class="px-3">
        <button v-if="commentCnt" @click="getPostList()" class="text-gray-500 text-sm">댓글 {{ commentCnt }}개 보기</button>
    </div>
    <!-- info : created date -->
    <div class="px-3 pt-2 pb-5">
        <p class="text-xs text-gray-500">{{ dateFormat }}</p>
    </div>
    <!-- comment : create -->
    <div class="px-3 py-2 border-t flex justify-between items-center">
        <div class="flex items-center flex-1">
            <div class="w-6">
                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
            </div>
            <div class="flex items-center flex-1" >
                <label class="hidden" for="comment">댓글</label>
                <textarea ref="comment" 
                    name="comment" id="comment" rows="1" placeholder="댓글 달기..."
                    class="focus:outline-none text-sm py-2 pl-3 w-full text-left resize-none scrollbar-hide"
                    v-model="createConent">
                </textarea>
            </div>
        </div>
        <div class="w-7">
            <button class="text-blue-500 text-sm font-semibold" @click="addComment" >게시</button>
        </div>
    </div>
</div>
<base-dialog @close="toggleDialog" :dialogActive = "dialogActive">
    <div class="w-full z-40 h-5/6 my-auto px-10 max-w-6wl mx-auto flex justify-center items-center min-h-screen">
        <div class="bg-white rounded text-xl my-5">
            <div class="flex">
                <!-- photo -->
                <div class="w-7/12 border-r">
                    <img class="h-full w-full" :src="pfilename" @error="replaceByDefault">
                </div>   
                <!-- content -->
                <div class="flex-1 flex flex-col justify-between bg-white rounded-r">
                    <!-- top -->
                    <div class="flex items-center justify-between px-4 py-3 border-b">
                        <div class="flex items-center">
                            <img :src="mfilename" class="w-8 h-8 rounded-full mr-4" @error="replaceByDefault">
                            <p class="font-semibold text-sm">{{postDetail.loginId}}</p>
                        </div>
                        <div class="cursor-pointer" v-if="(memberNo != this.$store.memberNo)===false" v-on:click="toggleModal">
                            <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </div> 
                    </div>
                    <div class="overflow-y-auto overflow-x-hidden scrollbar-hide" ref="messages">
                        <!-- 글 -->
                        <div class="flex px-4 py-3 w-full">
                            <div class="flex w-full items-start">
                                <div class="w-8 h-8 mr-4">
                                    <img :src="mfilename" class="w-full h-full rounded-full" @error="replaceByDefault">
                                </div>
                                <div class="flex-1 flex flex-col">
                                    <span class="inline font-semibold text-sm">{{postDetail.loginId}}</span>
                                    <textarea
                                        @keydown.enter.exact.prevent @keyup.enter.exact="submitUpdatedPost" 
                                        ref="checkClamp"
                                        v-model="this.contentDetail"
                                        class="focus:outline-none inline line-clamp-2 text-sm resize-none"></textarea>
                                      
                                </div>
                                <!-- <div v-if="isTextClamped">
                                        더보기</div>   -->
                            </div>
                        </div>
                        <!-- 댓글 -->
                        <div class="flex flex-col h-64 px-4 pt-3 space-y-6">
                            <comment
                                v-for="comment in commentList"
                                :key="comment.postNo"
                                :loginId="comment.loginId"
                                :comment-no="comment.commentNo"
                                :member-no="comment.memberNo"
                                :post-no="comment.postNo"
                                :contentComment="comment.content"
                                :deleteYN="comment.deleteYN"
                                :createdt="comment.createdt"
                                :filename="comment.filename"
                                @removeComment="removeCommentData"
                            ></comment>
                        </div>
                    </div>

                    <div class="px-3 py-4 border-t">
                        <!-- action -->
                        <div class="flex justify-between">
                            <div class="flex space-x-3 items-center">
                                <div @click="likesUP('Y')" v-if="postDetail.likeStatus">
                                    <svg aria-label="좋아요 취소" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>   
                                </div>
                                <div @click="likesUP('N')" v-else>
                                    <svg aria-label="좋아요" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                                </div>  
                                <svg @click="setFocus()" class="hover:opacity-60 cursor-pointer" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            </div>
                        </div>
                        <!-- info : like -->
                        <p class="text-sm font-semibold pt-3 pb-2">좋아요 {{ postDetail.likeCnt }}개</p>
                        <!-- info : date -->
                        <p class="text-gray-500 text-xs">{{ postList.dateFormat }}</p>    
                    </div> 
                    <!-- comment : create -->
                    <div class="px-3 py-2 border-t flex justify-between items-center">
                        <div class="flex items-center flex-1">
                            <div class="w-6">
                                <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                            </div>
                            <div class="flex items-center flex-1">
                                <label class="hidden" for="content">댓글</label>
                                <textarea ref="modalComment" 
                                name="content" id="content" rows="1" placeholder="댓글 달기..."
                                class="focus:outline-none text-sm py-2 pl-3 w-full text-left resize-none scrollbar-hide"
                                v-model="createConent">
                                </textarea>
                            </div>
                        </div>
                        <div class="w-7">
                            <button class="text-blue-500 text-sm font-semibold" @click="addComment">게시</button>
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
                <div class="cursor-pointer border-b border-gray-300 py-3 w-full text-center text-red-500 font-semibold " @click="removePost">삭제</div>
                <div class="cursor-pointer border-b border-gray-300 py-3 w-full text-center" @click="[updatePost(), toggleModal()]">수정</div>
                <div class="cursor-pointer py-3 w-full text-center" @click="toggleModal">취소</div>
            </div>
        </div>        
</base-modal>  
</div>
</template>
<script>
import { ref, watch } from 'vue'
import BaseDialog from '../ui/BaseDialog.vue'
import BaseModal from '../ui/BaseModal.vue'
import Comment from '../comment/Comment.vue'
import { store } from '../../store'
import img from '../../assets/images/errorImage.png'
import axios from 'axios'
export default {
    data() {
        return {
            createConent: '',
            open: false,
            commentList: [],
            postList: [],
            commentList2: [],
            dateFormat: '',
            scrollHeight: 0,
            contentDetail:'',
            postDetail:[]
        }
    },
    props: [
        'loginId',
        'content',
        'createdt',
        'commentCnt',
        'postNo',
        'pfilename',
        'mfilename',
        'likeCnt',
        'likeStatus',
        'memberNo'
        
    ],
    components: {
        BaseDialog,
        Comment,
        BaseModal
    },
    // computed: {
    //     dateFormat : function() {
    //         let charArr = ['년','월','일']
    //         let postDate = ''
    //         for(let i=0;i < charArr.length;i++) {
    //             postDate += (((this.createdt.substr(0,16)).split('T')[0]).split('-'))[i]+charArr[i] + ' ' 
    //         }
    //         postDate += (this.createdt.substr(0,16).split('T')[1]).split(':')[0] + '시' + ' ' + (this.createdt.substr(0,16).split('T')[1]).split(':')[1] + '분'
    //         return postDate
    //     }
    // },
    methods: {
        replaceByDefault(e) {
            e.target.src = img
        },
        setFocus(index) {
            this.$refs.modalComment.focus()
        },
        likesUP(delYn) {
            // this.likeStatus = !this.likeStatus
            axios.post ("/api/v1/comment/likePost",{
                postNo: this.postNo,
                deleteYn: delYn
            }).then(res => {
                const likeCnt = res.data.data;
                const likeStatus = (delYn === 'N') ? true : false

                this.postDetail.likeCnt= res.data.data;
                this.postDetail.likeStatus= likeStatus;

            }).catch(err => {
                console.log(err);
            })
        },
        likesFromList(delYn) {
            const likeFlag = (this.likeStatus) ? true: false;
            axios.post ("/api/v1/comment/likePost",{
                postNo: this.postNo,
                deleteYn: delYn
            }).then(res => {
                // this.commentList = res.data.data;
                // this.likeStatus = !likeFlag
                const likeCnt = res.data.data
                // console.log('좋아요 :', likeCnt)
                this.$emit('childLikeEvent', this.postNo, delYn, likeCnt)

            }).catch(err => {
                console.log(err);
            })
        },
        getCommentsAll() {
            axios.get("/api/v1/comment/selectCommentlist", {
                params: {
                    postNo: this.postNo
                }
            }).then((res)=>{
                this.commentList = res.data.data;
                this.postNo = res.data.postNo;
            }).catch((err) => {
                console.log(err);
            });            
        },
        addComment() {
            axios.post ("/api/v1/comment/addComment",{
                memberNo: store.memberNo,
                postNo: this.postNo,
                content: this.createConent
                })
                .then(res => {
                this.commentList= res.data.data;
                this.createConent = ''
                console.log('list',  this.commentList)
                //this.postNo = res.data.postNo;
            }).catch(err => {
                console.log(err);
            })
        },
        getPostList() {
            axios.get("/api/v1/post/getPost" ,{
                params: {
                    memberNo: store.memberNo,
                    postNo : this.postNo
                }
            }).then((res)=>{
                console.log("상세페이지")
                console.log(res);
                if (res.data.data) {
                    const _data = res.data.data;
                    _data.likeStatus = (_data.likeFlag === 'N') ? true:false
                    console.log(_data)
                }
                this.postDetail= res.data.data;
                this.contentDetail=this.postDetail.content
                this.toggleDialog(this.postNo);
            }).catch((err) => {
                console.log(err);
            });            
        },
        removePost() {
	        axios.post("/api/v1/post/removePost",{
                postNo : this.postNo
            }).then((res)=>{
		        console.log(res);
                this.$router.go();
	        }).catch((err) => {
		        console.log(err);
	        });            
        },
        updatePost() {
            this.$refs.checkClamp.focus()
        },
        submitUpdatedPost() {
            // API 500 Error
            const contentReg = /^(\S{1,}\s?){5,}$/ 
            let contentValidation = contentReg.test(this.content);
            if(this.content === '' || contentValidation === false) {
                this.contentValidity = 'invalid'
                alert("5글자 이상 입력하세요.")
                this.$refs.content.focus()
            } else {
                this.contentValidity = 'valid'
	            axios.post("/api/v1/post/editPost",{
                memberNo: store.memberNo,
                postNo : this.postNo,
                content: this.contentDetail
                }).then((res)=>{
                    console.log(res);
                    alert('게시물이 정상적으로 수정되었습니다.')
                    this.$refs.checkClamp.blur()
                    this.postList = res.data.data
                    //this.$router.go();
                }).catch((err) => {
                    console.log(err);
                });
            }
                      
        },
        removeCommentData(commentNo) {
            axios.post ("/api/v1/comment/removeComment",{
                postNo: this.postNo,
                commentNo
            }).then(res => {
                this.commentList = res.data.data;
                console.log('list',  this.commentList)
            })
        }
    },
    mounted() {
        this.getCommentsAll()
        // this.getPostList()

    },
        watch: {
        commentList() {
            this.$nextTick(()=> {
                let commentList = this.$refs.messages
                commentList.scrollTo({top: commentList.scrollHeight, behavior: 'smooth'})
            })
        },
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
}
</script>

