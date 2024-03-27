import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import 'swiper/css';
import {
    AboutBlock, BrandsBlock,
    EmploumetBlock, ExpretsBlock, ForWho, LearningSchema,
    SeoBlock,
} from 'widgets/ui/pageComponents';
import { StaticImage } from 'gatsby-plugin-image';
import { Section } from 'shared/ui/Section/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const DirectionPage: React.FC<PageProps> = () => (
    <>
        <Section className="pt-5 sm:pt-14">
            <div className="pb-6 sm:pb-10 gap-5 sm:grid grid-cols-12">
                <h2 className="text-32semi sm:text-56semi mb-4 sm:mb-0 col-span-7">
                    Стань специалистом
                    {' '}
                    <br />
                    в сфере светодизайна
                </h2>
                <p className="text-15med sm:text-17med col-span-4 mt-auto">
                    Данное направление предназначено для дизайнеров, архитекторов,
                    светотехников и всех, кто хочет научиться грамотно организовывать
                    светоцветовое пространство.
                </p>
            </div>
            <StaticImage
                className="aspect-[320/300] sm:aspect-auto rounded-3xl"
                src="../../shared/assets/img/about_image.jpg"
                alt="Небоскребы"
                formats={['auto', 'webp']}
            />
        </Section>
        <ForWho />
        <EmploumetBlock />
        <ExpretsBlock />
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
                    Архитектурный светодизайн – это искусство использования света для создания выразительных и функциональных пространств, как внутри, так и снаружи зданий. Он способен преображать архитектуру, подчеркивая ее достоинства и создавая неповторимую атмосферу.
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
                        src="../../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StaticImage
                        className=""
                        src="../../shared/assets/img/about_image.jpg"
                        alt="Небоскребы"
                        formats={['auto', 'webp']}
                    />
                </SwiperSlide>
            </Swiper>
        </Section>
        <LearningSchema />
        <AboutBlock />
        <SeoBlock />
        <BrandsBlock />
    </>
);

export default DirectionPage;

export const Head: HeadFC = () => <title>Типовая страничка направления</title>;
