<template>
<!-- navbar -->
    <the-header></the-header>
    <!-- content -->
    <div class="bg-zinc-50 min-h-screen">
        <div class="max-w-4xl mx-auto pt-24">
            <div class="md:flex">
                <div class="flex-1 overflow-y-auto scrollbar-hide">
                    <!-- <div v-if="isLoading">
                        <base-spinner></base-spinner>
                    </div>
                    <div v-if="hasPosts"> -->
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
                        ></post>
                    <!-- </div>
                    <div v-else>
                        No posts found.
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import BaseDialog from '../components/ui/BaseDialog.vue'
import BaseSpinner from '../components/ui/BaseSpinner.vue'
import Post from '../components/post/Post.vue'
import axios from 'axios'
export default {
    data() {
        return {
            isLoading: false,
            postList: []
        }
    },
    methods: {
        // posts() {
            // this.isLoading = true
        // this.$store.dispatch('/posts/getSelectAll')
        //     // this.isLoading = false
        // },
        getSelectAll() {
                axios.get("/api/v1/post/selectPostList").then((res)=>{
                console.log(res);
                console.log(res.data.data)
                console.log(res.data.data.data)
                
                this.postList = res.data.data;
                console.log(this.postList)
                // commit mutation 
                //this.$store.state.posts = res.data.data;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    computed: {
        listPosts() {
            return this.$store.getters['posts/posts']
        },
        hasPosts() {
            return !this.isLoading && this.$store.getters['posts/hasPosts']
        }
    },
    components: {
        TheHeader,
        TheFooter,
        BaseDialog,
        BaseSpinner,
        Post
    },
    mounted() {
        this.getSelectAll()
    }    
}
</script>