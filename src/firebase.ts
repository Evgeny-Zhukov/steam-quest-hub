import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFA2PLwpHqgX9GwHCbK8c-7tymJGygf_c",
  authDomain: "steam-quest-hub.firebaseapp.com",
  projectId: "steam-quest-hub",
  storageBucket: "steam-quest-hub.firebasestorage.app",
  messagingSenderId: "357931401290",
  appId: "1:357931401290:web:d2647c315ef4d5c0c4e6b3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);