import getRandomGradient from '../../helpers/gradient'

export const getColoredCountries = (state) => {
  const withColor = state.chosen.countries.map(country => {
    const { angle, firstColor, secondColor } = getRandomGradient()
    country.gradient = `background:linear-gradient(${angle}deg, ${firstColor}, ${secondColor});`
    country.firstColor = firstColor
    country.secondColor = secondColor
    return country
  })

  return withColor
}
