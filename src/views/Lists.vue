<template>
  <div>
    <div>
      <Loader v-if="loading" />
      <div v-show="!loading">
        <div id="modals">
          

          <!-- Modal Structure -->
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Подтверждение</h4>
              <p>Вы уверены что хотите удалить песню? Данные не востановить</p>
            </div>
            <div class="modal-footer">
              <button href="#!" class="modal-close waves-effect waves-green btn-flat" @click="deleteSong">Подтверждаю</button>
              <button href="#!" class="modal-close waves-effect waves-green btn-flat">Нет, передумал</button>
            </div>
          </div>
        </div>

        <ul class="collapsible popout">
          <li 
          v-for="(song,index) in songs" 
          :key="index" 
          >
            <div class="collapsible-header">
              <i class="material-icons orange" title="Воспроизвести">play_arrow</i>
              <i class="material-icons orange" title="Редактировать" @click="replacePage('/updatesong',index)">edit</i>

              <!-- Modal Trigger and Delete -->
              <i class="material-icons orange modal-trigger" title="Удалить" @click="agreeDeleteSong(index)">delete</i>
              {{song.info.author}} --- {{song.info.name}} 
              
            </div>
            <div class="collapsible-body">
              <textarea v-model="song.info.text" style="width:100%; height:300px;"></textarea>
            </div>
          </li>
        </ul>
      </div>

      <button class="btn green" @click="replacePage('/addsong',0)">
        <i class="material-icons">add</i>
      </button>

      <button class="btn red" @click="addSong">Кнопочка для всякого</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["songs","selectedSongIndex"])
  },
  data: () => ({
    isAddSongPage: false,
    loading: true,
    instanceModal:{},
    btnIndex:'',
  }),
  methods: {
    ...mapMutations(["setSelectedSongIndex"]),
    addSong() {
      console.log('работает');
    },
    replacePage(link,index) {
      this.setSelectedSongIndex(index)
      this.$router.push(link);
    },
    agreeDeleteSong(index){
      this.setSelectedSongIndex(index)
      console.log(this.selectedSongIndex);
      
      this.instanceModal[0].open();
    },
    async deleteSong(){
      this.loading=true;
      try {
        await this.$store.dispatch('deleteSong',this.selectedSongIndex)
      } catch (error) {
        this.$error('Не удалось удалить песню. Возможно её уже не существует')
        throw error
      }
      this.loading=false;
    }
  },


  async mounted() {
    var elemsCollaps = document.querySelectorAll(".collapsible");
    var instanceCollaps = M.Collapsible.init(elemsCollaps, {
      accordion: true,
      inDuration: 150,
      outDuration: 150
    });

    var elemsModal = document.querySelectorAll(".modal");
    this.instanceModal = M.Modal.init(elemsModal, {});
    console.log();
    
    

    await this.$store.dispatch("getSongsFromBD");

    this.loading = false;
  }
};
</script>
