import * as React from 'react';
import {
    HeadFC, Link, navigate, PageProps,
} from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import ClockSvg from 'shared/assets/svg/clock.inline.svg';
import EyeSvg from 'shared/assets/svg/eye.inline.svg';
import Img from 'shared/assets/img/about_image.jpg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import * as cls from './style.module.css';

const NewPage: React.FC<PageProps> = () => (
    <Section className="pt-5 sm:pt-16 flex flex-col gap-4 sm:gap-x-5 sm:gap-y-8 lg:grid grid-cols-12">
        <h1 className="order-2 sm:pr-60 text-27semi sm:text-40semi col-span-9">
            Гайд: как определить, какое направление в IT тебе подходит
        </h1>
        <header className="order-1 col-span-12">
            <ul className="text-grey500 text-13reg flex gap-3">
                <li>01 Апр 2022</li>
                <li className="flex gap-1 items-center">
                    <ClockSvg className="stroke-grey500 w-4 h-4" />
                    5 мин
                </li>
                <li className="flex gap-1 items-center">
                    <EyeSvg className="stroke-grey500 w-4 h-4" />
                    1337
                </li>
            </ul>
        </header>
        <div className={cls.body}>
            <p>
                Обязанности и зарплата аналитика, Python- и Java-разработчиков и других
                востребованных IT-специалистов.
            </p>
            <img src={Img} alt="img" />
            <p>
                Все, что помогает пользователям управлять девайсами и приложениями с
                помощью голоса, нажатий, жестов, через командную строку — создает
                фронтенд-разработчик. Его сравнивают с верстальщиком, думая, что он
                просто создает визуальный контент. Но это не так. Фронтенд-разработчик —
                это дизайнер, верстальщик, инженер и тестировщик в одном лице
            </p>
            <p>
                Все, что помогает пользователям управлять девайсами и приложениями с
                помощью голоса, нажатий, жестов, через командную строку — создает
                фронтенд-разработчик.
            </p>
            <img src={Img} alt="img" />
            <p>
                Все, что помогает пользователям управлять девайсами и приложениями с
                помощью голоса, нажатий, жестов, через командную строку — создает
                фронтенд-разработчик.
            </p>
            <div
                className={classNames(cls.background, {}, [
                    'rounded-2xl sm:rounded-3xl bg-bluegrey900',
                ])}
            >
                <div className="p-4 sm:p-8">
                    <h2 className="text-27semi sm:text-40semi text-whitefull mb-4 sm:mb-6">
                        Программист курс
                        <br />
                        очень крутой
                    </h2>
                    <p className="text-15reg sm:text-17reg text-grey100 mb-12 sm:mb-14 max-w-[28.4375rem]">
                        Все, что помогает пользователям управлять девайсами и приложениями с
                        помощью голоса, нажатий, жестов, через командную строку
                    </p>
                    <Button
                        theme={ButtonTheme.WHITE}
                        text="Подробнее"
                        aria-label="Подробнее"
                    />
                </div>
            </div>
            <h2>Название заголовка нахрен</h2>
            <p>
                Все, что помогает пользователям управлять девайсами и приложениями с
                помощью голоса, нажатий, жестов, через командную строку — создает
                фронтенд-разработчик. Его сравнивают с верстальщиком, думая, что он
                просто создает визуальный контент. Но это не так. Фронтенд-разработчик —
                это дизайнер, верстальщик, инженер и тестировщик в одном лице
            </p>
            <p>
                Все, что помогает пользователям управлять девайсами и приложениями с
                помощью голоса, нажатий, жестов, через командную строку — создает
                фронтенд-разработчик.
            </p>
            <table>
                <td>
                    <img src={Img} alt="img" />
                </td>
                <td>
                    <img src={Img} alt="img" />
                </td>
            </table>
        </div>
        <div className="col-span-3 row-span-2 row-start-2 col-start-10 hidden lg:block relative" id="stick">
            <div className="target right-0 left-0 -top-[102px] bottom-[102px] pointer-events-none lg:absolute" />
            <div
                className=""
                data-scroll
                data-scroll-sticky
                data-scroll-target="#stick .target"
            >
                <h4 className="mb-8 text-27semi">Похожие новости</h4>
                <div className="flex flex-col gap-4">
                    <Link to={RoutePath.news_details} className="block">
                        <article className="rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-grey100 flex flex-col">
                            <h2 className="text-17semi sm:text-20semi order-2 mb-2 sm:mb-3">
                                Гайд: как определить, какое направление в IT тебе подходит
                            </h2>
                            <div className="mb-4 order-1">
                                <img
                                    src={Img}
                                    alt="Новость"
                                    className="w-full h-auto object-cover rounded-xl aspect-[296/169] sm:aspect-[428/197]"
                                />
                            </div>
                            <p className="text-13med sm:text-15reg text-grey800 order-3">
                                Обязанности и зарплата аналитика, Python- и Java-разработчиков и
                                других востребованных IT-специалистов.
                            </p>
                            <div className="text-13med text-grey500 flex items-center gap-4 sm:gap-[1.125rem] order-4 mt-[1.875rem] sm:mt-[3.75rem]">
                                <span>01 Апр 2022</span>
                                <span className="flex items-center gap-[3px] flex-1">
                                    <ClockSvg className="stroke-[#9E9E9E] w-4 h-4" />
                                    <span>11 мин</span>
                                </span>
                            </div>
                        </article>
                    </Link>
                    <Link to={RoutePath.news_details} className="block">
                        <article className="rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-grey100 flex flex-col">
                            <h2 className="text-17semi sm:text-20semi order-2 mb-2 sm:mb-3">
                                Гайд: как определить, какое направление в IT тебе подходит
                            </h2>
                            <div className="mb-4 order-1">
                                <img
                                    src={Img}
                                    alt="Новость"
                                    className="w-full h-auto object-cover rounded-xl aspect-[296/169] sm:aspect-[428/197]"
                                />
                            </div>
                            <p className="text-13med sm:text-15reg text-grey800 order-3">
                                Обязанности и зарплата аналитика, Python- и Java-разработчиков и
                                других востребованных IT-специалистов.
                            </p>
                            <div className="text-13med text-grey500 flex items-center gap-4 sm:gap-[1.125rem] order-4 mt-[1.875rem] sm:mt-[3.75rem]">
                                <span>01 Апр 2022</span>
                                <span className="flex items-center gap-[3px] flex-1">
                                    <ClockSvg className="stroke-[#9E9E9E] w-4 h-4" />
                                    <span>11 мин</span>
                                </span>
                            </div>
                        </article>
                    </Link>
                    <Link to={RoutePath.news_details} className="block">
                        <article className="rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-grey100 flex flex-col">
                            <h2 className="text-17semi sm:text-20semi order-2 mb-2 sm:mb-3">
                                Гайд: как определить, какое направление в IT тебе подходит
                            </h2>
                            <div className="mb-4 order-1">
                                <img
                                    src={Img}
                                    alt="Новость"
                                    className="w-full h-auto object-cover rounded-xl aspect-[296/169] sm:aspect-[428/197]"
                                />
                            </div>
                            <p className="text-13med sm:text-15reg text-grey800 order-3">
                                Обязанности и зарплата аналитика, Python- и Java-разработчиков и
                                других востребованных IT-специалистов.
                            </p>
                            <div className="text-13med text-grey500 flex items-center gap-4 sm:gap-[1.125rem] order-4 mt-[1.875rem] sm:mt-[3.75rem]">
                                <span>01 Апр 2022</span>
                                <span className="flex items-center gap-[3px] flex-1">
                                    <ClockSvg className="stroke-[#9E9E9E] w-4 h-4" />
                                    <span>11 мин</span>
                                </span>
                            </div>
                        </article>
                    </Link>
                </div>
            </div>
        </div>
    </Section>
);

export default NewPage;

export const Head: HeadFC = () => (
    <title>
        Фронтенд-разработчик: кто это такой
        и как им стать с нуля
    </title>
);
