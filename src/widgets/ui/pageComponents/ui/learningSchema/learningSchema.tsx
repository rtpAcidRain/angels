import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';
import LectionSvg from 'shared/assets/svg/learning-schema__lections.inline.svg';
import PractisSvg from 'shared/assets/svg/learning-schema__practis.inline.svg';
import PresonalWorkSvg from 'shared/assets/svg/learning-schema__presonal-work.inline.svg';
import ConsultationsSvg from 'shared/assets/svg/learning-schema__consultations.inline.svg';
import InterfaceSvg from 'shared/assets/svg/learning-schema__interface.inline.svg';
import DesignSvg from 'shared/assets/svg/learning-schema__design.inline.svg';
import PersonalPageSvg from 'shared/assets/svg/learning-schema__personal-page.inline.svg';
import GradeSvg from 'shared/assets/svg/learning-schema__grade.inline.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Video } from 'shared/ui/Video/Video';
import InsertedVideo from 'shared/assets/videos/video.mp4';
import { FormModalButton } from 'features/FormModal';

interface LearningSchemaProps {
  className?: string;
}

export const LearningSchema = (props: LearningSchemaProps) => {
    const { className } = props;

    return (
        <Section className={classNames('', {}, [className])}>
            <div className="bg-bluegrey900 rounded-3xl p-5 pt-10 sm:p-14">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 mb-6 sm:mb-[4.375rem]">
                    <h2 className="text-27semi sm:text-56semi max-w-[652px] text-whitefull flex-1">
                        Как устроен
                        <br />
                        процесс обучения
                    </h2>
                    <p className="max-w-[401px] text-17med text-bluegrey50 flex-1 mt-auto sm:pb-[0.375rem]">
                        Мы используем удобную и современную платформу для обучения,
                        которая позволяет вам учиться в любом месте и в любое время
                    </p>
                </div>
                {/* <Video video={InsertedVideo} className="rounded-xl overflow-hidden mb-6 sm:mb-8" /> */}
                <div className="flex flex-col gap-2 gap-5 sm:grid grid-cols-2 mb-[55px] sm:mb-[6.25rem]">
                    <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6 pb-5 sm:pb-6 flex flex-col">
                        <h3 className="text-20semi sm:text-27semi order-2 mb-3 sm:mb-4">
                            Лекции
                        </h3>
                        <LectionSvg className="h-12 sm:h-[5.625rem] order-1 fill-bluegrey900 mb-6 sm:mb-12 w-fit" />
                        <p className="text-15med sm:text-17med text-bluegrey900 order-3">
                            Лекции включают предзаписанные видео с презентациями и
                            материалами проектов. Завершение требует прохождения тестов с
                            различными типами заданий.
                        </p>
                    </section>
                    <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6  sm:pb-6 flex flex-col">
                        <h3 className="text-20semi sm:text-27semi order-2 mb-3 sm:mb-4">
                            Практика
                        </h3>
                        <PractisSvg className="h-12 sm:h-[5.625rem] order-1 fill-bluegrey900 mb-6 sm:mb-12 w-fit" />
                        <p className="text-15med sm:text-17med text-bluegrey900 order-3">
                            В предзаписанных видео преподаватель демонстрирует действия в
                            Photoshop (или другой программе), комментируя их. Студенты
                            предварительно изучают алгоритм, исходные данные и результат.
                        </p>
                    </section>
                    <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6  sm:pb-6 flex flex-col">
                        <h3 className="text-20semi sm:text-27semi order-2 mb-3 sm:mb-4">
                            Самостоятельная работа
                        </h3>
                        <PresonalWorkSvg className="h-12 sm:h-[5.625rem] order-1 fill-bluegrey900 mb-6 sm:mb-12 w-fit" />
                        <p className="text-15med sm:text-17med text-bluegrey900 order-3">
                            Студенты учатся через проектную работу и воркшопы, исправляя
                            ошибки в готовых проектах или предлагают новые варианты. А также
                            выполняют индивидуальные задания и создают собственные проекты.
                        </p>
                    </section>
                    <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6  sm:pb-6 flex flex-col">
                        <h3 className="text-20semi sm:text-27semi order-2 mb-3 sm:mb-4">
                            Консультация
                        </h3>
                        <ConsultationsSvg className="h-12 sm:h-[5.625rem] order-1 fill-bluegrey900 mb-6 sm:mb-12 w-fit" />
                        <p className="text-15med sm:text-17med text-bluegrey900 order-3">
                            В зависимости от тарифа: групповые и индивидуальные консультации
                            в чате или на вебинарах. Преподаватель отвечает на заранее
                            направленные вопросы, также слушатели могут задать вопросы в
                            эфире.
                        </p>
                    </section>
                </div>
                <section>
                    <h2 className="text-27semi sm:text-40semi text-whitefull mb-6 sm:mb-10">
                        Особенности
                        <br />
                        платформы
                    </h2>
                    <div className="flex flex-col gap-2 gap-5 sm:grid grid-cols-2 mb-6 sm:mb-10">
                        <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6  sm:pb-6 flex flex-col">
                            <h3 className="text-20semi sm:text-27semi mb-3 sm:mb-10">
                                Интуитивно понятный
                                <br />
                                интерфейс
                            </h3>
                            <p className="text-15med sm:text-17med text-bluegrey700 mb-6 sm:mb-10">
                                Вы сможете легко найти все необходимые материалы и функции, даже если никогда не пользовались онлайн-платформами для обучения.

                                <span className=" text-bluegrey900  block flex flex-col gap-2 my-4 sm:my-5">
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Крупные кнопки и понятная навигация
                                    </span>
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Прогресс прохождения курса и выполнения заданий в %
                                    </span>
                                </span>

                                Мы позаботились о том, чтобы вам не пришлось тратить время на изучение сложных функций и меню.
                            </p>

                            <InterfaceSvg className="h-[57px] sm:h-[4.875rem]  fill-bluegrey900 w-fit mt-auto" />
                        </section>
                        <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6  sm:pb-6 flex flex-col">
                            <h3 className="text-20semi sm:text-27semi mb-3 sm:mb-10">
                                Адаптивный
                                <br />
                                дизайн
                            </h3>
                            <p className="text-15med sm:text-17med text-bluegrey700 mb-6 sm:mb-10">
                                Платформа автоматически подстраивается под любое устройство, будь то компьютер, планшет или смартфон, что позволяет вам учиться.

                                <span className=" text-bluegrey900  block flex flex-col gap-2 my-4 sm:my-5">
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Упрощенный интерфейс на мобильных устройствах
                                    </span>
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Фотографии платформы на разных устройствах
                                    </span>
                                </span>

                                Учитесь где угодно: дома, в кафе, в транспорте - все материалы будут доступны вам на любом устройстве.
                            </p>

                            <DesignSvg className="h-[57px] sm:h-[4.875rem]  fill-bluegrey900 w-fit mt-auto" />
                        </section>
                        <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6  sm:pb-6 flex flex-col">
                            <h3 className="text-20semi sm:text-27semi mb-3 sm:mb-10">
                                Персональный
                                <br />
                                кабинет
                            </h3>
                            <p className="text-15med sm:text-17med text-bluegrey700 mb-6 sm:mb-10">
                                В вашем личном кабинете вы сможете отслеживать свой прогресс, просматривать оценки, скачивать материалы.

                                <span className=" text-bluegrey900  block flex flex-col gap-2 my-4 sm:my-5">
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Отображение изучаемых и освоенных курсов
                                    </span>
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Создание своего портфолио
                                    </span>
                                </span>

                                Ваш личный помощник в мире онлайн-обучения, который поможет вам организовать учебный процесс.
                            </p>

                            <PersonalPageSvg className="h-[57px] sm:h-[4.875rem]  fill-bluegrey900 w-fit mt-auto" />
                        </section>
                        <section className="bg-whitefull rounded-2xl sm:rounded-xl p-6  sm:pb-6 flex flex-col">
                            <h3 className="text-20semi sm:text-27semi mb-3 sm:mb-10">
                                Система
                                <br />
                                оценивания
                            </h3>
                            <p className="text-15med sm:text-17med text-bluegrey700 mb-6 sm:mb-10">
                                Каждый тест оценивается отдельно с использованием числовой оценки и веса в диапазоне от 0% до 100%. Затем рассчитывается общая оценка.

                                <span className=" text-bluegrey900  block flex flex-col gap-2 my-4 sm:my-5">
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Отчет по результатам тестирования с правильными ответами
                                    </span>
                                    <span className={'before:content-[""] before:w-[6px] before:h-[6px] before:block before:rounded-full block before:bg-bluegrey900 flex gap-[6px] items-center'}>
                                        Обратная связь от преподавателя по практическим заданиям
                                    </span>
                                </span>

                                Мы позаботились о том, чтобы вам не пришлось тратить время на изучение сложных функций и меню.
                            </p>

                            <GradeSvg className="h-[57px] sm:h-[4.875rem]  fill-bluegrey900 w-fit mt-auto" />
                        </section>
                    </div>
                    <FormModalButton text="Записаться на курс" className="mx-auto" />
                </section>
            </div>
        </Section>
    );
};
