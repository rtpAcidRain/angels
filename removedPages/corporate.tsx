import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Section } from 'shared/ui/Section/Section';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import mainBack from 'shared/assets/img/about1.webp';
import {
    AdvantagesBlock,
    DirectionFilter,
    EmploumetBlock,
    SeoBlock,
} from 'widgets/ui/pageComponents';
import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { AdvantagesEnums } from 'widgets/ui/pageComponents/ui/advantagesBlock/advantagesBlock';
import { SeoEnums } from 'widgets/ui/pageComponents/ui/seoBlock/seoBlock';
import { ServiceEnum } from 'widgets/ui/pageComponents/ui/emploumetBlock/emploumetBlock';

const CorporatePage: React.FC<PageProps> = () => (
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
                    className=" p-4 pb-[2.0625rem] sm:p-10 bg-no-repeat bg-bottom bg-[length:auto_12.375rem] sm:bg-right sm:bg-[length:39.0625rem_100%]"
                    style={{
                        backgroundImage: `url(${mainBack})`,
                    }}
                >
                    <h1 className="text-32semi sm:text-64med text-whitefull mb-[0.9375rem] sm:mb-6">
                        Инвестируйте в
                        <br />
                        развитие своих
                        <br />
                        сотрудников!
                    </h1>
                    <p className="text-17reg sm:text-17med text-blue50 mb-[6.8125rem] sm:mb-12 max-w-[481px]">
                        Широкий спектр программ обучения для разных отделов и специалистов.
                    </p>
                    <Button
                        theme={ButtonTheme.WHITE}
                        text="Заказать обучение"
                        aria-label="Заказать обучение"
                    />
                </div>
            </div>
        </Section>
        <AdvantagesBlock theme={AdvantagesEnums.WHYUS} />
        <DirectionFilter />
        <SeoBlock theme={SeoEnums.FUTURECOMPANY} />
        <Section>
            <div className="pb-6 sm:pb-8 gap-5 sm:grid grid-cols-12">
                <h2 className="text-32semi sm:text-40semi mb-6 sm:mb-0 col-span-6">
                    Работы после обучения
                </h2>
                <p
                    className="text-15med2 sm:text-17med col-span-6"
                    style={{
                        maxWidth: '644px',
                    }}
                >
                    Архитектурный светодизайн – это искусство использования света для
                    создания выразительных и функциональных пространств, как внутри, так и
                    снаружи зданий. Он способен преображать архитектуру, подчеркивая ее
                    достоинства и создавая неповторимую атмосферу.
                </p>
            </div>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination
                navigation
                slidesPerView={1}
                loop
                spaceBetween={20}
                className="rounded-3xl page-img-slider"
            >
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
            </Swiper>
        </Section>
        <EmploumetBlock theme={ServiceEnum.SECOND} />
    </>
);

export default CorporatePage;

export const Head: HeadFC = () => <title>Корпоративное обучение</title>;
