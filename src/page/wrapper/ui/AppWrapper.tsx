import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';

import { checkActions } from '@/entities/check';
import { checkListSelector, ordersSelector } from '@/entities/check/model/selectors/checkSelectors';
import { productsSelector } from '@/entities/products';
import { getOrdersT } from '@/features/getOrders';
import { getProductsT } from '@/features/getProducts';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { useLang } from '@/shared/hooks/useLang/useLang';
import { auth } from '@/shared/lib/firebase/db';
import { Header } from '@/widget/header';
import { useThunk } from '@/shared/hooks/useThunk/useThunk';

export const AppWrapper = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    const { addOrder, setCheckSum } = useActions(checkActions);
    const products = useAppSelector(productsSelector);
    const orders = useAppSelector(ordersSelector);
    const checkList = useAppSelector(checkListSelector);
    const getProducts = useThunk(getProductsT)
    const getOrders = useThunk(getOrdersT)
    const { lang, currency } = useLang();

    useEffect(() => {
        if (!user && !loading) {
            setTimeout(() => navigate('/'), 500);
        }
    }, [navigate, user, loading]);

    useEffect(() => {
        !products.length && getProducts();
    }, [products]);

    useEffect(() => {
        if (!orders.length && !checkList.length) {
            getOrders();
        }
    }, [orders.length, checkList.length]);

    useEffect(() => {
        if (!checkList.length) return;

        const sum = checkList.reduce((s, el) => s + (el.count * parseInt(el.price[lang])), 0);
        setCheckSum(`${sum} ${currency}`);
    }, [checkList, lang]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
