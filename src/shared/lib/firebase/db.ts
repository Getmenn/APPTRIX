import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyCh7xGQxCIreKlq3CBN5pX0R85jZ6mh0pk',
    authDomain: 'plenary-treat-407509.firebaseapp.com',
    projectId: 'plenary-treat-407509',
    storageBucket: 'plenary-treat-407509.appspot.com',
    messagingSenderId: '259198828794',
    appId: '1:259198828794:web:31d78442a999b4f6214943',
    measurementId: 'G-MY7SJD3Y5T',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
