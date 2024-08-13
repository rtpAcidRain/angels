/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import {
    HeadFC, Link, PageProps,
} from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import mainBack from 'shared/assets/img/profSvet.webp';
import profSvet2 from 'shared/assets/img/profSvet2.jpg';
import hhscreen from 'shared/assets/img/hhscreen.jpg';
import hhscreen2 from 'shared/assets/img/hhscreen2.jpg';
import hhscreen3 from 'shared/assets/img/hhscreen3.jpg';
import hhscreen4 from 'shared/assets/img/hhscreen4.jpg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { SeoBlock } from 'widgets/ui/pageComponents';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import Checked from 'shared/assets/svg/checked.inline.svg';
import formBack from 'shared/assets/img/backgroundSvetLand.png';

import { useLocomotiveScroll } from 'react-locomotive-scroll';
import * as cls from './style.module.css';

const TermPage: React.FC<PageProps> = () => {
    const { scroll } = useLocomotiveScroll();
    const [allowSlide, setAllowSlide] = React.useState(false);
    const [formRadios, setFormRadios] = React.useState({
        yourlevel: false,
        whysvet: false,
    });
    const pagRef = React.useRef<HTMLDivElement>(null);
    const [checkedInput, setCheckedInput] = React.useState(
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

    const toggleCheck = React.useCallback(() => {
        setCheck((prev) => !prev);
    }, []);

    const setFormRadiosChange = React.useCallback((e: any) => {
        setFormRadios((prev) => ({
            ...prev,
            [e.target.name]: true,
        }));
    }, [setFormRadios]);

    const scrollToForm = React.useCallback(() => {
        scroll.scrollTo('#formMain', {
            offset: -100,
        });
    }, [scroll]);

    const submitForm = React.useCallback((e: React.FormEvent) => {
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

    React.useEffect(() => {
        if (formRadios.whysvet && formRadios.yourlevel) {
            setAllowSlide(true);
        }
    }, [formRadios]);

    return (
        <>
            <Section>
                <div
                    className="
            rounded-2xl
            sm:rounded-3xl
            overflow-hidden
            bg-grey100
            "
                >
                    <div
                        className="p-4 sm:p-10 bg-no-repeat bg-bottom bg-[length:auto_19rem] sm:bg-right sm:bg-[length:auto_100%] relative flex flex-col h-[554px] sm:h-[37.5625rem]"
                        style={{
                            backgroundImage: `url(${mainBack})`,
                        }}
                    >
                        <h1 className="text-32semi sm:text-56semi mb-[0.9375rem] sm:mb-6">
                            Старт в профессии
                            <br />
                            “Светодизайнер”
                        </h1>
                        <p className="text-17med text-grey800 max-w-[481px]">
                            Заполните анкету и получите доступ к 3 уроками набор полезных материалов для старта работы
                            в сфере светодизайна
                        </p>
                        <Button
                            theme={ButtonTheme.PRIMARY}
                            className="sm:!px-[4.4375rem] mt-auto"
                            text="Получить материалы"
                            aria-label="Получить материалы"
                            onClick={scrollToForm}
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="mb-6 rounded-2xl sm:bg-bluegrey50 sm:p-8 sm:flex justify-between items-center">
                    <div>
                        <h2 className="text-32semi sm:text-40semi mb-4 sm:mb-6 text-grey900">Профессия светодизайнер</h2>
                        <p className="text-17med text-bluegrey600 max-w-[428px] sm:text-grey900">Востребованная специальность, которая только набирает популярность </p>
                    </div>
                    <Button
                        theme={ButtonTheme.PRIMARY}
                        className="mt-auto !hidden lg:!flex"
                        text="Получить набор"
                        aria-label="Получить набор"
                        onClick={scrollToForm}
                    />
                </div>
                <div className="flex flex-col gap-2 lg:grid grid-cols-3 grid-rows-2">
                    <div className="rounded-3xl sm:rounded-2xl p-4 sm:p-8 bg-bluegrey900 row-span-2 col-start-1  flex flex-col">
                        <h3 className="text-whitefull mb-1 sm:mb-2 text-32semi sm:text-56semi whitespace-nowrap">От 70 000 ₽</h3>
                        <p className="text-13reg text-grey400 sm:text-15med mb-6 sm:mb-[1.6875rem]">Средняя зарплата светодизайнера новичка</p>
                        <div className="flex flex-col gap-1 sm:gap-2 mb-6 sm:mb-[1.6875rem] w-[71.185%] sm:w-[73%]">
                            <img className="h-auto rounded-xl" src={hhscreen} alt="" />
                            <img className="h-auto rounded-xl" src={hhscreen2} alt="" />
                            <img className="h-auto rounded-xl hidden sm:block" src={hhscreen3} alt="" />
                            <img className="h-auto rounded-xl hidden sm:block" src={hhscreen4} alt="" />
                        </div>
                        <p className="text-15reg text-grey200 sm:text-17reg mt-auto">Cредняя месячная заработная плата светодизайнера новичка: 70 000 руб</p>
                    </div>
                    <div className="rounded-3xl sm:rounded-2xl p-4 sm:p-8 bg-bluegrey900  flex-col flex justify-between col-start-2 gap-14">
                        <h3 className="text-whitefull mb-1 sm:mb-2 text-32semi sm:text-40semi">Перспективы</h3>
                        <ul className="text-15reg text-grey200 sm:text-17reg flex flex-col gap-2 sm:gap-3">
                            <li>— Возможность работы в крупных проектах</li>
                            <li>
                                — Возможность специализации как светодизайнер интерьеров, архитектурных объектов, ландшафтных объектов
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-3xl sm:rounded-2xl p-4 sm:p-8 bg-bluegrey900  flex-col flex justify-between col-start-2 row-start-2 gap-14">
                        <h3 className="text-whitefull mb-1 sm:mb-2 text-32semi sm:text-40semi">
                            Востребованная
                            <br />
                            {' '}
                            профессия
                        </h3>
                        <p className="text-15reg text-grey200 sm:text-17reg">
                            У специалиста с опытом более
                            <br />
                            {' '}
                            1 года — от 100 000 руб
                        </p>
                    </div>
                    <img src={profSvet2} alt="" className="rounded-3xl row-span-2 hidden lg:block col-start-3 object-cover h-full w-full" />
                    <Button
                        theme={ButtonTheme.PRIMARY}
                        className="mt-3 !w-full  lg:!hidden"
                        text="Получить набор"
                        aria-label="Получить набор"
                        onClick={scrollToForm}
                    />
                </div>
            </Section>
            <div className="container" data-scroll-section>
                <h2 className="text-32semi sm:text-40semi mb-6 sm:mb-[3.125rem]">В наборе вы получите</h2>
                <ol className="mb-4 sm:mb-5 flex flex-col lg:grid grid-cols-3 gap-y-2 gap-x-5">
                    <li className="bg-grey100 p-6 sm:p-8 sm:pb-14 rounded-2xl flex flex-col justify-between gap-12">
                        <span className="text-bluegrey900 text-20semi sm:text-24semi">Введение в профессию Светодизайнер. Основные функции и этапы работ</span>
                        <span className="text-bluegrey900 text-15reg sm:text-17med">Урок 1</span>
                    </li>
                    <li className="bg-grey100 p-6 sm:p-8 sm:pb-14 rounded-2xl flex flex-col justify-between gap-12">
                        <span className="text-bluegrey900 text-20semi sm:text-24semi">Архитектурное освещение коммерческих объектов</span>
                        <span className="text-bluegrey900 text-15reg sm:text-17med">Урок 2</span>
                    </li>
                    <li className="bg-grey100 p-6 sm:p-8 sm:pb-14 rounded-2xl flex flex-col justify-between gap-12">
                        <span className="text-bluegrey900 text-20semi sm:text-24semi">
                            Архитектурное освещение
                            <br />
                            {' '}
                            жилых объектов
                        </span>
                        <span className="text-bluegrey900 text-15reg sm:text-17med">Урок 3</span>
                    </li>
                </ol>
            </div>
            <SeoBlock title="Гайд" subtitle='"Как начать карьеру светодизайнера"' buttonText="Получить набор" handleClick={scrollToForm} />
            <Section>
                <div className="py-4 sm:py-8 rounded-2xl bg-bluegrey900" id="formMain">
                    <div className="px-4 sm:px-8 flex flex-col gap-4 justify-between  text-whitefull lg:flex-row mb-6 sm:mb-8">
                        <h2 className="text-32semi sm:text-40semi">Давайте знакомиться?</h2>
                        <p className="text-15reg sm:text-17reg max-w-[428px] pr-6 sm:pr-0">Заполните анкету и получите доступ к 3 урокам и набор полезных материалов для старта работы в сфере светодизайна</p>
                    </div>
                    <form
                        id="sendProfiForm"
                        className="relative "
                        onSubmit={submitForm}
                    >
                        <div className="px-4" ref={pagRef}>
                            <div
                                id="sendprofiPag"
                                className="
                                    text-whitefull text-17med w-fit
                                        flex justify-center items-center
                                        rounded-lg border border-bluegrey300
                                        py-[0.6875rem] px-6 gap-1 mb-3 sm:mb-0 sm:absolute bottom-0 left-8
                                    "
                            />
                        </div>
                        <Swiper
                            modules={[Pagination, Navigation]}
                            allowSlideNext={allowSlide}
                            allowTouchMove={false}
                            autoHeight
                            onSlideChange={(swiper) => {
                                swiper.pagination.destroy();
                                pagRef?.current?.classList.add('lg:hidden');
                            }}
                            pagination={{
                                el: '#sendprofiPag',
                                type: 'fraction',
                                formatFractionCurrent(number) {
                                    return (`0${number}`).slice(-2);
                                },
                                formatFractionTotal(number) {
                                    return (`0${number}`).slice(-2);
                                },
                                renderFraction(currentClass, totalClass) {
                                    return `<span class="${currentClass}"></span>`
                                       + ' / '
                                       + `<span class="${totalClass} text-grey500"></span>`;
                                },
                            }}
                            navigation={{
                                nextEl: '.custom-swiper-button-next',
                            }}
                            slidesPerView={1}
                            spaceBetween={20}

                        >
                            <SwiperSlide>
                                <div className="px-4 sm:px-8 grid gap-y-3 gap-x-4 sm:grid-cols-2 ">
                                    <div className="p-4 rounded-xl bg-whitefull relative">
                                        <span className="hidden sm:block absolute top-6 right-6 text-13reg text-grey500">01</span>
                                        <div className="text-20semi mb-5">
                                            Ваш уровень знаний
                                            <br />
                                            о светодизайне?
                                        </div>
                                        <div className="flex flex-col gap-[0.625rem]">
                                            <div className={cls.radio}>
                                                <input type="radio" id="yourlevel1" onChange={setFormRadiosChange} name="yourlevel" value="Архитектор" />
                                                <label htmlFor="yourlevel1">Архитектор</label>
                                            </div>
                                            <div className={cls.radio}>
                                                <input type="radio" id="yourlevel2" onChange={setFormRadiosChange} name="yourlevel" value="Дизайнер" />
                                                <label htmlFor="yourlevel2">Дизайнер</label>
                                            </div>
                                            <div className={cls.radio}>
                                                <input type="radio" id="yourlevel3" onChange={setFormRadiosChange} name="yourlevel" value="Студент ВУЗа" />
                                                <label htmlFor="yourlevel3">Студент ВУЗа</label>
                                            </div>
                                            <div className={cls.radio}>
                                                <input type="radio" id="yourlevel4" onChange={setFormRadiosChange} name="yourlevel" value="Любитель, ищу новую профессию" />
                                                <label htmlFor="yourlevel4">Любитель, ищу новую профессию</label>
                                            </div>
                                            <div className={cls.radio}>
                                                <input type="radio" id="yourlevel5" onChange={setFormRadiosChange} name="yourlevel" value="Любитель, ищу новую профессию" />
                                                <label htmlFor="yourlevel5">Любитель, ищу новую профессию</label>
                                            </div>
                                            <div className={cls.radio}>
                                                <input type="radio" id="yourlevel6" onChange={setFormRadiosChange} name="yourlevel" value="Cвой вариант" />
                                                <label htmlFor="yourlevel6">Cвой вариант</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-whitefull relative">
                                        <span className="hidden sm:block absolute top-6 right-6 text-13reg text-grey500">02</span>
                                        <div className="text-20semi mb-5">
                                            Почему бы Вы хотели освоить
                                            {' '}
                                            <br className="hidden sm:block" />
                                            профессию светодизайнера?
                                        </div>
                                        <div className="flex flex-col gap-[0.625rem]">
                                            <div className={cls.radio}>
                                                <input type="radio" id="whysvet1" name="whysvet" onChange={setFormRadiosChange} value="Хочу повысить квалификацию" />
                                                <label htmlFor="whysvet1">Хочу повысить квалификацию</label>
                                            </div>
                                            <div className={cls.radio}>
                                                <input type="radio" id="whysvet2" name="whysvet" onChange={setFormRadiosChange} value="Хочу освоить востребованное направление с хорошим уровнем оплаты" />
                                                <label htmlFor="whysvet2">Хочу освоить востребованное направление с хорошим уровнем оплаты</label>
                                            </div>
                                            <div className={cls.radio}>
                                                <input type="radio" id="whysvet3" name="whysvet" onChange={setFormRadiosChange} value="Свой вариант" />
                                                <label htmlFor="whysvet3">Свой вариант</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="px-4 sm:px-8 relative">
                                <div
                                    className={classNames('', { '!hidden': !sent }, ['absolute inset-y-0 inset-x-4 sm:inset-x-8'])}
                                >
                                    <div className="relative p-4 sm:p-8 bg-whitefull rounded-xl sm:rounded-2xl flex flex-col h-full w-full">
                                        <div className="absolute bottom-0 right-0  lg:h-full">
                                            <img src={formBack} className="lg:hidden" alt="" />
                                            <img src={formBack} className="hidden lg:block w-full h-full" alt="" />
                                        </div>
                                        <div className="max-w-[346px] relative">
                                            <h3 className="text-24semi mb-3 sm:text-40semi">
                                                Спасибо!
                                                <br />
                                                Ваша заявка была отправлена.
                                            </h3>
                                            <p className="text-[#525252] text-17reg">Материалы придут на указанную почту в ближайшее время.</p>
                                        </div>
                                        <Button text="К программам" to="/" className="mt-auto relative" />
                                    </div>
                                </div>
                                <div
                                    className={classNames('', { invisible: sent, 'h-[463px] lg:h-auto': sent }, [' grid gap-y-3 gap-x-4 lg:grid-cols-2 '])}
                                >
                                    <div className="p-4 sm:p-6 rounded-xl bg-whitefull pb-[157px] lg:pb-0 relative overflow-hidden">
                                        <div className="absolute bottom-[-60px] w-[372px] left-1/2 -translate-x-1/2 lg:w-auto lg:translate-x-0 lg:left-auto lg:bottom-[-30px] lg:right-[-103px] lg:aspect-auto lg:h-[66%]">
                                            <img src={formBack} className="lg:hidden" alt="" />
                                            <img src={formBack} className="hidden lg:block w-full h-full" alt="" />
                                        </div>
                                        <h3 className="text-24semi mb-2 max-w-[373px] sm:mb-4 sm:text-40semi relative">
                                            Заполните анкету и получите доступ
                                            <br />
                                            к 3 урокам бесплатно!
                                        </h3>
                                    </div>
                                    <div
                                        className="p-4 sm:p-6 rounded-xl bg-whitefull"
                                    >
                                        <div className="flex flex-col gap-[0.625rem] mb-[1.875rem]">
                                            <Input error={nameErr} setCheck={setCheckedInput} nameInp="name">Имя</Input>
                                            <Input error={phoneErr} setCheck={setCheckedInput} nameInp="phone">Телефон</Input>
                                            <Input error={mailErr} setCheck={setCheckedInput} nameInp="email">Почта</Input>
                                            <Input nameInp="comment">
                                                Комментарий
                                                <span className="text-grey500">(не обязательно)</span>
                                            </Input>
                                        </div>

                                        <div className="mt-[1.875rem] sm:mt-[6.375rem] gap-5 flex flex-col lg:flex-row justify-between">
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
                                            <Button className="!w-full lg:!w-fit" disabled={check} text="Получить" type="submit" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="px-4 sm:flex justify-end">
                            <Button text="Следующий этап" disabled={!allowSlide} className={classNames(cls.swiperButton, { }, ['custom-swiper-button-next  mt-3 sm:mt-6'])} />
                        </div>
                    </form>
                </div>
            </Section>
        </>
    );
};

export default TermPage;

export const Head: HeadFC = () => (
    <>
        <title>
            Старт в профессии
            “Светодизайнер”
        </title>
        <meta
            name="keywords"
            content={`курсы светодизайнера,
            профессия светодизайнер,
            световые технологии,
            светодизайнер,
            светодизайнер обучение`}
        />
        <meta
            name="description"
            content={
                'Онлайн-курс "Профессия Светодизайнер" в аккредитованной школе Angel\'s school. Обучение на платформе на архитектурного светодизайнера в Москве, Санкт-Петербурге и в любом регионе РФ с сертификатом или дипломом о профессиональном дополнительном образовании.'
            }
        />
    </>
);
