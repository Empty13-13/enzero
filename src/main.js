import Vue from 'vue'
import App from './App.vue'
import Vulidate from 'vuelidate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/firestore';


Vue.config.productionTip = false
Vue.use(Vulidate)
Vue.use(messagePlugin);
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyD2SBQLrc-5ILp4u9U9TcWLilB737mcIY8",
  authDomain: "vue-yout.firebaseapp.com",
  databaseURL: "https://vue-yout.firebaseio.com",
  projectId: "vue-yout",
  storageBucket: "vue-yout.appspot.com",
  messagingSenderId: "923835320026",
  appId: "1:923835320026:web:1c6cda59358a830d5b07e3",
  measurementId: "G-4DBZ4J0CJS"
};
firebase.initializeApp(firebaseConfig);


let app;
firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
