import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import countries from './countries'
import useful from './useful'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    countries,
    useful
  }
})

export default store
