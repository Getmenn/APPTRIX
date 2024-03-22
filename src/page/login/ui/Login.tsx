import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useCallback, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PAGES } from '@/shared/constants';
import { auth } from '@/shared/lib/firebase/db';
import { Button, Loader } from '@/shared/ui';

import s from './Login.module.scss';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user && window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else if (user) {
            navigate(PAGES.main);
        }
    }, [navigate, user]);

    const login = useCallback(() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }, []);

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <div className={s.login}>
            <Button onClick={login}>
                {t('Войти')}
            </Button>
            {error && (
                <span className={s.error}>
                    {t('Ошибка авторизации')}
                </span>
            )}
        </div>
    );
};
