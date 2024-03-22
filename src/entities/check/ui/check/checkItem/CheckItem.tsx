import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { langs } from "@/shared/lib/i18n/i18n"
import s from './CheckItem.module.scss'
import { InputPlusMinus } from "@/shared/ui"
import { IProductsCount } from "../../../model/types/slice"
import { useActions } from "@/shared/hooks/useAction/useAction"
import { checkActions } from "@/entities/check/model/slice/check"


interface IProps {
    item: IProductsCount
}

export const CheckItem = ({ item }: IProps) => {
    const { i18n } = useTranslation()
    const lang = useMemo(() => i18n.language as langs, [i18n.language])
    const { uppdateCountCheck } = useActions(checkActions)
    const [count, setCount] = useState<number>(item.count)

    const handleCount = (number: number) => {
        uppdateCountCheck({ ...item, count: number })
        setCount(number)
    }

    return (
        <div className={s.checkItem}>
            <div className={s.imageWrapper}>
                <img src={item.image} alt="image product" />
            </div>
            <span>{item.name[lang]}</span>
            <div className={s.price}>
                <span>{item.price[lang]}</span>
                <InputPlusMinus value={count} setValue={handleCount} />
            </div>
        </div>
    )
}