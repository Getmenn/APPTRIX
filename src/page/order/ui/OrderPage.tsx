import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';

import s from './OrderPage.module.scss';
import { OrderList } from '@/widget/orderList';

export const OrderPage = () => {

    return (
        <div className={s.orderPage}>
            <OrderList />
            {/* {checkList.map(el => 
                
            )} */}
        </div>
    );
};
