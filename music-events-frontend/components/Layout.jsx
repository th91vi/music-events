import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/theme/global";
import theme from "../styles/theme/theme";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
          </Head>
          {children}
        </div>
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
