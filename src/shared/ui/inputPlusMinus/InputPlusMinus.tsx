import { ChangeEvent, memo, useCallback } from 'react';

import s from './InputPlusMinus.module.scss';

interface IProps {
    value: number;
    setValue: (value: number) => void;
}

export const InputPlusMinus = memo(({ value, setValue }: IProps) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const isNumber = /^\d+$/.test(e.target.value);
        if (isNumber && Number(e.target.value) <= 100) {
            setValue(Number(e.target.value));
        }
    }, []);

    const increment = useCallback((number: number) => {
        if (number <= 100) {
            setValue(number);
        }
    }, []);

    const decrement = useCallback((number: number) => {
        if (number >= 1) {
            setValue(number);
        }
    }, []);

    return (
        <div className={s.castomInput}>
            <button
                onClick={() => decrement(value - 1)}
                className={s.buttonDecrement}
                type="button"
            >
                -
            </button>
            <input type="text" value={value} onChange={(e) => handleChange(e)} />
            <button
                onClick={() => increment(value + 1)}
                className={s.buttonIncrement}
                type="button"
            >
                +
            </button>
        </div>
    );
});
