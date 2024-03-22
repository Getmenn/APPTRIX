import { useTranslation } from 'react-i18next'
import s from './CheckForm.module.scss'
import { FormEvent, useState } from 'react'
import { Button } from '@/shared/ui'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '@/shared/lib/firebase/db'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { checkListSelector, checkSumSelector } from '../../../model/selectors/checkSelectors'
import { useActions } from '@/shared/hooks/useAction/useAction'
import { checkActions } from '../../../model/slice/check'

type codePay = '1' | '2'

const typePayment = {
    "1": "Cash",
    "2": "Card",
}

export const CheckForm = () => {
    const [addres, setAddres] = useState<string>('')
    const [typePay, setTypePay] = useState<codePay>('1')
    const checkList = useAppSelector(checkListSelector)
    const checkSum = useAppSelector(checkSumSelector)
    const { setCheckList, loadingCheckList, addOrder, clearOrder } = useActions(checkActions)
    const { t } = useTranslation()

    const ordersColection = collection(db, 'orders');
    const checkColection = collection(db, 'check');

    const handleSendCheck = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setCheckList([]) // удаление товаров из чека

        loadingCheckList(true);

        const checkSnap = await getDocs(checkColection);
        checkSnap.forEach(async (check) => { // удаление товаров из чека
            await deleteDoc(doc(db, 'check', check.id))
        });

        await addDoc(ordersColection, { // добавление заказа
            products: checkList,
            addres,
            typePay: typePayment[typePay],
            sum: checkSum
        });

        clearOrder() // очистка списка заказов

        loadingCheckList(false)

        alert(t('Заказ успешно сформирован'))
    }

    return (
        <form onSubmit={e => handleSendCheck(e)} className={s.form}>
            <input
                type="text"
                placeholder={t('Адрес доставки')}
                value={addres}
                onChange={(e) => setAddres(e.target.value)}
                className={s.field}
                required
            />
            <select
                onChange={(e) => setTypePay(e.target.value as codePay)}
                defaultValue={typePay}
                className={s.field}
            >
                <option value="1">{t('Наличные')}</option>
                <option value="2">{t('Карта')}</option>
            </select>
            <div className={s.sum}>
                <span>{t("Сумма")} {checkSum}</span>
            </div>
            <Button type='submit' view='second' disabled={Boolean(!checkList.length)}>
                {t('Заказать')}
            </Button>
        </form>
    )
}