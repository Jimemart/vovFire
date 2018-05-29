<template lang="html">
      <div id="places">
        <div class="place" v-for="(elem, i) in info">
          <div class="icon" :style="'background:' + $t(`icons.${elem.type}.color`)"><q-icon :name="$t(`icons.${elem.type}.str`)"/></div>
          <p>{{elem.ammount}} {{elem.type}}</p>
        </div>
      </div>
</template>

<script>
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
  }
}
</script>

<style lang="css">
</style>
