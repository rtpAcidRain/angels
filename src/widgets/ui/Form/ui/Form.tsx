import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    FormEvent, useCallback, useContext, useRef, useState,
} from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import Checked from 'shared/assets/svg/checked.inline.svg';
import { GlobalContext } from 'app/providers/GlobalContext/lib/GlobalProvider';
import { Link } from 'gatsby';
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
    const { setFormModalPermanent } = useContext(GlobalContext);
    const formRef = useRef(null);
    const [checkedInput, setCheckedInput] = useState(
        {
            nameInp: true,
            phoneInp: true,
            mailInp: true,
        },
    );
    const [sent, setSent] = React.useState<boolean>(false);
    const [nameErr, setNameErr] = React.useState<boolean>(false);
    const [phoneErr, setPhoneErr] = React.useState<boolean>(false);
    const [mailErr, setMailErr] = React.useState<boolean>(false);
    const [check, setCheck] = React.useState<boolean>(true);
    const id = React.useId();

    const toggleCheck = useCallback(() => {
        setCheck((prev) => !prev);
    }, []);

    const closeModal = useCallback(() => {
        if (setFormModalPermanent) {
            setFormModalPermanent(false);
        }
    }, [setFormModalPermanent]);

    const submitForm = useCallback((e: FormEvent) => {
        e.preventDefault();
        if (checkedInput.nameInp || checkedInput.phoneInp || checkedInput.mailInp) {
            setNameErr(checkedInput.nameInp);
            setPhoneErr(checkedInput.phoneInp);
            setMailErr(checkedInput.mailInp);
        } else {
            const myForm = e.target;
            // @ts-ignore
            const formData = new FormData(myForm);

            fetch('https://angels-school.ru/send.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // @ts-ignore
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => console.log('Form successfully submitted'))
                .catch((error) => alert(error));
            setSent(true);
        }
    }, [checkedInput]);

    return (
        <>
            <div className={classNames('', { hidden: !sent }, [className])}>
                <h3 className="mb-3 sm:mb-7 text-27semi sm:text-40semi text-grey900 dark:text-whitefull">
                    Спасибо!
                    Ваша заявка была отправлена.
                </h3>
                <p className="text-17reg text-[#525252] dark:text-whitefull mb-[16.875rem] sm:mb-40">
                    Наш менеджер свяжется с вами
                    <br />
                    в ближайшее время
                </p>
                <Button className={cls.modalCloseButton} text="Закрыть" onClick={closeModal} />
            </div>

            <form
                onSubmit={submitForm}
                ref={formRef}
                className={classNames('', { hidden: sent }, [className])}
            >
                <Input error={nameErr} setCheck={setCheckedInput} nameInp="name">Имя</Input>
                <Input error={phoneErr} setCheck={setCheckedInput} nameInp="phone">Телефон</Input>
                <Input error={mailErr} setCheck={setCheckedInput} nameInp="email">Почта</Input>
                <Input nameInp="comment">
                    Комментарий
                    <span className="text-grey500">(не обязательно)</span>
                </Input>
                <div className="sm:mt-[1.875rem] mt-5 gap-5 flex flex-col lg:flex-row justify-between">
                    <label htmlFor={id} className="flex gap-2 cursor-pointer flex-1">
                        <span className={cls.checkbox}>
                            <input type="checkbox" id={id} onChange={toggleCheck} />
                            <span className={cls.checkboxEl}>
                                <Checked className={cls.svg} />
                            </span>
                        </span>
                        <span className="flex-1 text-13med max-w-[321px]">
                            Я согласен(а) на
                            {' '}
                            <Link to="/policy" className="text-blue600">обработку персональных данных</Link>
                            {' '}
                            и с политикой
                            обработки персональных данных
                        </span>
                    </label>
                    <Button className="!w-full lg:!w-fit" disabled={check} text={textButton} type="submit" />
                </div>
            </form>
        </>
    );
});
