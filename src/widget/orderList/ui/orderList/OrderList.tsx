import { db } from '@/shared/lib/firebase/db';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { IProduct, productsActions, productsSelector } from '@/entities/products';
import { useEffect, useState } from 'react';
import { ICheck } from '@/entities/products/model/types/slice';
import { checksSelector } from '@/entities/products/model/selectors/productsSelectors';
import { collection, getDocs } from 'firebase/firestore';
import { OrderItem } from '../orderItem/OrderItem';
import s from './OrderList.module.scss'
import { OrderForm } from '../orderForm/OrderForm';

export interface IProductsCount extends IProduct {
    count: number
}

export const OrderList = () => {
    const checkColection = collection(db, 'check');
    const { addCheck, setChecks } = useActions(productsActions)
    const checks = useAppSelector(checksSelector)
    const products = useAppSelector(productsSelector)
    const [checkList, setCheckList] = useState<IProductsCount[]>([])

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
            .map(el => ({...el, count: list[el.id]}))

        
        setCheckList(filteredProducts);
    }

    const getCheck = async () => {
        const docSnap = await getDocs(checkColection);
        docSnap.forEach((doc) => {
            addCheck(doc.data() as ICheck)
        });
    };

    useEffect(() => {
        if (products.length !== 0 && checks.length !== 0) {
            convertCheckList()
        }
    }, [checks.length, products.length])

    useEffect(() => {
        checks.length === 0 && getCheck();

        return () => {
            setChecks([])
        }
    }, []);


    return (
        <div className={s.orderList}>
            {checkList.map(el => (
                <OrderItem key={el.id} item={el}  />
            ))}
            <OrderForm />
        </div>
    )
}