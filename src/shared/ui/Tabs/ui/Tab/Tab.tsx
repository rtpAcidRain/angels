import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import * as cls from './Tab.module.css';

export interface TabProps {
    className?: string,
    title: string,
    active: boolean,
    [x:string]: any;
}

export const Tab = React.memo((props: TabProps) => {
    const {
        className,
        title,
        active,
        ...otherProps
    } = props;

    return (
        <button type="button" title={title} className={classNames(cls.tab, { [cls.active]: active }, [className])} {...otherProps}>
            {title}
        </button>
    );
});
