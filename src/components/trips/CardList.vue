<template lang="html">
  <div id="cardList" style="perspective:500">
    <div v-for="(elem, i) in list" :id="`flip-container-${i}`" class="flip-container">
      <div class="flipper" @click="flip(i)" :id="`flipper-${i}`">
        <vo-card-front
        class="front"
        :trip="elem">
        </vo-card-front>
        <vo-card-details
        class="back"
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
  data () {
    return {
      flippedCard: null
    }
  },
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
      if(this.flippedCard != null) {
        const holder = document.getElementById(`flipper-${this.flippedCard}`)
        holder.style.transform = 'rotateY(0deg)'

        const container = document.getElementById(`flip-container-${this.flippedCard}`)
        container.style.height = '260px'
      }
      const holder = document.getElementById(`flipper-${i}`)
      holder.style.transform = 'rotateY(180deg)'

      const container = document.getElementById(`flip-container-${i}`)
      container.style.height = '460px'

      this.flippedCard = i

    }
  }
}
</script>

<style lang="css">
</style>
