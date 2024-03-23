import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { langs } from '@/shared/lib/i18n/i18n';

export const useLang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<langs>('en');
    const [currency, setCurrency] = useState<'руб' | '$'>('$');

    useEffect(() => {
        setLang(i18n.language as langs);
        setCurrency(i18n.language === 'ru' ? 'руб' : '$');
    }, [i18n.language]);

    return { lang, currency };
};
