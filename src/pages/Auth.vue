<template lang="html">
  <div id="auth">
    <vo-header
    :titleText="'Welcome!'"
    :itemPosition="'centered'">
    <h3 class="centered"> Please fill in your personal data</h3>
    </vo-header>
    <div class="container-pad">
      <q-tabs v-model="selectedTab">
        <q-tab slot="title" name="tab-1" label="Sign in" />
        <q-tab slot="title" name="tab-2" label="Sign up" />
        <q-tab-pane name="tab-1">
          <vo-sign-in>
          </vo-sign-in>
        </q-tab-pane>
        <q-tab-pane name="tab-2">
          <vo-sign-up>
          </vo-sign-up>
        </q-tab-pane>
      </q-tabs>
    </div>
  </div>
</template>

<script>
import { Header, SignIn, SignUp } from '../components'
import { QTabs, QTab, QBtn, QTabPane } from 'quasar'

export default {
  data () {
    return {
      selectedTab: 'tab-1'
    }
  },
  components: {
    voHeader: Header,
    voSignIn: SignIn,
    voSignUp: SignUp,
    QTabs,
    QTab,
    QTabPane,
    QBtn
  }
}
</script>
<style>

</style>
