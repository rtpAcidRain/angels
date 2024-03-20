/** @type {import('tailwindcss').Config} */
// import ScrollPlugin from 'tailwind-scrollbar-hide';

// eslint-disable-next-line
const scaleMedia = '(min-width: 640px) and (max-aspect-ratio: 13 / 9) and (max-height: 499px), (min-width: 640px) and (max-aspect-ratio: 13 / 9) and (max-width: 1440px), (min-width: 640px) and (min-height: 416px) and (max-height: 499px), (min-width: 640px) and (min-height: 416px) and (max-width: 1440px), (min-width: 640px) and (max-height: 499px), (min-width: 640px) and (max-width: 1440px)';

export default {
    darkMode: 'selector',
    content: [
        './src/app/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/shared/**/*.{js,jsx,ts,tsx}',
        './src/widgets/**/*.{js,jsx,ts,tsx}',
        './src/features/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                sm: '2.5rem',
            },
            screens: {
                sm: '1500px',
            },
        },
        screens: {
            scaleMedia: {
                raw: `${scaleMedia}`,
            },
            lg: '1024px',
            sm: {
                raw: `${scaleMedia}, (min-width: 1440px)`,
            },
            smMax: { max: '640px' },
        },
        colors: {
            transparent: 'transparent',
            whitefull: '#fff',
            opasity50: 'rgba(200, 200, 200, 0.5)',
            grey50: '#fafafa',
            grey100: '#f5f5f5',
            grey200: '#eee',
            grey300: '#e0e0e0',
            grey400: '#bdbdbd',
            grey500: '#9e9e9e',
            grey600: '#757575',
            grey700: '#616161',
            grey800: '#424242',
            grey900: '#212121',
            bluegrey50: '#eceff1',
            bluegrey100: '#cfd8dc',
            bluegrey200: '#b0bec5',
            bluegrey300: '#90a4ae',
            bluegrey400: '#78909c',
            bluegrey500: '#607d8b',
            bluegrey600: '#546e7a',
            bluegrey700: '#455a64',
            bluegrey800: '#37474f',
            bluegrey900: '#263238',
            bluegrey1000: '#12191D',
            blue30: '#ecf7ff',
            blue50: '#e4f1ff',
            blue100: '#bbdefb',
            blue200: '#90caf9',
            blue300: '#99cafd',
            blue400: '#66b0fd',
            blue500: '#3395fc',
            blue600: '#007bfb',
            blue700: '#0062c9',
            blue800: '#004a97',
            blue900: '#003164',
            deeppurple50: '#f5f1fe',
            deeppurple100: '#d1c4e9',
            deeppurple200: '#b39ddb',
            deeppurple300: '#9575cd',
            deeppurple400: '#7e57c2',
            deeppurple500: '#673ab7',
            deeppurple600: '#5e35b1',
            deeppurple700: '#512da8',
            deeppurple800: '#4527a0',
            deeppurple900: '#311b92',
            amber50: '#fff8e1',
            amber100: '#ffecb3',
            amber200: '#ffe082',
            amber300: '#ffd54f',
            amber400: '#ffca28',
            amber500: '#ffc107',
            amber600: '#ffb300',
            amber700: '#ffa000',
            amber800: '#ff8f00',
            amber900: '#ff6f00',
            brown50: '#efebe9',
            brown100: '#d7ccc8',
            brown200: '#bcaaa4',
            brown300: '#a1887f',
            brown400: '#8d6e63',
            brown500: '#795548',
            brown600: '#6d4c41',
            brown700: '#5d4037',
            brown800: '#4e342e',
            brown900: '#3e2723',
            cyan50: '#e0f7fa',
            cyan100: '#b2ebf2',
            cyan200: '#80deea',
            cyan300: '#4dd0e1',
            cyan400: '#26c6da',
            cyan500: '#00bcd4',
            cyan600: '#00acc1',
            cyan700: '#0097a7',
            cyan800: '#00838f',
            cyan900: '#006064',
            deeporange50: '#fbe9e7',
            deeporange100: '#ffccbc',
            deeporange200: '#ffab91',
            deeporange300: '#ff8a65',
            deeporange400: '#ff7043',
            deeporange500: '#ff5722',
            deeporange600: '#f4511e',
            deeporange700: '#e64a19',
            deeporange800: '#d84315',
            green50: '#e9ffee',
            green100: '#c8e6c9',
            green200: '#a5d6a7',
            green300: '#81c784',
            green400: '#66bb6a',
            green500: '#4caf50',
            green600: '#43a047',
            green700: '#388e3c',
            green800: '#2e7d32',
            green900: '#1b5e20',
            lightblue50: '#e1f5fe',
            lightblue100: '#b3e5fc',
            lightblue200: '#81d4fa',
            lightblue300: '#4fc3f7',
            lightblue400: '#29b6f6',
            lightblue500: '#03a9f4',
            lightblue600: '#039be5',
            lightblue700: '#0288d1',
            lightblue800: '#0277bd',
            lightblue900: '#01579b',
            lightgreen50: '#f1f8e9',
            lightgreen100: '#dcedc8',
            lightgreen200: '#c5e1a5',
            lightgreen300: '#aed581',
            lightgreen400: '#9ccc65',
            lightgreen500: '#8bc34a',
            lightgreen600: '#7cb342',
            lightgreen700: '#689f38',
            lightgreen800: '#558b2f',
            lightgreen900: '#33691e',
            lime50: '#f9fbe7',
            lime100: '#f0f4c3',
            lime200: '#e6ee9c',
            lime300: '#dce775',
            lime400: '#d4e157',
            lime500: '#cddc39',
            lime600: '#c0ca33',
            lime700: '#afb42b',
            lime800: '#9e9d24',
            lime900: '#827717',
            orange50: '#fff3e0',
            orange100: '#ffe0b2',
            orange200: '#ffcc80',
            orange300: '#ffb74d',
            orange400: '#ffa726',
            orange500: '#ff9800',
            orange600: '#fb8c00',
            orange700: '#f57c00',
            orange800: '#ef6c00',
            orange900: '#e65100',
            pink50: '#fce4ec',
            pink100: '#f8bbd0',
            pink200: '#f48fb1',
            pink300: '#f06292',
            pink400: '#ec407a',
            pink500: '#e91e63',
            pink600: '#d81b60',
            pink700: '#c2185b',
            pink800: '#ad1457',
            pink900: '#880e4f',
            purple50: '#f3e5f5',
            purple100: '#e1bee7',
            purple200: '#ce93d8',
            purple300: '#ba68c8',
            purple400: '#ab47bc',
            purple500: '#9c27b0',
            purple600: '#8e24aa',
            purple700: '#7b1fa2',
            purple800: '#6a1b9a',
            purple900: '#4a148c',
            red50: '#ffebee',
            red100: '#ffcdd2',
            red200: '#ef9a9a',
            red300: '#e57373',
            red400: '#ef5350',
            red500: '#f44336',
            red600: '#e53935',
            red700: '#d32f2f',
            red800: '#c62828',
            red900: '#b71c1c',
            teal50: '#e0f2f1',
            teal100: '#b2dfdb',
            teal200: '#80cbc4',
            teal300: '#4db6ac',
            teal400: '#26a69a',
            teal500: '#009688',
            teal600: '#00897b',
            teal700: '#00796b',
            teal800: '#00695c',
            teal900: '#004d40',
            yellow50: '#fffde7',
            yellow100: '#fff9c4',
            yellow200: '#fff59d',
            yellow300: '#fff176',
            yellow400: '#ffee58',
            yellow500: '#ffeb3b',
            yellow600: '#fdd835',
            yellow700: '#fbc02d',
            yellow800: '#f9a825',
            yellow900: '#f57f17',
            indigo50: '#e8eaf6',
            indigo100: '#c5cae9',
            indigo200: '#9fa8da',
            indigo300: '#7986cb',
            indigo400: '#5c6bc0',
            indigo500: '#3f51b5',
            indigo600: '#3949ab',
            indigo700: '#303f9f',
            indigo800: '#283593',
            indigo900: '#1a237e',
        },
        fontSize: {
            '64med': [
                '4rem',
                {
                    lineHeight: '1em',
                    letterSpacing: '-0.02em',
                    fontWeight: '500',
                },
            ],
            '56semi': [
                '3.5rem',
                {
                    lineHeight: '1.1em',
                    letterSpacing: '-0.02em',
                    fontWeight: '600',
                },
            ],
            '40semi': [
                '2.5rem',
                {
                    lineHeight: '1.1em',
                    letterSpacing: '-0.04em',
                    fontWeight: '600',
                },
            ],
            '32semi': [
                '2rem',
                {
                    lineHeight: '1.15em',
                    letterSpacing: '-0.04em',
                    fontWeight: '600',
                },
            ],
            '27semi': [
                '1.6875rem',
                {
                    lineHeight: '1.1em',
                    letterSpacing: '-0.02em',
                    fontWeight: '600',
                },
            ],
            '27med': [
                '1.6875rem',
                {
                    lineHeight: '1.1em',
                    letterSpacing: '-0.02em',
                    fontWeight: '500',
                },
            ],
            '24semi': [
                '1.5rem',
                {
                    lineHeight: '1.15em',
                    letterSpacing: '-0.02em',
                    fontWeight: '600',
                },
            ],
            '20bold': [
                '1.25rem',
                {
                    lineHeight: '1.25em',
                    letterSpacing: '-0.02em',
                    fontWeight: '700',
                },
            ],
            '20semi': [
                '1.25rem',
                {
                    lineHeight: '1.2em',
                    letterSpacing: '-0.02em',
                    fontWeight: '600',
                },
            ],
            '20med': [
                '1.25rem',
                {
                    lineHeight: '1.25em',
                    letterSpacing: '-0.02em',
                    fontWeight: '500',
                },
            ],
            '17semi': [
                '1.0625rem',
                {
                    lineHeight: 'normal',
                    letterSpacing: '-0.02em',
                    fontWeight: '600',
                },
            ],
            '17med': [
                '1.0625rem',
                {
                    lineHeight: '1.4em',
                    letterSpacing: '-0.01em',
                    fontWeight: '420',
                },
            ],
            '17reg': [
                '1.0625rem',
                {
                    lineHeight: '1.45em',
                    letterSpacing: '-0.01em',
                    fontWeight: '400',
                },
            ],
            '15semi': [
                '0.9375rem',
                {
                    lineHeight: '1.35em',
                    letterSpacing: '-0.01em',
                    fontWeight: '600',
                },
            ],
            '15med': [
                '0.9375rem',
                {
                    lineHeight: '1.35em',
                    letterSpacing: '-0.01em',
                    fontWeight: '500',
                },
            ],
            '15med2': [
                '0.9375rem',
                {
                    lineHeight: '1.45em',
                    letterSpacing: '0',
                    fontWeight: '500',
                },
            ],
            '15reg': [
                '0.9375rem',
                {
                    lineHeight: '1.45em',
                    letterSpacing: '0',
                    fontWeight: '400',
                },
            ],
            '13med': [
                '0.8125rem',
                {
                    lineHeight: 'normal',
                    letterSpacing: '0',
                    fontWeight: '500',
                },
            ],
            '13reg': [
                '0.8125rem',
                {
                    lineHeight: 'normal',
                    letterSpacing: '0',
                    fontWeight: '400',
                },
            ],

        },

    },
    plugins: [
    ],
};
