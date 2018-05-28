<template lang="html">
  <div id="cardDetails">
    <q-card>
  <q-card-main>
    <h5>{{trip.name}}</h5>
    <p class="type">{{trip.type}}</p>
    <div class="basic">
      <p class="price"><q-icon name="account_balance_wallet"/> {{trip.price}}€</p>
      <p class="date"><q-icon name="date_range"/>{{trip.date}}</p>
      <p class="rate"><q-icon name="star"/>{{trip.rate}}</p>
    </div>
    <div class="program">
      <h4>Program</h4>
      <vo-slider :info="trip.places">
      </vo-slider>
    </div>
  </q-card-main>
</q-card>
  </div>
</template>

<script>
import Slider from '../shared/Slider'
export default {
  props: ['trip'],
  components: {
    voSlider: Slider
  },
  mounted () {
    console.log(this.trip)
  }
}
</script>

<style lang="css">
</style>
