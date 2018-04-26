import * as actions from './actions'
import * as mutations from './mutations'
export default {
  namespaced: true,
  state() {
    return {
      list: []
    }
  },
  actions,
  mutations
}
