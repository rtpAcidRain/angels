import React from 'react';

interface PlusProps {
    className?: string,
}

export const Plus = React.memo((props: PlusProps) => {
    const id = React.useId();
    const { className } = props;

    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 12H11.9611L5 12"
                stroke={`url(#${id})`}
                strokeWidth="1.4"
                strokeLinecap="round"
            />
            <path d="M12 5V12V19" stroke={`url(#${id}--second)`} strokeWidth="1.4" strokeLinecap="round" />
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
