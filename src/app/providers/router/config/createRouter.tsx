import { Navigate } from 'react-router-dom';

import { LoginPage } from '@/page/login';
import { MainPage } from '@/page/main';
import { OrderPage } from '@/page/order/ui/OrderPage';
import { PAGES } from '@/shared/constants';
import { AppWrapper } from '@/page/wrapper';

export const createRouter = () => [
    {
        path: PAGES.baseURL,
        element: <LoginPage />,
        // errorElement: <Navigate to={PAGES.baseURL} />,
    },
    {
        element: <AppWrapper />,
        children: [
            {
                path: PAGES.main,
                element: <MainPage />,
                // errorElement: <Navigate to={PAGES.baseURL} />,
            },
            {
                path: PAGES.order,
                element: <OrderPage />,
                // errorElement: <Navigate to={PAGES.order} />,
            },
        ],
    },

    // {
    //     path: PAGES.error.error404,
    //     element: <Error404Page />,
    //     errorElement: <Navigate to={PAGES.error.error404} />,
    // },
    // {
    //     path: '*',
    //     element: <Error404Page />,
    //     errorElement: <Navigate to={PAGES.error.error404} />,
    // },
];
