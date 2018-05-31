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
  <div>
    <vo-accordion
    :cities="trip.cities">
    </vo-accordion>
    <vo-action-btn
      @go="navigate">
    </vo-action-btn>
  </div>
</q-card>
  </div>
</template>

<script>
import Slider from '../shared/Slider'
import Accordion from '../shared/Accordion'
import ActionBtn from '../shared/ActionBtn'
import { mapActions } from 'vuex'
export default {
  props: ['trip'],
  components: {
    voSlider: Slider,
    voAccordion: Accordion,
    voActionBtn: ActionBtn
  },
  methods: {
    ...mapActions('trips', ['chooseTrip']),
    navigate () {
      console.log(this.trip)
      this.chooseTrip(this.trip)
      .then(() => {
        this.$router.push('map-details')
      })
    }
  }
}
</script>

<style lang="css">
</style>
