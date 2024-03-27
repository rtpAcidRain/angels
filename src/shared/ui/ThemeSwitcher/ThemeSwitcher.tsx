import React from 'react';
import ThemeLight from 'shared/assets/img/theme-light.png';
import ThemeDark from 'shared/assets/img/theme-black.png';

function getDefaultTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
}

export const ThemeSwitcher = () => {
    const [isDark, setIsDark] = React.useState(getDefaultTheme());

    React.useEffect(() => {
        if (isDark === 'dark') {
            document.getElementsByTagName('html')[0].classList.add('dark');
        } else {
            document.getElementsByTagName('html')[0].classList.remove('dark');
        }
        localStorage.setItem('theme', isDark);
    }, [isDark]);

    return (
        <button
            type="button"
            title="Сменить тему"
            aria-label="Сменить тему"
            className="global-toggle-switch min-w-6 h-6 block !hidden"
            onClick={() => setIsDark(isDark === 'dark' ? 'light' : 'dark')}
        >
            {isDark === 'dark' ? (
                <img src={ThemeDark} alt="light theme img" className="w-full h-full" />
            ) : (
                <img src={ThemeLight} alt="light theme img" className="w-full h-full" />
            )}
        </button>
    );
};
