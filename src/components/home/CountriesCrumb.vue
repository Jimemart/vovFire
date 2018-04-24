<template lang="html">
  <div id="crumb">
    <q-list v-if="elemsPicked.length">
      <q-item v-for="(elem, index) in elemsPicked" :key="index">
        <div class="circle" :style="elem.gradient"></div>{{elem.country}}
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    elemsPicked: { type: Array, default: () => []  }
  }
}
</script>

<style lang="scss">
</style>
