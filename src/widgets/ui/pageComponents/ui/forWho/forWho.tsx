import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';

interface ListType {
    title: string,
    text: string
}
interface ForWhoProps {
    className?: string,
    list?: ListType[]
}

export const ForWho = (props: ForWhoProps) => {
    const {
        className,
        list,
    } = props;

    return (
        <Section className={classNames('', {}, [className])} title="Кому подойдут курсы">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 ">
                {list?.map((el) => (
                    <div key={el.title} className="bg-grey100 dark:bg-bluegrey900 p-6 pb-4 rounded-2xl sm:p-8 flex flex-col flex-1">
                        <h3 className="text-20semi mb-12 sm:text-24semi sm:mb-[3.25rem] dark:text-whitefull">{el.title}</h3>
                        <p className="text-15reg text-bluegrey800 sm:text-17med mt-auto dark:text-bluegrey100">
                            {el.text}
                        </p>
                    </div>
                ))}
            </div>
        </Section>

    );
};
