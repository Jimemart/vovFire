<template lang="html">
  <div id="actionBtn">
    <div class="left" @click="clickDetails">
      <p>{{this.left}}</p>
    </div>
    <div class="right" @click="clickGo">
      <q-icon :name="this.right"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: { type: String, default: 'View details about tour'},
    right: { type: String, default: 'arrow_forward'}
  },
  methods: {
    clickDetails () {
      this.$emit('details')
    },
    clickGo () {
      this.$emit('go')
    }
  }
}
</script>

<style lang="css">
</style>
