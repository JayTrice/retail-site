import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAc1Ecc4Uu4IBtjkYbfX2KMMi13g3OLpaM',
  authDomain: 'retail-react.firebaseapp.com',
  databaseURL: 'https://retail-react.firebaseio.com',
  projectId: 'retail-react',
  storageBucket: 'retail-react.appspot.com',
  messagingSenderId: '116376260639',
  appId: '1:116376260639:web:80257c607c10bd0d51852a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
