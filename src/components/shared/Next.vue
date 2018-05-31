<template lang="html">
  <div id="next">
    <div :class="status" @click="navigate">
      <q-icon name="trending_flat"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shape: { type: String },
    route: { type: String},
    condition: { type: Boolean, default: true}
  },
  computed: {
    status: {
      get () { return this.condition ? `filled ${this.shape}` : `outline ${this.shape}` }
    }
  },
  methods: {
    navigate() {
      if (!this.condition) return
      this.$router.push(this.route)
    }
  }
}
</script>

<style lang="css">
</style>
