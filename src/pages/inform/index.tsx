import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import 'swiper/css/effect-fade';
import { Section } from 'shared/ui/Section/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, HashNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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
        name: 'Структура и органы управления',
        url: 'structure',
    },
    {
        name: 'Документы',
        url: 'documentation',
    },
    {
        name: 'Образование',
        url: 'education',
    },
    {
        name: 'Руководство. Педагогический состав',
        url: 'management',
    },
    {
        name: 'Материально-техническое база',
        url: 'mto',
    },
    {
        name: 'Платные образовательные услуги',
        url: 'services',
    },
    {
        name: 'Финансово-хозяйственная деятельность',
        url: 'financial-and-economic',
    },
    {
        name: 'Вакантные места для приема (перевода) обучающихся',
        url: 'vacant-places',
    },
    {
        name: 'Доступная среда',
        url: 'accessible-environment',
    },
    {
        name: 'Международное сотрудничество',
        url: 'international-cooperation',
    },
];
const InformPage: React.FC<PageProps> = () => (
    <Section className={classNames(cls.inf, {}, ['!px-0 sm:!px-10'])}>
        <h1 className="text-27semi my-10 sm:text-56semi sm:my-[3.25rem] px-5 sm:px-0">
            Информация
        </h1>
        <div className="pt-50 sm:pt-0 sm:grid grid-cols-12 gap-[1.125rem] ">
            <header className="buttons col-span-6 flex items-center gap-4 h-fit mb-6 sm:mb-0 no-scrollbar overflow-auto px-5 sm:px-0">
                <ul id="pagination" className="flex gap-3 sm:flex-col sm:gap-4" />
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
                        <h2 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Общие условия
                        </h2>
                        <ul className="text-17reg mb-4 text-blue600">
                            {/* <li>
                                <a
                                    href="https://angels-school.ru/include/gtrybuild/files/information/termofuse.docx"
                                    download="Пользовательское соглашение.docx"
                                >
                                    1. Пользовательское соглашение
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://angels-school.ru/include/gtrybuild/files/information/returnrules.docx"
                                    download="Правила возврата денежных средств.docx"
                                >
                                    2. Правила возврата денежных средств
                                </a>
                            </li> */}
                            <li>
                                <a
                                    download="Согласие на обработку персональных данных.pdf"
                                    href="https://angels-school.ru/include/gtrybuild/files/information/Согласие на обработку персональных данных.pdf"
                                    title="Согласие на обработку персональных данных"
                                    aria-label="Согласие на обработку персональных данных"
                                >
                                    1. Согласие на обработку персональных данных
                                </a>
                            </li>
                            <li>
                                <a
                                    download="Условия использования файлов cookie.pdf"
                                    href="https://angels-school.ru/include/gtrybuild/files/information/Условия использования файлов cookie.pdf"
                                    title="Условия использования файлов cookie"
                                    aria-label="Условия использования файлов cookie"
                                >
                                    2. Условия использования файлов cookie
                                </a>
                            </li>
                            <li>
                                <a
                                    download="ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ.pdf"
                                    href="https://angels-school.ru/include/gtrybuild/files/information/ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ.pdf"
                                    title="Политика обработки персональных данных"
                                    aria-label="Политика обработки персональных данных"
                                >
                                    3. Политика обработки персональных данных
                                </a>
                            </li>
                        </ul>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании
                        </h3>
                        <a
                            download="Договор об образовании.pdf"
                            href="https://angels-school.ru/include/gtrybuild/files/information/Договор об образовании.pdf"
                            title="Договор на оказание платных образовательных услуг"
                            aria-label="Договор на оказание платных образовательных услуг"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор на оказание платных образовательных услуг
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[1].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Полное наименование
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Общество с ограниченной ответственностью «Энджелс Скул»
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Сокращенное наименование
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            ООО «Энджелс Скул»
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Участник сообщества
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Новиков Андрей Александрович
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Место нахождения образовательной организации, ее представительств и филиалов (при наличии)
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            111024, г. Москва, вн. тер. г. муниципальный округ Лефортово, ш. Энтузиастов, д. 22/18, помещ. 4П
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Режим и график работы образовательной организации
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            С понедельника по пятницу с 09:00 до 18:00
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Контактные телефоны образовательной организации
                        </h3>
                        <a
                            href="tel:+79003351900"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            +7 (900) 335-19-00
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Адрес электронной почты образовательной организации
                        </h3>
                        <a
                            href="mailto:school@angels-school.ru"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            school@angels-school.ru
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[2].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Структурное подразделение ООО «Энджелс Скул»
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Учебный Центр
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Участник сообщества
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Новиков Андрей Александрович
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Генеральный директор
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Тарасова Екатерина Валерьевна
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Исполнительный директор
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Загурская Татьяна Юрьевна
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Место нахождения
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            <Link className="text-blue600" to={RoutePath.main}>https://angels-school.ru</Link>
                        </p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Адрес электронной почты
                        </h3>
                        <a
                            href="mailto:school@angels-school.ru"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            school@angels-school.ru
                        </a>

                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[3].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            1. Организационные документы
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4">Программа развития</p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            1. Локальные нормативные акты
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block text-blue600">
                            <a
                                download="1 Положение об Учебном центре.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/1 Положение об Учебном центре.pdf"
                                title="Положение об Учебном центре"
                                aria-label="Положение об Учебном центре"
                            >
                                1. Положение об Учебном центре;
                            </a>
                            {' '}
                            <br />
                            <a
                                download="2 Положение о формах обучения.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/2 Положение о формах обучения.pdf"
                                title="Положение о формах обучения"
                                aria-label="Положение о формах обучения"
                            >
                                2. Положение о формах обучения;
                            </a>
                            {' '}
                            <br />
                            <a
                                download="3 Положение о языках обучения.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/3 Положение о языках обучения.pdf"
                                title="Положение о языках обучения"
                                aria-label="Положение о языках обучения"
                            >
                                3. Положение о языках обучения;
                            </a>
                            {' '}
                            <br />
                            <a
                                download="4 Положение о формах, периодичности, порядке текущего контроля успеваемости и промежуточной аттестации обучающихся.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/4 Положение о формах, периодичности, порядке текущего контроля успеваемости и промежуточной аттестации обучающихся.pdf"
                                title="Положение о формах, периодичности, порядке текущего контроля успеваемости и промежуточной аттестации обучающихся"
                                aria-label="Положение о формах, периодичности, порядке текущего контроля успеваемости и промежуточной аттестации обучающихся"
                            >
                                4. Положение о формах, периодичности, порядке текущего контроля успеваемости и промежуточной аттестации обучающихся;
                            </a>
                            <br />
                            <a
                                download="5 Положение о зачете результатов учащихся.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/5 Положение о зачете результатов учащихся.pdf"
                                title="Положение о зачете результатов учащихся"
                                aria-label="Положение о зачете результатов учащихся"
                            >
                                5. Положение о зачете результатов учащихся;
                            </a>
                            <br />
                            <a
                                download="6 Положение об итоговой аттестации.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/6 Положение об итоговой аттестации.pdf"
                                title="Положение об итоговой аттестации"
                                aria-label="Положение об итоговой аттестации"
                            >
                                6. Положение об итоговой аттестации;
                            </a>
                            <br />
                            <a
                                download="Положение об оформлении, выдаче и хранении документов об обучении.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Положение об оформлении, выдаче и хранении документов об обучении.pdf"
                                title="Положение об оформлении, выдаче и хранении документов об обучении"
                                aria-label="Положение об оформлении, выдаче и хранении документов об обучении"
                            >
                                7. Положение об оформлении, выдаче и хранении документов об обучении;
                            </a>
                            <br />
                            <a
                                download="Положение об оказании платных образовательных услуг.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Положение об оказании платных образовательных услуг.pdf"
                                title="Положение об оказании платных образовательных услуг"
                                aria-label="Положение об оказании платных образовательных услуг"
                            >
                                8. Положение об оказании платных образовательных услуг;
                            </a>
                            <br />
                            <a
                                download="Положение об основаниях и порядке снижения стоимости платных образовательных услуг.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Положение об основаниях и порядке снижения стоимости платных образовательных услуг.pdf"
                                title="Положение об основаниях и порядке снижения стоимости платных образовательных услуг"
                                aria-label="Положение об основаниях и порядке снижения стоимости платных образовательных услуг"
                            >
                                9. Положение об основаниях и порядке снижения стоимости платных образовательных услуг;
                            </a>
                            <br />
                            <a
                                download="Порядок и основания перевода, отчисления обучающихся.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Порядок и основания перевода, отчисления обучающихся.pdf"
                                title="Порядок и основания перевода, отчисления обучающихся"
                                aria-label="Порядок и основания перевода, отчисления обучающихся"
                            >
                                10. Порядок и основания перевода, отчисления обучающихся;
                            </a>
                            <br />
                            <a
                                download="Порядок обучения по индивидуальному учебному плану.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Порядок обучения по индивидуальному учебному плану.pdf"
                                title="Порядок обучения по индивидуальному учебному плану"
                                aria-label="Порядок обучения по индивидуальному учебному плану"
                            >
                                11. Порядок обучения по индивидуальному учебному плану;
                            </a>
                            <br />
                            <a
                                download="Порядок оформления возникновения, приостановления и прекращения отношений.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Порядок оформления возникновения, приостановления и прекращения отношений.pdf"
                                title="Порядок оформления возникновения, приостановления и прекращения отношений"
                                aria-label="Порядок оформления возникновения, приостановления и прекращения отношений"
                            >
                                12. Порядок оформления возникновения, приостановления и прекращения отношений;
                            </a>
                            <br />
                            <a
                                download="Правила приема.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Правила приема.pdf"
                                title="Правила приема"
                                aria-label="Правила приема"
                            >
                                13. Правила приема;
                            </a>
                            <br />
                            <a
                                download="Режим занятий учащихся.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Режим занятий учащихся.pdf"
                                title="Режим занятий учащихся"
                                aria-label="Режим занятий учащихся"
                            >
                                14. Режим занятий учащихся;
                            </a>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[4].url}
                    >
                        <p className="text-13reg sm:text-17reg mb-4">
                            Информация о реализуемых образовательных программах:
                            <br />
                            <br />
                            ООО «Энджелс Скул» ведет образовательную деятельность на основании
                            лицензии на осуществление образовательной деятельности, выданной
                            Департаментом образования и науки г. Москвы
                            {' '}
                            <a
                                download="Выписка из реестра лицензий № Л035-01298-77-01332470.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/Выписка из реестра лицензий № Л035-01298-77-01332470.pdf"
                                title="Выписка из реестра лицензий № Л035-01298-77-01332470"
                                aria-label="Выписка из реестра лицензий № Л035-01298-77-01332470"
                                className="text-13reg sm:text-17reg mb-4  text-blue600 "
                            >
                                Выписка из реестра лицензий на осуществление образовательной
                                деятельности
                            </a>

                            <br />
                            <br />
                            ООО «Энджелс Скул» реализует образовательные программы
                            дополнительного профессионального образования и дополнительного
                            образования взрослых.
                            <br />
                            <br />
                            Учебный процесс осуществляется в течение всего календарного года,
                            обучение ведётся на русском языке.
                            <br />
                            <br />
                            Обучение проводится по заочной форме обучения. Форма обучения
                            указывается в соответствующей образовательной программе.
                            <br />
                            <br />
                            При реализации программ используются электронное обучение и
                            дистанционные образовательные технологии. В частности,
                            используются следующие основные технологии организации учебного
                            процесса:
                            <br />
                            онлайн-платформа как совокупность образовательных сервисов;
                            <br />
                            вебинары (онлайн режим);
                            <br />
                            SCORM-тесты.
                            <br />
                            Время, место, формат проведения занятий определяются в
                            соответствующей образовательной программе.
                            <br />
                            <br />
                            *С 1 января 2021 года, в связи с изменениями в законодательстве об
                            образовании, лицензии на осуществление образовательной
                            деятельности на бланках не выдаются. Наличие образовательной
                            лицензии у организации подтверждается выпиской из
                            <a
                                href="https://obrnadzor.gov.ru/gosudarstvennye-uslugi-i-funkczii/gosudarstvennye-uslugi/liczenzirovanie-obrazovatelnoj-deyatelnosti/svodnyj-reestr-liczenzij/"
                                className="text-13reg sm:text-17reg mb-4  text-blue600"
                            >
                                {' '}
                                федерального реестра
                            </a>
                        </p>
                        <div className={classNames(cls.tableContainer, {}, ['overflow-auto'])}>
                            <table className={classNames(cls.table, {}, [])}>
                                <thead className={cls.thead}>
                                    <tr className={cls.trow}>
                                        <th className={cls.col}>
                                            <span>
                                                Наименование
                                                программы
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                Срок
                                                обучения
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                Язык
                                                обучения
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                Форма
                                                обучения
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                Учебный
                                                план
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={cls.tbody}>
                                    <tr className={cls.trow}>
                                        <th className={cls.col}>
                                            <span>
                                                Архитектурный
                                                светодизайн
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                72
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                Русский
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                Заочная
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                <a
                                                    href="https://angels-school.ru/include/gtrybuild/files/information/direc_arch_pers.pdf"
                                                    download="Учебный_план_«Архитектурный_светодизайн»_72.pdf"
                                                    itemProp="url"
                                                    title="Скачать учебный план"
                                                    aria-label="Скачать учебный план"
                                                    className="flex items-center  gap-[5px]"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Скачать
                                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 3.83398V12.1673" stroke="#424242" strokeWidth="1.16667" strokeLinecap="round" />
                                                        <line x1="10" y1="12.8495" x2="12.6262" y2="10.2233" stroke="#424242" strokeLinecap="round" />
                                                        <line x1="0.5" y1="-0.5" x2="4.21405" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10 13.5566)" stroke="#424242" strokeLinecap="round" />
                                                        <path d="M2.5 10.917C2.5 12.2032 2.5 13.4212 2.5 14.3981C2.5 15.662 3.44241 16.7255 4.70054 16.8468C6.27157 16.9983 8.384 17.167 10 17.167C11.616 17.167 13.7284 16.9983 15.2995 16.8468C16.5576 16.7255 17.5 15.662 17.5 14.3981C17.5 13.4212 17.5 12.2032 17.5 10.917" stroke="#424242" strokeWidth="1.16667" strokeLinecap="round" />
                                                    </svg>
                                                </a>
                                            </span>
                                        </th>
                                    </tr>
                                    <tr className={cls.trow}>
                                        <th className={cls.col}>
                                            <span>
                                                Светодизайнер. Архитектурное освещение
                                            </span>
                                        </th>
                                        <th className={cls.col}><span>16</span></th>
                                        <th className={cls.col}><span>Русский</span></th>
                                        <th className={cls.col}>
                                            <span>
                                                Заочная
                                            </span>
                                        </th>
                                        <th className={cls.col}>
                                            <span>
                                                <a
                                                    download="Учебный план Светодизайнер 16 ч.pdf"
                                                    href="https://angels-school.ru/include/gtrybuild/files/information/direc_svet_pers.pdf"
                                                    itemProp="url"
                                                    title="Скачать учебный план"
                                                    aria-label="Скачать учебный план"
                                                    className="flex items-center  gap-[5px]"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Скачать
                                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 3.83398V12.1673" stroke="#424242" strokeWidth="1.16667" strokeLinecap="round" />
                                                        <line x1="10" y1="12.8495" x2="12.6262" y2="10.2233" stroke="#424242" strokeLinecap="round" />
                                                        <line x1="0.5" y1="-0.5" x2="4.21405" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 10 13.5566)" stroke="#424242" strokeLinecap="round" />
                                                        <path d="M2.5 10.917C2.5 12.2032 2.5 13.4212 2.5 14.3981C2.5 15.662 3.44241 16.7255 4.70054 16.8468C6.27157 16.9983 8.384 17.167 10 17.167C11.616 17.167 13.7284 16.9983 15.2995 16.8468C16.5576 16.7255 17.5 15.662 17.5 14.3981C17.5 13.4212 17.5 12.2032 17.5 10.917" stroke="#424242" strokeWidth="1.16667" strokeLinecap="round" />
                                                    </svg>
                                                </a>
                                            </span>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                            <a
                                className="text-13reg sm:text-17reg mb-4  text-blue600 block"
                                download="ДПП_повышения_квалификации_«Архитектурный_светодизайн»_72_ак_ч.pdf"
                                href="https://angels-school.ru/include/gtrybuild/files/information/direc_arch_pers--full.pdf"
                                itemProp="url"
                                title="Скачать учебный план"
                                aria-label="Скачать учебный план"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ДПП повышения квалификации «Архитектурный светодизайн» 72 ак. ч.
                            </a>
                            <a
                                href="https://angels-school.ru/include/gtrybuild/files/information/direc_svet_pers--full.pdf"
                                download="ДООП«Светодизайнер_Архитектурное_освещение»_16_ак_ч_.pdf"
                                itemProp="url"
                                title="Скачать учебный план"
                                aria-label="Скачать учебный план"
                                target="_blank"
                                rel="noreferrer"
                                className="text-13reg sm:text-17reg mb-4  text-blue600 block"
                            >
                                ДООП «Светодизайнер Архитектурное освещение» 16 ак. ч.
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[5].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            О руководителе образовательной организации
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Генеральный директор
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4 block ">
                            Тарасова Екатерина Валерьевна
                        </p>
                        <a
                            href="tel:+79003351900"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            +7 (900) 335-19-00
                        </a>
                        <a
                            href="mailto:school@angels-school.ru"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            school@angels-school.ru
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[6].url}
                    >
                        <p className="text-13reg sm:text-17reg mb-4">
                            <b>Информация</b>
                            {' '}
                            об электронных образовательных ресурсах, к которым обеспечивается доступ обучающихся
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            В ООО «Энджелс Скул» созданы условия для функционирования электронной информационно-образовательной среды, включающей в себя:
                        </p>

                        <ul className="text-13reg sm:text-17reg mb-4 list-with-disc">
                            <li>электронные информационные ресурсы;</li>
                            <li>электронные образовательные ресурсы;</li>
                            <li>
                                совокупность соответствующих информационных технологий,
                                телекоммуникационных технологий;
                            </li>
                            <li>технологических средств.</li>
                        </ul>

                        <p className="text-13reg sm:text-17reg mb-4">
                            Электронная образовательная среда ООО «Энджелс Скул» обеспечивает
                            освоение обучающимися образовательных программ в полном объеме
                            независимо от их места нахождения.
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Дистанционное обучение реализуется на платформе
                            {' '}
                            <Link className="text-13reg sm:text-17reg mb-4  text-blue600" to={RoutePath.main}>https://angels-school.ru</Link>
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Обучающийся получает полный доступ к электронным материалам курса
                            (видеолекции, методические материалы и т.п.) после оплаты его
                            стоимости.
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            В ООО «Энджелс Скул» созданы условия для функционирования электронно-библиотечной системы
                            {' '}
                            <a href="https://e.lanbook.com/" className="text-blue600">“Лань”</a>
                            . Договор №ОСП2805-04 от 31.05.2024 г.
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            ЭБС Лань — электронная библиотека учебной литературы, предоставляющая
                            доступ к учебникам, пособиям, монографиям, научным журналам и другому
                            электронному контенту на сайте e.lanbook.com и в мобильных приложениях
                            для iOS и Android.
                            {' '}
                            <br />
                            Читать литературу без регистрации можно с устройств, подключенных к
                            локальной сети учебной организации.
                            {' '}
                            <br />
                            Зарегистрированные пользователи ЭБС Лань могут читать книги и журналы
                            из любой точки мира, где есть интернет.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[7].url}
                    >
                        <p className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Формы договоров и Порядок об оказании платных образовательных
                            услуг
                        </p>
                        <a
                            download="Договор об образовании.pdf"
                            href="https://angels-school.ru/include/gtrybuild/files/information/Договор об образовании.pdf"
                            title="Договор на оказание платных образовательных услуг"
                            aria-label="Договор на оказание платных образовательных услуг"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор на оказание платных образовательных услуг
                        </a>
                        <a
                            download="Положение об основаниях и порядке снижения стоимости платных образовательных услуг.pdf"
                            href="https://angels-school.ru/include/gtrybuild/files/information/Положение об основаниях и порядке снижения стоимости платных образовательных услуг.pdf"
                            title="Положение об основаниях и порядке снижения стоимости платных образовательных услуг"
                            aria-label="Положение об основаниях и порядке снижения стоимости платных образовательных услуг"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Положение об основаниях и порядке снижения стоимости платных образовательных услуг
                        </a>
                        <a
                            download="Положение об оказании платных образовательных услуг.pdf"
                            href="https://angels-school.ru/include/gtrybuild/files/information/Положение об оказании платных образовательных услуг.pdf"
                            title="Положение об оказании платных образовательных услуг"
                            aria-label="Положение об оказании платных образовательных услуг"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Положение о платных образовательных услугах
                        </a>
                        Стоимость обучения отражается на соответствующей странице
                        образовательной программы на сайте Angels School
                        {' '}
                        <Link className="text-13reg sm:text-17reg mb-4  text-blue600" to={RoutePath.main}>https://angels-school.ru</Link>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[8].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            В редакции
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[9].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            В редакции
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[10].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            В редакции
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[11].url}
                    >
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            В редакции
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Section>
);

export default InformPage;

export const Head: HeadFC = () => (
    <>
        <title>Информация об образовательной организации Angel's school</title>
        <meta
            name="description"
            content="Правовая информация, лицензия, документы, платные образовательные услуги"
        />
    </>
);
