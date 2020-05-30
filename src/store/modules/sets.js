import firebase from 'firebase/app'

export default{
    state: {
        sets: {},
    },
    getters: {
        sets: s => s.sets,
        setSongs(state,key){
            return state.sets
        } 
    },
    actions:{
        async addSet({dispatch},songs){
            try {
                var newPostKey = firebase.database().ref().child('sets').push().key;
                
                
                await firebase.database().ref(`/sets/${newPostKey}`).set({
                    songs
                });
                dispatch('getSongsFromBD')
            } catch (error) {
                throw error
            }
        },
        async getSetsFromBD({commit}) {
            let sets = (await firebase.database().ref('/sets/').once('value')).val()
            
            commit('updateSetsList', sets)
        },
    },
    mutations:{
        async updateSetsList(state, sets) {
            state.sets = sets
        }
    },

}