<template>
    <teleport v-show="dialogActive" to="body">
        <div v-show="dialogActive" class="fixed bg-black opacity-70 inset-0 z-30" @click="close"></div>
        <div v-show="dialogActive" class="absolute inset-0 flex justify-center items-center">
            <slot></slot>
        </div>
        <button v-show="dialogActive" class="absolute top-5 right-5 z-40" @click="$router.go()">
            <div>
                <svg color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
            </div>
        </button>
    </teleport>
</template>
<script>
export default {
    props: ["dialogActive"],
    emits: ['close'],
    setup(props, { emit }) {
        const close = () => {
            emit("close")
        }
        return { close }
    }
}
</script>