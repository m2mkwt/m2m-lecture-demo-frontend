<template>
    <router-view></router-view>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue'
import { store } from './store'

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      homeActive: true,
      createActive: false,
      authenticated: false,
    }
  },
  created: function () {
    console.log(store);
    this.authenticated = store.loginState
  },
  methods: {
    toggleIsShow: function (loginState) {
      console.log(loginState);
      this.authenticated = loginState
      this.homeActive = loginState
      this.createActive = loginState
    }
  } 
}
</script>
<style>

</style>