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
        <label for="author">Автор</label>

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
        <label for="name">Название песни</label>

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
        ></textarea>
        <label for="text">Текст песни</label>

        <small
          class="helper-text invalid"
          v-if="$v.text.$dirty && !$v.text.required"
        >Текст песни не должен быть пустым</small>

        <small
          class="helper-text invalid"
          v-else-if="$v.text.$dirty && !$v.text.minLength"
        >Текст песни должен быть не меньше {{this.$v.text.$params.minLength.min}} символов. Сейчас {{text.length}}</small>
      </div>

      <button class="btn red waves-effect waves-block" type="submit">Добавить</button>

      <button class="btn-floating green rounded" @click="replacePage">
        <i class="material-icons">arrow_back</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    author: "",
    name: "",
    text: ""
  }),
  validations: {
    author: { required, minLength: minLength(3) },
    name: { required, minLength: minLength(3) },
    text: { required, minLength: minLength(10) }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        author: this.author,
        name: this.name,
        text: this.text,
      };

      try {
        await this.$store.dispatch('addSong', formData)
       // console.log(formData);
        
        this.$textMessage('Песня успешно добавлена!')
        this.resetText();
      } catch (error) { 
        this.$error('Что то пошло не так')
        throw error
      }
    },
    replacePage() {
      this.$router.push("/lists");
    },
    resetText(){
      this.name=""
      this.author=""
      this.text=""
    }
  }
};
</script>