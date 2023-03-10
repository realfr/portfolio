import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import Menu from "../components/menu";
import { theme } from "../styles/theme";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
