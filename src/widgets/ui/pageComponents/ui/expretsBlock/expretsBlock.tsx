import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';
import { StaticImage } from 'gatsby-plugin-image';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'gatsby';
import * as cls from './expretsBlock.module.css';

interface ExpretsBlockProps {
    className?: string,
}

export const ExpretsBlock = (props: ExpretsBlockProps) => {
    const { className } = props;

    return (
        <Section className={classNames(cls.expretsBlock, {}, [className, '!pl-0 !pr-0'])}>
            <h2 className="text-27semi sm:text-40semi mb-6 sm:mb-[3.125rem] px-4 sm:px-10">
                Наши эксперты
            </h2>
            <Swiper
                className="!px-4 sm:!px-10"
                spaceBetween={8}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        spaceBetween: '20px',
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: '20px',
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide className={cls.slide}>
                    <Link
                        to="/"
                        aria-label="Стаc Вячеслав"
                        title="Стаc Вячеслав"
                        itemProp="url"
                    >
                        <StaticImage
                            className="aspect-[320/380] sm:aspect-[340/467] rounded-2xl mb-3 sm:mb-6"
                            src="../../../../../shared/assets/img/couch.jpg"
                            formats={['auto', 'webp']}
                            alt="Стас Вячеслав"
                        />
                        <h3 className="text-24semi mb-2 sm:mb-3">
                            Стас
                            <br />
                            Вячеслав
                        </h3>
                        <p className="text-15med text-bluegrey600 mb-4 sm:mb-8">
                            Менеджер информационного моделирования еще какие приколы
                        </p>
                        <Button
                            theme={ButtonTheme.SECONDARY}
                            text="Подробнее"
                            className="!w-fit"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={cls.slide}>
                    <a
                        href="/"
                        aria-label="Стаc Вячеслав"
                        title="Стаc Вячеслав"
                        itemProp="url"
                    >
                        <StaticImage
                            className="aspect-[320/380] sm:aspect-[340/467] rounded-2xl mb-3 sm:mb-6"
                            src="../../../../../shared/assets/img/couch.jpg"
                            formats={['auto', 'webp']}
                            alt="Стас Вячеслав"
                        />
                        <h3 className="text-24semi mb-2 sm:mb-3">
                            Стас
                            <br />
                            Вячеслав
                        </h3>
                        <p className="text-15med text-bluegrey600 mb-4 sm:mb-8">
                            Менеджер информационного моделирования еще какие приколы
                        </p>
                        <Button
                            theme={ButtonTheme.SECONDARY}
                            text="Подробнее"
                            className="!w-fit"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide className={cls.slide}>
                    <a
                        href="/"
                        aria-label="Стаc Вячеслав"
                        title="Стаc Вячеслав"
                        itemProp="url"
                    >
                        <StaticImage
                            className="aspect-[320/380] sm:aspect-[340/467] rounded-2xl mb-3 sm:mb-6"
                            src="../../../../../shared/assets/img/couch.jpg"
                            formats={['auto', 'webp']}
                            alt="Стас Вячеслав"
                        />
                        <h3 className="text-24semi mb-2 sm:mb-3">
                            Стас
                            <br />
                            Вячеслав
                        </h3>
                        <p className="text-15med text-bluegrey600 mb-4 sm:mb-8">
                            Менеджер информационного моделирования еще какие приколы
                        </p>
                        <Button
                            theme={ButtonTheme.SECONDARY}
                            text="Подробнее"
                            className="!w-fit"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide className={cls.slide}>
                    <a
                        href="/"
                        aria-label="Стаc Вячеслав"
                        title="Стаc Вячеслав"
                        itemProp="url"
                    >
                        <StaticImage
                            className="aspect-[320/380] sm:aspect-[340/467] rounded-2xl mb-3 sm:mb-6"
                            src="../../../../../shared/assets/img/couch.jpg"
                            formats={['auto', 'webp']}
                            alt="Стас Вячеслав"
                        />
                        <h3 className="text-24semi mb-2 sm:mb-3">
                            Стас
                            <br />
                            Вячеслав
                        </h3>
                        <p className="text-15med text-bluegrey600 mb-4 sm:mb-8">
                            Менеджер информационного моделирования еще какие приколы
                        </p>
                        <Button
                            theme={ButtonTheme.SECONDARY}
                            text="Подробнее"
                            className="!w-fit"
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
        </Section>

    );
};
