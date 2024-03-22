import { db } from '@/shared/lib/firebase/db';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { productsSelector } from '@/entities/products';
import { useEffect, useMemo } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { CheckItem } from '../checkItem/CheckItem';
import s from './CheckList.module.scss'
import { CheckForm } from '../checkForm/CheckForm';
import { checkActions, checkListSelector, checksSelector } from '@/entities/check';
import { ICheck } from '@/entities/check/model/types/slice';
import { loadingCheckListSelector } from '../../../model/selectors/checkSelectors';
import { Loader } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { langs } from '@/shared/lib/i18n/i18n';
import { getCheck } from '@/features/getCheck/getCheck';

// блок страницы с заказом доставки
export const CheckList = () => {
    const { addCheck, setChecks, setCheckList } = useActions(checkActions)
    const checks = useAppSelector(checksSelector)
    const products = useAppSelector(productsSelector)
    const checkList = useAppSelector(checkListSelector)
    const loadingCheckList = useAppSelector(loadingCheckListSelector)
    const { t } = useTranslation()

    const convertCheckList = () => {
        const list: Record<string, number> = {}
        checks.map(el => {
            if (el.id in list) {
                list[el.id] += el.count;
            } else {
                list[el.id] = el.count;
            }
        })
        const arrId = Object.getOwnPropertyNames(list)

        const filteredProducts = products
            .filter(el => arrId.includes(el.id))
            .map(el => ({ ...el, count: list[el.id] }))

        setCheckList(filteredProducts);
    }

    useEffect(() => {
        if (products.length !== 0 && checks.length !== 0) {
            convertCheckList()
        }
    }, [checks.length, products.length])

    useEffect(() => {
        checks.length === 0 && getCheck(addCheck);

        return () => {
            setChecks([])
        }
    }, []);

    return (
        <div className={s.checkList}>
            <div className={s.listWrapper}>
                {loadingCheckList && <Loader />}
                {!checkList.length && !loadingCheckList && <h2 className={s.empty}>{t('Корзина пуста')}</h2>}
                {checkList.map(el => (
                    <CheckItem key={el.id} item={el} />
                ))}
            </div>
            <CheckForm />
        </div>

    )
}