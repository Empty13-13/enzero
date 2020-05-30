<template>
  <div>
    <ul class="collection with-header">
      <li class="collection-header center-align">
        <h4>Сет листы</h4>
      </li>
      <a href="#!" @click.prevent class="collection-item orange-text">Хератс паб</a>
      <a href="#!" class="collection-item green active">Дублин</a>
      <a href="#!" class="collection-item orange-text">Энди бар</a>
      <a href="#!" class="collection-item orange-text">Инжир</a>
    </ul>
    <button class="btn-floating green rounded">
      <i class="material-icons" @click="replacePage('/addset')">add</i>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setSelectedSongIndex"]),
    helper() {
      console.log("работает");
    },
    replacePage(link) {
      this.$router.push(link);
    }
  },
};
</script>