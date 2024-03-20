import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Link } from 'gatsby';
import * as cls from './MobileNavLink.module.css';

interface MobileNavLinkProps {
    className?: string,
    to?: string,
    permanentClose?: () => void
    children?: React.ReactNode,
}

export const MobileNavLink = (props: MobileNavLinkProps) => {
    const {
        className,
        to = '/',
        permanentClose,
        children,
    } = props;

    return (
        <Link
            className="text-27med text-bluegrey800 dark:text-bluegrey50"
            to={to}
            activeClassName="!text-blue700 dark:!text-blue500"
            partiallyActive
            itemProp="url"
            onClick={permanentClose}
        >
            {children}
        </Link>
    );
};
