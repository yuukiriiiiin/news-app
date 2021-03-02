import React from 'react';
import {AppProps} from 'next/app';

import '../components/stylesheets/global.css';

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}
