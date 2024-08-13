import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { FormModalButton } from 'features/FormModal';
import * as cls from './seoBlock.module.css';

export enum SeoEnums {
  DEFAULT,
  FUTURECOMPANY,
  DOCUMENT,
}
interface SeoBlockProps {
    className?: string,
    theme?: SeoEnums,
    title?: string,
    text?: string,
    buttonText?: string,
    subtitle?: string,
    handleClick?: () => void,
    children?: React.ReactNode,
}

export const SeoBlock = (props: SeoBlockProps) => {
    const {
        className,
        theme = SeoEnums.DEFAULT,
        title,
        text,
        subtitle,
        buttonText = 'Записаться',
        handleClick,
        children,
    } = props;

    if (children) {
        return (
            <Section className={classNames('', {}, [className])}>
                <div
                    className={classNames(cls.background, {}, [cls.backgroundDoc, 'rounded-2xl sm:rounded-3xl bg-bluegrey900'])}
                >
                    <div className="p-4 sm:p-8">
                        <h2 className="text-27semi sm:text-40semi text-whitefull mb-6 sm:mb-11">
                            Подтверждение ваших
                            <br />
                            навыков
                        </h2>
                        <p className="text-15reg sm:text-17reg text-whitefull mb-[12.625rem] sm:mb-0 max-w-[29.5rem] whitespace-pre-line">
                            {children}
                        </p>
                    </div>
                </div>
            </Section>
        );
    }

    if (theme === SeoEnums.DOCUMENT) {
        return (
            <Section className={classNames('', {}, [className])}>
                <div
                    className={classNames(cls.background, {}, [cls.backgroundDoc, 'rounded-2xl sm:rounded-3xl bg-bluegrey900'])}
                >
                    <div className="p-4 sm:p-8">
                        <h2 className="text-27semi sm:text-40semi text-whitefull mb-6 sm:mb-11">
                            Подтверждение ваших
                            <br />
                            навыков
                        </h2>
                        <p className="text-15reg sm:text-17reg text-whitefull mb-[12.625rem] sm:mb-[6.625rem] max-w-[29.5rem] whitespace-pre-line">
                            {text ?? (
                                <span>
                                    Вы получите удостоверение о повышении
                                    <br />
                                    квалификации, который станет дополнительным аргументом для работодателя.
                                </span>
                            )}
                        </p>
                        {/* <Button
                            theme={ButtonTheme.WHITE}
                            text="Посмотреть документ"
                            aria-label="Посмотреть документ"
                        /> */}
                    </div>
                </div>
            </Section>
        );
    }

    if (theme === SeoEnums.FUTURECOMPANY) {
        return (
            <Section className={classNames('', {}, [className])}>
                <div
                    className={classNames(cls.background, {}, ['rounded-2xl sm:rounded-3xl bg-bluegrey900'])}
                >
                    <div className="p-4 sm:p-8">
                        <h2 className="text-27semi sm:text-64med text-whitefull mb-3 sm:mb-8">
                            Будущее компании
                            <br />
                            в ваших руках!
                        </h2>
                        <p className="text-15reg sm:text-17reg text-whitefull mb-[12.625rem] sm:mb-[6.625rem] max-w-[29.5rem]">
                            Корпоративное обучение – это система обучения и развития сотрудников, направленная на повышение их профессиональной квалификации, а также на улучшение навыков работы в команде и достижения целей компании.
                        </p>
                        <FormModalButton
                            text="Записаться"
                            aria-label="Записаться"
                        />
                    </div>
                </div>
            </Section>
        );
    }

    if (subtitle) {
        return (
            <Section className={classNames('', {}, [className])}>
                <div
                    className={classNames(cls.background, {}, ['rounded-2xl sm:rounded-3xl bg-bluegrey900', cls.backgroundSvetLand])}
                >
                    <div className="p-4 sm:p-8">
                        <h2 className="text-27semi sm:text-40semi text-whitefull mb-3 sm:mb-0 max-w-[685px]">

                            {title || (
                                <span>
                                    Сделайте инвестицию
                                    <br />
                                    в свое будущее
                                </span>
                            )}

                        </h2>
                        {subtitle && (
                            <p className="text-15reg sm:text-40semi  text-whitefull mb-[12.625rem] sm:mb-[8.1875rem] max-w-[707px]">

                                {subtitle}

                            </p>
                        )}
                        {handleClick
                            ? (
                                <>
                                    <div className="hidden sm:flex">
                                        <Button
                                            text={buttonText}
                                            aria-label={buttonText}
                                            theme={ButtonTheme.WHITE}
                                            onClick={handleClick}
                                        />
                                    </div>
                                    <div className="sm:hidden">
                                        <Button
                                            text={buttonText}
                                            aria-label={buttonText}
                                            theme={ButtonTheme.PRIMARY}
                                            onClick={handleClick}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="hidden sm:flex">
                                        <FormModalButton
                                            text={buttonText}
                                            aria-label={buttonText}
                                        />
                                    </div>
                                    <div className="sm:hidden">
                                        <FormModalButton
                                            text={buttonText}
                                            aria-label={buttonText}
                                            theme={ButtonTheme.PRIMARY}
                                        />
                                    </div>
                                </>
                            )}
                    </div>
                </div>
            </Section>
        );
    }

    return (
        <Section className={classNames('', {}, [className])}>
            <div
                className={classNames(cls.background, {}, ['rounded-2xl sm:rounded-3xl bg-bluegrey900'])}
            >
                <div className="p-4 sm:p-8">
                    <h2 className="text-27semi sm:text-64med text-whitefull mb-3 sm:mb-8 max-w-[685px]">

                        {title || (
                            <span>
                                Сделайте инвестицию
                                <br />
                                в свое будущее
                            </span>
                        )}

                    </h2>
                    <p className="text-15reg sm:text-17reg text-whitefull mb-[12.625rem] sm:mb-[8.1875rem] max-w-[29.5rem]">
                        {text || (
                            <span>
                                Образование - это бесценный багаж знаний и опыта, который будет
                                сопровождать вас всю жизнь. Инвестируйте в себя, раскройте свой
                                потенциал и станьте лучшим!
                            </span>
                        )}
                    </p>
                    <FormModalButton
                        text={buttonText}
                        aria-label={buttonText}
                    />
                </div>
            </div>
        </Section>

    );
};
