import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import Checked from 'shared/assets/svg/checked.inline.svg';
import * as cls from './Form.module.css';

interface FormProps {
    className?: string,
    textButton?: string
}

export const Form = React.memo((props: FormProps) => {
    const {
        className,
        textButton = 'Записаться',
    } = props;
    const [check, setCheck] = React.useState<boolean>(true);
    const id = React.useId();

    return (
        <form className={classNames('', {}, [className])}>
            <Input>Имя</Input>
            <Input>Телефон</Input>
            <Input>Почта</Input>
            <Input>
                Комментарий
                <span className="text-grey500">(не обязательно)</span>
            </Input>
            <div className="sm:mt-[1.875rem] mt-5 gap-5 flex flex-col lg:flex-row justify-between">
                <label htmlFor={id} className="flex gap-2 cursor-pointer flex-1">
                    <span className={cls.checkbox}>
                        <input type="checkbox" id={id} onChange={() => setCheck((prev) => !prev)} />
                        <span className={cls.checkboxEl}>
                            <Checked className={cls.svg} />
                        </span>
                    </span>
                    <span className="flex-1 text-13med max-w-[321px]">
                        Я согласен(а) на обработку персональных данных и с политикой
                        обработки персональных данных
                    </span>
                </label>
                <Button className="!w-full lg:!w-fit" disabled={check} text={textButton} type="submit" />
            </div>
        </form>
    );
});
