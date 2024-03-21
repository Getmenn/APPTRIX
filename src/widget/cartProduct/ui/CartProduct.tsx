import { memo, useMemo, useState } from "react"
import s from './CartProduct.module.scss'
import { Button, InputPlusMinus } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { IProduct } from "@/entities/products"
import { langs } from "@/shared/lib/i18n/i18n"

interface IProps {
    product: IProduct;
    onClick: (id: string, count: number) => void;
}

export const CartProduct = memo(({ product, onClick }: IProps) => {
    const { t, i18n } = useTranslation()
    const lang = useMemo(() => i18n.language as langs, [i18n.language])
    const [count, setCount] = useState<number>(1)

    return (
        <div className={s.card}>
            <div>
                <img src={product.image} alt="image food" className={s.image} />
            </div>
            <div className={s.info}>
                <span>{product.name[lang]}</span>
                <span>{product.price[lang]}</span>
            </div>
            <div className={s.buy}>
                <InputPlusMinus value={count} setValue={setCount} />
                <Button view="second" onClick={() => onClick(product.id, count)}>
                    {t("Купить")}
                </Button>
            </div>
        </div>
    )
})
