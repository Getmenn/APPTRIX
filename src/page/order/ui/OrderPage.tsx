import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';

import { app, db } from '@/shared/lib/firebase/db';

import s from './OrderPage.module.scss';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { IProduct, productsActions, productsSelector } from '@/entities/products';
import { useEffect, useState } from 'react';
import { ICheck } from '@/entities/products/model/types/slice';
import { checksSelector } from '@/entities/products/model/selectors/productsSelectors';

export const OrderPage = () => {
    const menuColection = collection(db, 'menu');
    const checkColection = collection(db, 'check');
    const { addProduct, addCheck } = useActions(productsActions)
    const checks = useAppSelector(checksSelector)
    const products = useAppSelector(productsSelector)
    const [checkList, setCheckList] = useState({})

    const getProducts = async () => {
        const docSnap = await getDocs(menuColection);
        docSnap.forEach((doc) => {
            addProduct({ ...doc.data(), id: doc.id } as IProduct)
        });
    };

    const convertCheckList = () => {
        let list: Record<string, number> = {}
        checks.map(el => {
            if (el.id in list) {
                list[el.id] += el.count;
            } else {
                list[el.id] = el.count;
            }
        })
        console.log(list, 'list');

        setCheckList(list)
        list = {}
    }

    const getCheck = async () => {
        const docSnap = await getDocs(checkColection);
        docSnap.forEach((doc) => {
            addCheck({ ...doc.data(), id: doc.id } as ICheck)
        });
        convertCheckList();
    };


    useEffect(() => {
        !checks.length && convertCheckList()
    }, [checks])

    useEffect(() => {
        !products.length && getProducts();
        !checks.length && getCheck();
    }, []);

    console.log(checkList, 'checkList');



    return (
        <div className={s.orderPage}>
            OrderPage
        </div>
    );
};
