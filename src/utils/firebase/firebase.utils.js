import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD_3FZvJFM9lhuPqJ4Gs8Hlx7F9q7NS7Ws',
  authDomain: 'crwn-clothing-db-65e04.firebaseapp.com',
  projectId: 'crwn-clothing-db-65e04',
  storageBucket: 'crwn-clothing-db-65e04.appspot.com',
  messagingSenderId: '896045199257',
  appId: '1:896045199257:web:2e4e609d9833e1977aad08',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
