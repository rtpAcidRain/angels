import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import Modal, { ModalPositionEnum } from 'shared/ui/Modal/Modal';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { AccordeonItem } from 'shared/ui/Accordeon/ui/AccordeonItem/AccordeonItem';
import { Link } from 'gatsby';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MobileNavLink } from 'features/MobileNav/MobileNavLink/MobileNavLink';
import * as cls from './MobileNavModal.module.css';

interface MobileNavModalProps {
    permanentClose?: boolean,
    className?: string,
    isOpen: boolean,
    onClose: () => void,
    setPermanentClose: () => void,
}

export const MobileNavModal = (props: MobileNavModalProps) => {
    const {
        className,
        isOpen,
        onClose,
        permanentClose,
        setPermanentClose,
    } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            permanentClose={permanentClose}
            isOpen={isOpen}
            onClose={onClose}
            position={ModalPositionEnum.LEFT}
        >
            <div className={cls.mobileNavModal}>
                <div className="h-full flex flex-col">
                    <div
                        className="pb-3 flex justify-between items-center border-b border-grey300 dark:border-bluegrey800"
                    >
                        <span className="text-17med text-grey600 dark:text-grey500 block">Навигация</span>
                        <ThemeSwitcher />
                    </div>
                    <nav className="flex-1 py-[1.375rem] min-h-0">
                        <ul className="h-full overflow-auto no-scrollbar flex flex-col gap-4">
                            {/* <li> */}
                            {/*    <MobileNavLink to={RoutePath.directions} permanentClose={setPermanentClose}>Программы</MobileNavLink> */}
                            {/* </li> */}
                            {/* <li> */}
                            {/*    <MobileNavLink to={RoutePath.corporate_training} permanentClose={setPermanentClose}> */}
                            {/*        Корпоративное */}
                            {/*        <br /> */}
                            {/*        обучение */}
                            {/*    </MobileNavLink> */}
                            {/* </li> */}
                            <li>
                                <MobileNavLink to={RoutePath.about} permanentClose={setPermanentClose}>О школе</MobileNavLink>
                            </li>
                            {/* <li> */}
                            {/*    <MobileNavLink to={RoutePath.news} permanentClose={setPermanentClose}>Пресс-центр</MobileNavLink> */}
                            {/* </li> */}
                            <li>
                                <MobileNavLink to={RoutePath.contacts} permanentClose={setPermanentClose}>Контакты</MobileNavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-17med">
                        <span
                            className="block text-grey600 dark:text-grey500 pb-3 border-b border-grey300 dark:border-bluegrey800 mb-6"
                        >
                            Соц. сети
                        </span>
                        <div className="flex gap-4 justify-between mb-4 text-bluegrey800 dark:text-grey200">
                            <a href="/">Телеграм</a>
                            <a href="/">Еще какая то</a>
                            <a href="/">И еще че то</a>
                        </div>
                        <a href="tel:+79040306572" className="text-bluegrey800 dark:text-grey200">+7 9040306572</a>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
