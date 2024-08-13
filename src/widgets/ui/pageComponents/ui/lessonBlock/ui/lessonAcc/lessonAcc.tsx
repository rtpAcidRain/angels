import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import Lock from 'shared/assets/svg/lock.inline.svg';
import * as cls from './lessonAcc.module.css';
import { LessonThemeType } from '../../lessonBlock';

interface LessonAccProps {
    className?: string,
    count: number,
    themes: LessonThemeType[]
    disabled: boolean,
}

export const LessonAcc = (props: LessonAccProps) => {
    const {
        className,
        count,
        themes,
        disabled,
    } = props;

    const [opened, setOpened] = React.useState(false);
    const [subOpened, setSubOpened] = React.useState<Number | null>(null);

    const toggleOpened = () => {
        if (!disabled) {
            setOpened((prev) => !prev);
        }
    };

    const toggleSubOpened = (ind: number) => {
        if (ind === subOpened) {
            setSubOpened(null);
        } else {
            setSubOpened(ind);
        }
    };

    // OLD VERSION

    // return (
    //     <li className={classNames(cls.lessonAcc, { [cls.disabled]: disabled }, [className])}>
    //         <button type="button" className={classNames(cls.heading, { [cls.opened]: opened }, [className])} onClick={toggleOpened}>
    //             <span className="flex flex-col col-span-10 sm:pl-16 sm:flex-row sm:items-center gap-3">
    //                 <span className="
    //                             rounded-lg text-17med sm:text-17med px-3 py-[0.375rem] bg-bluegrey50 w-fit h-fit sm:py-3 sm:px-[1.65625rem]
    //                         "
    //                 >
    //                     Раздел
    //                     {' '}
    //                     {count}
    //                 </span>
    //                 {/* <span className="flex flex-col gap-1 items-start"> */}
    //                 {/*    <span className="text-20semi">Введение</span> */}
    //                 {/*    <span className="text-15reg sm:text-15med text-bluegrey700">2 недели</span> */}
    //                 {/* </span> */}
    //             </span>
    //             {/* <span className="text-15med hidden text-bluegrey600 col-span-1 sm:block"> */}
    //             {/*    4 */}
    //             {/* </span> */}
    //         </button>
    //         <span className={cls.body}>
    //             <span>
    //                 <span className="pt-3 sm:pt-6 block relative text-15semi sm:text-17semi text-bluegrey800 flex flex-col gap-4 sm:gap-6">
    //                     {themes?.map((el) => (
    //                         <span
    //                             className="sublistItem pt-4 sm:pt-6  border-t border-dashed border-bluegrey200 flex gap-[0.375rem] sm:gap-3"
    //                             key={el.title}
    //                         >
    //                             <Lock />
    //                             {el.title}
    //                         </span>
    //                     ))}

    //                 </span>
    //             </span>
    //         </span>
    //     </li>
    // );

    return (
        <li className={classNames(cls.lessonAcc, { [cls.disabled]: disabled }, [className])}>
            <button type="button" disabled={disabled} className={classNames(cls.heading, { [cls.opened]: opened }, [className])} onClick={toggleOpened}>
                <span className="flex flex-col col-span-10 sm:pl-16 sm:flex-row sm:items-center gap-3">
                    <span className="
                                rounded-lg text-17med sm:text-17med px-3 py-[0.375rem] bg-bluegrey50 w-fit h-fit sm:py-3 sm:px-[1.65625rem]
                            "
                    >
                        Раздел
                        {' '}
                        {count}
                    </span>
                </span>
            </button>
            <span className={cls.body}>
                <span>
                    <ul className="pt-3 sm:pt-6 relative  flex flex-col">
                        {themes?.map((el, i) => {
                            if (el.deskription) {
                                return (
                                    <li
                                        className={classNames(cls.subListItem, { [cls.subOpened]: subOpened === i }, ['sublistItem py-4 sm:py-6  border-t border-dashed border-bluegrey200 '])}
                                        key={el.title}
                                    >
                                        <button type="button" className={classNames(cls.subHeading, { 'pt-10 lg:pt-0 lg:pr-52': el.tip }, ['flex gap-[0.375rem] sm:gap-3 w-full text-15semi sm:text-17semi text-bluegrey800 text-left items-center relative'])} onClick={() => toggleSubOpened(i)}>
                                            <Lock />
                                            <span className="block flex-1">
                                                {el.title}
                                            </span>
                                            {
                                                el.tip

                                            && (
                                                <span className="block ml-auto text-13med rounded-2xl px-4 py-2 bg-[#B0BEC5] absolute top-0 lg:top-1/2 lg:-translate-y-1/2 lg:right-0 text-grey900">
                                                    {el.tip}
                                                </span>
                                            )
                                            }
                                        </button>
                                        <span className={classNames(cls.subListItemBody, {}, ['text-15semi'])}>
                                            <span>
                                                <span className={classNames(cls.subListItemBodyEl, {}, [''])} dangerouslySetInnerHTML={{ __html: el.deskription }} />
                                            </span>
                                        </span>
                                    </li>
                                );
                            }

                            return (
                                <li
                                    className="sublistItem py-4 sm:py-6  border-t border-dashed border-bluegrey200 flex gap-[0.375rem] sm:gap-3 w-full text-15semi sm:text-17semi text-bluegrey800 text-left items-center relative"
                                    key={el.title}
                                >
                                    <Lock />
                                    {el.title}
                                </li>
                            );
                        })}

                    </ul>
                </span>
            </span>
        </li>
    );
};
