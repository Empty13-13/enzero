<template>
  <div class="center">
    <Loader v-if="loading" />

    <div v-else>
      
      <Calendar @clickDay="visibleList=!visibleList"/>
      <DayList v-show="visibleList" />
      <BigCalendar v-show="!visibleList"/>

     
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar/Calendar";
import DayList from "@/components/Calendar/DayList";
import BigCalendar from "@/components/Calendar/BigCalendar";
export default {
  name: "Home",
  data: () => ({
    loading: true,
    currency: null,
    visibleList: false,
  }),
  async mounted() {
    this.loading = false;
    
  },
  components: {
    Calendar,
    DayList,
    BigCalendar,
  },
  methods:{
    ChangeVisibaleTodo: function(){
      this.visibleList= false;
    }
  }
};
</script>
