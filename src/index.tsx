import '@/app/styles/index.scss';
import './shared/lib/i18n/i18n';
// import 'swiper/css';


import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from '@/app/providers/reduxStore';
import { RouterProvider } from '@/app/providers/router';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контенер root не найден. Не удалось вмонтировать react приложение!');
}

ReactDOM.createRoot(container).render(
    <BrowserRouter>
        <StoreProvider>
            <RouterProvider />
        </StoreProvider>
    </BrowserRouter>
    ,
);
