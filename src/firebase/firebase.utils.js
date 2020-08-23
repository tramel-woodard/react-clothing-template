import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBUlrUOPWP3OeKXywPqGsBWL2c4sq6m-AY",
  authDomain: "crwn-clothing-a36af.firebaseapp.com",
  databaseURL: "https://crwn-clothing-a36af.firebaseio.com",
  projectId: "crwn-clothing-a36af",
  storageBucket: "crwn-clothing-a36af.appspot.com",
  messagingSenderId: "249425956650",
  appId: "1:249425956650:web:46b2bbb8c7348c2ea75853",
  measurementId: "G-2K16QBSKYK"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
