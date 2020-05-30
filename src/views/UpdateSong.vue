<template>
  <div>
    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          id="author"
          type="text"
          v-model.trim="author"
          :class="{invalid: ($v.author.$dirty && !$v.author.required) || ($v.author.$dirty && !$v.author.minLength)}"
        />
        <label for="author" class="active">Автор</label>

        <small
          class="helper-text invalid"
          v-if="$v.author.$dirty && !$v.author.required"
        >Поле не должно быть пустым</small>

        <small
          class="helper-text invalid"
          v-else-if="$v.author.$dirty && !$v.author.minLength"
        >Поле должно быть не меньше {{this.$v.author.$params.minLength.min}} символов. Сейчас {{author.length}}</small>
      </div>

      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
        />
        <label for="name" class="active">Название песни</label>

        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >Название песни не должно быть пустым</small>

        <small
          class="helper-text invalid"
          v-else-if="$v.name.$dirty && !$v.name.minLength"
        >Название песни должно быть не меньше {{this.$v.name.$params.minLength.min}} символов. Сейчас {{name.length}}</small>
      </div>

      <div class="input-field col s12">
        <textarea
          id="text"
          type="text"
          v-model.trim="text"
          :class="{invalid: ($v.text.$dirty && !$v.text.required) ||  ($v.text.$dirty && !$v.text.minLength)}"
          style="width:100%; height:300px;"
        ></textarea>
        <label for="text" class="active">Текст песни</label>

        <small
          class="helper-text invalid"
          v-if="$v.text.$dirty && !$v.text.required"
        >Текст песни не должен быть пустым</small>

        <small
          class="helper-text invalid"
          v-else-if="$v.text.$dirty && !$v.text.minLength"
        >Текст песни должен быть не меньше {{this.$v.text.$params.minLength.min}} символов. Сейчас {{text.length}}</small>
      </div>

      <button class="btn red waves-effect waves-block" type="submit">Обновить</button>

      <button class="btn-floating green rounded" @click="replacePage">
        <i class="material-icons">arrow_back</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data: () => ({
    author: "",
    name: "",
    text: ""
  }),
  computed: {
    ...mapGetters(["songs","selectedSongIndex"])
  },
  validations: {
    author: { required, minLength: minLength(3) },
    name: { required, minLength: minLength(3) },
    text: { required, minLength: minLength(10) }
  },
  mounted(){
    this.author= this.songs[this.selectedSongIndex].info.author,
    this.name= this.songs[this.selectedSongIndex].info.name,
    this.text= this.songs[this.selectedSongIndex].info.text
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        index: this.selectedSongIndex,
        author: this.author,
        name: this.name,
        text: this.text,
      };

      try {
        await this.$store.dispatch('updateSong', formData)
       // console.log(formData);
        
        this.$textMessage('Песня успешно обновлена!')
        this.$router.push('/lists')
      } catch (error) { 
        this.$error('Что то пошло не так')
        throw error
      }
    },
    replacePage() {
      this.$router.push("/lists");
    },
  }
};
</script>