import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/app/providers/firebase/db';
import { userActions } from '@/entities/user';
import { PAGES } from '@/shared/constants';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { Button, Loader } from '@/shared/ui';

import s from './Login.module.scss';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    if (loading) {
        return (
            <Loader />
        );
    }

    if (user) {
        navigate(PAGES.main);
    }

    return (
        <div className={s.login}>
            <Button onClick={login}>
                Войти
            </Button>
            {error && (
                <span className={s.error}>
                    Ошибка авторизации
                </span>
            )}
        </div>
    );
};
