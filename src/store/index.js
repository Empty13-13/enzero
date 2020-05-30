import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import errors from './modules/errors'
import info from './modules/info'
import lists from './modules/lists';
import date from './modules/date'
import testDate from './modules/testDate';
import templateData from "./modules/templateData";
import sets from './modules/sets'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    errors,
    info,
    lists,
    date,
    testDate,
    templateData,
    sets
  }
})
