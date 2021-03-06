import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { AppProvider } from '../hooks';

import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}
