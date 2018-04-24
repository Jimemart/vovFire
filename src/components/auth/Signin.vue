<template lang="html">
  <div>
    <label>Email</label>
    <input v-model="email" placeholder="Your email"/>
    <label>Password</label>
    <input v-model="password" placeholder="Your password"/>
    <q-btn label="Sign in" color="info" class="full-width" @click="enter"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { QBtn } from 'quasar'
export default {
  components: {
    QBtn
  },
  computed: {
    email: {
      get () { return this.$store.state.auth.email },
      set(value) { this.$store.commit('auth/SET_EMAIL', value) }
    },
    password: {
      get () { return this.$store.state.auth.password },
      set(value) { this.$store.commit('auth/SET_PASSWORD', value) }
    }
  },
  methods:{
    ...mapActions('auth', ['signIn']),
    enter () {
      this.signIn()
        .then(() => {
          this.$router.push('/home')
        })
        .catch(err => {
          alert('An error ocurred')
        })
    }
  }
}
</script>

<style lang="css">
  .myinput{
    height: 100px;
    padding: 0 20px;
    background-color: white;
  }
</style>
