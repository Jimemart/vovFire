<template lang="html">
  <div id="cardList">
    <div v-for="elem in list">
      <vo-card-front
      :trip="elem">
      </vo-card-front>
    </div>
  </div>
</template>

<script>
import CardFront  from './CardFront'
export default {
  components: {
    voCardFront: CardFront
  },
  computed: {
    list: {
      get () {
        return this.$store.state.trips.list }
    }
  }
}
</script>

<style lang="css">
</style>
