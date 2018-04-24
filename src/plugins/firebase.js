// import something here
import firebase from 'firebase'
// leave the export, even if you don't use it

var config = {
    apiKey: "AIzaSyBPVispPPiMEAu9-teQRMh-s3JdSeGtPhQ",
    authDomain: "vovanda-firebase.firebaseapp.com",
    databaseURL: "https://vovanda-firebase.firebaseio.com",
    projectId: "vovanda-firebase",
    storageBucket: "vovanda-firebase.appspot.com",
    messagingSenderId: "60584533421"
  };


export default ({ app, router, Vue }) => {
  firebase.initializeApp(config);
}
