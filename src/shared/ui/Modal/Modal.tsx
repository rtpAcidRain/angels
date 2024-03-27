import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import * as cls from './Modal.module.css';

export enum ModalPositionEnum {
    CENTER = 'center',
    LEFT = 'left',
}

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    position?: ModalPositionEnum,
    lazy?: boolean
    permanentClose?: boolean
}

const ANIMATION_DELAY = 150;
const ANIMATION_DELAY_LEFT = 650;
const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        position = ModalPositionEnum.CENTER,
        lazy,
        permanentClose,
    } = props;
    const { scroll } = useLocomotiveScroll();
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            if (!document.getElementsByTagName('html')[0].classList.contains('has-scroll-smooth')) {
                document.getElementsByTagName('html')[0].classList.add('overflow-hidden');
            } else {
                scroll.stop();
            }
        }
    }, [scroll, isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
                if (!document.getElementsByTagName('html')[0].classList.contains('has-scroll-smooth')) {
                    document.getElementsByTagName('html')[0].classList.remove('overflow-hidden');
                } else {
                    scroll.start();
                }
            }, position === ModalPositionEnum.LEFT ? ANIMATION_DELAY_LEFT : ANIMATION_DELAY);
        }
    }, [position, scroll, onClose]);

    useEffect(() => {
        if (!permanentClose) {
            closeHandler();
        }
    }, [permanentClose, closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[position]]: true,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, 'modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
