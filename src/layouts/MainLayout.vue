<template>
  <div>
    <Loader v-if="loading"/>
    <div class="app-main-layout" v-else>
      <Navbar @clickBar="isOpenSide = !isOpenSide" />

    
      <Sidebar @clickBar="isOpenSide = !isOpenSide" v-model="isOpenSide"/>
    
      <main class="app-content full">
        <div class="app-page">
          <router-view/>
        </div>
      </main>


      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";

export default {
  name: "main-layout",
  data: () => ({
    isOpenSide: false,
    loading: false,
  }),
  components: {
    Navbar,
    Sidebar,
  },
  async mounted() {
    if(!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
    setTimeout(() => this.loading=false, 2000);
    
  },
};
</script>