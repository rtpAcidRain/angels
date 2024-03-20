import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Link } from 'gatsby';
import * as cls from './Button.module.css';

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ATTENTION = 'attention',
    SAVE = 'save',
    WHITE = 'white'
}

export interface ButtonProps {
    className?: string;
    text?: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    theme?: ButtonTheme,
    underlined?: boolean,
    to?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
    sideLink?: boolean;
    [x:string]: any
}

export const Button = React.memo((props: ButtonProps) => {
    const {
        className,
        text,
        Icon,
        theme = ButtonTheme.PRIMARY,
        underlined = false,
        to,
        type = 'button',
        disabled = false,
        sideLink = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.underlined]: underlined,
        [cls.disabled]: disabled,
        [cls.withoutText]: !text,
    };

    if (sideLink) {
        return (
            <a href={to} className={classNames(cls.button, mods, [className, 'text-17med'])} {...otherProps} itemProp="url" title={text} aria-label={text}>
                {Icon && (
                    <Icon className={cls.icon} />
                )}
                {text && <span className={cls.text}>{text}</span>}
            </a>
        );
    }
    if (to) {
        return (
            <Link to={to} className={classNames(cls.button, mods, [className, 'text-17med'])} {...otherProps} itemProp="url" title={text} aria-label={text}>
                {Icon && (
                    <Icon className={cls.icon} />
                )}
                {text && <span className={cls.text}>{text}</span>}
            </Link>
        );
    }
    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            disabled={disabled}
            className={classNames(cls.button, mods, [className, 'text-17med'])}
            title={text}
            aria-label={text}
            {...otherProps}
        >
            {Icon && (
                <Icon className={cls.icon} />
            )}
            {text && <span className={cls.text}>{text}</span>}
        </button>
    );
});
