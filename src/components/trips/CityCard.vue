<template lang="html">
  <q-card class="image" id="cityCard">
    <q-card-main class="image" :style="'backgroundImage:url(' + city.image + ');'">
      <h1 class="cityName">{{city.name}}</h1>
      <div class="cityPlaces">
        <vo-action-btn
        :background="'white'"
        :color="'black'"
        :left="city.places">
        </vo-action-btn>
      </div>
    </q-card-main>

  </q-card>
</template>

<script>
import { ActionBtn } from '../shared'
export default {
  props: ['city'],
  components: {
    voActionBtn: ActionBtn
  }
}
</script>

<style lang="css">
</style>
