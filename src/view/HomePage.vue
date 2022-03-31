<template>
<!-- navbar -->
    <the-header></the-header>
    <!-- content -->
    <div class="bg-zinc-50 min-h-screen">
        <div class="max-w-4xl mx-auto pt-24">
            <div class="md:flex">
                <div class="flex-1 overflow-y-auto scrollbar-hide">
                    <div v-if="isLoading">
                        <base-spinner></base-spinner>
                    </div>
                    <div v-if="hasPosts">
                        <post
                            v-for="post in listPosts"
                            :key="post.id"
                            :user-name="post.userName"
                            :text="post.text"
                            :createdt="post.createdt"
                            :comment-no="post.commentNo"
                            :comments="post.comments"
                            :filename="post.filename"
                            :like-count="post.likeCount"
                        ></post>
                    </div>
                    <div v-else>
                        No posts found.
                    </div>
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
        }
    },
    methods: {
        posts() {
            // this.isLoading = true
        this.$store.dispatch('/posts/getSelectAll')
            // this.isLoading = false
        },
        getSelectAll() {
                axios.get("/post/list").then((res)=>{
                console.log(res);
                this.selectList = res.data.data;
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