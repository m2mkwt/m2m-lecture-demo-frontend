<template>
  <div class="flex space-x-4 w-full items-start">
    <img
      :src="filename"
      class="w-8 h-8 rounded-full mt-1"
      @error="replaceByDefault"
    >
    <div class="flex flex-col space-y-4">
      <div class="leading-none h-7 inline-flex">
        <span class="inline w-20 font-semibold text-sm mr-2">{{ loginId }}</span>
        <div class="flex-1">
          <label
            for="comment"
            class="hidden"
          >댓글</label>
          <textarea
            id="comment"
            ref="commentCont"
            v-model="contentComment"
            rows="2"
            class="inline w-full text-sm focus:outline-none resize-none scrollbar-hide"
            name="comment"
            @keydown.enter.exact.prevent
            @keyup.enter.exact="submitUpdatedComment"
            @keydown.enter.shift.exact="newline"
          />
        </div>
      </div>
      <p class="text-gray-500 text-xs">{{ dateFormat }}</p>
      <div
        v-if="(memberNo != $store.memberNo)===false"
        class="space-x-2 flex"
      >
        <button
          class="text-xs text-gray-500 rounded py-1 px-1"
          @click="updateComment"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 48 48"
            width="48"
          >
            <path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
            <path
              d="M0 0h48v48h-48z"
              fill="none"
            />
          </svg>
        </button>
        <button
          class="text-xs text-gray-500 rounded py-1 px-1"
          @click="deleteComment"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="enable-background:new 0 0 24 24;"
            version="1.1"
            viewBox="0 0 24 24"
            xml:space="preserve"
          >
            <g id="info" />
            <g id="icons">
              <path
                id="exit"
                d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { store } from '../../store'
import img from '../../assets/images/errorImage.png'
import axios from 'axios'
export default {
    // props: [
    //     'loginId',
    //     'commentNo',
    //     'memberNo',
    //     'postNo',
    //     'contentComment',
    
    //     'deleteYN',
    //     'createdt',
    //     'comment',
    //     'filename',
    //     'index'
    // ],
    props: {
        loginId: {
            type: [String],
            required: true
        },
        commentNo: {
            type: [Number],
            required: true
        },
        memberNo: {
            type: [Number],
            required: true
        },
        postNo: {
            type: [Number],
            required: true
        },
        contentComment: {
            type: [String],
            required: true
        },
        deleteYN: {
            type: [String],
            default: 'N',
            required: false
        },
        createdt: {
            type: [String],
            default: '',
            required: false
        },
        comment: {
            type: [String],
            required: true
        },
        filename: {
            type: [String],
            required: true
        },
        index: {
            type: [Number],
            required: true
        }
    },
    emits: ['remove-comment'],
    data() {
        return {
            commentList: [],
        }
    },
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
    methods: {
        replaceByDefault(e) {
            e.target.src = img
        },
        // newline() {
        //     this.contentComment = `${this.contentComment}\n`;
        // },
        updateComment() {
            this.$refs.commentCont.focus()
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
                //this.contentComment = ''
                console.log('list',  this.commentList)
                //this.postNo = res.data.postNo;
            }).catch(err => {
                console.log(err);
            })
        },
        deleteComment() {
            console.log("코멘트 리스트 : "+ this.commentList)
            this.$emit('remove-comment', this.commentNo)
        },
    }
}
</script>