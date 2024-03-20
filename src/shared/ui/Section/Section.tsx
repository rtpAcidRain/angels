import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import * as cls from './Section.module.css';

interface SectionProps {
    className?: string,
    children?: React.ReactNode,
    title?: string;
}

export const Section = (props: SectionProps) => {
    const {
        className,
        children,
        title,
    } = props;

    return (
        <section className={classNames(cls.section, {}, [className, 'container section'])} data-scroll-section>
            {title && <h2 className="text-27semi sm:text-40semi mb-6 sm:mb-[3.125rem]">{title}</h2>}
            {children}
        </section>
    );
};
