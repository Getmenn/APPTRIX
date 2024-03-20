import '@/app/styles/index.scss';
import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase';
import ReactDOM from 'react-dom/client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from '@/app/providers/reduxStore';
import { RouterProvider } from '@/app/providers/router';

firebase.initializeApp({
    apiKey: 'AIzaSyBBJv0Fz7Jd8UB02B02fZuo9LJJEVA8AGA',
    authDomain: 'project-b7996.firebaseapp.com',
    projectId: 'project-b7996',
    storageBucket: 'project-b7996.appspot.com',
    messagingSenderId: '303598495890',
    appId: '1:303598495890:web:2061b083047cb44a989e4b',
    measurementId: 'G-50SZB1B755',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контенер root не найден. Не удалось вмонтировать react приложение!');
}

ReactDOM.createRoot(container).render(
    <BrowserRouter>
        <StoreProvider>
            <RouterProvider />
        </StoreProvider>
    </BrowserRouter>
    ,
);
