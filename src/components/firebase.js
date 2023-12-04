import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/compat/firestore';
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDM0C8pF7i5IiPENBAWeC4cpotpNADiQ2U",
  authDomain: "eshop-30380.firebaseapp.com",
  databaseURL: "https://eshop-30380-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eshop-30380",
  storageBucket: "eshop-30380.appspot.com",
  messagingSenderId: "633305713663",
  appId: "1:633305713663:web:2057e8b348d55be154b5ca",
  measurementId: "G-SGKN62X1CX"
};


const firebaseApp = initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export default db;