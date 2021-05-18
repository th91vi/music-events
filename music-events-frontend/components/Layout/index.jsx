import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/theme/global";
import theme from "../../styles/theme/theme";

import Header from "../Header";
import Footer from "../Footer";

import * as S from "./styles";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        <S.Container>{children}</S.Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.defaultProps = {
  title: "Music Events | Best events in town",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora repellendus officia voluptatem necessitatibus mollitia, adipisci ullam laborum accusamus voluptatum autem eligendi sed ea culpa laboriosam perspiciatis quia cumque quis.",
  keywords: "music, dj, party",
};

export default Layout;
