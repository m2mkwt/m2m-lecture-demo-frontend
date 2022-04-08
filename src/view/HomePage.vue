<template>
  <!-- navbar -->
  <the-header></the-header>
  <!-- content -->
  <div class="bg-zinc-50 min-h-screen">
    <div class="max-w-4xl mx-auto pt-24">
      <div class="md:flex">
        <div>
          <infinite-scroll
            :message="message"
            :no-result="noResult"
            @infinite-scroll="infiniteHandler"
          >
            <post
              v-for="post in postList"
              :key="post.postNo"
              :post-no="post.postNo"
              :login-id="post.loginId"
              :content="post.content"
              :createdt="post.createdt"
              :comment-cnt="post.commentCnt"
              :pfilename="post.pfilename"
              :mfilename="post.mfilename"
              :like-cnt="post.likeCnt"
              :like-status="post.likeStatus"
              :member-no="post.memberNo"
              @child-like-event="changeLike"
              @cmt-cnt-event="changeCmtCnt"
            ></post>
          </infinite-scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from '../components/layout/TheHeader.vue'
import Post from '../components/post/PostItem.vue'
import axios from 'axios'
import InfiniteScroll from "infinite-loading-vue3";
export default {
    components: {
        TheHeader,
        InfiniteScroll,
        Post,
    },
    data() {
        return {
            isLoading: false,
            postList: [],
            sidx: 'CREATEDT',
            sord: 'DESC',
            page: 1,
            rows: 3,
            totoalRows: 0,
            noResult: false,
            message: "",
            isRun: false
        }
    },
    created() {
        this.infiniteHandler()
    },
    methods: {
        changeLike(postNo, delYn, likeCnt) {
            console.log('postNo :', postNo)
            console.log('delYn :', delYn)
            console.log('likeCnt :', likeCnt)
            this.postList.forEach(function(item) {
                const likeStatus = (delYn === 'N') ? true:false
                console.log('item.postNo :', item.postNo)

                if (item.postNo == postNo) {
                    item.likeCnt = likeCnt
                    item.likeStatus = likeStatus
                }
            })
        },

        changeCmtCnt(postNo,cmtCnt){
            console.log('postNo :', postNo)
            console.log('cmtCnt :', cmtCnt)
            this.postList.forEach(function(item) {
                console.log('item.postNo :', item.postNo)

                if (item.postNo == postNo) {
                    console.log("변경전 댓글갯수"+item.commentCnt)
                    item.commentCnt = cmtCnt
                    console.log("변경된 댓글갯수"+item.commentCnt) 
                }
            })
        },

        infiniteHandler() {
            const params = {
                page : this.page,
                rows : this.rows,
                sidx : this.sidx,
                sord : this.sord
            }
            if (this.isRun === true) {
                return
            } else {
                this.isRun = true
            }
            axios.post("/api/v1/post/selectPostList", params)
            .then((res)=>{
                // console.log('Result List :', res.data.data)
                // console.log('Total Count :', res.data.count)
                this.totoalRows = res.data.count;
                setTimeout(() => {
                    if (res.data.data) {
                        let _data = res.data.data;
                        if(_data.length) {
                            _data.forEach(function(item) {
                                item.likeStatus = (item.likeFlag === 'N') ? true:false
                                // console.log(item)
                            })
                            this.postList = this.postList.concat(_data)
                            // $state.loaded()
                            this.page = this.page + 1
                            let totalPageSize = Math.ceil(this.totoalRows / this.rows)
                            if(this.page + 1 < totalPageSize) {
                                // 끝 지정(No more data)
                                // $state.complete()
                                console.log('END !!!!!!!!')
                                this.noResult = true;
                                this.message = "No result found";
                            }
                        } else {
                            // 끝 지정(No more data)
                            // $state.complete()
                            console.log('END !!!!!!!!')
                            this.noResult = true;
                            this.message = "No result found";
                        }
                    }
                    this.isRun = false
                }, 500)
            }).catch(err => {
                console.error(err);
            })
        }
    }    
}
</script>