import { collection, getFirestore } from 'firebase/firestore';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';

import { app } from '@/app/providers/firebase/db';

import s from './OrderPage.module.scss';

export const OrderPage = () => {
    const [messages, loading] = useCollection(collection(getFirestore(app), 'menu'));

    return (
        <div className={s.orderPage}>
            OrderPage
        </div>
    );
};
