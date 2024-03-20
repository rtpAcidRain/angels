import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import Burger from 'shared/assets/svg/burger.inline.svg';
import CrossSvg from 'shared/assets/svg/cross.inline.svg';
import { useMediaQuery } from 'react-responsive';
import * as cls from './OpenNavButton.module.css';
import { MobileNavModal } from '../MobileNavModal/MobileNavModal';

interface OpenNavButtonProps {
    className?: string,
}

export const OpenNavButton = (props: OpenNavButtonProps) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = React.useState(false);
    const [permanentClose, setPermanentClose] = React.useState(false);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)',
    });

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true);
        setPermanentClose(true);
    }, []);

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onPermanentClos = React.useCallback(() => {
        setPermanentClose(false);
    }, []);

    return (
        <>
            {isAuthModal
                ? (
                    <button
                        type="button"
                        title="Меню"
                        aria-label="Меню"
                        className={classNames(cls.openNavButton, {}, [className])}
                        onClick={onPermanentClos}
                    >
                        <CrossSvg className="w-10 h-10 stroke-bluegrey900" />
                    </button>
                )
                : (
                    <button
                        type="button"
                        title="Меню"
                        aria-label="Меню"
                        className={classNames(cls.openNavButton, {}, [className])}
                        onClick={onShowModal}
                    >
                        <Burger className="w-10 h-10 stroke-bluegrey900" />
                    </button>
                )}

            {!isDesktopOrLaptop && (isAuthModal
                && (
                    <MobileNavModal
                        setPermanentClose={onPermanentClos}
                        permanentClose={permanentClose}
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                ))}
        </>

    );
};
