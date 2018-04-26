<template lang="html">
  <div id="tripsList">
    <vo-header
    :titleText="'Select a package or create your own'"
    :itemPosition="'left'">
    </vo-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Header } from '../components'
export default {
  components: {
    voHeader: Header
  },
  methods: {
    ...mapActions('trips', ['getTrips'])
  },
  mounted () {
    this.getTrips()
  }
}
</script>

<style lang="css">
</style>
