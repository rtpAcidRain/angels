import { classNames } from 'shared/lib/classNames/classNames';
import { AccordeonItem } from 'shared/ui/Accordeon/ui/AccordeonItem/AccordeonItem';
import React from 'react';

export type AccorderonListItemType = {
    title: string,
    text: string | undefined
}
interface AccordeonProps {
    className?: string,
    list: AccorderonListItemType[],
    doublecol?: boolean,
}

export const Accordeon = React.memo((props: AccordeonProps) => {
    const {
        className,
        list,
        doublecol = false,
    } = props;

    const [opened, setOpened] = React.useState<number | null>(null);

    const toggleOpenedItem = React.useCallback((num: number): void => {
        if (num === opened) {
            return setOpened(null);
        }
        return setOpened(num);
    }, [opened]);

    if (doublecol) {
        return (
            <div className="flex flex-col sm:flex-row gap-5">
                <ul className={classNames('flex flex-col gap-5', {}, [className])}>
                    {list.slice(0, Math.floor(list.length / 2)).map((el, i) => (
                        <AccordeonItem
                            title={el.title}
                            listNum={i + 1}
                            key={el.title}
                            text={el.text}
                            opened={opened === i}
                            onClick={() => toggleOpenedItem(i)}
                        />
                    ))}
                </ul>

                <ul className={classNames('flex flex-col gap-5', {}, [className])}>
                    {list.slice(Math.floor(list.length / 2)).map((el, i) => (
                        <AccordeonItem
                            title={el.title}
                            listNum={i + 1 + Math.floor(list.length / 2)}
                            key={el.title}
                            text={el.text}
                            opened={opened === i + Math.floor(list.length / 2)}
                            onClick={() => toggleOpenedItem(i + Math.floor(list.length / 2))}
                        />
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <ul className={classNames('', {}, [className])}>
            {list.map((el, i) => (
                <AccordeonItem
                    title={el.title}
                    listNum={i + 1}
                    key={el.title}
                    text={el.text}
                    opened={opened === i}
                    onClick={() => toggleOpenedItem(i)}
                />
            ))}
        </ul>
    );
});
