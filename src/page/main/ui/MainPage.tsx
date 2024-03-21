import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';

import { app, db, firebaseConfig } from '@/shared/lib/firebase/db';
import { Button } from '@/shared/ui';

import s from './MainPage.module.scss';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { IProduct, productsActions, productsSelector } from '@/entities/products';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { CartProduct } from '@/widget/cartProduct';
import { MySlider } from '@/widget/slider';


export const MainPage = () => {
    const menuColection = collection(db, 'menu');
    const { addProduct } = useActions(productsActions)
    const products = useAppSelector(productsSelector)


    // const getProducts = async () => {
    //     const docSnap = await getDocs(menuColection);
    //     docSnap.forEach((doc) => {
    //         addProduct({ ...doc.data(), id: doc.id } as IProduct)
    //     });
    // };

    // useEffect(() => {
    //     products.length === 0 && getProducts();
    // }, []);

    // const addProducts = async () => {
    //     await addDoc(menuColection, {
    //         name: {
    //             ru: 'Греческий салат',
    //             en: 'Greek salad',
    //         },
    //         price: {
    //             ru: '610 руб',
    //             en: '6,61 $',
    //         },
    //         image: 'https://media.maximilians.ru/ekb/cuisine/grecheskij-traditsionnyj-salat-iz-svezhih-ovoshhej-s-syrom-feta/Grecheskij-salat-min-380x270.jpg',
    //     });
    // };
    

    return (
        <div className={s.mainPage}>
            {/* <div className={s.products}>
                
            </div> */}
            <MySlider /> 

            {/* <Button onClick={addProducts}>
                addFood
            </Button> */}
        </div>
    );
};
