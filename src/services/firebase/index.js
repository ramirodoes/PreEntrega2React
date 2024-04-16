import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACRVGpw2b-iSWAwYe5hHB9CChj2TW3Oh8",
  authDomain: "proyecto-final---rcm.firebaseapp.com",
  projectId: "proyecto-final---rcm",
  storageBucket: "proyecto-final---rcm.appspot.com",
  messagingSenderId: "610103666965",
  appId: "1:610103666965:web:53bc8ab3752df90251611c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);