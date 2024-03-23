import { OrderList } from '@/entities/check';
import { ordersSelector } from '@/entities/check/model/selectors/checkSelectors';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { MySlider } from '@/widget/slider';

import s from './MainPage.module.scss';

export const MainPage = () => {
    const orders = useAppSelector(ordersSelector);

    return (
        <div className={s.mainPage}>
            {orders.length !== 0 && <OrderList />}
            <MySlider />
        </div>
    );
};
