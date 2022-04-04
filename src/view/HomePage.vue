<template>
<!-- navbar -->
    <the-header></the-header>
    <!-- content -->
    <div class="bg-zinc-50 min-h-screen">
        <div class="max-w-4xl mx-auto pt-24">
            <div class="md:flex">
                <!-- <div class="flex-1 overflow-y-auto scrollbar-hide"> -->
                    <div>
                        <!-- <div v-if="isLoading">
                            <base-spinner></base-spinner>
                        </div>
                        <div v-if="hasPosts"> -->
                <infinite-scroll 
                    @infinite-scroll="infiniteHandler" 
                    :message="message"
                    :noResult="noResult">                            
                            <post
                                v-for="post in postList"
                                :key="post.postNo"
                                :post-no="post.postNo"
                                :login-id="post.loginId"
                                :content="post.content"
                                :createdt="post.createdt"
                                :comment-cnt="post.commentCnt"
                                filename="http://picsum.photos/640/640"
                                :like-cnt="post.likeCnt"
                                :member-no="post.memberNo"
                            ></post>
                </infinite-scroll>
                        <!-- </div>
                        <div v-else>
                            No posts found.
                        </div> -->
                    </div>
            </div>
        </div>
        <!-- <div v-for="post in postList" :key="post.postNo">
            {{post.postNo}}
        </div> -->
        <!-- <infinite-scroll @infinite-scroll="infiniteHandler"></infinite-scroll> -->
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import BaseDialog from '../components/ui/BaseDialog.vue'
import BaseSpinner from '../components/ui/BaseSpinner.vue'
import Post from '../components/post/Post.vue'
import axios from 'axios'
import InfiniteScroll from "infinite-loading-vue3";
export default {
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
    methods: {
        // posts() {
            // this.isLoading = true
        // this.$store.dispatch('/posts/getSelectAll')
        //     // this.isLoading = false
        // },
        // getSelectAll() {
        //     axios.get("/api/v1/post/selectPostList").then((res)=>{
        //         console.log(res);
        //         console.log(res.data.data)
        //         console.log(res.data.data.data)
                
        //         this.postList = res.data.data;
        //         console.log('postList: ' + this.postList);
        //         // commit mutation 
        //         //this.$store.state.posts = res.data.data;
        //     }).catch((err) => {
        //         console.log(err);
        //     });
        // },

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
    },
    computed: {
        // listPosts() {
        //     return this.$store.getters['posts/posts']
        // },
        // hasPosts() {
        //     return !this.isLoading && this.$store.getters['posts/hasPosts']
        // }
    },
    components: {
        TheHeader,
        TheFooter,
        BaseDialog,
        BaseSpinner,
        InfiniteScroll,
        Post,
    },
    created() {
        this.infiniteHandler()
        // this.getSelectAll()
    }    
}
</script>