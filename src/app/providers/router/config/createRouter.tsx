import { Navigate } from 'react-router-dom';

import { LoginPage } from '@/page/login';
import { MainPage } from '@/page/main';
import { PAGES } from '@/shared/constants';

export const createRouter = () => [
    {
        path: PAGES.baseURL,
        element: <LoginPage />,
        errorElement: <Navigate to={PAGES.baseURL} />,
    },
    {
        path: PAGES.main,
        element: <MainPage />,
        errorElement: <Navigate to={PAGES.baseURL} />,
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
