import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(className)}
            onClick={toggle}
        >
            {t('Русский')}
        </Button>
    );
});
