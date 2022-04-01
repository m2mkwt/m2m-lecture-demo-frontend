<template>
    <div class="flex space-x-4">
    <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mt-1">
    <div class="flex flex-col space-y-4">
        <div class="leading-none">
            <span class="font-semibold text-sm mr-2">{{ memberNo }}</span>
            <!-- <span class="text-sm">{{ contentComment }}</span> -->
            <label for="comment" class="hidden">댓글</label>
            <input @keyup.enter="submitUpdatedComment" v-model="contentComment" class="text-sm focus:outline-none" type="text" ref="commentCont" name="comment" id="comment">
        <button
            class="bg-blue-100 rounded py-1 px-1 text-white font-semibold"
            @click="updateComment">
            수정
        </button>
        <button
            class="bg-blue-100 rounded py-1 px-1 text-white font-semibold"
            @click="deleteComment">
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
            console.log( this.contentComment+'으로 수정되었습니다')
        },
        deleteComment() {
            console.log("포스트 : " + this.commentNo)
            axios.post ("/api/v1/comment/removeComment",{
                commentNo: this.commentNo
            }).then(res => {
                this.commentList = res.data.data;
            }).catch(err => {
                console.log(err);
            })
        },
    }
}
</script>