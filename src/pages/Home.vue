<template>
  <div id="home" style="overflow:hidden;">
    <vo-header
    :titleText="'Where do you want to travel to?'"
    :itemPosition="'left'"
    @input="filterCountriesAndDeleteCenter($event)"
    @selected="pickOneCountry($event)"
    :found="foundCountries"
    :searchBar="true"
    :selectedElems="selectedCountries">
    </vo-header>
    <vo-map
    :centerCountry="centerCountry"
    :whereTo="code"
    :selectedCountries="selectedCountries">
    </vo-map>
    <vo-next
    :condition="countriesLength"
    :route="'offers'"
    :shape="'circle'">
    </vo-next>
  </div>
</template>

<script>
import { Header, Map, Next } from '../components'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loading: true,
      title: 'Where do you want to travel from?',
      searchBar: true,
      centerCountry: false,
      code: null
    }
  },
  methods: {
    ...mapActions('countries', ['getCountries', 'filterCountries']),
    pickOneCountry(val){
      this.centerCountry = true
      this.code = val.code
      this.$store.commit('countries/SET_SELECTED', val)
      this.$store.commit('countries/UNSET_FILTERED')
      this.$store.commit('useful/SET_INPUT', '')
    },
    filterCountriesAndDeleteCenter (event) {
      this.centerCountry = false
      this.filterCountries(event)
    }
  },
  components: {
    voHeader: Header,
    voMap: Map,
    voNext: Next
  },
  computed: {
    foundCountries: {
      get () { return this.$store.state.countries.filteredCountries }
    },
    selectedCountries: {
      get () { return this.$store.state.countries.selected }
    },
    countriesLength : {
      get () { return this.$store.state.countries.selected.length > 0}
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
