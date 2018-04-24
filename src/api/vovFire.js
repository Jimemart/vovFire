import firebase from 'firebase'

export const vovFire = {
  login({ email, password }) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
        resolve(user)
      })
      .catch((err) => {
        console.log(err + ' error')
        reject(err)
      })
    })
  },
  signup({ email, password }) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result)
          resolve(result)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  },
  getCountries() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/countries').once('value')
      .then((snapshot) => {
        resolve(snapshot.val())
      })
    })

  }
}

export default vovFire
