import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import InputMask from 'react-input-mask';
import * as cls from './Input.module.css';

interface InputProps {
    className?: string,
    type?: string;
    children: React.ReactNode;
    error?: boolean,
    nameInp?: string,
    setCheck?: React.Dispatch<React.SetStateAction<{nameInp: boolean, phoneInp: boolean, mailInp: boolean}>>,
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PHONE_REGEXP = /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g;

export const Input = React.memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        children,
        error,
        nameInp,
        setCheck,
    } = props;

    const [active, setActive] = React.useState<boolean>(false);
    // const input = React.useRef<HTMLInputElement | null>(null);
    const id = React.useId();

    const handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.target.value.length > 0) {
            setActive(true);
        } else {
            setActive(false);
        }

        if (nameInp === 'name' && setCheck) {
            if (event.target.value.length < 3) {
                setCheck((prev) => ({ ...prev, nameInp: true }));
            } else {
                setCheck((prev) => ({ ...prev, nameInp: false }));
            }
        }
        if (nameInp === 'phone' && setCheck) {
            if (!PHONE_REGEXP.test(event.target.value)) {
                setCheck((prev) => ({ ...prev, phoneInp: true }));
            } else {
                setCheck((prev) => ({ ...prev, phoneInp: false }));
            }
        }
        if (nameInp === 'email' && setCheck) {
            if (!EMAIL_REGEXP.test(event.target.value)) {
                setCheck((prev) => ({ ...prev, mailInp: true }));
            } else {
                setCheck((prev) => ({ ...prev, mailInp: false }));
            }
        }
    };

    const mods = {
        [cls.opened]: active,
        [cls.errorContainer]: error,
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
                {},
                [className, 'text-17reg absolute'],
            )}
            >
                {children}
            </span>
            {nameInp !== 'phone' && (nameInp !== 'mail' && (
                <input
                    className={classNames(
                        cls.input,
                        {},
                        [className, 'text-17reg w-full outline-0 dark:bg-bluegrey1000'],
                    )}
                    // ref={input}
                    onBlur={handleBlur}
                    onFocus={() => setActive(true)}
                    type={type}
                    name={nameInp && nameInp}
                    id={id}
                />
            ))}

            {nameInp === 'phone' && (
                <InputMask
                    mask="+7(999)999-99-99"
                    maskChar=" "
                    className={classNames(
                        cls.input,
                        {},
                        [className, 'text-17reg w-full outline-0 dark:bg-bluegrey1000'],
                    )}
                    // ref={input}
                    onBlur={handleBlur}
                    onFocus={() => setActive(true)}
                    type={type}
                    name={nameInp && nameInp}
                    id={id}
                />
            )}

            {
                error && <span className={cls.error}>Это поле заполнено неправильно</span>
            }
        </label>
    );
});
