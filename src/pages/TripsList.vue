<template lang="html">
  <div id="tripsList">
    <vo-header
    :titleText="'Select a package or create your own'"
    :itemPosition="'left'">
    </vo-header>
    <vo-card-list>
    </vo-card-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Header, CardList } from '../components'
export default {
  components: {
    voHeader: Header,
    voCardList: CardList
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
