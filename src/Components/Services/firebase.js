import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD1CVz4ZhTR96KK4j0ZBwzvgBqf2SV7inA",
    authDomain: "react-vercel-9aa66.firebaseapp.com",
    databaseURL: "https://react-vercel-9aa66.firebaseio.com",
    projectId: "react-vercel-9aa66",
    storageBucket: "react-vercel-9aa66.appspot.com",
    messagingSenderId: "257745531477",
    appId: "1:257745531477:web:71b1acaf1d0ccc0b739adc"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase
  