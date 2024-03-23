import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IProduct } from '@/entities/products';
import { useLang } from '@/shared/hooks/useLang/useLang';
import { Button, InputPlusMinus } from '@/shared/ui';

import s from './CartProduct.module.scss';

interface IProps {
    product: IProduct;
    onClick: (id: string, count: number) => void;
}

export const CartProduct = memo(({ product, onClick }: IProps) => {
    const { t } = useTranslation();
    const { lang } = useLang();
    const [count, setCount] = useState<number>(1);

    return (
        <div className={s.card}>
            <div>
                <img src={product.image} alt="image food" className={s.image} />
            </div>
            <div className={s.info}>
                <h3>{product.name[lang]}</h3>
                <p>
                    {product.description[lang]}
                </p>
                <span className={s.price}>{product.price[lang]}</span>
            </div>
            <div className={s.buy}>
                <InputPlusMinus value={count} setValue={setCount} />
                <Button view="second" onClick={() => onClick(product.id, count)}>
                    {t('Купить')}
                </Button>
            </div>
        </div>
    );
});
