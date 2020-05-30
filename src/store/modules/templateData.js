export default {
    state: {
        selectedSongIndex: "",
        selectedSetIndex: "",
    },
    getters:{
        selectedSongIndex: s => s.selectedSongIndex,
        selectedSetIndex: s => s.selectedSetIndex,
    },
    mutations: {
        setSelectedSongIndex(state,index){
            state.selectedSongIndex = index;
        },
        setSelectedSetIndex(state,index){
            state.selectedSetIndex = index;
        }
    },
}