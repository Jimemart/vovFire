export const setColorsInMap = (arr) => {
  arr.forEach((elem, index) => {
    const inMap = document.getElementById(`${elem.code}`)
    document.getElementById(`linear${index}`).children[0].setAttribute('stop-color', elem.firstColor)
    document.getElementById(`linear${index}`).children[1].setAttribute('stop-color', elem.secondColor)
    inMap.style.fill= `url(#linear${index})`
    inMap.style.stroke = 'white'
  })
}

export default setColorsInMap
