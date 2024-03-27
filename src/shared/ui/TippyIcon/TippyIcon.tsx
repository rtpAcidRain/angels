import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import TipyySvg from 'shared/assets/svg/tippy.inline.svg';
import * as cls from './TippyIcon.module.css';

interface TippyIconProps {
    className?: string,
    name?: string,
    children?: React.ReactNode,
    whiteSvg?: boolean
}

export const TippyIcon = (props: TippyIconProps) => {
    const {
        className,
        name,
        children,
        whiteSvg,
    } = props;

    const mods = {
        [cls.whiteSvg]: whiteSvg,
    };

    return (
        <span className={`items-center gap-1 w-fill ${className && className}`}>
            <span className="text-20med">{name}</span>
            <span className="flex items-center">
                <Tippy
                    placement="bottom"
                    render={(attrs) => (
                        <div className={cls.tippybox} tabIndex={-1} {...attrs}>
                            {children}
                            <div className={cls.tippyarr} data-popper-arrow />
                        </div>
                    )}
                >
                    <button
                        type="button"
                        className="w-fit "
                    >
                        <TipyySvg className={classNames(cls.tippysvg, mods, [])} />
                    </button>
                </Tippy>
            </span>
        </span>
    );
};
