<template lang="html">
  <div id="header">
    <h1 :class="itemPosition">{{titleText}}</h1>
    <slot></slot>
    <vo-countries-crumb
    v-if="searchBar"
    :elemsPicked="selectedElems">
    </vo-countries-crumb>
    <vo-search-bar
    v-if="searchBar"
    @input="input($event)"
    @selected="selected($event)"
    :foundCountries="found">
    </vo-search-bar>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import CountriesCrumb from '../home/CountriesCrumb'
export default {
  props: {
    show: {type: Boolean, default: false},
    found: { type: Array, default: () => [] },
    itemPosition: { type: String, default: 'left' },
    titleText: { type: String, default: ''},
    searchBar: { type:Boolean, default: false},
    selectedElems: { type: Array, default: () => [] }
  },
  components: {
    voSearchBar: SearchBar,
    voCountriesCrumb: CountriesCrumb
  },
  methods: {
    selected (value) {
      this.$emit('selected', value)
    },
    input (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="stylus">
  @import '~variables'
</style>
