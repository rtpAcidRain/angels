import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import mainBack from 'shared/assets/img/directionSvetodis--full.webp';
import {
    LearningSchema,
    SeoBlock,
    LessonBlock,
    ForWho,
} from 'widgets/ui/pageComponents';
import Grid from 'shared/assets/svg/grid.inline.svg';
import Document from 'shared/assets/svg/document.inline.svg';
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
        title: 'Архитекторам',
        text: 'Создавать архитектурные проекты с использованием света, что позволит повысить конкурентоспособность.',
    },
    {
        title: 'Тем, кто хочет узнать о новой профессии',
        text: 'Помогут  приобрести знания о светодизайне, погрузиться в мир новой профессии и овладеть ее основами.',
    },
    {
        title: 'Студентам выпускных курсов',
        text: 'Познакомиться с востребованной профессией,  ознакомиться с инструментами и изучить тенденции в светодизайне.',
    },
];

const learningList = [
    {
        themes: [
            {
                title: 'Тема 1: «Введение в профессию Светодизайнер. Основные функции и этапы работ»',
            },
            {
                title: 'Тема 2: «Применение светового архитектурного для коммерческих объектов и др.»',
            },
            {
                title: 'Тема 3: «Применение светового архитектурного для жилых объектов и др.»',
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
                        <TippyIcon name="ДО" className="hidden sm:flex" whiteSvg>
                            Доп. образование направлено
                            <br />
                            на формирование и развитие
                            <br />
                            определенных знаний, профильное
                            <br />
                            образование не требуется
                        </TippyIcon>
                    </div>
                    <h1 className="text-32semi sm:text-56semi text-whitefull mb-[0.9375rem] sm:mb-6">
                        Курс “Светодизайнер.
                        <br />
                        Архитектурное освещение”
                    </h1>
                    <p className="text-17reg sm:text-17med text-blue50 mb-6 lg:mb-[11.3125rem] max-w-[481px]">
                        Познакомитесь с профессией, особенностями, задачами светодизайнера.
                        После завершения курса определитесь, насколько это направление
                        интересно и подходит вам.
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
                        <p className="text-15med sm:text-17med dark:text-bluegrey900">3 недели / 16 ак. ч.</p>
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
                    <Grid className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">
                        Удобный и гибкий график
                        {' '}
                        <br />
                        для учеников
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Work className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">
                        Учёба в удобное время - можно совмещать с работой
                    </p>
                </li>
                <li className="flex gap-4 items-center">
                    <Document className="[&_path]:fill-[#222628]  [&_path]:dark:fill-whitefull w-8 h-8" />
                    <p className="flex-1 dark:text-whitefull">Сертификат</p>
                </li>
            </ul>
        </Section>
        <Section>
            <div className="flex flex-col gap-6 sm:grid grid-cols-2 sm:gap-5">
                <h2 className="text-32semi sm:text-40semi">О профессии</h2>
                <p className="text-15med sm:text-17med">
                    Светодизайнер - это профессионал, который занимается проектированием и
                    созданием световых решений для различных объектов, включая жилые и
                    коммерческие здания, общественные пространства и другие объекты. Он
                    работает с архитекторами и другими специалистами, чтобы создать
                    гармоничное и функциональное освещение, которое подчеркивает
                    особенности архитектуры, решает задачи безопасности и создает
                    уникальную атмосферу.
                </p>
            </div>
        </Section>
        <Section>
            <div className="py-8 px-4 sm:px-8 bg-bluegrey900 text-whitefull rounded-2xl">
                <h2 className="text-27semi mb-6 sm:text-40semi sm:mb-[3.125rem]">
                    Что вы изучите
                </h2>
                <div className="grid text-17semi sm:text-20med sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-8">
                    <div className="pr-5 sm:border-r  border-dashed border-[#4F6672]">
                        Чем занимается светодизайнер, где востребован, преимущества
                        профессии и как им стать
                    </div>
                    <div className="lg:pr-5 sm:pl-5 lg:border-r border-dashed border-[#4F6672]">
                        Последние тенденции и инновации в светодизайне, которые помогут вам
                        быть в курсе последних разработок и применять их в своих проектах
                    </div>
                    <div className="sm:pr-5 lg:pl-5 sm:border-r border-dashed border-[#4F6672]">
                        Особенности архитектурной подсветки различных объектов
                    </div>
                    <div className="pl-5  border-dashed border-[#4F6672]">
                        Этапы работы команды светодизайнера
                    </div>
                </div>
            </div>
        </Section>
        <ForWho list={forWhoList} />
        <SeoBlock
            theme={SeoEnums.DOCUMENT}
            text={
                'Вы получите сертификат, который станет\n дополнительным аргументом для\n работодателя.'
            }
        />
        <Section className="!px-0 flex flex-col">
            <h2 className="container text-32semi sm:text-40semi mb-6 sm:mb-[3.125rem] order-2">
                Содержание курса
            </h2>
            <p className="container text-15med sm:text-17semi text-bluegrey600 mb-3 sm:mb-4 order-1">
                Обучение
            </p>
            <LessonBlock
                className="order-3"
                list={learningList}
                download="Учебный план Светодизайнер 16 ч.pdf"
                to="https://angels-school.ru/include/gtrybuild/files/information/direc_svet_pers.pdf"
            />
        </Section>
        <SeoBlock
            title="Зажгите свою карьеру в светодизайне!"
            text="Окунись в мир светодизайна и научись создавать выразительные и функциональные пространства с помощью света!"
        />
        <LearningSchema />
    </>
);

export default ArchitecPage;

export const Head: HeadFC = () => (
    <>
        <title>
            Курс светодизайна - обучение художников по свету в школе Angel's school в
            Москве
        </title>
        <meta
            name="keywords"
            content={`курсы светодизайнера,
            профессия светодизайнер,
            световые технологии,
            светодизайнер,
            светодизайнер обучение`}
        />
        <meta
            name="description"
            content={
                'Онлайн-курс "Профессия Светодизайнер" в аккредитованной школе Angel\'s school. Обучение на платформе на архитектурного светодизайнера в Москве, Санкт-Петербурге и в любом регионе РФ с сертификатом или дипломом о профессиональном дополнительном образовании.'
            }
        />
    </>
);
