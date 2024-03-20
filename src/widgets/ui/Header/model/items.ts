import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface HeaderItemType {
    path: string,
    text: string,
    // Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    // authOnly?: boolean,
}

export const HeaderItemsList: HeaderItemType[] = [
    // {
    //     path: RoutePath.main,
    //     text: 'Курсы',
    // },
    // {
    //     path: RoutePath.corporate_training,
    //     text: 'Корпоративное обучение',
    // },
    {
        path: RoutePath.about,
        text: 'О школе',
    },
    // {
    //     path: RoutePath.news,
    //     text: 'Пресс-центр',
    // },
    {
        path: RoutePath.contacts,
        text: 'Контакты',
    },
];
