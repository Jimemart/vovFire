<template lang="html">
  <div id="cardList" style="perspective:500">
    <div v-for="(elem, i) in list" :id="`flip-container-${i}`">
      <div class="flipper" @click="flip(i)" :id="`flipper-${i}`">
        <vo-card-front
        class="front"
        :trip="elem">
        </vo-card-front
        class="back">
        <vo-card-details
        :trip="elem">
        </vo-card-details>
      </div>
    </div>
  </div>
</template>

<script>
import CardFront  from './CardFront'
import CardDetails from './CardDetails'
export default {
  components: {
    voCardFront: CardFront,
    voCardDetails: CardDetails
  },
  computed: {
    list: {
      get () {
        return this.$store.state.trips.list }
    }
  },
  methods: {
    flip (i) {
      const holder = document.getElementById(`flipper-${i}`)
      holder.style.transform = 'rotateY(180deg)'

      const container = document.getElementById(`flip-container-${i}`)
      container.style.transform = 'rotateY(180deg)'
    }
  }
}
</script>

<style lang="css">
</style>
