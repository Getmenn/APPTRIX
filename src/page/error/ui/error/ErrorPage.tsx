import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PAGES } from '@/shared/constants';
import { Button } from '@/shared/ui';

import s from './ErrorPage.module.scss';

export const ErrorPage = memo(() => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={s.errorPage}>
            <h1>{t('На странице возникла ошибка')}</h1>
            <Button onClick={() => navigate(PAGES.main)}>
                На главную
            </Button>
        </div>
    );
});
