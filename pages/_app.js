import "../styles/globals.css";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../styles/theme";
import { Header, Footer } from "../components";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "../styles/globalStyling.css";
import "../styles/responsive.css";

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <div style={{ minHeight: 500 }}>
        <Component {...pageProps} />
        <ScrollToTopButton />
      </div>
      <Footer />
    </MuiThemeProvider>
  );
}

export default MyApp;
