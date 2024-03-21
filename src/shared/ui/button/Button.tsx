import classNames from 'classnames';
import { memo, ReactNode } from 'react';

import s from './Button.module.scss';

interface IProps {
    children: string | ReactNode
    onClick?: () => void;
    className?: string;
    view?: "second" | "icon"
}

export const Button = memo(({ children, onClick, className, view }: IProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(s.button, className, view && s[view],)}
        >
            {children}
        </button>
    );
});
