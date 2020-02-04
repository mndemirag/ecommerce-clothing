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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;