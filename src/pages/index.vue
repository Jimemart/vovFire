<template>
  <q-page>
    <q-input type="text" name="email" v-model="email" placeholder="Your email"/>
    <q-input type="password" name="password" v-model="password" placeholder="Your password"/>
    <button @click="signIn">Click</button>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    email: {
      get () { return this.$store.state.auth.email },
      set (value) { this.$store.commit('auth/SET_EMAIL', value) }
    },
    password: {
      get () { return this.$store.state.auth.password },
      set (value) { this.$store.commit('auth/SET_PASSWORD', value) }
    }
  },
  methods: {
    ...mapActions('auth', ['signIn'])
  }
}
</script>
