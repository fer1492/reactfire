import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCdQKOvA-cVRfK-iRHTnQzXIFMkllErjpU",
  authDomain: "fir-aut-6af33.firebaseapp.com",
  projectId: "fir-aut-6af33",
  storageBucket: "fir-aut-6af33.appspot.com",
  messagingSenderId: "776822692225",
  appId: "1:776822692225:web:2e8649dbfd089d0fa1b080",
  measurementId: "G-PVGB4ZE9J7"
};

  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth}