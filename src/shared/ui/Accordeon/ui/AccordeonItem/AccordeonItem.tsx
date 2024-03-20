import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import Plus from 'shared/assets/svg/plus.inline.svg';
import * as cls from './AccordeonItem.module.css';

export enum AccorderonTheme {
    SMALL = 'small'
}
interface AccordeonItemProps {
    className?: string,
    title: string,
    text?: string,
    theme?: AccorderonTheme,
    listNum: number | string,
    opened?:boolean,
    [x:string]: any;
}

export const AccordeonItem = React.memo((props: AccordeonItemProps) => {
    const {
        className,
        title,
        text,
        theme = AccorderonTheme.SMALL,
        listNum,
        opened = false,
        ...otherProps
    } = props;

    const module = {
        [cls[theme]]: true,
        [cls.stat]: text,
        [cls.opened]: opened,
    };

    return (
        <li className={classNames(cls.accordeonItem, module, [className])} {...otherProps}>
            <button type="button" className={cls.heading}>
                <span>
                    <span>
                        {listNum}
                        .
                    </span>
                    {title}
                </span>
                {text && <Plus className={cls.svg} />}
            </button>
            {text && (
                <span className={cls.body}>
                    <span>
                        <span className="">
                            {text}
                        </span>
                    </span>
                </span>
            )}
        </li>
    );
});
