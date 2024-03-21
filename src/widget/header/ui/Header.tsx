import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import BasketSvg from '@/shared/assets/svg/basket.svg';
import HomeSvg from '@/shared/assets/svg/home.svg';
import { PAGES } from '@/shared/constants';
import { auth } from '@/shared/lib/firebase/db';
import { Button, LangSwitcher } from '@/shared/ui';

import s from './Header.module.scss';
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [navigate, user]);

    return (
        <>
            <header className={s.header}>
                <nav className={s.leftSide}>
                    {location.pathname === PAGES.main
                        ? (
                            <Button view='icon' onClick={() => navigate(PAGES.order)}>
                                <BasketSvg className={s.icon} />
                            </Button>
                        )
                        : (
                            <Button view='icon' onClick={() => navigate(PAGES.main)}>
                                <HomeSvg className={s.icon} />
                            </Button>
                        )}
                    <LangSwitcher />
                </nav>
                <div className={s.rightSide}>
                    <div className={s.info}>
                        <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocLYQeDN9Hqj-6t9O_U0pZHK2KJiu0dwjIN6lWVrqlt-7g=s96-c"
                            alt="photoProfile"
                            className={s.photo}
                        />
                        <span>
                            {t('Имя')}
                            {user?.displayName}
                        </span>
                        <span>
                            {t('Почта')}
                            {user?.email}
                        </span>
                    </div>
                    <Button onClick={() => signOut(auth)}>
                        {t('Выход')}
                    </Button>
                </div>
            </header>

            <Outlet />
        </>
    );
};
