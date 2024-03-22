import { OrderList } from '@/entities/check';
import s from './MainPage.module.scss';
import { MySlider } from '@/widget/slider';

export const MainPage = () => {

    return (
        <div className={s.mainPage}>
            <OrderList />
            <MySlider />
        </div>
    );
};
