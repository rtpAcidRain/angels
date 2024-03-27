import * as React from 'react';
import {
    HeadFC, Link, navigate, PageProps,
} from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import { Button } from 'shared/ui/Button/Button';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import * as cls from './style.module.css';

const SiteMapPage: React.FC<PageProps> = () => (
    <Section className={cls.section}>
        <h1 className="text-27semi my-10 sm:text-56semi sm:my-[3.25rem]">
            Карта сайта
        </h1>
        <div className="pt-50 sm:pt-0 sm:grid grid-cols-12 gap-[1.125rem] privacy-policy ">
            <header
                className="col-span-6 hidden sm:block relative"
                id="stick"
            >
                <div className="target right-0 left-0 -top-[102px] bottom-[102px] pointer-events-none lg:absolute" />
                <div
                    className="flex items-center gap-4 sticky"
                    data-scroll
                    data-scroll-sticky
                    data-scroll-target="#stick .target"
                >
                    <Button text="Вернуться" onClick={() => navigate(-1)} />
                    <Link to={RoutePath.main}>На главную</Link>
                </div>
            </header>
            <ul className="col-span-6 flex flex-col text-24semi sm:text-27semi gap-8">
                <li>
                    <Link to={`${RoutePath.directions}/architectual`}>
                        Курс “Архитектурный
                        светодизайн”
                    </Link>
                </li>
                <li>
                    <Link to={`${RoutePath.directions}/svet`}>
                        Курс “Светодизайнер.
                        Архитектурное освещение.”
                    </Link>
                </li>
                <li>
                    <Link to={RoutePath.about}>
                        О школе
                    </Link>
                </li>
                <li>
                    <Link to={RoutePath.contacts}>
                        Контакты
                    </Link>
                </li>
                <li>
                    <Link to={RoutePath.inform}>
                        Информация
                    </Link>
                </li>
                <li>
                    <Link to={RoutePath.policy}>
                        Политика конфиденциальности
                    </Link>
                </li>
                <li>
                    <Link to={RoutePath.termofuse}>
                        Пользовательское соглашение
                    </Link>
                </li>
            </ul>
        </div>
    </Section>
);

export default SiteMapPage;

export const Head: HeadFC = () => <title>Карта сайта</title>;
