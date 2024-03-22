import { useTranslation } from 'react-i18next'
import { IOrder } from '../../../model/types/slice'
import s from './OrderItem.module.scss'
import { Button } from '@/shared/ui'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/shared/lib/firebase/db'
import { useActions } from '@/shared/hooks/useAction/useAction'
import { checkActions } from '@/entities/check/model/slice/check'
import { useMemo } from 'react'
import { langs } from '@/shared/lib/i18n/i18n'

interface IProps {
    order: IOrder
    setActiveOrder: (id: string) => void;
    activeOrder: string;
}

export const OrderItem = ({ order, setActiveOrder, activeOrder }: IProps) => {
    const { t, i18n } = useTranslation()
    const { deleteOrder } = useActions(checkActions)
    const lang = useMemo(() => i18n.language as langs, [i18n.language])


    const handleDelete = async () => {
        deleteOrder(order.id)
        await deleteDoc(doc(db, 'orders', order.id))
    }

    return (
        <div className={s.orderItem} onClick={() => setActiveOrder(order.id)}>
            <span>
                {order.id}
            </span>
            <span>
                {order.addres}
            </span>
            <span>
                {t("Сумма")} {order.sum}
            </span>
            <Button view='delete' onClick={handleDelete}>
                X
            </Button>
            {activeOrder === order.id && (
                <div className={s.productsList}>
                    {order.products.map((el) => (
                        <div className={s.product}>
                            <span>{el.name[lang]}</span>
                            <div className={s.price}>
                                <span>{el.count} X {el.price[lang]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}