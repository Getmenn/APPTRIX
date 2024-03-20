import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { auth } from '@/app/providers/firebase/db';
import { emailSelector, userActions, userNameSelector } from '@/entities/user';
import BasketSvg from '@/shared/assets/svg/basket.svg';
import { PAGES } from '@/shared/constants';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Button } from '@/shared/ui';

import s from './Header.module.scss';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = useAppSelector(userNameSelector);
    const email = useAppSelector(emailSelector);
    const { setUserName, setEmail } = useActions(userActions);
    const [user] = useAuthState(auth);
    console.log(user, 'user');

    useEffect(() => {
        if (!userName) {
            const localUsername = localStorage.getItem('username');
            localUsername && setUserName(JSON.parse(localUsername));
        }
        if (!userName) {
            const localEmail = localStorage.getItem('email');
            localEmail && setEmail(JSON.parse(localEmail));
        }
    }, []);

    if (!user) {
        navigate('/');
    }

    return (
        <>
            <header className={s.header}>
                {location.pathname === PAGES.main
                    ? (
                        <Button icon onClick={() => navigate(PAGES.order)}>
                            <BasketSvg className={s.basket} />
                        </Button>
                    )
                    : (
                        <Button onClick={() => navigate(PAGES.main)}>
                            Главная
                        </Button>
                    )}
                <div className={s.rightSide}>
                    <div className={s.info}>
                        <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocLYQeDN9Hqj-6t9O_U0pZHK2KJiu0dwjIN6lWVrqlt-7g=s96-c"
                            alt="photoProfile"
                            className={s.photo}
                        />
                        <span>
                            Имя:
                            {userName}
                        </span>
                        <span>
                            Почта:
                            {email}
                        </span>
                    </div>
                    <Button onClick={() => signOut(auth)}>
                        Выход
                    </Button>
                </div>
            </header>

            <Outlet />
        </>
    );
};
