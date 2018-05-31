<template lang="html">
  <div id="mapDetails">
    <vo-header
      :titleText="'Order details'"
      :searchBar="true">
    </vo-header>
    <vo-map
      :selectedCountries="countries">
    </vo-map>
    <div>
      <swiper :options="swiperOption" style="postion:absolute; bottom:250px;">
        <swiper-slide v-for="(city, i) in cities" :key="i">
          <vo-city-card
          :city="city">
          </vo-city-card>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Map, Header, CityCard } from '../components'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView:1,
        spaceBetween: 20,
        freeMode: false
      }
    }
  },
  components: {
    voMap: Map,
    voHeader: Header,
    voCityCard: CityCard
  },
  computed: {
    countries: {
      get () { return this.$store.getters['trips/getColoredCountries'] }
    },
    cities: {
      get () { return this.$store.state.trips.chosen.cities }
    }
  }
}
</script>

<style lang="css">
</style>
