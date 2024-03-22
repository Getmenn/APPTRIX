import { useMemo, useState } from "react"
import { IProductsCount } from "../orderList/OrderList"
import { useTranslation } from "react-i18next"
import { langs } from "@/shared/lib/i18n/i18n"
import s from './OrderItem.module.scss'
import { InputPlusMinus } from "@/shared/ui"


interface IProps{
    item: IProductsCount
}

export const OrderItem = ({ item }: IProps) => {
    const {i18n} = useTranslation()
    const lang = useMemo(() => i18n.language as langs, [i18n.language])
    const [count, setCount] = useState(item.count)
    
    return (
        <div className={s.orderItem}>
            <div className={s.imageWrapper}>
                <img src={item.image} alt="image product" />
            </div>
            <span>{item.name[lang]}</span>
            <div className={s.price}>
                <span>{item.price[lang]}</span>
                <InputPlusMinus value={count} setValue={setCount}/>
            </div>
        </div>
    )
}