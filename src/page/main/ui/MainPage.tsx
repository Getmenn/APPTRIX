import { userSelector } from '@/entities/user/model/selectors/userSelector';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

import s from './MainPage.module.scss';

export const MainPage = () => {
    const user = useAppSelector(userSelector);
    return (
        <div className={s.mainPage}>
            <header>
                {user}
            </header>
            Main
        </div>
    );
};
