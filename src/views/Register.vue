<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
  <div class="card-content">
    <span class="card-title">Группа Enzero</span>

      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        />
        <label for="email">Email</label>

        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корректный email</small>
      </div>


      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        />
        <label for="password">Пароль</label>

        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Поле для пароля не должно быть пустым</small>

        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль должен быть не меньше {{this.$v.password.$params.minLength.min}} символов. Сейчас {{password.length}}</small>
      </div>

      <div class="input-field">
        <input
          id="repeatPassword"
          type="password"
          v-model.trim="repeatPassword"
          :class="{invalid: (!$v.repeatPassword.sameAsPassword)}"
        />
        <label for="password">Пароль</label>

        <small
          class="helper-text invalid"
          v-if="!$v.repeatPassword.sameAsPassword"
        >Пароли должны совпадать</small>
      </div>


    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: ($v.name.$dirty && !$v.name.minLength)}"
      >
      <label for="name">Имя</label>

      <small 
      class="helper-text invalid"
      v-if="$v.name.$dirty && !$v.name.minLength"
      >Имя должно быть не меньше {{this.$v.name.$params.minLength.min}} символов</small>
    </div>

    <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>С правилами согласен</span>
        </label>
      </p>
      <p>
        <small
          class="helper-text invalid"
          v-if="!$v.agree.checked"
          >Необходимо согласиться с правилами
        </small>
      </p>
  </div>


  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</template>

<script>
import { email, required, minLength,sameAs } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: "",
    password: "",
    name: "",
    repeatPassword: "",
    agree: false,
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required, minLength: minLength(4) },
    repeatPassword: { sameAsPassword: sameAs('password') },
    agree: { checked: (value) => value },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$router.push("/");
      } catch (error) { }
    }
  },
};
</script>