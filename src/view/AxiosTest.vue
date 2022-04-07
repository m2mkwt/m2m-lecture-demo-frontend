<template>
    <table class="border-solid border-2 border-indigo-600">
        <tr v-for="selectItem in selectList" :key="selectItem.post_id">
            <td class="border-solid border-2 border-indigo-600">{{selectItem.postId}}</td>
            <td class="border-solid border-2 border-indigo-600">{{selectItem.memberId}}</td>
            <td class="border-solid border-2 border-indigo-600">{{selectItem.mediaId}}</td>
            <td class="border-solid border-2 border-indigo-600">{{selectItem.text}}</td>
            <td class="border-solid border-2 border-indigo-600">{{selectItem.deleyeYn}}</td>
            <td class="border-solid border-2 border-indigo-600">{{selectItem.createdt}}</td>

        </tr>
    </table>
</template>

<script>
export default {
    data : function() {
        return {
            selectList : []
        };
    },
    mounted(){
        this.getSelectAll();
    },
    methods : {
        getSelectAll() {
            this.axios.get("http://localhost:8090/test/selectAll").then((res)=>{
                console.log(res);
				this.selectList = res.data.data.resultList;
                // this.$router.push("/login");
                // this.$router.push({name: '/mypage', params: {post_id: [0]}});
            }).catch((err) => {
                console.log(err);
            });
        }
    },
}
</script>

<style>

</style>