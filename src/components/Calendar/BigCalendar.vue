<template>
  <div class="container">
    <div class="month">
      <ul>
        
        <button class="prev btn bn1" @click="leftCal"></button>
        <button class="next btn bn1" @click="rightCal"></button>
        <li>
          <span id="mounth">{{mounthString}}</span>
          <br />
          <span>{{CalendarDays.getDay()}}</span>
          <span style="font-size:18px">{{dYear}}</span>
        </li>
      </ul>
    </div>
    <table class="weekdays">
      <thead class="weekdays">
        <tr class="weekdays">
          <td>ПН</td>
          <td>ВТ</td>
          <td>СР</td>
          <td>ЧТ</td>
          <td>ПТ</td>
          <td>СБ</td>
          <td>ВС</td>
        </tr>
      </thead>
      <tbody>
        <tr class="days">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr class="days">
          <td>8</td>
          <td>9</td>
          <td>
            <span class="active">10</span>
          </td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
        </tr>
        <tr class="days">
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
        </tr>
        <tr class="days">
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
        </tr>
        <tr class="days">
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style  scoped>
table {
  list-style-type: none;
}
/* Month header */
.month {
  padding: 70px 25px;
  width: 100%;
  background: #1abc9c;
  text-align: center;
}

/* Month list */
.month tr table {
  margin: 0;
  padding: 0;
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
.month tr td table {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

/* Previous button inside month header */
.month .prev {
  float: left;
  padding-top: 10px;
}

/* Next button */
.month .next {
  float: right;
  padding-top: 10px;
}

/* Weekdays (Mon-Sun) */
.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}

.weekdays td {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}

/* Days (1-31) */
.days {
  padding: 10px 10px;
  background: #eee;
  margin: 0;
}

.days td {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #777;
}

/* Highlight the "current" day */
.days td .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important;
}
</style>

<script>
import {mapGetters,mapMutations} from 'vuex';

export default {
 
  computed:{ 
    ...mapGetters(['dMonth','dYear','mounthString','CalendarDays']),
    },
  mounted(){
    this.$store.commit('CalendarFirstDays')
  },
  methods :{
    rightCal(){
      this.$store.commit('mounthPlus');
    },
    leftCal(){
      this.$store.commit('mounthMin');
    }
  },
  
  
};
</script>