<template lang="html">
<div id="accordion">
  <div v-for="(city, i) in cities" :key="i" class="holder">
    <p>{{city.name}}</p>
  </div>
</div>
</template>

<script>
export default {
  props: ['cities']
}
</script>

<style lang="css">
</style>
