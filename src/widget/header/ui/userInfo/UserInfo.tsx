import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';

import ProfileSvg from '@/shared/assets/svg/profile.svg';
import { auth } from '@/shared/lib/firebase/db';

import s from './UserInfo.module.scss';

export const UserInfo = () => {
    const [user] = useAuthState(auth);
    const { t } = useTranslation();

    return (
        <div className={s.info}>
            {user?.photoURL ? (
                <img
                    src={user?.photoURL}
                    alt="photoProfile"
                    className={s.photo}
                />
            )
                : <ProfileSvg className={s.photo} />}
            <span>
                {t('Имя')}
                {user?.displayName}
            </span>
            <span>
                {t('Почта')}
                {user?.email}
            </span>
        </div>
    );
};
