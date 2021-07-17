
import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyApdUq8KCJyDzejzlx_VTHTMYCgbqLUPkA",
    authDomain: "vue-firebase-bbf43.firebaseapp.com",
    projectId: "vue-firebase-bbf43",
    storageBucket: "vue-firebase-bbf43.appspot.com",
    messagingSenderId: "135812600233",
    appId: "1:135812600233:web:924fc2b90540938bcfb4b8"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore service
  const projectFireStore = firebase.firestore()

  // export firestore
  export { projectFireStore }
