<template>
    <teleport v-show="modalActive" to="body">
        <div v-show="modalActive" class="fixed bg-black opacity-50 inset-0 z-40" @click="close"></div>
        <div v-show="modalActive" class="absolute inset-0 flex justify-center items-center">
            <slot></slot>
        </div>
    </teleport>
</template>
<script>
export default {
    props: {
        modalActive : {
            type: Boolean,
            required: true
        }
    },
    emits: ['close'],
    setup(props, { emit }) {
        const close = () => {
            emit("close")
        }
        return { close }
    }
}
</script>