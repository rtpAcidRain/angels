import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Header } from 'widgets/ui/Header';
import { Footer } from 'widgets/ui/Footer';
import { PageProps } from 'gatsby';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Accordeon } from 'shared/ui/Accordeon/ui/Accordeon/Accordeon';
import { Section } from 'shared/ui/Section/Section';
import { Form } from 'widgets/ui/Form';
import { FormModal } from 'features/FormModal/FormModal/FormModal';
import * as cls from './PageLayout.module.css';
import GlobalProvider from '../../providers/GlobalContext/lib/GlobalProvider';

const list = [
    {
        title: 'Что будет если я зайду на курс а там нету где оплатить?',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Повседневная практика показывает, что начало.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Не следует, однако, забывать, что дальнейшее.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Однозначно, стремящиеся вытеснить.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Приятно, граждане, наблюдать, как.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Как принято считать, сделанные на базе.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Мы вынуждены отталкиваться от того, что.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Также как курс на социально-ориентированный.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Не следует, однако, забывать, что.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    }, {
        title: 'Господа, глубокий уровень погружения.',
        text: `
             На этом этапе ученик знакомится с онлайн-школой, ее
             программами обучения, преподавателями и другими учениками.
             Он также получает информацию о том, как устроен процесс обучения и
             какие требования предъявляются к учащимся.
        `,
    },
];

interface PageLayoutProps extends PageProps{
    className?: string,
}

export const PageLayout = (props: PageLayoutProps) => {
    const {
        className,
        children,
        location,
    } = props;

    const containerRef = React.useRef(null);

    return (
        <GlobalProvider>
            <LocomotiveScrollProvider
                options={{ smooth: true }}
                watch={[location]}
                containerRef={containerRef}
            >
                <div
                    ref={containerRef}
                    className={classNames(cls.pageLayout, {}, [
                        className,
                        'page flex flex-col min-h-screen dark:bg-bluegrey1000',
                    ])}
                    data-scroll-container
                >
                    <Header />
                    <main>
                        {children}
                        <Section className="lg:grid grid-cols-12 gap-5">
                            <div
                                className={classNames(cls.formTitle, {}, [
                                    className,
                                    'bg-bluegrey900 ',
                                    'rounded-[1rem] ',
                                    'p-4 sm:p-6 mb-4 ',
                                    'lg:mb-0 col-span-6 ',
                                    'h-[350px] sm:h-full relative overflow-hidden',
                                ])}
                            >
                                <div className="relative z-10">
                                    <h2 className="text-24semi sm:text-40semi mb-[10px] sm:mb-[1.8125rem] text-whitefull">
                                        Не упустите шанс:
                                        <br />
                                        запишись на курс
                                        <br />
                                        со скидкой 10%!
                                    </h2>
                                    <p className="text-15med sm:text-17reg text-blue30 max-w-[225px] sm:max-w-[22.8125rem]">
                                        Уникальная возможность получить образование по выгодной цене и
                                        начать обучение уже сегодня!
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <Form
                                    className="
                                    flex
                                    flex-col
                                    py-4
                                    px-6
                                    sm:pt-10
                                    sm:px-14
                                    sm:pb-[3.125rem]
                                    gap-[0.625rem]
                                    rounded-xl
                                    rounded-[1rem]
                                    min-h-full
                                    border
                                    border-blue300
                                "
                                />
                            </div>
                        </Section>
                        <Section title="Часто задаваемые вопросы">
                            <Accordeon
                                list={list}
                                doublecol
                            />
                        </Section>
                    </main>
                    <Footer className="mt-auto" />
                </div>
                <FormModal />
            </LocomotiveScrollProvider>
        </GlobalProvider>
    );
};
