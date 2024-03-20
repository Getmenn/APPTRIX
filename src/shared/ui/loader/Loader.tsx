import { memo } from 'react';

import s from './Loader.module.scss';

export const Loader = memo(() => <span className={s.loader} />);
