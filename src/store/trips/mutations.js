import { filterTrips } from '../../helpers'

export const SET_TRIPS = (state, value) => {
  state.list = filterTrips(value)
}
