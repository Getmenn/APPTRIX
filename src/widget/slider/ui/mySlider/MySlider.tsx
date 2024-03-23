import { addDoc, collection } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

import { productsLoadingSelector, productsErrorSelector, productsSelector } from '@/entities/products';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { useResize } from '@/shared/hooks/useResize/useResize';
import { db } from '@/shared/lib/firebase/db';

import { ButtonNavigate } from '../buttonNavigate/ButtonNavigate';
import { CartProduct } from '../cartProduct/CartProduct';
import s from './MySlider.module.scss';
import { Loader } from '@/shared/ui';

export const MySlider = () => {
    const products = useAppSelector(productsSelector);
    const productsLoading = useAppSelector(productsLoadingSelector);
    const productsError = useAppSelector(productsErrorSelector);
    const checkColection = collection(db, 'check');
    const { t } = useTranslation();
    const { isScreenSm, isScreenMd } = useResize();

    const handleAddProduct = async (id: string, count: number) => {
        await addDoc(checkColection, {
            id,
            count,
        });

        alert(t('Заказ добавлен в корзину'));
    };

    return (
        <div className={s.sliderWrapper}>
            <h2>{t('Меню')}</h2>
            {productsError && <h1 className={s.error}>{t('Ошибка на стороне сервера')}</h1>}
            {productsLoading && !productsError
                ? <Loader />
                : (
                    <Swiper
                        spaceBetween="30px"
                        slidesPerView={isScreenMd ? 2 : 3}
                        loop
                        className={s.slider}
                        direction={isScreenSm ? 'vertical' : 'horizontal'}
                    >
                        <ButtonNavigate type="prev" />

                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <CartProduct product={product} onClick={handleAddProduct} />
                            </SwiperSlide>
                        ))}

                        <ButtonNavigate type="next" />

                    </Swiper>
                )
            }
        </div>
    );
};
