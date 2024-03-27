import * as React from 'react';
import {
    HeadFC, Link, PageProps,
} from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import Img from 'shared/assets/img/about_image.jpg';
import Clock from 'shared/assets/svg/clock.inline.svg';
import { Tabs } from 'shared/ui/Tabs/ui/Tabs/Tabs';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const tabArray: string[] = ['2024', '2023', '2022', '2021', '2020'];
const NewsPage: React.FC<PageProps> = () => {
    const [active, setActive] = React.useState<string>('all');
    return (
        <Section className="pt-5 sm:pt-[1.875rem] !px-0">
            <h1 style={{ width: '1px', height: '1px', overflow: 'hidden' }}>
                Пресс-центр
            </h1>
            <div className="container mb-10 sm:mb-[3.75rem]">
                <Link to={RoutePath.news_details} className="block">
                    <article className="rounded-2xl sm:rounded-3xl p-3 sm:px-0 sm:py-6 bg-grey100 flex flex-col sm:grid grid-cols-12 sm:gap-x-5 auto-rows-auto">
                        <h2 className="text-17semi sm:text-32semi order-2 mb-2 sm:mb-4 col-span-5 h-fit max-w-[352px]">
                            Гайд: как определить, какое направление в IT тебе подходит
                        </h2>
                        <div className="mb-4 sm:mb-0 order-1 col-span-7 row-span-4 sm:px-7 ">
                            <img
                                src={Img}
                                alt="Новость"
                                className="w-full object-cover rounded-xl aspect-[296/169] sm:aspect-[763/356] h-full"
                            />
                        </div>
                        <p className="text-13med sm:text-17reg text-grey800 order-3 col-span-5 h-fit max-w-[460px]">
                            Обязанности и зарплата аналитика, Python- и Java-разработчиков и
                            других востребованных IT-специалистов.
                        </p>
                        <div className="text-13med text-grey500 flex items-center gap-4 sm:gap-[1.125rem] order-4 mt-[1.875rem] sm:mt-4 col-span-5 h-fit col-start-8 row-start-4">
                            <span>01 Апр 2022</span>
                            <span className="flex items-center gap-[3px] flex-1">
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
                                <span>11 мин</span>
                            </span>
                        </div>
                    </article>
                </Link>
            </div>
            <header className="mb-5 sm:mb-7">
                <Tabs
                    tabArray={tabArray}
                    active={active}
                    setActive={setActive}
                    className="mb-4 sm:mb-5"
                />
            </header>
            <div className="container flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
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
                                <Clock className="stroke-[#9E9E9E] w-4 h-4" />
                                <span>11 мин</span>
                            </span>
                        </div>
                    </article>
                </Link>
            </div>
        </Section>
    );
};

export default NewsPage;

export const Head: HeadFC = () => <title>Пресс-центр</title>;
