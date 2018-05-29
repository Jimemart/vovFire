import Vue from 'vue'
import Vuex from 'vuex'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import auth from './auth'
import countries from './countries'
import useful from './useful'
import trips from './trips'

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
const store = new Vuex.Store({
  modules: {
    auth,
    countries,
    useful,
    trips
  }
})

export default store
