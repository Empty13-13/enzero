<template>
    <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#" @click.prevent="$emit('clickBar')">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger black-text"
                href="#"
                data-target="dropdown"
                ref="profileDropdown"
            >
              {{profileName}}
              <i class="material-icons right">arrow_drop_down</i>
            </a>
              
            <ul id='dropdown' class='dropdown-content'>
              <li>
                <router-link to="settings" class="black-text">
                  <i class="material-icons">account_circle</i>Профиль
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="black-text" @click.prevent="logout">
                  <i class="material-icons">assignment_return</i>Выйти из аккаунта
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  mounted() {
    
    M.Dropdown.init(this.$refs.profileDropdown,{
      constrainWidth: false, hover:false,
    });
  },
    methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.push('/login?message=logout')
    },
    },
    computed: {
      profileName(){
        return this.$store.getters.info.name
      }
    }
}
</script>