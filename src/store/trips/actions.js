import vovFire from '../../api/vovFire'

export const getTrips = ({ commit}) => {
  new Promise((resolve, reject) => {
    vovFire.getTrips()
    .then((res) => {
      commit('SET_TRIPS', res)
      resolve()
    })
  })
}

export const chooseTrip = ({ commit }, value) => {
  new Promise((resolve, reject) => {
    commit('CHOOSE_TRIP', value)
    resolve()
  })
}
