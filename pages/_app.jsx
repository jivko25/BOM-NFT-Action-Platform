import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { Layout } from '../src/components/layout/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, ...appProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>BOM NFT Auction</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="../assets/images/favicon.png" type="image/png"/>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {[`/login`].includes(appProps.router.pathname) ?
        <Component {...pageProps}/>
        :
        <Layout>
          <Component {...pageProps} />
        </Layout>
        }
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
