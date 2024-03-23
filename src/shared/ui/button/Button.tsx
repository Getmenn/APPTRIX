import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, MouseEvent, ReactNode } from 'react';

import s from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode
    onClick?: () => void;
    className?: string;
    view?: 'second' | 'icon' | 'delete';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button = memo(({
    children,
    onClick,
    className,
    view,
    type = 'button',
    disabled = false,
    ...otherProps
}: IProps) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.stopPropagation();
        onClick?.();
    };

    return (
        <button
            type={type}
            onClick={(e) => handleClick(e)}
            className={classNames(s.button, view && s[view], { [s.disabled]: disabled }, className)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
