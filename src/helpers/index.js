import store from '../store'

export const filterTrips = (value) => {
  const selectedCodes = store.state.countries.selected.map(elem => elem.code)
  const trips = value
  const filtered = trips.filter(elem => {
    elem.countries = elem.countries.filter(country => {
      return selectedCodes.indexOf(country) > -1
    })
    if (elem.countries.length) return elem
  })
  console.log(filtered)
}
