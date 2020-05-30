<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(["error"]),
  },
  watch: {
    error(fbError) {
      console.log(fbError.code)
      this.$error(fbError.code)
    }
  }
  
}
</script>