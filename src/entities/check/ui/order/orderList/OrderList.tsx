import { useCallback, useEffect, useState } from 'react';
import s from './OrderList.module.scss'
import { Loader } from '@/shared/ui';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { ordersSelector } from '@/entities/check/model/selectors/checkSelectors';
import { useTranslation } from 'react-i18next';
import { OrderItem } from '../orderItem/OrderItem';

// заказы на главной странице
export const OrderList = () => {
    const orders = useAppSelector(ordersSelector)
    const { t } = useTranslation()
    const [activeOrder, setActiveOrder] = useState<string>('')

    const handleActiveOrder = useCallback((id: string) => {
        setActiveOrder(activeOrder === id ? '' : id)
    }, [activeOrder])

    return (
        <div className={s.orderWrapper}>
            <h2>{t('Заказы')}</h2>
            <div className={s.orderList}>
                {orders.map(order => <OrderItem
                    key={order.id}
                    order={order}
                    setActiveOrder={handleActiveOrder}
                    activeOrder={activeOrder}
                />)}
            </div>
        </div>

    )
}