import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import Lock from 'shared/assets/svg/lock.inline.svg';
import * as cls from './lessonAcc.module.css';

interface LessonAccProps {
    className?: string,
    count: number,
    themes: string[]
    disabled: boolean,
}

export const LessonAcc = (props: LessonAccProps) => {
    const {
        className,
        count,
        themes,
        disabled,
    } = props;

    const [opened, setOpened] = React.useState(false);

    const toggleOpened = () => {
        setOpened((prev) => !prev);
    };

    return (
        <li className={classNames(cls.lessonAcc, { [cls.disabled]: disabled }, [className])}>
            <button type="button" className={classNames(cls.heading, { [cls.opened]: opened }, [className])} onClick={toggleOpened}>
                <span className="flex flex-col col-span-10 sm:pl-16 sm:flex-row sm:items-center gap-3">
                    <span className="
                                rounded-lg text-17med sm:text-17med px-3 py-[0.375rem] bg-bluegrey50 w-fit h-fit sm:py-3 sm:px-[1.65625rem]
                            "
                    >
                        Раздел
                        {' '}
                        {count}
                    </span>
                    {/* <span className="flex flex-col gap-1 items-start"> */}
                    {/*    <span className="text-20semi">Введение</span> */}
                    {/*    <span className="text-15reg sm:text-15med text-bluegrey700">2 недели</span> */}
                    {/* </span> */}
                </span>
                {/* <span className="text-15med hidden text-bluegrey600 col-span-1 sm:block"> */}
                {/*    4 */}
                {/* </span> */}
            </button>
            <span className={cls.body}>
                <span>
                    <span className="pt-3 sm:pt-6 block relative text-15semi sm:text-17semi text-bluegrey800 flex flex-col gap-4 sm:gap-6">
                        {themes?.map((el) => (
                            <span
                                className="pt-4 border-t border-dashed border-bluegrey200 flex gap-[0.375rem] sm:gap-3"
                                key={el}
                            >
                                <Lock />
                                {el}
                            </span>
                        ))}

                    </span>
                </span>
            </span>
        </li>
    );
};
