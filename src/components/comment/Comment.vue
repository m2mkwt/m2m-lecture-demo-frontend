<template>
    <div class="flex space-x-4">
    <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mt-1">
    <div class="flex flex-col space-y-4">
        <div class="leading-none">
            <span class="font-semibold text-sm mr-2">{{ comment.userName }}</span>
            <span class="text-sm">{{ comment.text }}</span>
        </div>
        <p class="text-gray-500 text-xs">{{ comment.createdt }}</p>
    </div>
</div>   
</template>

<script>
export default {
    props: [
        'comment'
    ]
}
</script>