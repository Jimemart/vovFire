import vovFire from '../../api/vovFire'

export const getCountries = ({ commit, state}) => {
  return new Promise((resolve, reject) => {
    vovFire.getCountries()
      .then((res) => {
        commit('SET_COUNTRIES', res)
        resolve()
      })
  })
}

export const filterCountries = ({ commit, state }, value) => {
  return new Promise((resolve, reject) => {
    console.log(value)
    if(value.length > 2){
      commit('SET_FILTERED', value)
      resolve()
    } else {
      commit('UNSET_FILTERED')
      resolve()
    }
  })
}
