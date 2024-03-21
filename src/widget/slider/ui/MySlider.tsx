import { productsSelector } from "@/entities/products";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { db } from "@/shared/lib/firebase/db";
import { CartProduct } from "@/widget/cartProduct";
import { addDoc, collection } from "firebase/firestore";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import s from "./MySlider.module.scss"
import { ButtonNavigate } from "./ButtonNavigate";

export const MySlider = () => {
    const products = useAppSelector(productsSelector)
    const checkColection = collection(db, 'check');

    const handleAddProduct = async (id: string, count: number) => {
        await addDoc(checkColection, {
            id,
            count
        });
    }
    
    return (
        <div className={s.sliderWrapper}>
            <Swiper
                spaceBetween={1}
                slidesPerView={3}
                loop={true}
                className={s.slider}
            >
                <ButtonNavigate type='prev' />

                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <CartProduct product={product} onClick={handleAddProduct} />
                    </SwiperSlide>
                ))}

                <ButtonNavigate type='next' />

            </Swiper >
        </div>
    )
}