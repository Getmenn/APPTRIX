import { useEffect, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '@/shared/lib/firebase/db';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { productsActions, productsSelector } from '@/entities/products';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { checkActions } from '@/entities/check';
import { checkListSelector, ordersSelector } from '@/entities/check/model/selectors/checkSelectors';
import { Header } from '@/widget/header';
import { getOrders } from '@/features/getOrders';
import { getProducts } from '@/features/getProducts';
import { useTranslation } from 'react-i18next';
import { langs } from '@/shared/lib/i18n/i18n';

export const AppWrapper = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    const { addProduct } = useActions(productsActions)
    const { addOrder, setCheckSum } = useActions(checkActions)
    const products = useAppSelector(productsSelector)
    const orders = useAppSelector(ordersSelector)
    const checkList = useAppSelector(checkListSelector)
    const { t, i18n } = useTranslation()
    const lang = useMemo(() => i18n.language as langs, [i18n.language])

    useEffect(() => {
        if (!user && !loading) {
            setTimeout(() => navigate('/'), 500)
        }
    }, [navigate, user, loading]);

    useEffect(() => {
        !products.length && getProducts({ addProduct });
    }, [products]);

    useEffect(() => {
        !orders.length && getOrders({ addOrder })
    }, [orders.length])

    useEffect(() => {
        if (!checkList.length) return

        const sum = checkList.reduce((s, el) => s + (el.count * parseInt(el.price[lang])), 0)
        setCheckSum(`${sum} ${lang === 'ru' ? 'руб' : '$'}`);
    }, [checkList, lang])


    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
