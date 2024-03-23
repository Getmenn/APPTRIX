import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PAGES } from '@/shared/constants';
import { Button } from '@/shared/ui';

import s from './UndefinedPage.module.scss';

export const UndefinedPage = memo(() => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={s.undefinedPage}>
            <h1>{t('Такой страницы не существует')}</h1>
            <Button onClick={() => navigate(PAGES.main)}>
                На главную
            </Button>
        </div>
    );
});
