<template lang="html">
  <div id="cardFront">
    <q-card>
  <q-card-main>
    <div class="img" :style="background">

    </div>
    <div class="content">
      <div class="info">
        <h5>{{trip.name}}</h5>
        <p class="text-faded">
          <span v-for="(country, index) in trip.countries">{{country.name}}<span v-if="index < trip.countries.length - 1"> - </span> </span>
        </p>
      </div>
      <div class="special">
        <p> <q-icon :name="$t(`icons.${trip.places[0].type}`)"/>{{trip.places[0].ammount}} {{trip.places[0].type}}</p>
      </div>
    </div>
  </q-card-main>
  <q-card-actions align="around">
    <p class="price"><q-icon name="account_balance_wallet"/> {{trip.price}}€</p>
    <p class="date"><q-icon name="date_range"/>{{trip.date}}</p>
    <p class="rate"><q-icon name="star"/>{{trip.rate}}</p>

  </q-card-actions>
</q-card>
  </div>
</template>

<script>
export default {
  props: ['trip'],
  data () {
    return {
      background: 'background-image: url("'+ this.trip.image +'");'
    }
  },
  mounted () {
    console.log(this.trip)
  }
}
</script>

<style lang="css">

</style>
