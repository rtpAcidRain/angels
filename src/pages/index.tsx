import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import mainBack from 'shared/assets/img/mvpGeneral1.webp';
import seoImage from 'shared/assets/img/seoImage.jpg';
import {
    AboutBlock, BrandsBlock, DirectionFilter,
    EmploumetBlock, LearningSchema, ReviwsBlock,
    SeoBlock, AdvantagesBlock,
} from 'widgets/ui/pageComponents';
import { FormModalButton } from 'features/FormModal';

const IndexPage: React.FC<PageProps> = () => (
    <>
        <Section>
            <div
                className="
            rounded-2xl
            sm:rounded-3xl
            bg-bluegrey900
            "
            >
                <div
                    className=" p-4 pb-[2.0625rem] sm:p-10 bg-no-repeat bg-bottom bg-[length:auto_12.375rem] sm:bg-right sm:bg-[length:auto_100%]"
                    style={{
                        backgroundImage: `url(${mainBack})`,
                    }}
                >
                    <h1 className="text-32semi sm:text-64med text-whitefull mb-[0.9375rem] sm:mb-6">
                        Станьте
                        <br />
                        востребованным
                        <br />
                        специалистом
                    </h1>
                    <p className="text-17reg sm:text-17med text-blue50 mb-[6.8125rem] sm:mb-[5.125rem] max-w-[481px]">
                        Мы предлагаем широкий спектр программ и курсов, разработанных
                        опытными преподавателями и профессионалами в данной области.
                    </p>
                    <FormModalButton
                        text="Записаться"
                        aria-label="Записаться"
                    />
                </div>
            </div>
        </Section>
        <DirectionFilter />
        {/* <Section> */}
        {/*    <div className="flex flex-col gap-3 sm:gap-5 lg:grid grid-cols-12"> */}
        {/*        <div */}
        {/*            className="flex flex-col bg-no-repeat bg-cover p-4 sm:p-8 sm:rounded-2xl rounded-xl col-span-7 col-start-6 row-span-2 " */}
        {/*            style={{ */}
        {/*                backgroundImage: `url(${seoImage})`, */}
        {/*            }} */}
        {/*        > */}
        {/*            <h2 className="text-27semi sm:text-40semi mb-4 text-whitefull"> */}
        {/*                Корпоративное обучение для сотрудников и руководителей */}
        {/*            </h2> */}
        {/*            <p className="text-15med sm:text-17reg text-bluegrey50 max-w-[387px]"> */}
        {/*                Поможем выбрать формат и обучим сотрудников актуальным знаниям. */}
        {/*            </p> */}
        {/*            <div className="flex flex-col gap-2 sm:gap-[0.625rem] mt-[84px] lg:mt-auto sm:flex-row"> */}
        {/*                <Button */}
        {/*                    theme={ButtonTheme.WHITE} */}
        {/*                    text="Подробнее" */}
        {/*                    aria-label="Подробнее" */}
        {/*                /> */}
        {/*                <Button */}
        {/*                    theme={ButtonTheme.WHITE} */}
        {/*                    text="Оставить заявку" */}
        {/*                    aria-label="Оставить заявку" */}
        {/*                /> */}
        {/*            </div> */}
        {/*        </div> */}
        {/*        <div className="rounded-xl p-4 bg-bluegrey900 col-span-5 row-start-1 sm:pb-[4.625rem]"> */}
        {/*            <h3 className="text-20semi sm:text-27semi text-whitefull mb-2 sm:mb-3"> */}
        {/*                Повышение квалификации */}
        {/*            </h3> */}
        {/*            <p className="text-15med2 sm:text-15med text-blue30 max-w-[397px]"> */}
        {/*                Онлайн-курсы и тренинги помогут вашим сотрудникам и руководителям */}
        {/*                освоить новые знания и навыки, необходимые для достижения их */}
        {/*                <br className="hidden lg:block" /> */}
        {/*                профессиональных целей. */}
        {/*            </p> */}
        {/*        </div> */}
        {/*        <div className="flex flex-col lg:flex-row-reverse gap-3 sm:gap-5 col-span-5 row-start-2 lg:min-h-[12.25rem]"> */}
        {/*            <div className="rounded-xl p-4 bg-grey100 flex-1"> */}
        {/*                <h3 className="text-20semi sm:text-24semi mb-2 sm:mb-3"> */}
        {/*                    5+ программ */}
        {/*                </h3> */}
        {/*                <p className="text-bluegrey800 text-15med2 sm:text-15med"> */}
        {/*                    Наши программы адаптивны к вашим командам, так обучение становится */}
        {/*                    ещё эффективнее. */}
        {/*                </p> */}
        {/*            </div> */}
        {/*            <div className="rounded-xl p-4 bg-grey100 flex-1"> */}
        {/*                <h3 className="text-20semi sm:text-24semi mb-2 sm:mb-3"> */}
        {/*                    Кастомизация */}
        {/*                </h3> */}
        {/*                <p className="text-bluegrey800 text-15med2 sm:text-15med"> */}
        {/*                    Мы используем удобную и современную платформу для обучения, */}
        {/*                    которая позволяет вам учиться в любом месте и в любое время. */}
        {/*                </p> */}
        {/*            </div> */}
        {/*        </div> */}
        {/*    </div> */}
        {/* </Section> */}
        {/* <EmploumetBlock /> */}
        <AboutBlock />
        {/* <AdvantagesBlock /> */}
        <SeoBlock />
        {/* <ReviwsBlock /> */}
        <LearningSchema />
        {/* <BrandsBlock /> */}
    </>
);

export default IndexPage;

export const Head: HeadFC = () => (
    <>
        <title>
            Дистанционное обучение в онлайн школе Angel's school
        </title>
        <meta
            name="keywords"
            content={'дистанционное обучение,'
            + 'дистанционное образование,'
            + 'бесплатные онлайн курсы,'
            + 'курсы онлайн московские,'
            + 'online school,'
            + 'бесплатные онлайн курсы +с сертификатом,'
            + 'бесплатное онлайн образование,'
            + 'дополнительное образование онлайн,'
            + 'получить образование онлайн,'
            + 'онлайн образование +с дипломом,'
            + 'программы онлайн образование,'
            + 'платформы онлайн образования,'
            + 'профессиональное образование онлайн'}
        />
        <meta name="description" content={'Лицензированные образовательные программы обучения профессиям: архитектурный светодизайнер и светодизайнер. Онлайн образование с дипломом от профессиональных экспертов с реальным опытом работы. Online school Angel\'s в Москве, Санкт-Петербурге и в любом регионе РФ с сертификатом.\n'} />
    </>

);
