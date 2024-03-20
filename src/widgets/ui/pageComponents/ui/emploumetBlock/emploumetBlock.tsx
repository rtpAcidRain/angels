import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as cls from './emploumetBlock.module.css';

export enum ServiceEnum {
    DEFAULT,
    SECOND,
    DOCUMENT
}
interface EmploumetBlockkProps {
    className?: string,
    theme?: ServiceEnum
}

type ServiceType = {
    title: string,
    text: string
}

const serviceListArray: ServiceType[] = [
    {
        title: 'Предложение о трудоустройстве',
        text: 'Лучшим выпускникам предлагаем трудоустройство в нашей компании.',
    },
    {
        title: 'Помощь в составлении резюме',
        text: 'Готовим резюме, которое можно размещать на рекрутинговых платформах.',
    },
    {
        title: 'Поддержка наших HR-специалистов',
        text: 'HR специалисты проведут репетицию собеседования.',
    },
    {
        title: 'Ценное рекомендательное письмо ',
        text: 'Выпускник получает рекомендательное письмо, улучшающее его шансы на трудоустройство.',
    },
];

const serviceListArraySecond: ServiceType[] = [
    {
        title: '1. Оставляйте заявку \n'
            + 'на сайте',
        text: 'Лучшим выпускникам предлагаем трудоустройство в нашей компании.',
    },
    {
        title: '2. Мы перезваниваем и уточняем детали',
        text: 'Готовим резюме, которое можно размещать на рекрутинговых платформах.',
    },
    {
        title: '3. Изучаем ваши задачи и потребности',
        text: 'HR специалисты проведут репетицию собеседования.',
    },
    {
        title: 'Ценное рекомендательное письмо ',
        text: 'Выпускник получает рекомендательное письмо, улучшающее его шансы на трудоустройство.',
    },
];
const serviceListArrayDocument: ServiceType[] = [
    {
        title: 'Диплом',
        text: 'Синтересом к светотехнике и архитектуре, стремящихся обрести комплексные знания в области освещения',
    },
    {
        title: 'Сертификат',
        text: 'Синтересом к светотехнике и архитектуре, стремящихся обрести комплексные знания в области освещения',
    },
    {
        title: 'Удостоверение о повышении квалификации',
        text: 'Синтересом к светотехнике и архитектуре, стремящихся обрести комплексные знания в области освещения',
    },
];

export const EmploumetBlock = (props: EmploumetBlockkProps) => {
    const {
        className,
        theme = ServiceEnum.DEFAULT,
    } = props;

    if (theme === ServiceEnum.SECOND) {
        return (
            <Section className={className}>
                <div
                    className={
                        classNames(cls.background, {}, [
                            'rounded-2xl py-4 sm:py-8 bg-bluegrey50 bg-no-repeat bg-left-bottom sm:bg-right-top ',
                        ])
                    }
                >
                    <h2 className="text-32semi px-4 sm:px-8 sm:text-40semi mb-4 sm:mb-6 text-grey900">Работаем по схеме, удобной клиентам</h2>
                    <p className="text-15med2 px-4 sm:px-8 sm:text-17med mb-[4.75rem] sm:mb-[6.875rem] text-grey800 sm:max-w-[33.875rem]">
                        В нашей школе вы взаимодействуете с ведущими световыми дизайнерами, погружаясь в реальные задачи этой творческой сферы и осваивая передовые технологии освещения.
                    </p>
                    <Swiper
                        className="!px-4 sm:!px-8"
                        spaceBetween={15}
                        slidesPerView="auto"
                        breakpoints={{
                            640: {
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {serviceListArraySecond.map((slideContent) => (
                            <SwiperSlide className=" cursor-grab bg-whitefull rounded-xl sm:rounded-2xl !flex flex-col justify-between !h-[241px] !w-[241px] sm:!w-[25.5rem] sm:!h-[17rem] p-4 sm:p-8" key={slideContent.title}>
                                <h5 className="text-17semi sm:text-24semi mb-8 text-">{slideContent.title}</h5>
                                <p className="text-13med sm:text-17reg text-bluegrey700">{slideContent.text}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Section>
        );
    }
    if (theme === ServiceEnum.DOCUMENT) {
        return (
            <Section className={className}>
                <div
                    className={classNames(cls.background, {}, [
                        'rounded-2xl py-4 sm:py-8 bg-grey900 bg-no-repeat bg-left-bottom sm:bg-right-top ',
                    ])}
                >
                    <h2 className="text-32semi px-4 sm:px-8 sm:text-56semi text-whitefull mb-[9.375rem] sm:mb-[4.0625rem] text-grey900">
                        Документ
                        <br />
                        об окончании
                    </h2>
                    <Swiper
                        className="!px-4 sm:!px-10"
                        spaceBetween={15}
                        slidesPerView="auto"
                        breakpoints={{
                            640: {
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {serviceListArrayDocument.map((slideContent) => (
                            <SwiperSlide
                                className=" cursor-grab bg-whitefull rounded-xl sm:rounded-2xl !flex flex-col justify-between !h-[241px] !w-[241px] sm:!w-[27.0625rem] sm:!h-[17rem] p-4 sm:p-8"
                                key={slideContent.title}
                            >
                                <h5 className="text-17semi sm:text-24semi mb-8 text-">
                                    {slideContent.title}
                                </h5>
                                <p className="text-13med sm:text-17reg text-bluegrey700">
                                    {slideContent.text}
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Section>
        );
    }

    return (
        <Section className={className}>
            <div
                className={
                    classNames(cls.background, {}, [
                        'rounded-2xl py-4 sm:py-8 bg-bluegrey900 bg-no-repeat bg-left-bottom sm:bg-right-top ',
                    ])
                }
            >
                <h2 className="text-32semi px-4 sm:px-8 sm:text-40semi mb-4 sm:mb-6 text-whitefull">Трудоустройство выпускника</h2>
                <p className="text-15med2 px-4 sm:px-8 sm:text-17med mb-[4.75rem] sm:mb-[6.875rem] text-whitefull sm:max-w-[33.875rem]">В нашей школе вы взаимодействуете с ведущими световыми дизайнерами, погружаясь в реальные задачи этой творческой сферы и осваивая передовые технологии освещения.</p>
                <Swiper
                    className="!px-4 sm:!px-8"
                    spaceBetween={15}
                    slidesPerView="auto"
                    breakpoints={{
                        640: {
                            spaceBetween: 20,
                        },
                    }}
                >
                    {serviceListArray.map((slideContent) => (
                        <SwiperSlide className=" cursor-grab bg-whitefull rounded-xl sm:rounded-2xl !flex flex-col justify-between !h-[241px] !w-[241px] sm:!w-[25.5rem] sm:!h-[17rem] p-4 sm:p-8" key={slideContent.title}>
                            <h5 className="text-17semi sm:text-24semi mb-8">{slideContent.title}</h5>
                            <p className="text-13med sm:text-17reg text-bluegrey700">{slideContent.text}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
};
