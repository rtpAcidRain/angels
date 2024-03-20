import React from 'react';

interface LoginProps {
    className?: string,
}

export const Login = React.memo((props: LoginProps) => {
    const id = React.useId();
    const { className } = props;

    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L14 12" stroke={`url(#${id})`} strokeWidth="1.4" strokeLinecap="round" />
            <line
                x1="14.818"
                y1="12"
                x2="11.6665"
                y2="8.84853"
                stroke={`url(#${id})`}
                strokeWidth="1.2"
                strokeLinecap="round"
            />
            <line
                x1="0.6"
                y1="-0.6"
                x2="5.05685"
                y2="-0.6"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 15.6665 12)"
                stroke={`url(#${id})`}
                strokeWidth="1.2"
                strokeLinecap="round"
            />
            <path
                d="M12.5 3C14.0434 3 15.505 3 16.6773 3C18.1941 3 19.4702 4.13089 19.6158 5.64065C19.7976 7.52589 20 10.0608 20 12C20 13.9392 19.7976 16.4741 19.6158 18.3593C19.4702 19.8691 18.1941 21 16.6773 21C15.505 21 14.0434 21 12.5 21"
                stroke={`url(#${id})`}
                strokeWidth="1.4"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient
                    id={id}
                    x1="19"
                    y1="11.9789"
                    x2="13.2413"
                    y2="4.58304"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="1" />
                </linearGradient>
                <linearGradient
                    id={`${id}--second`}
                    x1="11.9789"
                    y1="5"
                    x2="4.58304"
                    y2="10.7587"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="1" />
                </linearGradient>
            </defs>
        </svg>

    );
});
