import * as React from 'react';
import {
    HeadFC, PageProps,
} from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, HashNavigation, Pagination } from 'swiper/modules';
import * as cls from './style.module.css';

const infEls = [
    {
        name: 'Правовая информация',
        url: 'legal-information',
    },
    {
        name: 'Основные сведения',
        url: 'basic-information',
    },
    {
        name: 'Документы',
        url: 'documentation',
    },
    {
        name: 'Руководство. Педагогический состав',
        url: 'management',
    },
    {
        name: 'Платные образовательные услуги',
        url: 'services',
    },
];

const InformationPage: React.FC<PageProps> = () => (
    <Section className="!px-0 sm:!px-10">
        <h1 className="text-27semi my-10 sm:text-56semi sm:my-[3.25rem] px-5 sm:px-0">
            Информация
        </h1>
        <div className="pt-50 sm:pt-0 sm:grid grid-cols-12 gap-[1.125rem] ">
            <header className="buttons col-span-6 flex items-center gap-4 h-fit mb-6 sm:mb-0 no-scrollbar overflow-auto px-5 sm:px-0">
                <ul id="pagination" className="flex gap-3 sm:flex-col gap-4" />
            </header>
            <div className="col-span-6 px-5 sm:px-0">
                <Swiper
                    modules={[Pagination, HashNavigation, EffectFade]}
                    hashNavigation={{
                        watchState: true,
                    }}
                    // allowTouchMove={false}
                    // noSwiping
                    // simulateTouch={false}
                    effect="fade"
                    pagination={{
                        el: '#pagination',
                        bulletClass: cls.paginationEl,
                        bulletActiveClass: cls.paginationElActive,
                        clickable: true,
                        renderBullet(index, classNames) {
                            return `<span class='${classNames}'>${infEls[index].name}</span>`;
                        },
                    }}
                >
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[0].url}
                    >
                        <h2 className="text-20semi sm:text-27semi mb-[1.875rem] sm:mb-10 text-grey900">
                            1. Общие положения
                        </h2>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Настоящая политика обработки персональных данных составлена в
                            соответствии с требованиями Федерального закона от 27.07.2006.
                            №152-ФЗ «О персональных данных» и определяет порядок обработки
                            персональных данных и меры по обеспечению безопасности
                            персональных данных, предпринимаемые компанией «Технология света»
                            (далее – Компания).
                        </p>
                        <ul className="text-17reg mb-4">
                            <li>
                                <a
                                    href="/files/information/termofuse.docx"
                                    download="Пользовательское соглашение.docx"
                                >
                                    Пользовательское соглашение
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/files/information/returnrules.docx"
                                    download="Правила возврата денежных средств.docx"
                                >
                                    Правила возврата денежных средств
                                </a>
                            </li>
                            <li>Согласие на обработку персональных данных</li>
                            <li>Условия использования файлов cookie</li>
                            <li>Политика конфиденциальности</li>
                        </ul>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор публичной оферты
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор публичной оферты
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании для физических лиц
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор об образовании для физических лиц
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Сокращенное наименование
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block text-blue600">
                            ООО «Энджелс Скул»
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[1].url}
                    >
                        <h2 className="text-20semi sm:text-27semi mb-[1.875rem] sm:mb-10 text-grey900">
                            1. Общие положения
                        </h2>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Настоящая политика обработки персональных данных составлена в
                            соответствии с требованиями Федерального закона от 27.07.2006.
                            №152-ФЗ «О персональных данных» и определяет порядок обработки
                            персональных данных и меры по обеспечению безопасности
                            персональных данных, предпринимаемые компанией «Технология света»
                            (далее – Компания).
                        </p>
                        <ul className="text-17reg mb-4">
                            <li>Согласие на обработку персональных данных</li>
                            <li>Условия использования файлов cookie</li>
                            <li>Политика конфиденциальности</li>
                        </ul>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор публичной оферты
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор публичной оферты
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании для физических лиц
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор об образовании для физических лиц
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Сокращенное наименование
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block text-blue600">
                            ООО «Энджелс Скул»
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[2].url}
                    >
                        <h2 className="text-20semi sm:text-27semi mb-[1.875rem] sm:mb-10 text-grey900">
                            1. Общие положения
                        </h2>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Настоящая политика обработки персональных данных составлена в
                            соответствии с требованиями Федерального закона от 27.07.2006.
                            №152-ФЗ «О персональных данных» и определяет порядок обработки
                            персональных данных и меры по обеспечению безопасности
                            персональных данных, предпринимаемые компанией «Технология света»
                            (далее – Компания).
                        </p>
                        <ul className="text-17reg mb-4">
                            <li>Пользовательское соглашение</li>
                            <li>Правила возврата денежных средств</li>
                            <li>Согласие на обработку персональных данных</li>
                            <li>Условия использования файлов cookie</li>
                            <li>Политика конфиденциальности</li>
                        </ul>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор публичной оферты
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор публичной оферты
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании для физических лиц
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор об образовании для физических лиц
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Сокращенное наименование
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block text-blue600">
                            ООО «Энджелс Скул»
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[3].url}
                    >
                        <h2 className="text-20semi sm:text-27semi mb-[1.875rem] sm:mb-10 text-grey900">
                            1. Общие положения
                        </h2>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Настоящая политика обработки персональных данных составлена в
                            соответствии с требованиями Федерального закона от 27.07.2006.
                            №152-ФЗ «О персональных данных» и определяет порядок обработки
                            персональных данных и меры по обеспечению безопасности
                            персональных данных, предпринимаемые компанией «Технология света»
                            (далее – Компания).
                        </p>
                        <ul className="text-17reg mb-4">
                            <li>Пользовательское соглашение</li>
                            <li>Правила возврата денежных средств</li>
                            <li>Согласие на обработку персональных данных</li>
                            <li>Условия использования файлов cookie</li>
                            <li>Политика конфиденциальности</li>
                        </ul>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор публичной оферты
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор публичной оферты
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании для физических лиц
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор об образовании для физических лиц
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Сокращенное наименование
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block text-blue600">
                            ООО «Энджелс Скул»
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[4].url}
                    >
                        <h2 className="text-20semi sm:text-27semi mb-[1.875rem] sm:mb-10 text-grey900">
                            1. Общие положения
                        </h2>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Настоящая политика обработки персональных данных составлена в
                            соответствии с требованиями Федерального закона от 27.07.2006.
                            №152-ФЗ «О персональных данных» и определяет порядок обработки
                            персональных данных и меры по обеспечению безопасности
                            персональных данных, предпринимаемые компанией «Технология света»
                            (далее – Компания).
                        </p>
                        <ul className="text-17reg mb-4">
                            <li>Пользовательское соглашение</li>
                            <li>Правила возврата денежных средств</li>
                            <li>Согласие на обработку персональных данных</li>
                            <li>Условия использования файлов cookie</li>
                            <li>Политика конфиденциальности</li>
                        </ul>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор публичной оферты
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор публичной оферты
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании для физических лиц
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор об образовании для физических лиц
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Сокращенное наименование
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block text-blue600">
                            ООО «Энджелс Скул»
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Section>
);

export default InformationPage;

export const Head: HeadFC = () => <title>Информация</title>;
