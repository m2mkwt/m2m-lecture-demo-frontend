<template>
    <div class="flex space-x-4 w-full items-start">
    <img src="filename" class="w-8 h-8 rounded-full mt-1">
    <div class="flex flex-col space-y-4">
        <div class="leading-none h-7 inline-flex">

                <span class="inline w-20 font-semibold text-sm mr-2">{{ loginId }}</span>

            <div class="flex-1">
                <label for="comment" class="hidden">댓글</label>
                <textarea 
                    rows="2" 
                    @keydown.enter.exact.prevent 
                    @keyup.enter.exact="submitUpdatedComment" 
                    @keydown.enter.shift.exact="newline" 
                    v-model="contentComment" 
                    class="inline w-full text-sm focus:outline-none resize-none scrollbar-hide" 
                    ref="commentCont" 
                    name="comment" 
                    id="comment" />
            </div>  
        </div>    
        <p class="text-gray-500 text-xs">{{ dateFormat }}</p>
    </div>
    <div v-if="(memberNo != this.$store.memberNo)===false" class="space-x-2 flex justify-end">
        <button
            class="text-xs text-gray-500 rounded py-1 px-1"
            @click="updateComment">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
        </button>
        <button
            class="text-xs text-gray-500 rounded py-1 px-1"
            @click="deleteComment">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve"><g id="info"/><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit"/></g></svg>
        </button>
    </div>
</div>   
</template>

<script>
import { store } from '../../store'
import axios from 'axios'
export default {
    data() {
        return {
            commentList: [],
            // dateFormat: ''
        }
    },
    props: [
        'loginId',
        'commentNo',
        'memberNo',
        'postNo',
        'contentComment',
        'deleteYN',
        'createdt',
        'comment',
        'filename',
        'index'
    ],
    computed: {
        dateFormat : function() {
            let charArr = ['년','월','일']
            let postDate = ''
            for(let i=0;i < charArr.length;i++) {
                postDate += (((this.createdt.substr(0,16)).split('T')[0]).split('-'))[i]+charArr[i] + ' ' 
            }
            postDate += (this.createdt.substr(0,16).split('T')[1]).split(':')[0] + '시' + ' ' + (this.createdt.substr(0,16).split('T')[1]).split(':')[1] + '분'
            return postDate
        }
    },
    // watch: {
    //     contentComment() {

    //     }
    // },
    methods: {
        newline() {
            this.contentComment = `${this.contentComment}\n`;
        },
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
                alert('댓글이 정상적으로 수정되었습니다.')
                this.$refs.commentCont.blur()
                this.commentList = res.data.data;
                this.contentComment = ''
                console.log('list',  this.commentList)
                this.postNo = res.data.postNo;
                

            }).catch(err => {
                console.log(err);
            })
        },
        deleteComment() {
            // this.$emit('remove', this.index)
            //console.log("포스트 : " + this.commentNo)
            console.log("코멘트 리스트 : "+ this.commentList)
            //console.log("코멘트:" + comment)
            this.$emit('remove-comment', this.commentNo)
            // axios.post ("/api/v1/comment/removeComment",{
            //     postNo: this.postNo,
            //     commentNo: this.commentNo
            // }).then(res => {
            //     alert('댓글이 정상적으로 삭제 되었습니다!')
            //     location.reload()
            //     this.commentList = res.data.data;
            //     console.log('list',  this.commentList)
            // }).catch(err => {=> {}
            //     console.log(err);
            // })
            // axios.post('/api/v1/comment/removeComment',{
            //     // id: id,
            //     postNo: this.postNo,
            //     commentNo: this.commentNo
            // }).then(res=> {
            //     //console.log("id: "+ id)
                
            //     console.log("댓글 리스트: "+this.commentList)
            //     alert('댓글이 정상적으로 삭제 되었습니다!')
            //     location.reload()
            //     // const index = this.commentList.findIndex(comment => comment.commentNo === id)
            //     // if(~index)
            //     //     this.commentCont.splice(index, 1)
            // }) 
        },
    }
}
</script>