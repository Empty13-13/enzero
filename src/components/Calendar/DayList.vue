<template>
    <div class="container">
       <table>
        <thead>
          <tr>
              <th>Время</th>
              <th>Список дел</th>
              
          </tr>
        </thead>

        <tbody>
      
      
      
          <tr v-for=" time in Times"
      :key="time.title">
            <td>{{time.title}}</td>
            <td><input placeholder="Нет дел" id="#first_name" type="text" class="validate textd"></td>
            
          </tr>
          
        </tbody>
      </table>
    
    </Div>
</template>

<style scoped>
.textd{
  text-align: center;
}
::placeholder{
  text-align: center;
}
td{
  text-align: center;
}
th{
  text-align: center;
}
.container{
  margin-bottom: 30px;
  
}

</style>

<script>
export default {
 
  data: () => ({
    Times: [
      {title: '00:00'},
      {title: '01:00'},
      {title: '02:00'},
      {title: '03:00'},
      {title: '04:00'},
      {title: '05:00'},
      {title: '06:00'},
      {title: '07:00'},
      {title: '08:00'},
      {title: '09:00'},
      {title: '10:00'},
      {title: '11:00'},
      {title: '12:00'},
      {title: '13:00'},
      {title: '14:00'},
      {title: '15:00'},
      {title: '16:00'},
      {title: '17:00'},
      {title: '18:00'},
      {title: '19:00'},
      {title: '20:00'},
      {title: '21:00'},
      {title: '22:00'},
      {title: '23:00'},
    ]
  })
}
</script>