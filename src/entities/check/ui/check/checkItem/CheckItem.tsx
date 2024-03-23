import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback, useState } from 'react';

import { checksSelector } from '@/entities/check/model/selectors/checkSelectors';
import { checkActions } from '@/entities/check/model/slice/check';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { useLang } from '@/shared/hooks/useLang/useLang';
import { db } from '@/shared/lib/firebase/db';
import { Button, InputPlusMinus } from '@/shared/ui';

import { IProductsCount } from '../../../model/types/slice';
import s from './CheckItem.module.scss';

interface IProps {
    item: IProductsCount
}

export const CheckItem = ({ item }: IProps) => {
    const { lang } = useLang();
    const { uppdateCountCheck, deleteCheckListItem } = useActions(checkActions);
    const [count, setCount] = useState<number>(item.count);
    const checks = useAppSelector(checksSelector);

    const handleCount = useCallback((number: number) => {
        uppdateCountCheck({ ...item, count: number });
        setCount(number);
    }, [item, uppdateCountCheck]);

    const handleDelete = useCallback(async () => {
        deleteCheckListItem(item.id);
        checks.forEach((el) => {
            if (el.id === item.id) {
                deleteDoc(doc(db, 'check', el.idCheck));
            }
        });
    }, [checks, deleteCheckListItem, item.id]);

    return (
        <div className={s.checkItem}>
            <div className={s.imageWrapper}>
                <img src={item.image} alt="product" />
            </div>
            <span>{item.name[lang]}</span>
            <div className={s.price}>
                <span>{item.price[lang]}</span>
                <InputPlusMinus value={count} setValue={handleCount} />
            </div>
            <Button view="delete" onClick={handleDelete} className={s.delete}>
                X
            </Button>
        </div>
    );
};
