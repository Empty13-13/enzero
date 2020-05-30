<template>
  <div>
    <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
        <li class="tab col s3"><a href="#test1" @click="profileVisible=true">Профиль</a></li>
        <li class="tab col s3"><a class="active" href="#test2" @click="profileVisible=false">Уведомления</a></li>
</ul>


    <div id="test1" class="col s12" :class="{hiddendiv: !profileVisible}">
      <p>Профиль</p>
    </div>
    <div id="test2" class="col s12" :class="{hiddendiv: profileVisible}">
      <p>Уведомления</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    profileVisible: true,
  }),
  computed: {
    
  },
  methods: {}
};
</script>