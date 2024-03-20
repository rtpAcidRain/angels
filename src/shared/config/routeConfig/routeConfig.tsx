export enum AppRoutes {
    MAIN = 'main',

    // HEADER

    DIRECTIONS = 'directions',
    DIRECTIONS_DETAILS = 'directions_details',
    CORPORATETRAINING = 'corporate_training',
    ABOUT = 'about',
    NEWS = 'news',
    NEWS_DETAILS = 'news_details',
    CONTACTS = 'contacts',
    INFORM = 'inform',
    POLICY = 'policy',
    TERMOFUSE = 'termofuse',

    // -----------

    LOGIN = 'login',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.DIRECTIONS]: '/directions',
    [AppRoutes.DIRECTIONS_DETAILS]: '/directions/',
    [AppRoutes.CORPORATETRAINING]: '/corporate',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NEWS]: '/news',
    [AppRoutes.NEWS_DETAILS]: '/news/new',
    [AppRoutes.CONTACTS]: '/contacts',
    [AppRoutes.INFORM]: '/inform',
    [AppRoutes.POLICY]: '/policy',
    [AppRoutes.TERMOFUSE]: '/termofuse',
    [AppRoutes.LOGIN]: 'https://angels-school.ru/include/login',
    [AppRoutes.NOT_FOUND]: '/*',
};
