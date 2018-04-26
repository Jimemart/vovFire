import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import countries from './countries'
import useful from './useful'
import trips from './trips'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    countries,
    useful,
    trips
  }
})

export default store
