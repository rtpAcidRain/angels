import { Link } from 'gatsby';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface HeaderLinkProps {
    className?: string,
    text?: string;
    to: string;
    [x: string]: any,
}

export const HeaderLink = (props: HeaderLinkProps) => {
    const {
        className,
        text,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            className={
                classNames('', {}, [
                    className,
                    'text-bluegrey800 hover:text-blue700 dark:text-grey50 dark:hover:text-blue400 transition-colors text-17reg h-full flex items-center px-3',
                ])
            }
            to={to}
            activeClassName="!text-blue700"
            partiallyActive
            title={text}
            aria-label={text}
            itemProp="url"
            {...otherProps}
        >
            {text && <span>{text}</span>}
        </Link>
    );
};
