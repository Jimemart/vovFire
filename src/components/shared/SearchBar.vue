<template lang="html">
  <div id="search">
    <input v-model="inputText" @input="input($event)"/>
    <div>
      <q-list v-if="foundCountries.length">
        <q-item v-for="(elem, index) in foundCountries" :key="index" @click.native="selected(elem)">
          {{elem.country}}
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foundCountries: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    inputText: {
      get () { return this.$store.state.useful.input },
      set(val) { this.$store.commit('useful/SET_INPUT', val)}
    }
  },
  methods: {
    selected(elem) {
      this.$emit('selected',elem)
    },
    input(elem) {
      this.$emit('input', elem.target.value)
    }
  }
}
</script>

<style lang="css">
</style>
