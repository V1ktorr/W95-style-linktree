import { win95 } from './win95';
import { deviceSize } from './responsive';

const light = {
    bg: {
        primary: win95.colors.green,
        secondary: win95.colors.barGrey,
        tertiary: 'rgba(255,255,255,0.03)',
    },
    text: {
        primary: '#000000',
        secondary: win95.colors.grayShadow,
        onPrimary: '#ffffff',
    },
}

const dark = {
    bg: {
        primary: win95.colors.green,
        secondary: win95.colors.barGrey,
        tertiary: 'rgba(255,255,255,0.03)',
    },
    text: {
        primary: '#000000',
        secondary: win95.colors.grayShadow,
        onPrimary: '#ffffff',
    },
}

const defaultTheme = {
    fontSizes: ['14px', '16px', '18px', '22px', '26px', '32px', '40px'],
    fontWeights: {
        body: 400,
        subheading: 500,
        link: 600,
        bold: 700,
        heading: 800,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.3,
        code: 1.6,
    },
    deviceSize,
    win95
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }