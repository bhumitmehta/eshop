import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/compat/firestore';
import { getAuth,GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCIStjOY0O5ivtDqJ83AP_p3uXA15GAWd8",
  authDomain: "todoreactproject-f3d1a.firebaseapp.com",
  projectId: "todoreactproject-f3d1a",
  storageBucket: "todoreactproject-f3d1a.appspot.com",
  messagingSenderId: "448600716584",
  appId: "1:448600716584:web:3c451086a900edea388c1d",
  measurementId: "G-FZZLXFX8HD"
};

const firebaseApp = initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export default db;