import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import * as cls from './Input.module.css';

interface InputProps {
    className?: string,
    type?: string;
    children: React.ReactNode;
    error?: string,
}

export const Input = React.memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        children,
        error,
    } = props;

    const [active, setActive] = React.useState<boolean>(false);
    // const input = React.useRef<HTMLInputElement | null>(null);
    const id = React.useId();

    // React.useEffect(() => {
    //     if (input.current?.value?.length) {
    //         setActive(true);
    //     } else {
    //         setActive(false);
    //     }
    // }, [input.current?.value]);

    const toggleActive = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.target.value.length > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    const mods = {
        [cls.opened]: active,
    };

    return (
        <label
            htmlFor={id}
            className={
                classNames(
                    cls.label,
                    mods,
                    [className,
                        'pt-[1.375rem] relative pb-3 block'],
                )
            }
        >
            <span className={classNames(
                cls.title,
                mods,
                [className, 'text-17reg absolute'],
            )}
            >
                {children}
            </span>
            <input
                className={classNames(
                    cls.input,
                    mods,
                    [className, 'text-17reg w-full outline-0'],
                )}
                // ref={input}
                onBlur={toggleActive}
                onFocus={() => setActive(true)}
                type={type}
                id={id}
            />
            {error && <span className={cls.error}>{error}</span>}
        </label>
    );
});
