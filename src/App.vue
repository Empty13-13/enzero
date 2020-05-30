<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import AuthorizationLayout from "@/layouts/AuthorizationLayout" 
import MainLayout from "@/layouts/MainLayout"

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'authorization') + '-layout' ;
    }
  },
  components: {
    AuthorizationLayout,
    MainLayout,
  }
}
</script>



<style lang="scss">
@import '~materialize-css/dist/css/materialize.css';
@import 'assets/index.css';
</style>
