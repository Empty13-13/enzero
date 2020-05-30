export default {
    state: {
        selectedSongIndex: "",
    },
    getters:{
        selectedSongIndex: s => s.selectedSongIndex,
    },
    mutations: {
        setSelectedSongIndex(state,index){
            state.selectedSongIndex = index;
        }
    },
}