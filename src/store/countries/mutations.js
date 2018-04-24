import getRandomGradient from '../../helpers/gradient'

export const SET_COUNTRIES = (state, value) => {
  state.countries = value.map(country => {
    let count =  {
      country: country.name.common,
      code: country.altSpellings[0]
    }
    return count
  })
}

export const SET_FILTERED = (state, value) => {
  state.filteredCountries = state.countries
      .filter(elem => elem.country.toLowerCase().includes(value.toLowerCase()) && state.selected.findIndex(sel => sel.country == elem.country) == -1)
      .splice(0, 5)
}

export const UNSET_FILTERED = (state) => {
  state.filteredCountries = []
}

export const SET_SELECTED = (state, value) => {
  if ( state.selected.length == 5) return
  const { angle, firstColor, secondColor } = getRandomGradient()
  value.gradient = `background:linear-gradient(${angle}deg, ${firstColor}, ${secondColor});`
  value.firstColor = firstColor
  value.secondColor = secondColor

  state.selected.push(value)

}
