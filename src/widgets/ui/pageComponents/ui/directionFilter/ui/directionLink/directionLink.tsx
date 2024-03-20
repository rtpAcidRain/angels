import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Link } from 'gatsby';
import Icon from 'shared/assets/svg/like.inline.svg';
import { TippyIcon } from 'shared/ui/TippyIcon/TippyIcon';

interface DirectionLinkProps {
    className?: string,
    title: string,
    top?: boolean,
    tag: string,
    currentTag: string,
    bg?: string,
    to?: string
}

export const DirectionLink = (props: DirectionLinkProps) => {
    const {
        className,
        title,
        top = false,
        tag,
        currentTag,
        bg,
        to = '/',
    } = props;

    const mods = {
        '!flex': currentTag === tag || currentTag === 'all',
    };

    return (
    // <Link
    //     to={to}
    //     className={
    //         classNames(
    //             cls.directionLink,
    //             mods,
    //             [
    //                 className,
    //                 'hidden flex-col justify-between h-[181px] sm:h-[17.0625rem] bg-right-bottom bg-[length:192px_133px] sm:bg-auto hover:bg-blue30 transition-colors rounded-xl sm:rounded-2xl border border-blue300',
    //                 'p-4 pb-[0.875rem] sm:p-6 relative bg-no-repeat',
    //             ],
    //         )
    //     }
    //     style={
    //         { backgroundImage: bg }
    //     }
    // >
    //     <span className="whitespace-pre-wrap text-20semi sm:text-24semi relative z-10">{title}</span>
    //     {top
    //         && (
    //             <span
    //                 className="
    //                 text-13med sm:text-15med py-[4px] px-2 bg-deeppurple400 w-fit rounded-[1.8125rem]
    //                 flex items-center gap-[0.375rem] sm:py-[0.3125rem] sm:px-[0.875rem]
    //                 text-whitefull
    //                 absolute
    //                 right-3
    //                 bottom-4
    //                 sm:bottom-auto
    //                 sm:top-5
    //                 sm:right-5
    //                 z-0
    //                 "
    //             >
    //                 <Icon className="w-4 h-4 sm:w-6 sm:w-6 sm:h-6 stroke-whitefull" />
    //                 Хит продаж
    //             </span>
    //         )}
    //     <span className="text-15med text-bluegrey700 sm:text-17med relative z-10">{tag}</span>
    // </Link>
        <Link
            to={to}
            className={classNames('', mods, [
                className,
                'hidden flex-col justify-between h-[181px] '
            + 'sm:h-[20.3125rem] '
            + 'bg-right-bottom'
            + ' bg-[length:auto_100%] '
            + ' hover:bg-blue30 transition-colors rounded-xl sm:rounded-2xl border border-bluegrey200',
                'p-4 pb-[0.875rem] sm:p-6 relative bg-no-repeat',
            ])}
            style={{ backgroundImage: bg }}
        >
            <span className="flex flex-col gap-[0.875rem]">
                <span className="whitespace-pre-wrap text-20semi sm:text-32semi relative z-10">
                    {title}
                </span>
                <TippyIcon name="ДПО" className="hidden sm:flex ">
                    В своём стремлении повысить
                    <br />
                    качество жизни, они забывают,
                    <br />
                    что постоянный.
                </TippyIcon>
            </span>

            {top && (
                <span
                    className="
                        text-13med sm:text-15med py-[4px] px-2 bg-deeppurple400 w-fit rounded-[1.8125rem]
                        flex items-center gap-[0.375rem] sm:py-[0.3125rem] sm:px-[0.875rem]
                        text-whitefull
                        absolute
                        right-3
                        bottom-4
                        sm:bottom-auto
                        sm:top-5
                        sm:right-5
                        z-0
                        "
                >
                    <Icon className="w-4 h-4 sm:w-6 sm:w-6 sm:h-6 stroke-whitefull" />
                    Хит продаж
                </span>
            )}
            <span className="text-15med text-bluegrey700 sm:text-17med relative z-10">
                {tag}
            </span>
        </Link>
    );
};
