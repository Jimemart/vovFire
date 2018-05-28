<template lang="html">
  <vo-swipper :options="swiperOption">
    <vo-slide v-for="(elem, i) in info" :key="i">
      Hola
    </vo-slide>
  </vo-swipper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

  props: ['info'],
  data() {
     return {
       swiperOption: {
         slidesPerView: 3,
         spaceBetween: 30,
         freeMode: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true
         }
       }
     }
  },
  components: {
    voSwipper: swiper,
    voSlide: swiperSlide
  },
  mounted () {
    console.log(this.info)
  }
}
</script>

<style lang="css">
</style>
