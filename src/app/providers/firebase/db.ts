import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBBJv0Fz7Jd8UB02B02fZuo9LJJEVA8AGA',
    authDomain: 'project-b7996.firebaseapp.com',
    projectId: 'project-b7996',
    storageBucket: 'project-b7996.appspot.com',
    messagingSenderId: '303598495890',
    appId: '1:303598495890:web:2061b083047cb44a989e4b',
    measurementId: 'G-50SZB1B755',
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
