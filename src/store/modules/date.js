export default {
    actions : {

    },
	state: {
        d: new Date(),
        s: "",
        firstDay: new Date(),
        dayList: [],
	},
	mutations: {
		mounthPlus(state){
      state.d=new Date(state.d.getFullYear() , state.d.getMonth() + 1 , state.d.getDate())            
        },
    mounthMin(state){
      state.d=new Date(state.d.getFullYear() , state.d.getMonth() - 1 , state.d.getDate())            
        },
        CalendarFirstDays(state)
    {
      state.firstDay = new Date(state.d.getFullYear(), state.d.getMonth(), 1)
    },
  },  
	getters: {
	    	dMonth(state){
          
            return state.d.getMonth()
        },
        dYear(state){
            return state.d.getFullYear()
        },
        mounthString(state) {
         
         
            switch (state.d.getMonth()) {
              case 0:
                state.s = "Январь";
                break;
              case 1:
                state.s = "Февраль";
                break;
              case 2:
                state.s = "Март";
               break;
              case 3:
                state.s = "Апрель";
                 break;
              case 4:
                state.s = "Май";
                break;
              case 5:
                state.s = "Июнь";
                 break;
              case 6:
                state.s = "Июль";
                 break;
              case 7:
                state.s = "Август";
                break;
              case 8:
                state.s = "Сентябрь";
                break;
              case 9:
                state.s = "Октябрь";
               break;
              case 10:
                state.s = "Ноябрь";
                 break;
              case 11:
                state.s = "Декабрь";
                 break;
              default:
                state.s = "Ошибка";
              
              
            }
            return state.s;
          },
   
        CalendarDays(state){
            
            return state.firstDay
  
          }
   
        },
}