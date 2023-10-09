import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "../globals.scss";
import { GeneralProvider } from "../src/context/general";
import { Header } from "../src/layouts/header";
import { theme } from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GeneralProvider>
        <Header />
        <Component {...pageProps} />
      </GeneralProvider>
    </ChakraProvider>
  );
}

export default MyApp;
