import { CheckList } from '@/entities/check';

import s from './OrderPage.module.scss';

export const OrderPage = () => {
    return (
        <div className={s.orderPage}>
            <CheckList />
        </div>
    );
};
