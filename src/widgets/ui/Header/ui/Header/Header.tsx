import { classNames } from 'shared/lib/classNames/classNames';
import React, { MutableRefObject, useRef } from 'react';
import { Link } from 'gatsby';
import Logo from 'shared/assets/svg/logo.inline.svg';
import LogoMob from 'shared/assets/svg/logoMob.inline.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { Login } from 'shared/assets/gradientSvg/login/Login';
import { HeaderLink } from 'widgets/ui/Header/ui/HeaderLink/HeaderLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { OpenNavButton } from 'features/MobileNav';
import SubMenu from 'shared/assets/img/directionSub.jpg';
import { ModalPositionEnum } from 'shared/ui/Modal/Modal';
import * as cls from './Header.module.css';
import { HeaderItemsList } from '../../model/items';

interface HeaderProps {
    className?: string,
}

export const Header = React.memo((props: HeaderProps) => {
    const { className } = props;
    const [subMenu, setSubMenu] = React.useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const triggerShowSubMenu = React.useCallback(() => {
        clearTimeout(timerRef.current);
        setSubMenu(true);
    }, []);

    const triggerHideSubMenu = React.useCallback(() => {
        timerRef.current = setTimeout(() => {
            setSubMenu(false);
        }, 300);
    }, []);

    React.useEffect(() => {
        clearTimeout(timerRef.current);
        if (subMenu) {
            return document.querySelector('html')?.classList.add('showsubmenu');
        }

        return document.querySelector('html')?.classList.remove('showsubmenu');
    }, [subMenu]);

    const itemsList = React.useMemo(() => HeaderItemsList.map((item) => (
        <li
            className="h-full"
            key={item.path}
        >
            <HeaderLink
                text={item.text}
                to={item.path}
            />
        </li>

    )), []);

    return (
        <header
            className={classNames(cls.header, {}, [
                className,
                'flex items-center bg-whitefull dark:bg-bluegrey1000 ',
            ])}
        >
            <nav className="container flex items-center lg:grid grid-cols-12 gap-5 h-full">
                <Link
                    to={RoutePath.main}
                    className="w-fit block col-span-2"
                    itemProp="url"
                    title="Главная страница"
                    aria-label="Главная страница"
                >
                    <Logo
                        className={classNames(cls.logo, {}, [
                            className,
                            'logo hidden sm:block',
                        ])}
                    />
                    <LogoMob
                        className={classNames(cls.logo, {}, [
                            className,
                            'logo sm:hidden',
                        ])}
                    />
                </Link>

                <ul className="hidden lg:flex col-span-8 justify-end h-full -mr-3">
                    <li className={classNames(cls.submenuContainer, {}, ['h-full'])}>
                        <HeaderLink className={cls.subMenuLink} disabled text="Курсы" to="/directions/" onMouseEnter={triggerShowSubMenu} onMouseLeave={triggerHideSubMenu} />
                        <span className={classNames(cls.submenu, { [cls.showSub]: subMenu }, [])}>
                            <span className="submenu-2 bg-whitefull dark:bg-bluegrey1000 p-4 rounded-xl flex gap-[0.875rem]" onMouseEnter={triggerShowSubMenu} onMouseLeave={triggerHideSubMenu}>
                                <span className="rounded-xl overflow-hidden" style={{ width: '154px', height: '132px' }}>
                                    <img src={SubMenu} alt="Курсы" className="" />
                                </span>
                                <ul className="text-15med">
                                    <li>
                                        <Link onClick={() => setSubMenu(false)} to="/directions/architectual" className="rounded-[0.375rem] p-2 hover:bg-blue50 dark:hover:bg-bluegrey700 transition-colors block whitespace-nowrap">Архитектурный светодизайнер</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setSubMenu(false)} to="/directions/svet" className="rounded-[0.375rem] p-2 hover:bg-blue50 dark:hover:bg-bluegrey700 transition-colors block whitespace-nowrap">Светодизайнер</Link>
                                    </li>
                                </ul>
                            </span>
                        </span>
                        <span className={cls.blur} />
                    </li>
                    {itemsList}
                </ul>

                <div className="hidden lg:flex items-center gap-6 justify-end col-span-2 ">
                    {/* <button type="button" title="Поиск" aria-label="Поиск"> */}
                    {/*    <Search className="w-6 h-6 stroke-bluegrey900" /> */}
                    {/* </button> */}
                    <ThemeSwitcher />
                    <Button to={RoutePath.login} text="Войти" Icon={Login} sideLink />
                </div>
                <div className="flex lg:hidden items-center gap-4 ml-auto">
                    <a
                        href={RoutePath.login}
                        className="w-fit block text-17med text-bluegrey900"
                        itemProp="url"
                        title="Войти"
                        aria-label="Войти"
                    >
                        Войти
                    </a>
                    <OpenNavButton />
                </div>
            </nav>
        </header>
    );
});
