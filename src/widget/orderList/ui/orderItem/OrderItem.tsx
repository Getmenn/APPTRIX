import { useMemo } from "react"
import { IProductsCount } from "../orderList/OrderList"
import { useTranslation } from "react-i18next"
import { langs } from "@/shared/lib/i18n/i18n"

interface IProps{
    item: IProductsCount
}

export const OrderItem = ({ item }: IProps) => {
    const {i18n} = useTranslation()
    const lang = useMemo(() => i18n.language as langs, [i18n.language])
    
    return (
        <div>
            <img src={item.image} alt="image product" />
            <span>{item.name[lang]}</span>
            <div>
                <span>{item.price[lang]}</span>
                {/* <InputPlusMinus /> */}
            </div>
        </div>
    )
}