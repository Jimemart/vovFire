import vovFire from '../../api/vovFire'

export const signIn = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    const credentials = {
      email: state.email,
      password: state.password
    }
    vovFire.login(credentials)
      .then((res) => {
        resolve(res)
      })
  })
}

export const signup = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    const credentials = {
      email: state.email,
      password: state.password
    }
    vovFire.signup(credentials)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
