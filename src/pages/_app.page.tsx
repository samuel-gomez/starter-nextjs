import 'shared/styles/globals.scss';
import type { AppProps } from 'next/app';

type TMyApp = AppProps & {
  baseUrl?: string;
};

function MyApp({ Component, pageProps, baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL }: TMyApp) {
  return <Component {...pageProps} baseUrl={baseUrl} />;
}

export default MyApp;
