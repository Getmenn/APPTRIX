import { Navigate } from 'react-router-dom';

import { ErrorPage, UndefinedPage } from '@/page/error';
import { LoginPage } from '@/page/login';
import { MainPage } from '@/page/main';
import { OrderPage } from '@/page/order';
import { AppWrapper } from '@/page/wrapper';
import { PAGES } from '@/shared/constants';

export const createRouter = () => [
    {
        path: PAGES.baseURL,
        element: <LoginPage />,
        errorElement: <Navigate to={PAGES.error} />,
    },
    {
        element: <AppWrapper />,
        children: [
            {
                path: PAGES.main,
                element: <MainPage />,
                errorElement: <Navigate to={PAGES.error} />,
            },
            {
                path: PAGES.order,
                element: <OrderPage />,
                errorElement: <Navigate to={PAGES.error} />,
            },
        ],
    },
    {
        path: PAGES.error,
        element: <ErrorPage />,
    },
    {
        path: '*',
        element: <UndefinedPage />,
    },
];
