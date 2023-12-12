import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBel1NoRwIzKzJTaEoVfH2agCpT-hgc35Q",
  authDomain: "electrocel58175.firebaseapp.com",
  projectId: "electrocel58175",
  storageBucket: "electrocel58175.appspot.com",
  messagingSenderId: "788255491266",
  appId: "1:788255491266:web:d1bb8b59bfe10c5d4d275b"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);