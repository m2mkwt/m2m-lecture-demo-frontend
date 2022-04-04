<template>
    <div class="flex space-x-4 w-full">
    <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mt-1">
    <div class="flex flex-col flex-1 space-y-4">
        <div class="leading-none flex-1 flex items-start">
            <div class="w-20">
                <span class="font-semibold text-sm mr-2">{{ loginId }}</span>
                <label for="comment" class="hidden">댓글</label>
            </div>
            <div class="flex-1">
                <textarea rows="3" @keyup.enter="submitUpdatedComment" v-model="contentComment" class="w-full text-sm focus:outline-none resize-none scrollbar-hide" type="text" ref="commentCont" name="comment" id="comment" />
            </div>  
        </div>    
        <div class="space-x-2 flex justify-end">
            <button
                class="border border-gray-300 text-xs text-gray-500 rounded py-1 px-1"
                @click="updateComment"  v-if="(memberNo != this.$store.memberNo)===false" v-on:click="toggleModal">
                수정
            </button>
            <button
                class="border border-gray-300 text-xs text-gray-500 rounded py-1 px-1"
                @click="deleteComment" v-if="(memberNo != this.$store.memberNo)===false" v-on:click="toggleModal">
                삭제
            </button>
        </div>
        <p class="text-gray-500 text-xs">{{ createdt }}</p>
    </div>
</div>   
</template>

<script>
import { store } from '../../store'
import axios from 'axios'
export default {
    props: [
        'loginId',
        'commentNo',
        'memberNo',
        'postNo',
        'contentComment',
        'deleteYN',
        'createdt',
    ],
    methods: {
        updateComment() {
            this.$refs.commentCont.focus()
            // axios.post ("/api/v1/comment/editComment",{
            //     memberNo: store.memberNo,
            //     postNo: this.postNo,
            //     content: this.editConent
            // }).then(res => {
            //     this.commentList = res.data.data;
            //     this.$refs.commentCont.focus()
            // }).catch(err => {
            //     console.log(err);
            // })
        },
        submitUpdatedComment() {
            axios.post ("/api/v1/comment/editComment",{
                memberNo: store.memberNo,
                postNo: this.postNo,
                content: this.contentComment,
                commentNo : this.commentNo
            }).then(res => {
                this.commentList = res.data.data;
                console.log('list',  this.commentList)
                this.postNo = res.data.postNo;
            }).catch(err => {
                console.log(err);
            })
        },
        deleteComment() {
            console.log("포스트 : " + this.commentNo)
            axios.post ("/api/v1/comment/removeComment",{
                postNo: this.postNo,
                commentNo: this.commentNo
            }).then(res => {
                this.commentList = res.data.data;
                console.log('list',  this.commentList)
            }).catch(err => {
                console.log(err);
            })
        },
    }
}
</script>