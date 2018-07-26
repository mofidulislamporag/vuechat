import firebase from 'firebase'
import firebase from 'firebase/firestore'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQ-dMeF5Wl0qV71TCWceGBnasT7B7xnSg",
    authDomain: "chat-with-me-7ab6e.firebaseapp.com",
    databaseURL: "https://chat-with-me-7ab6e.firebaseio.com",
    projectId: "chat-with-me-7ab6e",
    storageBucket: "chat-with-me-7ab6e.appspot.com",
    messagingSenderId: "813073081319"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})
  export default firebaseApp.firestore()