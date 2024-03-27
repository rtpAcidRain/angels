import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
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
        name: 'Обучение',
        url: 'education',
    },
    {
        name: 'МТО и оснащенность',
        url: 'mto',
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
                            Общие условия
                        </h2>
                        <ul className="text-17reg mb-4">
                            <li>
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
                            </li>
                            <li>3. Согласие на обработку персональных данных</li>
                            <li>4. Условия использования файлов cookie</li>
                            <li>5. Политика конфиденциальности</li>
                        </ul>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании для физических лиц
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор на оказание платных образовательных услуг с физическим лицом
                        </a>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            Договор об образовании для юридических лиц
                        </h3>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор на оказание платных образовательных услуг с юридическим лицом
                        </a>
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
                            +7 (900) 335-19-00
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
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            1. Организационные документы
                        </h3>
                        <p className="text-13reg sm:text-17reg mb-4">Программа развития</p>
                        <h3 className="text-15med sm:text-17semi mb-3 sm:mb-2 text-grey900">
                            1. Локальные нормативные акты
                        </h3>
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
                            9.Положение о формах,периодичности и порядке текущего контроля
                            успеваемости и промежуточной аттестации обучающихся;
                            <br />
                            10.Положение об итоговой аттестации;
                            <br />
                            11.Порядок зачета результатов освоения учащимися учебных
                            предметов, курсов, дисциплин, практики, дополнительных
                            образовательных программ в других организациях;
                            <br />
                            12.Положение об оказании платных образовательных услуг;
                            <br />
                            13.Положение об оформлении, выдаче и хранении документов об
                            обучении / о квалификации
                            {' '}
                            <br />
                            14.15.Положение об основаниях и порядке снижения стоимости платных
                            образовательных услуг;
                            <br />
                            16.Правила внутреннего распорядка учащихся;
                            {' '}
                            <br />
                            17. Положение о комиссии по урегулированию споров между
                            участниками образовательных отношений;
                            <br />
                            18. Положение о дистанционном обучении.
                        </p>
                    </SwiperSlide>

                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[3].url}
                    >
                        <p className="text-13reg sm:text-17reg mb-4">
                            Информация о реализуемых образовательных программах:
                            <br />
                            <br />
                            ООО «Энджелс Скул» ведет образовательную деятельность на основании лицензии на осуществление
                            образовательной деятельности, выданной Департаментом образования и науки г. Москвы
                            <a
                                href="/"
                                className="text-13reg sm:text-17reg mb-4  text-blue600"
                            >
                                Выписка
                                из реестра лицензий на осуществление образовательной деятельности
                            </a>
                            <br />
                            <br />
                            ООО «Энджелс Скул» реализует образовательные программы дополнительного профессионального
                            образования и дополнительного образования взрослых.
                            <br />
                            <br />
                            Учебный процесс осуществляется в течение всего календарного года, обучение ведётся на
                            русском языке.
                            <br />
                            <br />
                            Обучение проводится по заочной форме обучения. Форма обучения указывается в
                            соответствующей
                            образовательной программе.
                            <br />
                            <br />
                            При реализации программ используются электронное обучение и дистанционные
                            образовательные
                            технологии. В частности, используются следующие основные технологии организации учебного
                            процесса:
                            <br />
                            онлайн-платформа как совокупность образовательных сервисов;
                            <br />
                            вебинары (онлайн режим);
                            <br />
                            SCORM-тесты.
                            <br />
                            Время, место, формат проведения занятий определяются в соответствующей образовательной
                            программе.
                            <br />
                            <br />
                            *С 1 января 2021 года, в связи с изменениями в законодательстве об образовании, лицензии
                            на
                            осуществление образовательной деятельности на бланках не выдаются. Наличие
                            образовательной
                            лицензии у организации подтверждается выпиской из
                            <a
                                href="https://obrnadzor.gov.ru/gosudarstvennye-uslugi-i-funkczii/gosudarstvennye-uslugi/liczenzirovanie-obrazovatelnoj-deyatelnosti/svodnyj-reestr-liczenzij/"
                                className="text-13reg sm:text-17reg mb-4  text-blue600"
                            >
                                {' '}
                                федерального реестра
                            </a>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[4].url}
                    >
                        <p className="text-13reg sm:text-17reg mb-4">
                            В ООО «Энджелс Скул» созданы условия для функционирования электронной
                            информационно-образовательной среды, включающей в себя:
                        </p>

                        <ul className="text-13reg sm:text-17reg mb-4 list-with-disc">
                            <li>
                                электронные информационные ресурсы;
                            </li>
                            <li>электронные образовательные ресурсы;</li>
                            <li>
                                совокупность соответствующих информационных технологий, телекоммуникационных технологий;
                            </li>
                            <li>
                                технологических средств.
                            </li>
                        </ul>

                        <p className="text-13reg sm:text-17reg mb-4">
                            Электронная образовательная среда ООО «Энджелс Скул» обеспечивает освоение обучающимися
                            образовательных программ в полном объеме независимо от их места нахождения.
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Дистанционное обучение реализуется на платформе angels-school.ru
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Обучающийся получает полный доступ к электронным материалам курса (видеолекции, методические
                            материалы и т.п.) после оплаты его стоимости.
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Помещения для проведения занятий с использованием дистанционных образовательных технологий,
                            расположены по адресу: г. Москва, Пятницкая улица, 13с1
                        </p>
                        <p className="text-13reg sm:text-17reg mb-4">
                            Учебные помещения подключены к сети интернет. Имеется дополнительное оборудование для
                            проведения видеоконференций и занятий в дистанционном режиме.
                        </p>

                    </SwiperSlide>
                    <SwiperSlide
                        tag="article"
                        className="text-grey800 bg-whitefull dark:bg-bluegrey1000 "
                        data-hash={infEls[5].url}
                    >
                        <p className="text-13reg sm:text-17reg mb-4">
                            Формы договоров и Порядок об оказании платных образовательных
                            услуг
                        </p>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор на оказание платных образовательных услуг с
                            физическим лицом
                        </a>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Договор на оказание платных образовательных услуг с юридическим
                            лицом
                        </a>
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4 block text-blue600"
                        >
                            Положение о платных образовательных услугах
                        </a>
                        Стоимость обучения отражается на соответствующей странице
                        образовательной программы на сайте Angels School
                        <a
                            href="/"
                            className="text-13reg sm:text-17reg mb-4  text-blue600"
                        >
                            {' '}
                            https://angelsschool.ru
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Section>
);

export default InformPage;

export const Head: HeadFC = () => (
    <>
        <title>
            Информация об образовательной организации Angel's school
        </title>
        <meta
            name="description"
            content="Правовая информация, лицензия, документы, платные образовательные услуги"
        />
    </>
);
