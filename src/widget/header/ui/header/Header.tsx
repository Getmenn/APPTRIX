import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import BasketSvg from '@/shared/assets/svg/basket.svg';
import HomeSvg from '@/shared/assets/svg/home.svg';
import ProfileSvg from '@/shared/assets/svg/profile.svg';
import { PAGES } from '@/shared/constants';
import { useResize } from '@/shared/hooks/useResize/useResize';
import { auth } from '@/shared/lib/firebase/db';
import { Button, LangSwitcher } from '@/shared/ui';

import { UserInfo } from '../userInfo/UserInfo';
import s from './Header.module.scss';

export const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const { isScreenMd } = useResize();
    const [visableInfo, setVisableInfo] = useState(!isScreenMd);

    useEffect(() => {
        setVisableInfo(!isScreenMd);
    }, [isScreenMd]);

    return (
        <>
            <header className={s.header}>
                <nav className={s.leftSide}>
                    {location.pathname === PAGES.main
                        ? (
                            <Button view="icon" onClick={() => navigate(PAGES.order)}>
                                <BasketSvg className={s.icon} />
                            </Button>
                        )
                        : (
                            <Button view="icon" onClick={() => navigate(PAGES.main)}>
                                <HomeSvg className={s.icon} />
                            </Button>
                        )}
                    <LangSwitcher />
                </nav>
                <div className={s.rightSide}>
                    {isScreenMd
                        && (
                            <Button view="icon">
                                <ProfileSvg className={s.icon} onClick={() => setVisableInfo(!visableInfo)} />
                            </Button>
                        )}
                    {visableInfo && <UserInfo />}

                    <Button onClick={() => signOut(auth)}>
                        {t('Выход')}
                    </Button>
                </div>
            </header>
        </>
    );
};
