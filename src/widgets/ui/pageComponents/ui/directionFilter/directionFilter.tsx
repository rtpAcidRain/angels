import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Section } from 'shared/ui/Section/Section';
import Bg1 from 'shared/assets/img/directionArch.webp';
import Bg2 from 'shared/assets/img/directionSvetodis.webp';
import { DirectionLink } from './ui/directionLink/directionLink';
import * as cls from './directionFilter.module.css';

interface DirectionFilterProps {
  className?: string;
}

const directionArray = [
    {
        title: 'Архитектурный\n'
            + 'светодизайнер',
        tag: 'Светодизайн',
        to: '/directions/architectual',
        bg: `url('${Bg1}')`,
        top: false,
        tippy: {
            title: 'ДПО',
            description: 'Профильная подготовка \n специалистов в рамках программ \n повышения квалификации и \n переподготовке профессионалов',
        },
    },
    {
        title: 'Светодизайнер',
        tag: 'Светодизайн',
        to: '/directions/svet',
        bg: `url('${Bg2}')`,
        top: false,
        tippy: {
            title: 'ДО',
            description: 'Доп. образование направлено\n на формирование и развитие\n определенных знаний, профильное\n образование не требуется',
        },
    },
];

// const tabArray: string[] = ['Светодизайн', 'Менеджмент', 'Инженеринг', 'Продажи'];

export const DirectionFilter = React.memo(
    (props: DirectionFilterProps) => {
        const { className } = props;
        // const [active, setActive] = React.useState<string>('all');

        const renderLinks = React.useCallback(() => directionArray.map(
            (el, i) => <DirectionLink key={el.title} bg={el.bg} title={el.title} tag={el.tag} to={el.to} tippyTitle={el.tippy.title} tippyDesc={el.tippy.description} currentTag="all" top={el.top} />,
        ), []);

        return (
            // <Section className={classNames(cls.directionFilter, {}, [className, '!px-0'])}>
            //     <div className="container flex justify-between pb-[26px] sm:pb-[1.875rem]">
            //         <h2 className="text-27semi sm:text-40semi h-fit">Наши направления</h2>
            //          <Button theme={ButtonTheme.SECONDARY} text="Подробнее" className="!hidden sm:!flex" />
            //     </div>
            //     <header>
            //
            //         <Tabs tabArray={tabArray} active={active} setActive={setActive} className="mb-4 sm:mb-5" />
            //     </header>
            //     <div className="container flex flex-col gap-3 sm:gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            //         {renderLinks()}
            //     </div>
            //     <footer className="px-5 mt-5 sm:mt-10">
            //         <Button theme={ButtonTheme.SECONDARY} text="Показать больше" className="mx-auto" />
            //     </footer>
            // </Section>
            <Section className={classNames(cls.directionFilter, {}, [className])}>
                <h2 className="text-27semi sm:text-40semi h-fit  mb-10 sm:mb-[3.375rem]">Наши курсы</h2>
                <div className="flex flex-col gap-3 sm:gap-5 sm:grid sm:grid-cols-2">
                    {renderLinks()}
                </div>
            </Section>
        );
    },
);
