import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/app/providers/firebase/db';

import s from './Login.module.scss';

export const LoginPage = () => {
    const navigate = useNavigate();
    const login = () => {
        const provider = new GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential && credential.accessToken;
            // The signed-in user info.
            const { user } = result;
            console.log(user, token);
            navigate('/main');
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const { email } = error.customData;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    };

    return (
        <div className={s.login}>
            <button onClick={login} type="button" className={s.button}>
                Login
            </button>
        </div>
    );
};
