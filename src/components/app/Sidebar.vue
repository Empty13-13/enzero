<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" @click='changeVisibleBar' class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Главная', url: '/',exact: true},
      {title: 'Список песен', url: '/lists'},
      {title: 'Сет листы', url: '/sets'},
      {title: 'Финансовая статистика', url: '/money'},
      {title: 'Статистика Соц.Сетей', url: '/social'},
      {title: 'Настройки', url: '/settings'},
    ]
  }),
  methods: {
    changeVisibleBar: function(){
      this.$emit("clickBar");
    }
  }
};
</script>