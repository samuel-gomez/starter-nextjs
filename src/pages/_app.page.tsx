import 'shared/styles/globals.scss';
import type { AppProps } from 'next/app';

export const baseUrl = (() => {
  const protocol = `http${process.env.NODE_ENV === 'production' ? 's' : ''}://`;
  return `${protocol}${process.env.NEXT_PUBLIC_VERCEL_URL}`;
})();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} baseUrl={baseUrl} />;
}

export default MyApp;
