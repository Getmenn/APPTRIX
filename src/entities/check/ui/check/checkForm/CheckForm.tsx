import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { db } from '@/shared/lib/firebase/db';
import { Button } from '@/shared/ui';

import { checkListSelector, checksSelector, checkSumSelector } from '../../../model/selectors/checkSelectors';
import { checkActions } from '../../../model/slice/check';
import s from './CheckForm.module.scss';

type codePay = '1' | '2'

const typePayment = {
    1: 'Cash',
    2: 'Card',
};

export const CheckForm = () => {
    const [addres, setAddres] = useState<string>('');
    const [typePay, setTypePay] = useState<codePay>('1');
    const checkList = useAppSelector(checkListSelector);
    const checks = useAppSelector(checksSelector);
    const checkSum = useAppSelector(checkSumSelector);
    const { setCheckList, setLoadingCheckList, clearOrder, setCheckSum } = useActions(checkActions);
    const { t } = useTranslation();
    const ordersColection = collection(db, 'orders');

    const handleSendCheck = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setCheckList([]); // удаление товаров из чека

        setLoadingCheckList(true);

        try {
            checks.forEach(async (check) => { // удаление товаров из чека
                await deleteDoc(doc(db, 'check', check.idCheck));
            });
    
            await addDoc(ordersColection, { // добавление заказа
                products: checkList,
                addres,
                typePay: typePayment[typePay],
            });
        } catch (error) {
            console.log('error');
        }
        
        clearOrder(); // очистка списка заказов
        setCheckSum('0')
        setLoadingCheckList(false);

        alert(t('Заказ успешно сформирован'));
    };

    return (
        <form onSubmit={(e) => handleSendCheck(e)} className={s.form}>
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
            <span className={s.sum}>
                {t('Сумма')}
                {' '}
                {checkSum}
            </span>
            <Button
                type="submit"
                view="second"
                disabled={Boolean(!checkList.length)}
            >
                {t('Заказать')}
            </Button>
        </form>
    );
};
