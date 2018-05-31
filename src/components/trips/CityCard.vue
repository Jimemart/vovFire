<template lang="html">
  <q-card class="image">
    <q-card-main class="image" :style="'backgroundImage:url(' + city.image + ');'">
      <h1 class="cityName">{{city.name}}</h1>
      <div class="cityPlaces">
        <p>{{city.places}}</p>
      </div>
    </q-card-main>

  </q-card>
</template>

<script>
export default {
  props: ['city']
}
</script>

<style lang="css">
  .image {
    width: 332px;
    height: 250px;
    margin: 0 10px;
    background-size: cover;
    padding: 0;
  }
  .cityName {
    text-transform: uppercase;
    color: #eee;
    margin-top: 0;
  }

  .cityPlaces{
    background: white;
    padding: 5px;
    position: relative;
    top:160px;
  }
</style>
