<template>
  <v-app app>
    <lk-navbar></lk-navbar>
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import LkNavbar from './components/Menu'

export default {
  name: 'App',
  components: {
    LkNavbar,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  #app {
  }
</style>


