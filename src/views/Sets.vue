<template>
  <div>
    <ul class="collapsible popout">
      <li 
      v-for="(set,index) in sets" 
      :key="index"
      >
        <div class="collapsible-header itemSet" :id="index" @click="clickCollaps(index)">
          <i
            class="material-icons orange"
            title="Редактировать"
            @click="replacePage('/updatesong',index)"
          >edit</i>

          <!-- Modal Trigger and Delete -->
          <i
            class="material-icons orange modal-trigger"
            title="Удалить"
            @click="agreeDeleteSong(index)"
          >delete</i>

          {{sets[index].name}}
        </div>
        <div class="collapsible-body">
          <textarea style="width:100%; height:300px;">
          </textarea>
        </div>
      </li>
    </ul>

    <button class="btn-floating green rounded">
      <i class="material-icons" @click="replacePage('/addset')">add</i>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["sets", "songs", "setSongs",'selectedSetIndex']),
  },
  methods: {
    ...mapActions(["getSetsFromBD", "getSongsFromBD"]),
    ...mapMutations(["setSelectedSetIndex"]),
    helper() {
      console.log("работает");
    },
    replacePage(link) {
      this.$router.push(link);
    },
    clickCollaps(index){
      this.setSelectedSetIndex(index)
      
    }
  },
  async mounted() {
    await this.getSongsFromBD();
    await this.getSetsFromBD();

    var elemsCollaps = document.querySelectorAll(".collapsible");
    var instanceCollaps = M.Collapsible.init(elemsCollaps, {
      accordion: true,
      inDuration: 150,
      outDuration: 150,
      onOpenStart: function(){
       let activeEl = document.querySelectorAll(".active")
      console.log(this);
      }
    });

    console.log("mounted: ", this.songs[this.sets["-M8_JJRaxtrGthyopAQx"].songs[0]].info.text);
  }
};
</script>