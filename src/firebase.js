import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB8pMuw7j4HXk4ZfwmfRd9CYmBUtVETjCs",
    authDomain: "fb-clone-d234a.firebaseapp.com",
    projectId: "fb-clone-d234a",
    storageBucket: "fb-clone-d234a.appspot.com",
    messagingSenderId: "482862696480",
    appId: "1:482862696480:web:0e803db35dc77809251445",
    measurementId: "G-6E99DJVRFX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;