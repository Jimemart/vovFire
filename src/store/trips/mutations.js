import { filterTrips } from '../../helpers'

export const SET_TRIPS = (state, value) => {
  state.list = filterTrips(value)
}

export const CHOOSE_TRIP = (state, value) => {
  state.chosen = value
}
