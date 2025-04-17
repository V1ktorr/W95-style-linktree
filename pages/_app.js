import { useState, useEffect } from "react"
import useDarkMode from "use-dark-mode"
import Head from "next/head";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../styles/theme.config";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { ThemeProvider, ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

function ThemedApp({ Component, pageProps }) {
    const { isDarkMode } = useContext(ThemeContext);
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    return (
        <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Layout>
                {isMounted && <Component {...pageProps} />}
            </Layout>
        </StyledThemeProvider>
    );
}

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <ThemedApp Component={Component} pageProps={pageProps} />
        </ThemeProvider>
    );
}

export default MyApp