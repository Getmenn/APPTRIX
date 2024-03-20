import classNames from 'classnames';
import { memo, ReactNode } from 'react';

import s from './Button.module.scss';

interface IProps{
    children: string | ReactNode
    onClick?: () => void;
    className?: string;
    icon?: boolean
}

export const Button = memo(({ children, onClick, className, icon }: IProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(s.button, className, icon && s.buttonIcon)}
        >
            {children}
        </button>
    );
});
