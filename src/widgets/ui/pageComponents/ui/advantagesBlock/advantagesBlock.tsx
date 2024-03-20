import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';

export enum AdvantagesEnums {
    DEFAULT,
    WHYUS
}
interface AdvantagesBlockProps {
    className?: string,
    theme?: AdvantagesEnums
}

export const AdvantagesBlock = (props: AdvantagesBlockProps) => {
    const {
        className,
        theme = AdvantagesEnums.DEFAULT,
    } = props;

    if (theme === AdvantagesEnums.WHYUS) {
        return (
            <Section className={classNames('', {}, [className])} title="Почему мы?">
                <div className="flex flex-col lg:flex-row gap-2 sm:gap-5">
                    <div className="rounded-2xl bg-bluegrey900 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                        <h3 className=" text-17med sm:text-27semi text-whitefull">
                            Удобное расписание
                        </h3>
                        <p className="text-15reg sm:text-17med text-blue50">
                            занятий, которое не помешает работе
                        </p>
                    </div>
                    <div className="rounded-2xl bg-grey100 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                        <h3 className=" text-17med sm:text-27semi">
                            Интерактивные
                            форматы обучения
                        </h3>
                        <p className="text-15reg sm:text-17med">
                            делают процесс обучения эффективным и интересным
                        </p>
                    </div>
                    <div className="rounded-2xl bg-grey100 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                        <h3 className=" text-17med sm:text-27semi">
                            Квалифицированные
                            преподаватели
                        </h3>
                        <p className="text-15reg sm:text-17med">
                            обучают на реальных кейсах из профессиональной деятельности
                        </p>
                    </div>
                    <div className="rounded-2xl bg-grey100 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                        <h3 className=" text-17med sm:text-27semi">
                            Индивидуальный подход
                        </h3>
                        <p className="text-15reg sm:text-17med">к разработке программ с учетом ваших целей и задач</p>
                    </div>
                </div>
            </Section>
        );
    }
    return (
        <Section className={classNames('', {}, [className])} title="Преимущества">
            <div className="flex flex-col lg:flex-row gap-2 sm:gap-5">
                <div className="rounded-2xl bg-bluegrey900 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                    <h3 className=" text-17med text-whitefull">
                        <span className="text-56semi sm:text-64med">98% </span>
                        учеников
                    </h3>
                    <p className="text-15reg sm:text-17med text-blue50">
                        успешно сдают экзамены
                    </p>
                </div>
                <div className="rounded-2xl bg-grey100 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                    <h3 className=" text-17med ">
                        <span className="text-56semi sm:text-64med">95% </span>
                        выпускников
                    </h3>
                    <p className="text-15reg sm:text-17med">
                        трудоустраиваются в течение
                        <br />
                        3 месяцев после окончания обучения
                    </p>
                </div>
                <div className="rounded-2xl bg-grey100 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                    <h3 className=" text-17med ">
                        <span className="text-56semi sm:text-64med">15+</span>
                        преподавателей
                    </h3>
                    <p className="text-15reg sm:text-17med">
                        обучают на реальных кейсах из профессиональной деятельности
                    </p>
                </div>
                <div className="rounded-2xl bg-grey100 p-6 flex flex-col justify-between gap-12 sm:h-[16.75rem] sm:flex-1">
                    <h3 className=" text-17med ">
                        <span className="text-56semi sm:text-64med">500+</span>
                        человек
                    </h3>
                    <p className="text-15reg sm:text-17med">уже прошли обучение у нас</p>
                </div>
            </div>
        </Section>

    );
};
