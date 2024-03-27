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
import ScrollContainer from 'app/ui/PageLayout/ui/ScrollContainer';
import * as cls from './PageLayout.module.css';
import GlobalProvider from '../../providers/GlobalContext/lib/GlobalProvider';

const list = [
    {
        title: 'Как часто проводятся занятия?',
        text: 'Слушатель сам выбирает себе дни и время прохождения курса, за исключением консультаций в виде вебинаров. Они проходят по расписанию. Запись вебинара отражается в личном кабинете.\n Например курс повышения квалификации 72 ак.ч., срок обучения 2 месяца - это значит, что слушателю необходимо выделить 4,5 часа в неделю.',
    }, {
        title: 'В каком формате проходит обучение (очно, заочно, онлайн)?',
        text: `
             Формат онлайн в системе дистанционного обучения.
        `,
    }, {
        title: 'Предоставляете ли вы доступ к записям вебинаров навсегда?',
        text: `
            Доступ к записям предоставлен на весь период обучения ( период зависит от курса).
        `,
    }, {
        title: 'Есть ли возможность пройти индивидуальное обучение?',
        text: `
             В повышенный тариф включены индивидуальные консультации с экспертом в онлайн формате. 
        `,
    }, {
        title: 'Какие документы я должен предоставить для поступления?',
        text: 'Для дополнительного образования: паспорт, контактные данные, паспорт, СНИЛС, заявку на обучение\n Для ДПО: паспорт, контактные данные, паспорт, СНИЛС, диплом об образовании, заявку на обучение.',
    }, {
        title: 'Как проходит процесс зачисления?',
        text: `
             В СДО в личном кабинете загружаете документы для зачисления. После проверки документов Вам прикрепляют файл договора на платные образовательные услуги. Отправляете нам подписанный договор. После проверки всех документов Вас зачисляют на курс.
        `,
    }, {
        title: 'Помогает ли ваш центр с трудоустройством?',
        text: `
             Лучшим выпускникам мы предлагаем работу в нашей компании
Выпускники получают рекомендательные письма, улучшающие их шансы на трудоустройство. Помогаем с резюме и репетируем собеседование.
        `,
    }, {
        title: 'Есть ли вступительные испытания/экзамены?',
        text: `
             Нет, при зачислении необходимы только документы.
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
        <GlobalProvider location={location}>
            <LocomotiveScrollProvider
                options={{ smooth: true }}
                watch={[location]}
                containerRef={containerRef}
            >
                <ScrollContainer location={location}>
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
                                            прямо сейчас!
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
                </ScrollContainer>
            </LocomotiveScrollProvider>
        </GlobalProvider>
    );
};
