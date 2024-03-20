import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';
import { StaticImage } from 'gatsby-plugin-image';

interface BrandsBlockProps {
    className?: string,
}

export const BrandsBlock = (props: BrandsBlockProps) => {
    const { className } = props;

    return (
        <Section
            className={classNames(
                'sm:grid grid-cols-12 gap-x-5 gap-y-[4.375rem] items-center',
                {},
                [className],
            )}
        >
            <h2 className="text-27semi sm:text-40semi mb-4 sm:mb-0 col-span-6">
                Сотрудничаем
                <br className="sm:hidden" />
                с ведущими
                <br className="hidden sm:block" />
                компаниями
            </h2>
            <p className="text-15med sm:text-20med max-w-[518px] mb-8 sm:mb-0 text-bluegrey600 col-span-6 sm:ml-auto">
                Собираем лучшие вакансии в отрасли, готовим к интервью рекомендуем вас
                компаниям - партнерам.
            </p>
            <div className="sm:pt-[0.625rem] mb-[2.375rem] sm:mb-0 col-span-12 flex gap-[31.6px] justify-between overflow-auto no-scrollbar">
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__raduga.png"
                        alt="Логотип компании Raduga"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__alcon.png"
                        alt="Логотип компании Alcon"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__transneft.png"
                        alt="Логотип компании A101"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__aq.png"
                        alt="Логотип компании iGuzzini"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__wain.png"
                        alt="Логотип компании Брайтэлек"
                    />
                </div>
            </div>
            <div className="col-span-12 flex gap-[31.6px] justify-between overflow-auto no-scrollbar">
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__neri.png"
                        alt="Логотип компании Neri"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__lsr.png"
                        alt="Логотип компании ЛСР"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__a101.png"
                        alt="Логотип компании A101"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__IG.png"
                        alt="Логотип компании iGuzzini"
                    />
                </div>
                <div className="min-w-[80.27px]">
                    <StaticImage
                        src="../../../../../shared/assets/img/brands__bright.png"
                        alt="Логотип компании Брайтэлек"
                    />
                </div>
            </div>
        </Section>
    );
};
