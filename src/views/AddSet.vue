<template>
  <div>
    <form id="songList" @submit="submitHandler">
      <ul class="collapsible popout">
        <li v-for="(song,index) in songs" :key="index">
          <div class="collapsible-header">
            <label>
              <input type="checkbox" class="chebox" :id="index" />
              <span></span>
            </label>
            {{song.info.author}} --- {{song.info.name}}
          </div>
          <div class="collapsible-body">
            <textarea v-model="song.info.text" style="width:100%; height:300px;"></textarea>
          </div>
        </li>
      </ul>

      <p>
        <input class="btn orange" type="button" @click="submitHandler" value="Отправить" />
      </p>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapGetters(["songs"])
  },
  async mounted() {
    await this.$store.dispatch("getSongsFromBD");

    this.loading = false;
  },
  methods: {
    async submitHandler() {
      var elemsCheckbox = document.querySelectorAll(".chebox");

			let listFromSong = [];
			let checked=false;
      for (let i = 0; i < elemsCheckbox.length; i++) {
        const element = elemsCheckbox[i];
        if (element.checked) {
					checked=true
          listFromSong.unshift(element.id);
        }
			}
			if(!checked){
				this.$textMessage('Сначала выделите песни, которые нужно добавить в сет!')
				return
			}
			

      try {
        await this.$store.dispatch("addSet", listFromSong);
				this.$textMessage("Сет добавлен!");
				this.$router.push('/sets')
      } catch (error) {
        this.$error("Что то пошло не так");
        throw error;
      }
    }
  }
};
</script>