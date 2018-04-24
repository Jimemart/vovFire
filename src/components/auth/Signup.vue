<template lang="html">
  <div>
    <label>Email</label>
    <input v-model="email" placeholder="Enter your email"/>
    <label>Phone</label>
    <input v-model="phone" placeholder="Enter your email"/>
    <label>Password</label>
    <input v-model="password" placeholder="Enter your email"/>
    <label>Repeat password</label>
    <input v-model="repeat" placeholder="Enter your email"/>
    <q-btn label="Sign in" color="info" class="full-width"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { QBtn } from 'quasar'

export default {
  components: {
    QBtn
  },
  computed: {
    email: {
      get () {
          return this.$store.state.auth.email
      },
      set(value) {
          this.$store.commit('auth/SET_EMAIL', value)
      }
    },
    password: {
      get () {
        return this.$store.state.auth.password
      },
      set(value) {
        this.$store.commit('auth/SET_PASS', value)
      }
    },
    repeat: {
      get () {
          return this.$store.state.auth.repeat
      },
      set(value) {
          this.$store.commit('auth/SET_REPEAT', value)
      }
    },
    phone: {
      get () {
          return this.$store.state.auth.phone
      },
      set(value) {
          this.$store.commit('auth/SET_PHONE', value)
      }
    },
    ...mapGetters('auth', ['equalPass'])
  },
  methods: {
    ...mapActions('auth', ['signup']),
    createAccount () {
      if (this.equalPass){
        this.signup()
          .then(() => {
            this.$router.push('/home')
          })
          .catch(err => {
            alert('An error ocurred')
          })
      }
    }
  }
}
</script>

<style lang="css">
  .margin-label{
    margin-top:40px;
  }
  .add-margin{
    margin: auto 10px;
  }
</style>
