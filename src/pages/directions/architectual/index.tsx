import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import mainBack from 'shared/assets/img/general1.webp';
import {
    ForWho,
    LearningSchema,
    LessonBlock,
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
            'Тема 1 «Введение в световой дизайн. Место света и освещения в жизни города и человека»',
            'Тема 2 «Соответствие архитектурных типов и световых решений»',
            'Тема 3 «Функциональные и художественные возможности осветительных технологий»',
        ],
    },
    {
        themes: [
            'Тема 4 «Светотехническое оборудование и его классификация»',
            'Тема 5 «Выбор светотехнического оборудования для проекта»',
            'Тема 6 «Выбор концепции и обоснование дизайнерского решения»',
            'Тема 7 «Визуализация архитектурного объекта в специализированном   ПО»',
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
                            В своём стремлении повысить
                            <br />
                            качество жизни, они забывают,
                            <br />
                            что постоянный.
                        </TippyIcon>
                    </div>
                    <h1 className="text-32semi sm:text-64med text-whitefull mb-[0.9375rem] sm:mb-6">
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
                        <p className="text-15med sm:text-17med">9 недель / 72 ак. ч.</p>
                    </div>
                    <FormModalButton
                        className="sm:!px-[4.4375rem]"
                        text="Записаться на курс"
                        aria-label="Записаться на курс"
                    />
                </div>
            </div>
            <ul className="hidden mt-4 bg-grey100 rounded-3xl p-10 text-17med text-bluegrey800  sm:grid grid-cols-[minmax(auto,_23.3125rem)_minmax(auto,_23.3125rem)] lg:grid-cols-[minmax(auto,_23.3125rem)_minmax(auto,_23.3125rem)_minmax(auto,_23.3125rem)] gap-y-6 gap-x-4 justify-between">
                <li className="flex gap-4 items-center">
                    <Calendar className="fill-[#222628] w-8 h-8" />
                    <p className="flex-1">
                        Навыки: от разработки концепции и эскизов до презентации идеи и
                        проекта
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Grid className="fill-[#222628] w-8 h-8" />
                    <p className="flex-1">
                        Удобный и гибкий график
                        <br />
                        для учеников
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Document className="fill-[#222628] w-8 h-8" />
                    <p className="flex-1">Удостоверение о повышении квалификации</p>
                </li>
                <li className="flex gap-4 items-center">
                    <Website className="fill-[#222628] w-8 h-8" />
                    <p className="flex-1">Специализированное ПО</p>
                </li>
                <li className="flex gap-4 items-center">
                    <Chat className="fill-[#222628] w-8 h-8" />
                    <p className="flex-1">
                        Проект для портфолио и обратная
                        {' '}
                        <br />
                        {' '}
                        связь от экспертов
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Work className="fill-[#222628] w-8 h-8" />
                    <p className="flex-1">
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
                <h2 className="text-27semi mb-6 sm:text-40semi sm:mb-[3.125rem]">Чему вы научитесь</h2>
                <div className="grid text-17semi sm:text-20med sm:grid-cols-3 sm:gap-y-8">
                    <div className="pb-5 sm:py-4 sm:pr-[3.125rem]">
                        Будете разбираться в архитектурном освещении и светотехническом
                        оборудовании
                    </div>
                    <div className="py-5 sm:py-4 border-y sm:border-y-0 sm:border-x border-dashed border-[#4F6672] sm:px-[3.125rem] ">
                        Научитесь создавать световые концепции и подбирать оборудование.
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
                        Научитесь решать задачи клиента с помощью света
                    </div>
                    <div className="pt-5 sm:py-4 border-t border-dashed border-[#4F6672] sm:border-0 sm:pl-[3.125rem]">
                        Соберёте портфолио и сможете начать карьеру светодизайнера
                    </div>
                </div>
            </div>
        </Section>
        <ForWho list={forWhoList} />
        {/* <EmploumetBlock theme={ServiceEnum.DOCUMENT} /> */}
        <SeoBlock
            theme={SeoEnums.DOCUMENT}
        />
        {/* Что вы изучите  */}
        <Section className="!px-0 flex flex-col">
            <h2 className="container text-32semi sm:text-40semi mb-6 sm:mb-[3.125rem] order-2">
                Программа курса
            </h2>
            <p className="container text-15med sm:text-17semi text-bluegrey600 mb-3 sm:mb-4 order-1">
                Обучение
            </p>
            <LessonBlock className="order-3" list={learningList} download="Учебный_план_«Архитектурный_светодизайн»_72.docx" to="/files/information/direc_arch_pers.docx" />
        </Section>
        {/* <EmploumetBlock /> */}
        <SeoBlock
            title="Зажгите свою карьеру в светодизайне!"
            text="Окунись в мир светодизайна и научись создавать выразительные и функциональные пространства с помощью света!"
        />
        {/* <ExpretsBlock /> */}
        <LearningSchema />
    </>
);

export default ArchitecPage;

export const Head: HeadFC = () => (
    <title>Курс “Архитектурный светодизайн”</title>
);
