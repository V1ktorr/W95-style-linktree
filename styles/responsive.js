export const deviceSize = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(max-width: ${deviceSize.mobileS})`,
    mobileM: `(max-width: ${deviceSize.mobileM})`,
    mobileL: `(max-width: ${deviceSize.mobileL})`,
    tablet: `(max-width: ${deviceSize.tablet})`,
    laptop: `(max-width: ${deviceSize.laptop})`,
    laptopL: `(max-width: ${deviceSize.laptopL})`,
    desktop: `(max-width: ${deviceSize.desktop})`
}; 