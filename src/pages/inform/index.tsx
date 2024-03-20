import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import 'swiper/css/effect-fade';
import { Section } from 'shared/ui/Section/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, HashNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { classNames } from 'shared/lib/classNames/classNames';
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
const InformPage: React.FC<PageProps> = () => (

    <Section className={classNames(cls.inf, {}, ['!px-0 sm:!px-10'])}>
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
                    autoHeight
                    hashNavigation={{
                        watchState: true,
                    }}
                    allowTouchMove={false}
                    noSwiping
                    simulateTouch={false}
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
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Общество с ограниченной ответственностью «Энджелс Скул»
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            ООО «Энджелс Скул»
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            111024, г. Москва, вн. тер. г. муниципальный округ Лефортово, ш.
                            Энтузиастов, д. 22/18, помещ. 4П
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            С понедельника по пятницу с 09:00 до 18:00
                        </p>
                        <a
                            href="tel:+79003351900"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            +79003351900
                        </a>
                        <a
                            href="mailto:angels-school@yandex.ru"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            angels-school@yandex.ru
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[2].url}
                    >
                        <p className="text-13reg sm:text-17reg mb-4 block text-blue600">
                            Положение об образовательном подразделении;
                            {' '}
                            <br />
                            2.Порядок оформления образовательных отношений между участниками;
                            {' '}
                            <br />
                            3.Правила приема на обучение;
                            {' '}
                            <br />
                            4.Порядок и основания перевода, отчисления обучающихся;
                            <br />
                            5.Положение о языке обучения;
                            <br />
                            6.Положение о формах обучения;
                            <br />
                            7.Порядок обучения по индивидуальному учебному плану;
                            <br />
                            8.Режим занятий обучающихся;
                            <br />
                            9.Положение о формах,периодичности и порядке текущего контроля успеваемости и промежуточной аттестации обучающихся;
                            <br />
                            10.Положение об итоговой аттестации;
                            <br />
                            11.Порядок зачета результатов освоения учащимися учебных предметов, курсов, дисциплин, практики, дополнительных образовательных программ в других организациях;
                            <br />
                            12.Положение об оказании платных образовательных услуг;
                            <br />
                            13.Положение об оформлении, выдаче и хранении документов об обучении / о квалификации
                            {' '}
                            <br />
                            14.15.Положение об основаниях и порядке снижения стоимости платных образовательных услуг;
                            <br />
                            16.Правила внутреннего распорядка учащихся;
                            {' '}
                            <br />
                            17.
                            Положение о комиссии по урегулированию споров между участниками образовательных отношений;
                            <br />
                            18. Положение о дистанционном обучении.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[4].url}
                    >
                        <p className="text-13reg sm:text-17reg mb-4">
                            Формы договоров и Порядок об оказании платных образовательных услуг Договор на оказание
                            платных
                            образовательных услуг с физическим лицом
                        </p>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор на оказание платных образовательных услуг с юридическим лицом
                        </a>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Положение о платных образовательных услугах
                        </a>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Стоимость обучения отражается на соответствующей странице образовательной программы на сайте
                        </a>
                        Angels School https://angelsschool.ru
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Section>
);

export default InformPage;

export const Head: HeadFC = () => <title>Информация</title>;
