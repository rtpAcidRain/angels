import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Logo from 'shared/assets/svg/logo.inline.svg';
import { Link } from 'gatsby';
import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import * as cls from './Footer.module.css';

interface FooterProps {
    className?: string,
}

export const Footer = (props: FooterProps) => {
    const { className } = props;

    return (

        <footer
            data-scroll-section
            className={classNames(cls.footer, {}, [
                className,
                'pt-8 sm:pt-[3.5625rem] pb-6 sm:pb-[2.125rem] bg-blue30 dark:bg-bluegrey900',
            ])}
        >
            <div data-scroll className={classNames(cls.footerContainer, {}, ['container relative'])}>
                <div className="relative z-10">
                    <Link to={RoutePath.main} className="w-fit block col-span-2">
                        <Logo className={classNames(cls.logo, {}, [className, 'logo'])} />
                    </Link>
                    <div className="pt-8 pb-[1.375rem] sm:pb-[1.9375rem] sm:pt-[3.75rem]">
                        <div className="flex flex-col gap-[1.625rem] sm:grid lg:grid-cols-12 sm:gap-5">
                            <div className="col-span-4 ">
                                <h6 className="text-13med text-bluegrey400 mb-3 sm:mb-[1.125rem]">Направления</h6>
                                <ul className="text-17med flex flex-col gap-[6px] sm:gap-y-3 sm:grid grid-cols-2 sm:gap-x-5">
                                    <li>
                                        <Link to="/">Программирование</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Дизайн</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Маркетинг</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Менеджмент</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Английсский язык</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Анализ данных</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-4">
                                <h6 className="text-13med text-bluegrey400 mb-3 sm:mb-[1.125rem]">О нас</h6>
                                <ul className="text-17med flex flex-col gap-[6px] sm:gap-y-3 sm:grid grid-cols-2 sm:gap-x-5">
                                    <li>
                                        <Link to="/">Лицензия</Link>
                                    </li>
                                    <li className="sm:col-start-1 sm:row-start-2">
                                        <Link to="/">
                                            Правила
                                            <br />
                                            рекомендаций
                                        </Link>
                                    </li>
                                    <li className="sm:col-start-1 sm:row-start-3">
                                        <Link to="/">Для СМИ</Link>
                                    </li>
                                    <li className="sm:col-start-1 sm:row-start-4">
                                        <Link to="/">Менеджмент</Link>
                                    </li>
                                    <li className="sm:text-nowrap">
                                        <Link to="/">Правовая информация</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Отзывы</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:col-span-4 ">
                                <Button text="Записаться на курс" className="!hidden sm:!flex mb-4 lg:ml-auto" to="/" />
                                <div className="flex gap-3 sm:gap-4 lg:ml-auto lg:w-fit">
                                    <a href="/" itemProp="url" className="w-10 h-10 sm:w-12 sm:h-12 rounded-[0.625rem] sm:rounded-xl border border-bluegrey400 transition-colors hover:border-blue200 flex items-center justify-center">
                                        <svg
                                            className="h-[0.625rem] sm:h-3 w-auto"
                                            viewBox="0 0 22 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.8833 10.8385C21.8567 10.7836 21.8319 10.7381 21.8088 10.7016C21.4271 10.0443 20.6977 9.23753 19.621 8.28103L19.5982 8.25913L19.5868 8.24839L19.5794 8.24129C19.5768 8.23879 19.5732 8.23738 19.5694 8.23738C19.5658 8.23738 19.5623 8.23601 19.5597 8.23365C19.0734 7.79031 18.7653 7.49208 18.6361 7.33919C18.399 7.04711 18.3458 6.75148 18.4754 6.45193C18.567 6.2256 18.9109 5.74764 19.5064 5.01739C19.8196 4.63038 20.0676 4.3202 20.2508 4.08652C21.467 2.54061 22.049 1.5084 21.9968 0.989559C21.9884 0.905963 21.9462 0.830078 21.9008 0.757435C21.855 0.691687 21.7366 0.631539 21.5459 0.576685C21.3548 0.521945 21.1105 0.512893 20.8126 0.549373L17.746 0.569627C17.5925 0.570641 17.4341 0.543708 17.2846 0.576685C17.2338 0.587929 17.1959 0.596302 17.1711 0.601794C17.1475 0.607005 17.1248 0.614832 17.1033 0.625113C17.0866 0.633062 17.0708 0.642434 17.0561 0.653106L17.0327 0.670014C16.9945 0.691802 16.9525 0.730124 16.9066 0.784901C16.861 0.839487 16.8229 0.903547 16.7924 0.976545C16.4332 1.86001 16.0249 2.6814 15.5666 3.44069C15.284 3.89345 15.0245 4.28583 14.7876 4.61807C14.5509 4.95018 14.3523 5.19488 14.1921 5.35173C14.0316 5.50874 13.8868 5.63452 13.7567 5.72954C13.6269 5.82459 13.5277 5.86475 13.4591 5.85006C13.3297 5.82243 13.2011 5.77671 13.1139 5.68382C13.0733 5.64059 13.0375 5.59195 13.0066 5.53789C12.9415 5.42473 12.8977 5.2823 12.8748 5.11072C12.852 4.93902 12.8385 4.79134 12.8346 4.66717C12.8311 4.54315 12.8327 4.36773 12.8405 4.14141C12.8484 3.91497 12.852 3.76176 12.852 3.68144C12.852 3.40394 12.8576 3.10278 12.869 2.77788C12.8805 2.45297 12.8899 2.19554 12.8977 2.00589C12.9055 1.81605 12.9091 1.6152 12.9091 1.40345C12.9091 1.19171 12.8956 1.02565 12.869 0.90512C12.8427 0.784747 12.8023 0.667904 12.749 0.554628C12.6955 0.441467 12.6171 0.35393 12.5142 0.291788C12.4111 0.229722 12.283 0.180468 12.1305 0.143873C11.7257 0.0562975 11.2103 0.00892337 10.584 0.00155832C9.16374 -0.0130184 8.25113 0.0746717 7.84641 0.264514C7.68605 0.344724 7.54094 0.454317 7.41119 0.592949C7.2737 0.753637 7.25452 0.841328 7.35378 0.855751C7.73901 0.910927 8.02965 1.03068 8.22593 1.21491C8.29966 1.28412 8.35038 1.37062 8.39617 1.45815C8.44969 1.55305 8.50313 1.72107 8.55661 1.96197C8.61001 2.20287 8.64447 2.46935 8.65963 2.76127C8.69775 3.29435 8.69775 3.75068 8.65963 4.13029C8.6214 4.51005 8.58529 4.80568 8.55083 5.01743C8.51637 5.22917 8.46485 5.40076 8.39617 5.53214C8.32736 5.66356 8.28159 5.74388 8.25864 5.77304C8.23573 5.80219 8.21663 5.82056 8.20147 5.82778C8.10221 5.86414 7.99898 5.88267 7.89214 5.88267C7.78514 5.88267 7.6554 5.8315 7.5027 5.72923C7.35005 5.62696 7.19161 5.48649 7.0274 5.30758C6.86319 5.12863 6.678 4.87857 6.47175 4.55734C6.26565 4.23612 6.05181 3.85647 5.83035 3.41841L5.64713 3.10071C5.53259 2.89633 5.37612 2.59874 5.17757 2.2082C4.97889 1.8175 4.80329 1.43958 4.65063 1.07452C4.58961 0.921192 4.49794 0.804465 4.37577 0.724139L4.31844 0.691188C4.28033 0.662035 4.21915 0.631078 4.13522 0.598089C3.96667 0.532015 3.77972 0.527609 3.59675 0.528879L0.733227 0.548759C0.412511 0.548759 0.194901 0.618228 0.0803196 0.756975L0.0344628 0.822608C0.0115545 0.859165 0 0.917549 0 0.997912C0 1.07824 0.0229083 1.17682 0.0687651 1.29355C0.526932 2.32312 1.02518 3.31606 1.5635 4.27252C2.10183 5.22898 2.56963 5.99944 2.96661 6.58319C3.36367 7.16737 3.7684 7.71872 4.18079 8.23695C4.59318 8.75539 4.86616 9.08762 4.99972 9.23358C5.13343 9.3798 5.23847 9.48913 5.31482 9.56213L5.60123 9.82493C5.7845 10.0002 6.05362 10.2101 6.40872 10.4546C6.7639 10.6993 7.15711 10.9402 7.58856 11.1777C8.02009 11.4148 8.5221 11.6083 9.09489 11.7579C9.6676 11.9077 10.225 11.9679 10.7672 11.9389H12.0845C12.3517 11.9168 12.5541 11.8365 12.6917 11.6978L12.7372 11.6429C12.7679 11.5994 12.7966 11.5317 12.8231 11.4406C12.8499 11.3493 12.8632 11.2488 12.8632 11.1394C12.8554 10.8255 12.8803 10.5426 12.9375 10.2907C12.9946 10.0389 13.0596 9.8491 13.1324 9.72124C13.2052 9.59351 13.2872 9.48571 13.3786 9.39833C13.4701 9.31076 13.5354 9.2577 13.5737 9.23945C13.6117 9.22107 13.6421 9.2086 13.665 9.20112C13.8482 9.14274 14.0639 9.19928 14.3123 9.37102C14.5606 9.5426 14.7934 9.75446 15.0111 10.0063C15.2288 10.2583 15.4903 10.541 15.7957 10.8549C16.1013 11.1689 16.3685 11.4024 16.5975 11.5559L16.8265 11.6873C16.9794 11.775 17.178 11.8553 17.4224 11.9283C17.8346 12.0516 18.2818 11.9798 18.7149 11.9734L20.9959 11.9394C21.2859 11.9394 21.5116 11.8934 21.6716 11.8023C21.832 11.7111 21.9273 11.6105 21.9581 11.5012C21.9887 11.3917 21.9904 11.2675 21.9639 11.1286C21.9367 10.9901 21.91 10.8932 21.8833 10.8385Z"
                                                fill="#263238"
                                            />
                                        </svg>
                                    </a>
                                    <a href="/" itemProp="url" className="w-10 h-10 sm:w-12 sm:h-12 rounded-[0.625rem] sm:rounded-xl border border-bluegrey400 transition-colors hover:border-blue200 flex items-center justify-center">
                                        <svg
                                            className="h-[0.625rem] sm:h-3 w-auto"
                                            viewBox="0 0 22 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.8833 10.8385C21.8567 10.7836 21.8319 10.7381 21.8088 10.7016C21.4271 10.0443 20.6977 9.23753 19.621 8.28103L19.5982 8.25913L19.5868 8.24839L19.5794 8.24129C19.5768 8.23879 19.5732 8.23738 19.5694 8.23738C19.5658 8.23738 19.5623 8.23601 19.5597 8.23365C19.0734 7.79031 18.7653 7.49208 18.6361 7.33919C18.399 7.04711 18.3458 6.75148 18.4754 6.45193C18.567 6.2256 18.9109 5.74764 19.5064 5.01739C19.8196 4.63038 20.0676 4.3202 20.2508 4.08652C21.467 2.54061 22.049 1.5084 21.9968 0.989559C21.9884 0.905963 21.9462 0.830078 21.9008 0.757435C21.855 0.691687 21.7366 0.631539 21.5459 0.576685C21.3548 0.521945 21.1105 0.512893 20.8126 0.549373L17.746 0.569627C17.5925 0.570641 17.4341 0.543708 17.2846 0.576685C17.2338 0.587929 17.1959 0.596302 17.1711 0.601794C17.1475 0.607005 17.1248 0.614832 17.1033 0.625113C17.0866 0.633062 17.0708 0.642434 17.0561 0.653106L17.0327 0.670014C16.9945 0.691802 16.9525 0.730124 16.9066 0.784901C16.861 0.839487 16.8229 0.903547 16.7924 0.976545C16.4332 1.86001 16.0249 2.6814 15.5666 3.44069C15.284 3.89345 15.0245 4.28583 14.7876 4.61807C14.5509 4.95018 14.3523 5.19488 14.1921 5.35173C14.0316 5.50874 13.8868 5.63452 13.7567 5.72954C13.6269 5.82459 13.5277 5.86475 13.4591 5.85006C13.3297 5.82243 13.2011 5.77671 13.1139 5.68382C13.0733 5.64059 13.0375 5.59195 13.0066 5.53789C12.9415 5.42473 12.8977 5.2823 12.8748 5.11072C12.852 4.93902 12.8385 4.79134 12.8346 4.66717C12.8311 4.54315 12.8327 4.36773 12.8405 4.14141C12.8484 3.91497 12.852 3.76176 12.852 3.68144C12.852 3.40394 12.8576 3.10278 12.869 2.77788C12.8805 2.45297 12.8899 2.19554 12.8977 2.00589C12.9055 1.81605 12.9091 1.6152 12.9091 1.40345C12.9091 1.19171 12.8956 1.02565 12.869 0.90512C12.8427 0.784747 12.8023 0.667904 12.749 0.554628C12.6955 0.441467 12.6171 0.35393 12.5142 0.291788C12.4111 0.229722 12.283 0.180468 12.1305 0.143873C11.7257 0.0562975 11.2103 0.00892337 10.584 0.00155832C9.16374 -0.0130184 8.25113 0.0746717 7.84641 0.264514C7.68605 0.344724 7.54094 0.454317 7.41119 0.592949C7.2737 0.753637 7.25452 0.841328 7.35378 0.855751C7.73901 0.910927 8.02965 1.03068 8.22593 1.21491C8.29966 1.28412 8.35038 1.37062 8.39617 1.45815C8.44969 1.55305 8.50313 1.72107 8.55661 1.96197C8.61001 2.20287 8.64447 2.46935 8.65963 2.76127C8.69775 3.29435 8.69775 3.75068 8.65963 4.13029C8.6214 4.51005 8.58529 4.80568 8.55083 5.01743C8.51637 5.22917 8.46485 5.40076 8.39617 5.53214C8.32736 5.66356 8.28159 5.74388 8.25864 5.77304C8.23573 5.80219 8.21663 5.82056 8.20147 5.82778C8.10221 5.86414 7.99898 5.88267 7.89214 5.88267C7.78514 5.88267 7.6554 5.8315 7.5027 5.72923C7.35005 5.62696 7.19161 5.48649 7.0274 5.30758C6.86319 5.12863 6.678 4.87857 6.47175 4.55734C6.26565 4.23612 6.05181 3.85647 5.83035 3.41841L5.64713 3.10071C5.53259 2.89633 5.37612 2.59874 5.17757 2.2082C4.97889 1.8175 4.80329 1.43958 4.65063 1.07452C4.58961 0.921192 4.49794 0.804465 4.37577 0.724139L4.31844 0.691188C4.28033 0.662035 4.21915 0.631078 4.13522 0.598089C3.96667 0.532015 3.77972 0.527609 3.59675 0.528879L0.733227 0.548759C0.412511 0.548759 0.194901 0.618228 0.0803196 0.756975L0.0344628 0.822608C0.0115545 0.859165 0 0.917549 0 0.997912C0 1.07824 0.0229083 1.17682 0.0687651 1.29355C0.526932 2.32312 1.02518 3.31606 1.5635 4.27252C2.10183 5.22898 2.56963 5.99944 2.96661 6.58319C3.36367 7.16737 3.7684 7.71872 4.18079 8.23695C4.59318 8.75539 4.86616 9.08762 4.99972 9.23358C5.13343 9.3798 5.23847 9.48913 5.31482 9.56213L5.60123 9.82493C5.7845 10.0002 6.05362 10.2101 6.40872 10.4546C6.7639 10.6993 7.15711 10.9402 7.58856 11.1777C8.02009 11.4148 8.5221 11.6083 9.09489 11.7579C9.6676 11.9077 10.225 11.9679 10.7672 11.9389H12.0845C12.3517 11.9168 12.5541 11.8365 12.6917 11.6978L12.7372 11.6429C12.7679 11.5994 12.7966 11.5317 12.8231 11.4406C12.8499 11.3493 12.8632 11.2488 12.8632 11.1394C12.8554 10.8255 12.8803 10.5426 12.9375 10.2907C12.9946 10.0389 13.0596 9.8491 13.1324 9.72124C13.2052 9.59351 13.2872 9.48571 13.3786 9.39833C13.4701 9.31076 13.5354 9.2577 13.5737 9.23945C13.6117 9.22107 13.6421 9.2086 13.665 9.20112C13.8482 9.14274 14.0639 9.19928 14.3123 9.37102C14.5606 9.5426 14.7934 9.75446 15.0111 10.0063C15.2288 10.2583 15.4903 10.541 15.7957 10.8549C16.1013 11.1689 16.3685 11.4024 16.5975 11.5559L16.8265 11.6873C16.9794 11.775 17.178 11.8553 17.4224 11.9283C17.8346 12.0516 18.2818 11.9798 18.7149 11.9734L20.9959 11.9394C21.2859 11.9394 21.5116 11.8934 21.6716 11.8023C21.832 11.7111 21.9273 11.6105 21.9581 11.5012C21.9887 11.3917 21.9904 11.2675 21.9639 11.1286C21.9367 10.9901 21.91 10.8932 21.8833 10.8385Z"
                                                fill="#263238"
                                            />
                                        </svg>
                                    </a>
                                    <a href="/" itemProp="url" className="w-10 h-10 sm:w-12 sm:h-12 rounded-[0.625rem] sm:rounded-xl border border-bluegrey400 transition-colors hover:border-blue200 flex items-center justify-center">
                                        <svg
                                            className="h-[0.625rem] sm:h-3 w-auto"
                                            viewBox="0 0 22 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.8833 10.8385C21.8567 10.7836 21.8319 10.7381 21.8088 10.7016C21.4271 10.0443 20.6977 9.23753 19.621 8.28103L19.5982 8.25913L19.5868 8.24839L19.5794 8.24129C19.5768 8.23879 19.5732 8.23738 19.5694 8.23738C19.5658 8.23738 19.5623 8.23601 19.5597 8.23365C19.0734 7.79031 18.7653 7.49208 18.6361 7.33919C18.399 7.04711 18.3458 6.75148 18.4754 6.45193C18.567 6.2256 18.9109 5.74764 19.5064 5.01739C19.8196 4.63038 20.0676 4.3202 20.2508 4.08652C21.467 2.54061 22.049 1.5084 21.9968 0.989559C21.9884 0.905963 21.9462 0.830078 21.9008 0.757435C21.855 0.691687 21.7366 0.631539 21.5459 0.576685C21.3548 0.521945 21.1105 0.512893 20.8126 0.549373L17.746 0.569627C17.5925 0.570641 17.4341 0.543708 17.2846 0.576685C17.2338 0.587929 17.1959 0.596302 17.1711 0.601794C17.1475 0.607005 17.1248 0.614832 17.1033 0.625113C17.0866 0.633062 17.0708 0.642434 17.0561 0.653106L17.0327 0.670014C16.9945 0.691802 16.9525 0.730124 16.9066 0.784901C16.861 0.839487 16.8229 0.903547 16.7924 0.976545C16.4332 1.86001 16.0249 2.6814 15.5666 3.44069C15.284 3.89345 15.0245 4.28583 14.7876 4.61807C14.5509 4.95018 14.3523 5.19488 14.1921 5.35173C14.0316 5.50874 13.8868 5.63452 13.7567 5.72954C13.6269 5.82459 13.5277 5.86475 13.4591 5.85006C13.3297 5.82243 13.2011 5.77671 13.1139 5.68382C13.0733 5.64059 13.0375 5.59195 13.0066 5.53789C12.9415 5.42473 12.8977 5.2823 12.8748 5.11072C12.852 4.93902 12.8385 4.79134 12.8346 4.66717C12.8311 4.54315 12.8327 4.36773 12.8405 4.14141C12.8484 3.91497 12.852 3.76176 12.852 3.68144C12.852 3.40394 12.8576 3.10278 12.869 2.77788C12.8805 2.45297 12.8899 2.19554 12.8977 2.00589C12.9055 1.81605 12.9091 1.6152 12.9091 1.40345C12.9091 1.19171 12.8956 1.02565 12.869 0.90512C12.8427 0.784747 12.8023 0.667904 12.749 0.554628C12.6955 0.441467 12.6171 0.35393 12.5142 0.291788C12.4111 0.229722 12.283 0.180468 12.1305 0.143873C11.7257 0.0562975 11.2103 0.00892337 10.584 0.00155832C9.16374 -0.0130184 8.25113 0.0746717 7.84641 0.264514C7.68605 0.344724 7.54094 0.454317 7.41119 0.592949C7.2737 0.753637 7.25452 0.841328 7.35378 0.855751C7.73901 0.910927 8.02965 1.03068 8.22593 1.21491C8.29966 1.28412 8.35038 1.37062 8.39617 1.45815C8.44969 1.55305 8.50313 1.72107 8.55661 1.96197C8.61001 2.20287 8.64447 2.46935 8.65963 2.76127C8.69775 3.29435 8.69775 3.75068 8.65963 4.13029C8.6214 4.51005 8.58529 4.80568 8.55083 5.01743C8.51637 5.22917 8.46485 5.40076 8.39617 5.53214C8.32736 5.66356 8.28159 5.74388 8.25864 5.77304C8.23573 5.80219 8.21663 5.82056 8.20147 5.82778C8.10221 5.86414 7.99898 5.88267 7.89214 5.88267C7.78514 5.88267 7.6554 5.8315 7.5027 5.72923C7.35005 5.62696 7.19161 5.48649 7.0274 5.30758C6.86319 5.12863 6.678 4.87857 6.47175 4.55734C6.26565 4.23612 6.05181 3.85647 5.83035 3.41841L5.64713 3.10071C5.53259 2.89633 5.37612 2.59874 5.17757 2.2082C4.97889 1.8175 4.80329 1.43958 4.65063 1.07452C4.58961 0.921192 4.49794 0.804465 4.37577 0.724139L4.31844 0.691188C4.28033 0.662035 4.21915 0.631078 4.13522 0.598089C3.96667 0.532015 3.77972 0.527609 3.59675 0.528879L0.733227 0.548759C0.412511 0.548759 0.194901 0.618228 0.0803196 0.756975L0.0344628 0.822608C0.0115545 0.859165 0 0.917549 0 0.997912C0 1.07824 0.0229083 1.17682 0.0687651 1.29355C0.526932 2.32312 1.02518 3.31606 1.5635 4.27252C2.10183 5.22898 2.56963 5.99944 2.96661 6.58319C3.36367 7.16737 3.7684 7.71872 4.18079 8.23695C4.59318 8.75539 4.86616 9.08762 4.99972 9.23358C5.13343 9.3798 5.23847 9.48913 5.31482 9.56213L5.60123 9.82493C5.7845 10.0002 6.05362 10.2101 6.40872 10.4546C6.7639 10.6993 7.15711 10.9402 7.58856 11.1777C8.02009 11.4148 8.5221 11.6083 9.09489 11.7579C9.6676 11.9077 10.225 11.9679 10.7672 11.9389H12.0845C12.3517 11.9168 12.5541 11.8365 12.6917 11.6978L12.7372 11.6429C12.7679 11.5994 12.7966 11.5317 12.8231 11.4406C12.8499 11.3493 12.8632 11.2488 12.8632 11.1394C12.8554 10.8255 12.8803 10.5426 12.9375 10.2907C12.9946 10.0389 13.0596 9.8491 13.1324 9.72124C13.2052 9.59351 13.2872 9.48571 13.3786 9.39833C13.4701 9.31076 13.5354 9.2577 13.5737 9.23945C13.6117 9.22107 13.6421 9.2086 13.665 9.20112C13.8482 9.14274 14.0639 9.19928 14.3123 9.37102C14.5606 9.5426 14.7934 9.75446 15.0111 10.0063C15.2288 10.2583 15.4903 10.541 15.7957 10.8549C16.1013 11.1689 16.3685 11.4024 16.5975 11.5559L16.8265 11.6873C16.9794 11.775 17.178 11.8553 17.4224 11.9283C17.8346 12.0516 18.2818 11.9798 18.7149 11.9734L20.9959 11.9394C21.2859 11.9394 21.5116 11.8934 21.6716 11.8023C21.832 11.7111 21.9273 11.6105 21.9581 11.5012C21.9887 11.3917 21.9904 11.2675 21.9639 11.1286C21.9367 10.9901 21.91 10.8932 21.8833 10.8385Z"
                                                fill="#263238"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-[2.375rem] sm:grid sm:grid-cols-12 sm:gap-5">
                            <div className="col-span-6  justify-self-end tye sm:text-end">
                                <div className="mb-[0.8125rem]">
                                    <a className="text-17semi sm:text-20bold" itemProp="url" href="tel:+74951595904">8 (495) 159-59-04</a>
                                    <p className="text-13med text-bluegrey400 text-13med">Контактный центр</p>
                                </div>
                                <div>
                                    <a className="text-17semi sm:text-20bold" href="tel:+74951595904">+7 495 159 59 04</a>
                                    <p className="text-13med text-bluegrey400 text-13med">Контактный центр</p>
                                </div>
                            </div>
                            <div className="col-start-1 row-start-1 col-span-6 sm:grid">
                                <a className="text-15semi sm:text-17med mt-[0.8125rem] sm:mt-[0.9375rem] block w-fit sm:row-start-3" itemProp="url" href="mailto:angels-school@yandex.ru">angels-school@yandex.ru</a>
                                <p className="text-13med mt-6 sm:mt-[0.3125rem]">
                                    г. Москва, ул. Тимура Фрунзе, дом 11, корпус 2, этаж 1,
                                    <br className="hidden sm:block" />
                                    помещение 1, комната 75
                                </p>
                                <a href="/" itemProp="url" className="text-15reg sm:text-17med pb-[1px] border-b border-dashed border-bluegrey400 mt-4 block w-fit">Показать на картах</a>
                            </div>
                        </div>
                        <Button text="Записаться на курс" className=" sm:!hidden mt-[22px]" to="/" />
                    </div>
                    <div className="pt-[1.4375rem] border-t border-bluegrey200 sm:border-blue200 sm:grid grid-cols-12 gap-x-5">
                        <ul className="flex gap-2 sm:gap-x-4 sm:gap-y-[0.875rem] flex-col sm:flex-row sm:flex-wrap text-13med col-span-6 max-w-[483px] h-fit mb-[2.125rem]">
                            <li><Link to={RoutePath.policy} itemProp="url">Политика конфиденциальности</Link></li>
                            <li><Link to={RoutePath.termofuse} itemProp="url">Политика пользовательского соглашения</Link></li>
                            <li><a href="/" itemProp="url">Рекомендательные технологии</a></li>
                            <li><a href="/" itemProp="url">Оплата</a></li>
                            <li><a href="/" itemProp="url">Оферта</a></li>
                            <li><a href="/" itemProp="url">Контакты</a></li>
                            <li><Link to={RoutePath.inform} itemProp="url">Правовая информация</Link></li>
                            <li><a href="/" itemProp="url">Сведения об образовательной организации</a></li>
                        </ul>
                        <div className="text-13med flex flex-col gap-[1.125rem] col-span-6 row-span-2">
                            <p>
                                Мы используем файлы cookie, для персонализации сервисов и повышения удобства пользования сайтом. Если вы не согласны на их использование, поменяйте настройки браузера.
                            </p>
                            <p>Образовательные услуги оказываются ЧОУ ДПО «Образовательные технологии «Скилбокс (Коробка навыков)» на основании Лицензии № Л035-01298-77/00179609 от 19 января 2022 года.</p>
                            <p>
                                Образовательные услуги оказываются в соответствии с Федеральным законом от 04.05.2011 № 99-ФЗ «О лицензировании отдельных видов деятельности».
                            </p>
                            <p>
                                Правообладатель ПО LMS «Angels school» ООО «Энжелс скул».
                            </p>
                        </div>
                        <p className="text-15med text-bluegrey400 col-span-6 h-fit mt-[1.875rem] sm:mt-auto">
                            с. Angels school, 2024
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
