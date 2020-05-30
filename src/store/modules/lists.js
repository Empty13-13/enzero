import firebase from 'firebase/app';

export default {
    state: {
        songs: {},
    },
    getters: {
        songs: s => s.songs
    },
    mutations: {
        async updateSongList(state, songList) {
            state.songs = songList
        }
    },
    actions: {
        async addSong({
            commit,
            getters,
            dispatch
        }, song) {
            try {

                // Ключ для новой песни
                var newPostKey = firebase.database().ref().child('songs').push().key;

                const author = song.author
                const name = song.name
                const text = song.text
                await firebase.database().ref(`/songs/${newPostKey}/info`).set({
                    author,
                    name,
                    text
                });
            } catch (error) {
                throw error
            }

        },
        async deleteSong({dispatch,commit}, index) {
            try {
                await firebase.database().ref(`/songs/${index}`).remove();
                dispatch('getSongsFromBD')
            } catch (error) {
                throw error
            }
        },
        async updateSong({dispatch,commit},song){

            const author = song.author
            const name = song.name
            const text = song.text
            await firebase.database().ref(`/songs/${song.index}/info`).update({
                author,
                name,
                text
            });
        },
        async getSongsFromBD({
            commit,
            getters,
            dispatch,
            state
        }) {
            let songs = (await firebase.database().ref('/songs/').once('value')).val()

            commit('updateSongList', songs)
        },
    },

}