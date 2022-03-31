import axios from 'axios'
export default {
    
        getSelectAll() {
            this.axios.get("/post/list").then((res)=>{
                console.log(res);
                this.selectList = res.data.data;
            }).catch((err) => {
                console.log(err);
            });
        }
    // async loadPosts(context, payload) {
    //     const response = await fetch('/post/list')
    //     const responseData = await response.json()
    //     console.log(responseData)
    //     if (!response.ok) {
    //         //...
    //     }
    //     // const posts = []
    //     // for (const key in responseData) {
    //     //     first
    //     // }
    // }    
}