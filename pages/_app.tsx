import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/layout';
import 'nprogress/nprogress.css';
import '../styles/third-party.css';
import '../styles/style.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '@contentstack/live-preview-utils/dist/main.css';
import { getAllEntries, getFooterRes, getHeaderRes } from '../helper/data-retrieval';
import { Props } from '../models/props-model';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../typescript/theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp(props: Props) {
  // console.log('_app')
  // console.log(props);
  const { Component, pageProps, header, footer, entries } = props;
  // console.log('pageProps: ')
  // console.log(pageProps)

  const metaData = (seo: any) => {
    const metaArr = [];
    for (const key in seo) {
      if (seo.enable_search_indexing) {
        metaArr.push(
          <meta
            name={
              key.includes('meta_')
                ? key.split('meta_')[1].toString()
                : key.toString()
            }
            content={seo[key].toString()}
            key={key}
          />
        );
      }
    }
    return metaArr;
  };

  return (
    <>
      {/* <AppCacheProvider {...props}> */}
        <Head>
          <meta
            name='application-name'
            content='Contentstack-Nextjs-Starter-App'
          />
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,minimum-scale=1'
          />
          <meta name='theme-color' content='#317EFB' />
        <title>{pageProps.page?.title}</title>
          {pageProps.page?.seo && metaData(pageProps.page.seo)}

          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout
            header={header}
            footer={footer}
            page={pageProps.page}
          // blogPost={blogPost}
          // blogList={blogList}
           entries={entries}
          >
           <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      {/* </AppCacheProvider> */}


    </>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const header = await getHeaderRes();
  const footer = await getFooterRes();
  const entries = await getAllEntries();

  return { ...appProps, header, footer, entries };
};

export default MyApp;
