<template>
  <div id="home">
    <vo-header
    :titleText="'Where do you want to travel to?'"
    :itemPosition="'left'"
    @input="filterCountries($event)"
    @selected="pickOneCountry($event)"
    :found="foundCountries"
    :searchBar="true"
    :selectedElems="selectedCountries">
    </vo-header>
    <vo-map
    :selectedCountries="selectedCountries">
    </vo-map>
  </div>
</template>

<script>
import { Header, Map } from '../components'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: true,
      title: 'Where do you want to travel from?',
      searchBar: true
    }
  },
  methods: {
    ...mapActions('countries', ['getCountries', 'filterCountries']),
    pickOneCountry(val){
      this.$store.commit('countries/SET_SELECTED', val)
      this.$store.commit('countries/UNSET_FILTERED')
      this.$store.commit('useful/SET_INPUT', '')
    }
  },
  components: {
    voHeader: Header,
    voMap: Map
  },
  computed: {
    foundCountries: {
      get () { return this.$store.state.countries.filteredCountries }
    },
    selectedCountries: {
      get () { return this.$store.state.countries.selected }
    }
  },
  mounted () {
    this.getCountries()
      .then(() => {
        this.loading = false
      })
  }
}
</script>

<style lang="css">
</style>
