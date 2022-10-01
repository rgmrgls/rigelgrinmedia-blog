import React from 'react';
import Head from 'next/head'
import '../styles/globals.scss';
import { Layout } from '../components';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
<NextNProgress color="red"/>
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />
          <title>RigelGrin Media Blog</title>
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
