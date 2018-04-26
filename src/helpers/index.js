import store from '../store'

export const filterTrips = (value) => {
  const selectedCodes = store.state.countries.selected.map(elem => elem.code)
  const trips = value
  const filtered = trips.filter(elem => {
    elem.found = elem.countries.filter(country => {
      return selectedCodes.indexOf(country.code) > -1
    })
    if (elem.found.length) return elem
  })
  return filtered
}
