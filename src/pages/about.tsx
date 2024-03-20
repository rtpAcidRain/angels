import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import mainBack from 'shared/assets/img/about1.webp';
import { ExpretsBlock, SeoBlock, AdvantagesBlock } from 'widgets/ui/pageComponents';
import { StaticImage } from 'gatsby-plugin-image';

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
                    className=" p-4 pb-[2.0625rem] sm:p-10 bg-no-repeat bg-bottom bg-[length:100%_auto] sm:bg-right sm:bg-[length:auto_100%]"
                    style={{
                        backgroundImage: `url(${mainBack})`,
                    }}
                >
                    <h1
                        className="text-32semi sm:text-64med text-whitefull mb-4 sm:mb-[4.125rem]"
                        style={{
                            maxWidth: '725px',
                        }}
                    >
                        Откройте новые возможности
                        <br />
                        с нашей школой
                    </h1>
                    <p className="text-15reg sm:text-17reg text-blue50 max-w-[481px]">
                        Наш центр дополнительного профессионального образования Angels School специализируется на обучении и подготовке специалистов в области архитектурно - ландшафтного светодизайна.
                    </p>
                </div>
            </div>
        </Section>
        {/* <AdvantagesBlock /> */}
        <Section>
            <div className="pb-8 sm:pb-[3.125rem] gap-5 sm:grid grid-cols-12">
                <h2 className="text-27semi sm:text-40semi mb-6 sm:mb-0 col-span-6">
                    Наша миссия
                </h2>
                <p
                    className="text-15med2 sm:text-17med col-span-6"
                    style={{
                        maxWidth: '611px',
                    }}
                >
                    Наша миссия - сделать образование доступным для каждого, независимо от
                    места проживания, возраста и уровня подготовки
                </p>
            </div>
            <StaticImage
                className="aspect-[320/322] sm:aspect-auto rounded-3xl"
                src="../shared/assets/img/about_image.jpg"
                alt="Небоскребы"
                formats={['auto', 'webp']}
            />
        </Section>
        {/* <ExpretsBlock /> */}
        <SeoBlock />
        <Section title="Контакты">
            <div className="relative">
                <div className="aspect-[320/340] sm:aspect-[1420/743] overflow-hidden mb-4 lg:mb-0 rounded-3xl">
                    <iframe
                        title="БЦ West Park"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A30c8a948c49372c3a1e5da4cfffe7274c8cf2acafa18cde1e4be793f2d2c9980&amp;source=constructor"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    />
                </div>
                <div className="flex flex-col gap-4 lg:absolute lg:flex-row bottom-[0.875rem] left-6">
                    <div
                        className="rounded-2xl p-6 bg-whitefull"
                        style={{
                            boxShadow: '0 9px 28px 0 rgba(117, 117, 117, 0.15)',
                        }}
                    >
                        <ul className="grid gap-6 sm:grid-cols-2  lg:gap-y-8">
                            <li>
                                <span className="text-15reg text-bluegrey500 mb-1 block">Номер телефона</span>
                                <a className="block text-17reg" href="tel:+74950239626">+7 (495)-023-96-26</a>
                            </li>
                            <li>
                                <span className="text-15reg text-bluegrey500 mb-1 block">Адресс</span>
                                <span className="block text-17reg">
                                    Г. Москва, Очаковское
                                    {' '}
                                    <br />
                                    шоссе 34. БЦ West Park
                                </span>
                            </li>
                            <li>
                                <span className="text-15reg text-bluegrey500 mb-1 block">Email</span>
                                <a className="block text-17reg" href="mailto:coop@svet-expert.com">Coop@svet-expert.com</a>
                            </li>
                            <li>
                                <span className="text-15reg text-bluegrey500 mb-1 block">Предложение сотрудничества</span>
                                <a className="block text-17reg" href="mailto:coop@svet-expert.com">Coop@svet-expert.com</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div */}
                    {/*    className="rounded-2xl p-6 bg-whitefull" */}
                    {/*    style={{ */}
                    {/*        boxShadow: '0 9px 28px 0 rgba(117, 117, 117, 0.15)', */}
                    {/*    }} */}
                    {/* > */}
                    {/*    <ul className="flex flex-col justify-between h-full gap-6"> */}
                    {/*        <li> */}
                    {/*            <span className="text-15reg text-bluegrey500 mb-1 block">Пресс-служба</span> */}
                    {/*            <a className="block text-17reg" href="tel:+74950239626">+7 (495)-023-96-26</a> */}
                    {/*        </li> */}
                    {/*        <li> */}
                    {/*            <span className="text-15reg text-bluegrey500 mb-1 block">ОГРН</span> */}
                    {/*            <span className="block text-17reg"> */}
                    {/*                1097746487651 */}
                    {/*            </span> */}
                    {/*        </li> */}
                    {/*    </ul> */}
                    {/* </div> */}
                </div>
            </div>

        </Section>
    </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>О нас</title>;
