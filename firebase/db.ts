// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBBJv0Fz7Jd8UB02B02fZuo9LJJEVA8AGA',
    authDomain: 'project-b7996.firebaseapp.com',
    projectId: 'project-b7996',
    storageBucket: 'project-b7996.appspot.com',
    messagingSenderId: '303598495890',
    appId: '1:303598495890:web:2061b083047cb44a989e4b',
    measurementId: 'G-50SZB1B755',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebaseConfig.auth();
