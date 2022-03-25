<template>
    <the-header></the-header>
    <div class="bg-zinc-50 min-h-screen">
        <div class="max-w-4xl mx-auto pt-24">
            <div class="bg-white w-full border h-screen flex">
                <!-- aside menu -->
                <div class="w-1/4 border-r px-8 py-3 space-y-5 h-full">
                    <div>프로필 편집</div>
                    <div>비밀번호 변경</div>
                    <div>이메일 및 SMS</div>
                </div>
                <!-- content -->
                <div class="flex flex-1 py-3">
                    <div class="w-1/4 flex flex-col">
                        <div>이름</div>
                        <div>사용자 이름2</div>
                        <div>웹사이트</div>
                        <div>소개</div>
                    </div>
                    <div class="flex-1"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader
  },     
}
</script>