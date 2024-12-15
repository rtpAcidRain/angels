import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import {
    ForWho,
    LearningSchema,
    LessonBlock,
    ReviwsBlock,
    SeoBlock,
} from 'widgets/ui/pageComponents';
import Calendar from 'shared/assets/svg/calendar.inline.svg';
import Grid from 'shared/assets/svg/grid.inline.svg';
import Document from 'shared/assets/svg/document.inline.svg';
import Website from 'shared/assets/svg/website.inline.svg';
import Chat from 'shared/assets/svg/chat.inline.svg';
import Work from 'shared/assets/svg/work.inline.svg';
import { TippyIcon } from 'shared/ui/TippyIcon/TippyIcon';
import { FormModalButton } from 'features/FormModal';
import { SeoEnums } from 'widgets/ui/pageComponents/ui/seoBlock/seoBlock';
import mainBack from 'shared/assets/img/directionArch--full.webp';

const forWhoList = [
    {
        title: 'Дизайнерам',
        text: 'Поможет создавать световые решения, которые будут не только функциональными, но и эстетически привлекательными.',
    },
    {
        title: 'Студентам выпускных курсов',
        text: 'Получить востребованную профессию, приобрести практические навыки работы с профессиональными инструментами и создать портфолио своих работ.',
    },
    {
        title: 'Архитекторам',
        text: 'Создавать архитектурные проекты с использованием света, что позволит вам расширить спектр своих услуг и повысить конкурентоспособность.',
    },
];

const learningList = [
    {
        themes: [
            {
                title: 'Тема 1 «Введение в световой дизайн. Место света и освещения в жизни города и человека»',
                deskription: `
                    <ul>
                        <li>Погрузитесь в историю светового дизайна среды;</li>
                        <li>Изучите основные понятия светологии и архитектурной колористики;</li>
                        <li>Сфокусируетесь на базовых принципах свето-цветовой организации городской среды;</li>
                        <li>Поймете как создается дизайн-код города и для чего он необходим.</li>
                    </ul>
                    <h6>Результат:</h6>
                    <p>Получите базовые знания о дизайне световой среды и разработке дизайн-кода</p>
                `,
            },
            {
                title: 'Тема 2 «Соответствие архитектурных типов и световых решений»',
                deskription: `
                    <ul>
                        <li>Узнаете про развитие архитектурных стилей;</li>
                        <li>Будете разбираться в приемах архитектурного освещения;</li>
                        <li>Научитесь моделировать освещение городской среды в специализированном ПО.</li>
                    </ul>
                    <h6>Результат:</h6>
                    <p>Создадите 6 визуализаций архитектурного освещения в специализированном ПО</p>
                `,
            },
            {
                title: 'Тема 3 «Функциональные и художественные возможности осветительных технологий»',
                deskription: `
                    <ul>
                        <li>Изучите особенности светодизайна зданий и сооружений, элементов и ансамблей городского ландшафта.</li>
                    </ul>
                    <h6>Результат:</h6>
                    <p>Будете разбираться в целях и приемах освещения</p>
                `,
            },
        ],
    },
    {
        themes: [
            {
                title: 'Тема 4 «Светотехническое оборудование и его классификация»',
                deskription: `
                    <ul>
                        <li>Погрузитесь в основные стандарты,нормы и правила осветительных приборов.</li>
                    </ul>
                    <h6>Результат:</h6>
                    <p>Сможете применять знания для разработки функционального, комфортного и эстетичного освещения</p>
                `,
            },
            {
                title: 'Тема 5 «Выбор светотехнического оборудования для проекта»',
                deskription: `
                    <ul>
                        <li>Сможете проводить анализ современных источников света и их применения в световом дизайне и использовать их при освещении архитектурных объектов;</li>
                        <li>Познакомитесь с рабочими справочниками по светильникам.</li>
                    </ul>
                    <h6>Результат:</h6>
                    <p>Сделаете два технических анализа освещения из кейса компании Svet Expert</p>
                `,
            },
            {
                title: 'Тема 6 «Выбор концепции и обоснование дизайнерского решения»',
                deskription: `
                    <ul>
                        <li>Изучите предпроектный анализ объекта (исследование).</li>
                    </ul>
                    <h6>Результат:</h6>
                    <p>Сможете проводить предпроектный анализ для будущего проектирования</p>
                `,
            },
            {
                title: 'Тема 7 «Визуализация архитектурного объекта в специализированном   ПО»',
                deskription: `
                    <ul>
                        <li>Смоделируете освещение городской среды;</li>
                        <li>Сможете определять и выбирать принципы, технические приёмы, позволяющие создать концепцию свето-цветового решения городской среды.</li>
                    </ul>
                    <h6>Результат:</h6>
                    <p>Создадите визуализации архитектурного освещения</p>
                    <p>Создадите свой проект свето-цветового решения городской среды</p>
                `,
                tip: 'Проект в портфолио',
            },
        ],
    },
];

