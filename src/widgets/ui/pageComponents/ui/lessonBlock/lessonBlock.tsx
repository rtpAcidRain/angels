import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { LessonAcc } from 'widgets/ui/pageComponents/ui/lessonBlock/ui/lessonAcc/lessonAcc';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import * as cls from './lessonBlock.module.css';

export interface LessonThemeType {
    title: string,
    deskription?: TrustedHTML,
    tip?: string
}
interface LessonType {
  themes: LessonThemeType[];
}
interface LessonBlockProps {
    className?: string,
    list?: LessonType[],
    download?: string,
    to?: string
}

export const LessonBlock = (props: LessonBlockProps) => {
    const {
        className,
        list,
        download,
        to,
    } = props;

    return (
        <div
            className={classNames(cls.lessonBlock, {}, [
                className,
                'bg-bluegrey900 rounded-xl sm:rounded-2xl p-5 sm:mx-10 sm:px-0 sm:py-10 sm:grid grid-cols-12 gap-x-5 gap-y-4',
            ])}
        >
            <div className="hidden sm:block text-17semi pl-10 col-span-9 text-bluegrey50">Уроки</div>
            {/* <div className="hidden sm:block text-17med text-bluegrey50 text-center">Занятий</div> */}
            <ul className="flex flex-col gap-2 sm:gap-4 col-span-12">
                {list?.map((el, i) => <LessonAcc key={el.themes[i].title} count={i + 1} themes={el.themes} disabled={list?.length < 2} />)}
            </ul>
            <div className="col-span-12 flex justify-center pt-3 sm:pt-6 ">
                <Button sideLink to={to} text="Учебный план" theme={ButtonTheme.WHITE} download={download} />
            </div>
        </div>
    );
};
