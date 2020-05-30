<template>
  <div >
    <div class="calendar_menu center">
        <div class="btn bn1"></div>
      <div class="btn bn " @click.prevent="$emit('clickDay')"><p class="date">1</p><p class="DateName"> Понедельник</p><hr/></div>
      <div class="btn bn " @click.prevent="$emit('clickDay')"><p class="date">2</p><p class="DateName">Вторник</p><hr/></div>
      <div class="btn bn " @click.prevent="$emit('clickDay')"><p class="date">3</p><p class="DateName">Среда</p><hr/></div>
      <div class="btn bn " @click.prevent="$emit('clickDay')"><p class="date">4</p><p class="DateName">Четверг</p><hr/></div>
      <div class="btn bn " @click.prevent="$emit('clickDay')"><p class="date">5</p><p class="DateName">Пятница</p><hr/></div>
      <div class="btn bn " @click.prevent="$emit('clickDay')"><p class="date">6</p><p class="DateName">Суббота</p><hr/></div>
     <div class="btn bn " @click.prevent="$emit('clickDay')"><p class="date">7</p><p class="DateName">Воскресенье</p><hr/></div>
     <div class="btn bn1"></div>
      
    </div>
  </div>
</template>

<style scoped>

.bn{
   
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  
  box-shadow: 0.832px 3.913px 11.83px 1.17px rgba(0, 3, 6, 0.4);
  height: 250px;
  width: 140px;
 
  


}
.calendar_menu{
   
   
   margin-bottom: 5%;
}
.bn1{
    
  border-width: 4px;
  border-color: rgb(255, 167, 38);
  border-style: solid;
  border-radius: 50%;
 margin-left: 10px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  


}
.date{
    margin-bottom: -10px;
    margin-top: 10px;
    font-size: 58px;
    color: #ffffff;
}
.NameDate{
    font-size: 12px;
    color: #ffffff;
}
</style>