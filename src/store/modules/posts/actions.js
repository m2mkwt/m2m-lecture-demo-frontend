export default {
    async loadPosts(context, payload) {
        const response = await fetch('/post/list')
        const responseData = await response.json()
        console.log(responseData)
        if (!response.ok) {
            //...
        }
        // const posts = []
        // for (const key in responseData) {
        //     first
        // }
    }    
}