import { device, deviceSize } from './responsive';

const lightTheme = {
    bg: {
        primary: '#008080', // Windows 95 pozadí
        secondary: 'var(--ms-link-box-bg)',
    },
    text: {
        primary: 'var(--ms-text)',
        secondary: 'var(--ms-text)',
        onPrimary: '#FFFFFF',
    },
    win95: {
        colors: {
            blue: 'var(--ms-blue)',
            green: 'var(--ms-green)',
            barGrey: 'var(--ms-bar-grey)',
            windowBg: 'var(--ms-window-bg)',
        },
        borders: {
            raised: `
                border-top: 2px solid var(--ms-border-light);
                border-left: 2px solid var(--ms-border-light);
                border-bottom: 2px solid var(--ms-gray-shadow);
                border-right: 2px solid var(--ms-gray-shadow);
            `,
            sunken: `
                border-top: 2px solid var(--ms-gray-shadow);
                border-left: 2px solid var(--ms-gray-shadow);
                border-bottom: 2px solid var(--ms-border-light);
                border-right: 2px solid var(--ms-border-light);
            `,
        },
    },
    deviceSize,
};

const darkTheme = {
    ...lightTheme,
    bg: {
        ...lightTheme.bg,
        primary: '#9d9d9d', // Změněno na světle šedou pro tmavý režim
    },
    win95: {
        ...lightTheme.win95,
        colors: {
            ...lightTheme.win95.colors,
            barGrey: '#3b3b3b', // Explicitně nastavíme barvu pro tmavý režim
        }
    }
};

export { lightTheme, darkTheme };