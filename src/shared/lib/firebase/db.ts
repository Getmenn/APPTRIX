import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// export const firebaseConfig = {
//     apiKey: 'AIzaSyBBJv0Fz7Jd8UB02B02fZuo9LJJEVA8AGA',
//     authDomain: 'project-b7996.firebaseapp.com',
//     projectId: 'project-b7996',
//     storageBucket: 'project-b7996.appspot.com',
//     messagingSenderId: '303598495890',
//     appId: '1:303598495890:web:2061b083047cb44a989e4b',
//     measurementId: 'G-50SZB1B755',
// };
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
