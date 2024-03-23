import classNames from 'classnames';
import { useSwiper } from 'swiper/react';

import MoreLessSvg from '@/shared/assets/svg/more.svg';
import { Button } from '@/shared/ui';

import s from './ButtonNavigate.module.scss';

interface IProps{
    type: 'next' | 'prev'
}

export const ButtonNavigate = ({ type }: IProps) => {
    const swiper = useSwiper();
    const isPrev = type === 'prev';

    const handleNavigate = () => {
        isPrev
            ? swiper.slidePrev()
            : swiper.slideNext();
    };

    return (
        <Button view="icon" onClick={handleNavigate} className={classNames(s.arrow, { [s.prev]: isPrev })}>
            {isPrev
                ? <MoreLessSvg />
                : <MoreLessSvg />}
        </Button>
    );
};
