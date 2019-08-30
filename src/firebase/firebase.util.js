import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBg5HIU0ycGaHBUeIEuW3tnSlAvabfjbLo",
    authDomain: "online-store-81027.firebaseapp.com",
    databaseURL: "https://online-store-81027.firebaseio.com",
    projectId: "online-store-81027",
    storageBucket: "",
    messagingSenderId: "26924892108",
    appId: "1:26924892108:web:85754cc0f8e5b2ea"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;