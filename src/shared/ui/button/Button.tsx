import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import s from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string | ReactNode
    onClick?: () => void;
    className?: string;
    view?: "second" | "icon"
}

export const Button = memo(({
    children,
    onClick,
    className,
    view,
    ...otherProps
}: IProps) => {
    
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(s.button, className, view && s[view],)}
            {...otherProps}
        >
            {children}
        </button>
    );
});
