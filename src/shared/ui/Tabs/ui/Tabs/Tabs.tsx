import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback } from 'react';
import { Tab, TabProps } from '../Tab/Tab';
import * as cls from './Tabs.module.css';

interface TabsProps {
    className?: string,
    tabArray: string[]
    active: string,
    setActive: (el: string) => void,
}

export const Tabs = (props: TabsProps) => {
    const {
        className,
        tabArray,
        active,
        setActive,
    } = props;

    const toggleActive = useCallback((id: string) => {
        setActive(id);
    }, [setActive]);

    return (
        <nav className={classNames(cls.tabs, {}, [className, 'no-scrollbar overflow-auto px-5 sm:px-10'])}>
            <Tab onClick={() => toggleActive('all')} title="Все" active={active === 'all'} />
            {tabArray.map((el, i) => (
                <Tab onClick={() => toggleActive(el)} key={el} title={el} active={el === active} />
            ))}
        </nav>
    );
};
