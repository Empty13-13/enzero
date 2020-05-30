export default {
    state: {
        date: new Date(),
    },
    getters: {
        date: s => s.date
    },
    actions: {

    },
    mutations: {
        updateDate(state) {
            state.date=new Date(state.date.getFullYear() , state.date.getMonth() + 1 , state.date.getDate())
        }
    }
}