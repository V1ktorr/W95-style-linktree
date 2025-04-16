export const win95 = {
    colors: {
        blue: '#000080',
        green: '#008282',
        barGrey: '#C0C0C0',
        grayShadow: '#808080',
        borderLight: '#FFFFFF',
        borderDark: '#808080'
    },
    borders: {
        raised: `
            border-top: 2px solid #FFFFFF;
            border-left: 2px solid #FFFFFF;
            border-bottom: 2px solid #808080;
            border-right: 2px solid #808080;
        `,
        sunken: `
            border-top: 2px solid #808080;
            border-left: 2px solid #808080;
            border-bottom: 2px solid #FFFFFF;
            border-right: 2px solid #FFFFFF;
        `
    },
    buttons: {
        default: `
            background: #C0C0C0;
            box-shadow: inset -1px -1px #0a0a0a, 
                       inset 1px 1px #fff, 
                       inset -2px -2px grey, 
                       inset 2px 2px #dfdfdf;
        `,
        pressed: `
            box-shadow: inset -1px -1px #ffffff, 
                       inset 1px 1px #0a0a0a,
                       inset -2px -2px #dfdfdf, 
                       inset 2px 2px #808080;
        `
    }
}; 