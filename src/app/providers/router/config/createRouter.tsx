import { Navigate } from 'react-router-dom';

import MainPage from '@/page/content/main';
import { PAGES } from '@/shared/constants';

export const createRouter = () => [
    {
        path: PAGES.baseURL,
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
