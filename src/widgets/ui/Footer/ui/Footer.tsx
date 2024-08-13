import React, { useContext } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Logo from 'shared/assets/svg/logoMob.inline.svg';
import { Link } from 'gatsby';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { FormModalButton } from 'features/FormModal';
import { GlobalContext } from 'app/providers/GlobalContext/lib/GlobalProvider';
import * as cls from './Footer.module.css';

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className } = props;
    const { location } = useContext(GlobalContext);

    if (location?.pathname === '/profession-lighting-designer/') {
        return (
            <footer
                data-scroll-section
                className={classNames(cls.footer, {}, [
                    className,
                    'pt-8 sm:pt-[4.5625rem] pb-6 sm:pb-[3.4375rem] bg-blue30 dark:bg-bluegrey900',
                ])}
            >
                <div
                    data-scroll
                    className={classNames(cls.footerContainer, {}, ['container relative'])}
                >
                    <div className="relative z-10">
                        <div className="pb-[1.375rem] sm:pb-[1.9375rem] ">
                            <div className="flex flex-col gap-[1.625rem] sm:grid lg:grid-cols-12 sm:gap-5">
                                <Link to={RoutePath.main} className="w-fit block col-span-4">
                                    <Logo
                                        className={classNames(cls.logo, {}, [className, 'logo'])}
                                    />
                                </Link>
                            </div>
                            <div className="mt-4 sm:mt-[6.0625rem] sm:grid sm:grid-cols-12 sm:gap-5">
                                <div className="col-span-8 justify-self-end tye sm:text-end flex">
                                    <div className="mt-auto">
                                        <a
                                            className="text-17semi sm:text-20bold"
                                            itemProp="url"
                                            href="tel:+79003351900"
                                        >
                                            +7(900)335-19-00
                                        </a>
                                        <p className="text-13med text-bluegrey400">
                                            Контактный центр
                                        </p>
                                    </div>
                                </div>
                                <div className="col-start-1 row-start-1 col-span-4 sm:grid ">
                                    <a
                                        className="text-15semi sm:text-17med mt-[0.8125rem] sm:mt-[0.9375rem] block w-fit sm:row-start-3"
                                        itemProp="url"
                                        href="mailto:school@angels-school.ru"
                                    >
                                        school@angels-school.ru
                                    </a>
                                    <p className="text-13med sm:text-17med mt-6 sm:mt-[0.3125rem]">
                                        111024, г. Москва, вн. тер. г. муниципальный округ Лефортово, ш. Энтузиастов, д. 22/18, помещ. 4П
                                    </p>
                                    <Link
                                        to={RoutePath.contacts}
                                        className="text-15reg sm:text-17med pb-[1px] border-b border-dashed border-bluegrey400 mt-4 block w-fit transition-colors hover:text-blue600 hover:border-blue600"
                                    >
                                        Показать на картах
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[1.4375rem] border-t border-bluegrey200 sm:border-blue200 sm:grid grid-cols-12 gap-x-5">
                            <ul className="flex gap-2 sm:gap-x-4 sm:gap-y-[0.875rem] flex-col sm:flex-row sm:flex-wrap text-13med col-span-7 max-w-[570px] h-fit mb-[2.125rem]">
                                <li>
                                    <Link to={RoutePath.policy} itemProp="url">
                                        Политика конфиденциальности
                                    </Link>
                                </li>
                                <li>
                                    <Link to={RoutePath.termofuse} itemProp="url">
                                        Политика пользовательского соглашения
                                    </Link>
                                </li>
                                <li>
                                    <a href="/" itemProp="url">
                                        Оплата
                                    </a>
                                </li>
                                <li>
                                    <a href="/" itemProp="url">
                                        Оферта
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to={`${RoutePath.inform}/#legal-information`}
                                        itemProp="url"
                                    >
                                        Правовая информация
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`${RoutePath.inform}/#basic-information`}
                                        itemProp="url"
                                    >
                                        Сведения об образовательной организации
                                    </Link>
                                </li>
                            </ul>
                            <div className="text-13med flex flex-col gap-[1.125rem] col-span-5 row-span-2">
                                <p>
                                    Мы используем файлы cookie, для персонализации сервисов и
                                    повышения удобства пользования сайтом. Если вы не согласны на их
                                    использование, поменяйте настройки браузера.
                                </p>
                                <a href="https://minobrnauki.gov.ru/" itemProp="url" className="transition-colors hover:text-blue700">
                                    Сайт Минобрнауки России
                                </a>
                                <a href="https://edu.gov.ru/" itemProp="url" className="transition-colors hover:text-blue700">
                                    Сайт Минпросвещения России
                                </a>
                                <p>Правообладатель ПО LMS «Angels school» ООО «Энжелс скул».</p>
                            </div>

                            <div className="text-15med text-bluegrey400 col-span-6 h-fit mt-[1.875rem] sm:mt-auto">
                                <a href="https://e.lanbook.com/" target="_blank" rel="noreferrer">
                                    <img alt="ЭБС Лань" src="https://e.lanbook.com/front/assets/spa/images/pages/marketing-materials/ebs/88x31.jpg" />
                                </a>
                                <p className="mt-3">
                                    с. Angels school, 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer
            data-scroll-section
            className={classNames(cls.footer, {}, [
                className,
                'pt-8 sm:pt-[4.5625rem] pb-6 sm:pb-[3.4375rem] bg-blue30 dark:bg-bluegrey900',
            ])}
        >
            <div
                data-scroll
                className={classNames(cls.footerContainer, {}, ['container relative'])}
            >
                <div className="relative z-10">
                    <div className="pb-[1.375rem] sm:pb-[1.9375rem] ">
                        <div className="flex flex-col gap-[1.625rem] sm:grid lg:grid-cols-12 sm:gap-5">
                            <Link to={RoutePath.main} className="w-fit block col-span-4">
                                <Logo
                                    className={classNames(cls.logo, {}, [className, 'logo'])}
                                />
                            </Link>
                            <div className="col-span-3">
                                <h6 className="text-13med text-bluegrey400 mb-3 sm:mb-[1.125rem]">
                                    Курсы
                                </h6>
                                <ul className="text-17med flex flex-col gap-[6px] sm:gap-2">
                                    <li>
                                        <Link to="/directions/architectual">
                                            Архитектурный светодизайнер
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/directions/svet">Светодизайнер</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-2">
                                <h6 className="text-13med text-bluegrey400 mb-3 sm:mb-[1.125rem]">
                                    О нас
                                </h6>
                                <ul className="text-17med flex flex-col gap-[6px] sm:gap-2">
                                    <li>
                                        <Link to={RoutePath.about}>О школе</Link>
                                    </li>
                                    <li className="sm:col-start-1 sm:row-start-2">
                                        <Link to={RoutePath.contacts}>Контакты</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:col-span-3 hidden sm:block">
                                <FormModalButton
                                    theme={ButtonTheme.PRIMARY}
                                    text="Записаться на курс"
                                    className="mb-4 lg:ml-auto"
                                    to="/"
                                />
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-[6.0625rem] lg:grid lg:grid-cols-12 lg:gap-5">
                            <div className="col-span-2 justify-self-end tye lg:text-end flex">
                                <div className="mt-auto">
                                    <a
                                        className="text-17semi sm:text-20bold text-nowrap"
                                        itemProp="url"
                                        href="tel:+79003351900"
                                    >
                                        +7(900)335-19-00
                                    </a>
                                    <p className="text-13med text-bluegrey400 sm:text-15med2">
                                        Контактный центр
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-4 col-start-7 row-start-1">
                                <p className="text-13med sm:text-17med mt-[0.8125rem] lg:mt-0 ">
                                    Образовательные услуги оказываются ООО “Энджелс Скул” на основании Лицензии №Л035-01298-77/01332470 от 02 августа 2024 года.
                                </p>
                                <p className="text-13med sm:text-17med mt-[0.8125rem] lg:mt-6  ">
                                    Общество с ограниченной
                                    ответственностью «Энджелс Скул», ИНН 7722460240,ОГРН  1187746511776
                                </p>
                            </div>
                            <div className="col-span-2 text-15med col-start-5 row-start-1 h-fit mt-[0.8125rem] sm:mt-auto ">
                                <Link
                                    className="text-blueGrey900 hover:text-blue700 transition-colors text-nowrap"
                                    to={RoutePath.sitemap}
                                >
                                    Карта сайта
                                </Link>
                            </div>
                            <div className="col-start-1 row-start-1 col-span-4 sm:grid ">
                                <a
                                    className="text-15semi sm:text-17med mt-[0.8125rem] sm:mt-[0.9375rem] block w-fit sm:row-start-3"
                                    itemProp="url"
                                    href="mailto:school@angels-school.ru"
                                >
                                    school@angels-school.ru
                                </a>
                                <p className="text-13med sm:text-17med mt-6 sm:mt-[0.3125rem]">
                                    111024, г. Москва, вн. тер. г. муниципальный округ Лефортово, ш. Энтузиастов, д. 22/18, помещ. 4П
                                </p>
                                <Link
                                    to={RoutePath.contacts}
                                    className="text-15reg h-fit sm:text-17med pb-[1px] border-b border-dashed border-bluegrey400 mt-4 sm:mt-1 block w-fit transition-colors hover:text-blue600 hover:border-blue600"
                                >
                                    Показать на картах
                                </Link>
                            </div>
                        </div>
                        <Button
                            text="Записаться на курс"
                            className=" sm:!hidden mt-[22px]"
                            to="/"
                        />
                    </div>
                    <div className="pt-[1.4375rem] border-t border-bluegrey200 sm:border-blue200 sm:grid grid-cols-12 gap-x-5">
                        <ul className="flex gap-2 sm:gap-x-4 sm:gap-y-[0.875rem] flex-col sm:flex-row sm:flex-wrap text-13med col-span-7 max-w-[570px] h-fit mb-[2.125rem]">
                            <li>
                                <Link to={RoutePath.policy} itemProp="url">
                                    Политика конфиденциальности
                                </Link>
                            </li>
                            <li>
                                <Link to={RoutePath.termofuse} itemProp="url">
                                    Политика пользовательского соглашения
                                </Link>
                            </li>
                            <li>
                                <a href="/" itemProp="url">
                                    Оплата
                                </a>
                            </li>
                            <li>
                                <a href="/" itemProp="url">
                                    Оферта
                                </a>
                            </li>
                            <li>
                                <Link
                                    to={`${RoutePath.inform}/#legal-information`}
                                    itemProp="url"
                                >
                                    Правовая информация
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`${RoutePath.inform}/#basic-information`}
                                    itemProp="url"
                                >
                                    Сведения об образовательной организации
                                </Link>
                            </li>
                        </ul>
                        <div className="text-13med flex flex-col gap-[1.125rem] col-span-5 row-span-2">
                            <p>
                                Мы используем файлы cookie, для персонализации сервисов и
                                повышения удобства пользования сайтом. Если вы не согласны на их
                                использование, поменяйте настройки браузера.
                            </p>
                            <a href="https://minobrnauki.gov.ru/" itemProp="url" className="transition-colors hover:text-blue700">
                                Сайт Минобрнауки России
                            </a>
                            <a href="https://edu.gov.ru/" itemProp="url" className="transition-colors hover:text-blue700">
                                Сайт Минпросвещения России
                            </a>
                            <p>Правообладатель ООО «Энджелс Скул».</p>
                        </div>

                        <div className="text-15med text-bluegrey400 col-span-6 h-fit mt-[1.875rem] sm:mt-auto">
                            <a href="https://e.lanbook.com/" target="_blank" rel="noreferrer">
                                <img alt="ЭБС Лань" src="https://e.lanbook.com/front/assets/spa/images/pages/marketing-materials/ebs/88x31.jpg" />
                            </a>
                            <p className="mt-3">
                                с. Angels school, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
