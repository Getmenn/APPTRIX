import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { checkActions } from '@/entities/check/model/slice/check';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useLang } from '@/shared/hooks/useLang/useLang';
import { db } from '@/shared/lib/firebase/db';
import { langs } from '@/shared/lib/i18n/i18n';
import { Button } from '@/shared/ui';

import { IOrder } from '../../../model/types/slice';
import s from './OrderItem.module.scss';

interface IProps {
    order: IOrder
    setActiveOrder: (id: string) => void;
    activeOrder: string;
}

export const OrderItem = ({ order, setActiveOrder, activeOrder }: IProps) => {
    const { t } = useTranslation();
    const { deleteOrder } = useActions(checkActions);
    const { lang, currency } = useLang();
    const [currentSum, setCurrentSum] = useState<string>('');

    useEffect(() => {
        const newSum = order.products.reduce((s, el) => s + (el.count * parseInt(el.price[lang])), 0);
        setCurrentSum(`${newSum} ${currency}`);
    }, [lang]);

    const handleDelete = useCallback(async () => {
        deleteOrder(order.id);
        await deleteDoc(doc(db, 'orders', order.id));
    }, []);

    return (
        <div className={s.orderItem} onClick={() => setActiveOrder(order.id)}>
            <span>
                {order.id}
            </span>
            <span>
                {order.addres}
            </span>
            <span className={s.sum}>
                {t('Сумма')}
                {' '}
                {currentSum}
            </span>
            <Button view="delete" onClick={handleDelete}>
                X
            </Button>
            {activeOrder === order.id && (
                <div className={s.productsList}>
                    {order.products.map((el) => (
                        <div className={s.product} key={el.id}>
                            <span>{el.name[lang]}</span>
                            <div className={s.price}>
                                <span>
                                    {el.count}
                                    {' '}
                                    X
                                    {' '}
                                    {el.price[lang]}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