const ArchitecPage: React.FC<PageProps> = () => (
    <>
        <Section>
            <div
                className="
            rounded-2xl
            sm:rounded-3xl
            bg-bluegrey900
            "
            >
                <div
                    className=" p-4 pb-[2.0625rem] sm:p-10 bg-no-repeat bg-bottom bg-[length:auto_12.375rem] sm:bg-right sm:bg-[length:auto_100%] relative"
                    style={{
                        backgroundImage: `url(${mainBack})`,
                    }}
                >
                    <div className=" hidden sm:flex gap-[1.625rem] text-whitefull mb-10">
                        <span className="w-fit block py-[0.4375rem] px-[0.8125rem] border border-bluegrey200 rounded-[0.5rem] text-15med sm:text-17med">
                            Светодизайн
                        </span>
                        <TippyIcon name="ДПО" className="hidden sm:flex" whiteSvg>
                            Профильная подготовка
                            <br />
                            специалистов в рамках программ
                            <br />
                            повышения квалификации и
                            <br />
                            переподготовке профессионалов
                        </TippyIcon>
                    </div>
                    <h1 className="text-32semi sm:text-56semi text-whitefull mb-[0.9375rem] sm:mb-6">
                        Курс “Архитектурный
                        <br />
                        светодизайн”
                    </h1>
                    <p className="text-17reg sm:text-17med text-blue50 mb-6 lg:mb-[11.3125rem] max-w-[481px]">
                        Получите фундаментальные знания о светотехнике, цветовой
                        температуре, восприятии света человеком и других важных аспектах
                        светодизайна.
                    </p>
                    <div className="mb-[5.75rem] bg-whitefull rounded-xl p-3 sm:p-4 w-full sm:w-fit lg:absolute right-10 top-10">
                        {/* <h2 className="text-13med sm:text-15med mb-2 sm:mb-3 text-bluegrey700"> */}
                        {/*    Что освоите */}
                        {/* </h2> */}
                        {/* <ul className="flex gap-2 mb-4 sm:mb-6"> */}
                        {/*    <li> */}
                        {/*        <span className="w-fit block py-[0.4375rem] px-[0.8125rem] border border-bluegrey200 rounded-[0.5rem] text-15med sm:text-17med"> */}
                        {/*            3DS Max */}
                        {/*        </span> */}
                        {/*    </li> */}
                        {/*    <li> */}
                        {/*        <span className="w-fit block py-[0.4375rem] px-[0.8125rem] border border-bluegrey200 rounded-[0.5rem] text-15med sm:text-17med"> */}
                        {/*            Corona Render */}
                        {/*        </span> */}
                        {/*    </li> */}
                        {/* </ul> */}
                        {/* <h2 className="text-13med sm:text-15med mb-1 sm:mb-2 text-bluegrey700"> */}
                        {/*    Сколько длится обучение */}
                        {/* </h2> */}
                        {/* <p className="text-15med sm:text-17med">12 месяцев</p> */}
                        <h2 className="text-13med sm:text-15med mb-1 sm:mb-2 text-bluegrey700">
                            Сколько длится обучение
                        </h2>
                        <p className="text-15med sm:text-17med dark:text-bluegrey900">9 недель / 72 ак. ч.</p>
                    </div>
                    <FormModalButton
                        className="sm:!px-[4.4375rem]"
                        text="Записаться на курс"
                        aria-label="Записаться на курс"
                    />
                </div>
            </div>
            <ul className="hidden mt-4 bg-grey100 dark:bg-bluegrey900 rounded-3xl p-10 text-17med text-bluegrey800  sm:grid grid-cols-[minmax(auto,_23.3125rem)_minmax(auto,_23.3125rem)] lg:grid-cols-[minmax(auto,_23.3125rem)_minmax(auto,_23.3125rem)_minmax(auto,_23.3125rem)] gap-y-6 gap-x-4 justify-between">
                <li className="flex gap-4 items-center">
                    <Calendar className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">
                        Навыки: от разработки концепции и эскизов до презентации идеи и
                        проекта
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Grid className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">
                        Удобный и гибкий график
                        <br />
                        для учеников
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Document className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">Удостоверение о повышении квалификации</p>
                </li>
                <li className="flex gap-4 items-center">
                    <Website className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">Специализированное ПО</p>
                </li>
                <li className="flex gap-4 items-center">
                    <Chat className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">
                        Проект для портфолио и обратная
                        <br />
                        связь от экспертов
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Work className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">
                        Учёба в удобное время - можно совмещать с работой
                    </p>
                </li>
            </ul>
        </Section>
        {/* <Section> */}
        {/*    <div className="pb-6 sm:pb-8 gap-5 sm:grid grid-cols-12"> */}
        {/*        <h2 className="text-32semi sm:text-40semi mb-6 sm:mb-0 col-span-6"> */}
        {/*            Работы после обучения */}
        {/*        </h2> */}
        {/*        <p */}
        {/*            className="text-15med2 sm:text-17med col-span-6" */}
        {/*            style={{ */}
        {/*                maxWidth: '644px', */}
        {/*            }} */}
        {/*        > */}
        {/*            Создайте под руководством опытных наставников профессиональное */}
        {/*            портфолио, которое продемонстрирует ваши навыки и откроет двери в мир */}
        {/*            архитектурного светодизайна. */}
        {/*        </p> */}
        {/*    </div> */}
        {/*    <Swiper */}
        {/*        modules={[Pagination, Navigation]} */}
        {/*        pagination */}
        {/*        navigation */}
        {/*        slidesPerView={1} */}
        {/*        loop */}
        {/*        spaceBetween={20} */}
        {/*        className="rounded-3xl page-img-slider" */}
        {/*    > */}
        {/*        <SwiperSlide> */}
        {/*            <StaticImage */}
        {/*                className="" */}
        {/*                src="../../../shared/assets/img/about_image.jpg" */}
        {/*                alt="Небоскребы" */}
        {/*                formats={['auto', 'webp']} */}
        {/*            /> */}
        {/*        </SwiperSlide> */}
        {/*        <SwiperSlide> */}
        {/*            <StaticImage */}
        {/*                className="" */}
        {/*                src="../../../shared/assets/img/about_image.jpg" */}
        {/*                alt="Небоскребы" */}
        {/*                formats={['auto', 'webp']} */}
        {/*            /> */}
        {/*        </SwiperSlide> */}
        {/*        <SwiperSlide> */}
        {/*            <StaticImage */}
        {/*                className="" */}
        {/*                src="../../../shared/assets/img/about_image.jpg" */}
        {/*                alt="Небоскребы" */}
        {/*                formats={['auto', 'webp']} */}
        {/*            /> */}
        {/*        </SwiperSlide> */}
        {/*        <SwiperSlide> */}
        {/*            <StaticImage */}
        {/*                className="" */}
        {/*                src="../../../shared/assets/img/about_image.jpg" */}
        {/*                alt="Небоскребы" */}
        {/*                formats={['auto', 'webp']} */}
        {/*            /> */}
        {/*        </SwiperSlide> */}
        {/*        <SwiperSlide> */}
        {/*            <StaticImage */}
        {/*                className="" */}
        {/*                src="../../../shared/assets/img/about_image.jpg" */}
        {/*                alt="Небоскребы" */}
        {/*                formats={['auto', 'webp']} */}
        {/*            /> */}
        {/*        </SwiperSlide> */}
        {/*    </Swiper> */}
        {/* </Section> */}
        <Section>
            <div className="py-8 px-4 sm:px-8 bg-bluegrey900 text-whitefull rounded-2xl">
                <h2 className="text-27semi mb-6 sm:text-40semi sm:mb-[3.125rem]">
                    Чему вы научитесь
                </h2>
                <div className="grid text-17semi sm:text-20med sm:grid-cols-3 sm:gap-y-8">
                    <div className="pb-5 sm:py-4 sm:pr-[3.125rem]">
                        Будете разбираться в архитектурном освещении и светотехническом
                        оборудовании
                    </div>
                    <div className="py-5 sm:py-4 border-y sm:border-y-0 sm:border-x border-dashed border-[#4F6672] sm:px-[3.125rem] ">
                        Научитесь создавать световые концепции и подбирать оборудование
                    </div>
                    <div className="py-5 sm:py-4 sm:pl-[3.125rem]">
                        Сможете делать предпроектный анализ, готовить концепцию и
                        техническое решение
                    </div>
                    <div className="py-5 sm:py-4 border-y sm:border-y-0  border-dashed border-[#4F6672] sm:pr-[3.125rem]">
                        Овладеете навыками
                        <br />
                        компьютерного моделирования освещения
                    </div>
                    <div className="py-5 sm:py-4 sm:border-x border-dashed border-[#4F6672] sm:px-[3.125rem] ">
                        Сможете решать задачи клиента с помощью света
                    </div>
                    <div className="pt-5 sm:py-4 border-t border-dashed border-[#4F6672] sm:border-0 sm:pl-[3.125rem]">
                        Соберёте портфолио и сможете начать карьеру светодизайнера
                    </div>
                </div>
            </div>
        </Section>
        <ForWho list={forWhoList} />
        {/* <EmploumetBlock theme={ServiceEnum.DOCUMENT} /> */}
        <SeoBlock>
            После обучения Вы получите
            <br />
            <br />
            Документ установленного образца: удостоверение о повышении квалификации
            выдается специалистам с высшим и средним профессиональным образованием,
            успешно прошедшим обучение и сдавшим итоговую аттестацию.
            <br />
            <br />
            Сведения о выдаваемых документах мы вносим в федеральную информационную
            систему «Федеральный реестр сведений документов об образовании» (ФИС
            ФРДО).
        </SeoBlock>
        {/* Что вы изучите  */}
        <Section className="!px-0 flex flex-col">
            <h2 className="container text-32semi sm:text-40semi mb-6 sm:mb-[3.125rem] order-2">
                Программа курса
            </h2>
            <p className="container text-15med sm:text-17semi text-bluegrey600 mb-3 sm:mb-4 order-1">
                Обучение
            </p>
            <LessonBlock
                className="order-3"
                list={learningList}
                download="Учебный_план_«Архитектурный_светодизайн»_72.pdf"
                to="https://angels-school.ru/include/gtrybuild/files/information/direc_arch_pers.pdf"
            />
        </Section>
        {/* <EmploumetBlock /> */}
        <SeoBlock
            title="Зажгите свою карьеру в светодизайне!"
            text="Окунись в мир светодизайна и научись создавать выразительные и функциональные пространства с помощью света!"
        />
        {/* <ExpretsBlock /> */}
        <LearningSchema />
        <ReviwsBlock />
    </>
);

export default ArchitecPage;

export const Head: HeadFC = () => (
    <>
        <title>
            Курс архитектурного светодизайна - обучение художников по свету в школе
            Angel's school в Москве
        </title>
        <meta
            name="description"
            content={
                'Онлайн-курс "Профессия Архитектурный светодизайнер" в аккредитованной школе Angel\'s school. Обучение на платформе на архитектурного светодизайнера в Москве, Санкт-Петербурге и в любом регионе РФ с сертификатом или дипломом о профессиональном дополнительном образовании.'
            }
        />
    </>
);
