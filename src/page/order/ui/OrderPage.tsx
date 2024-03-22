import s from './OrderPage.module.scss';
import { CheckList } from '@/entities/check';

export const OrderPage = () => {

    return (
        <div className={s.orderPage}>
            <CheckList />
        </div>
    );
};
