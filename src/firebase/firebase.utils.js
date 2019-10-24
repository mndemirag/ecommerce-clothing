import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCvhtsNAnLS3Wm4y-zPUTR4ZA--K_YHIRI',
  authDomain: 'crwn-db-a032f.firebaseapp.com',
  databaseURL: 'https://crwn-db-a032f.firebaseio.com',
  projectId: 'crwn-db-a032f',
  storageBucket: 'crwn-db-a032f.appspot.com',
  messagingSenderId: '103698917033',
  appId: '1:103698917033:web:d22a4ef1105c728fa4ebb8',
  measurementId: 'G-29X938L3XZ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;