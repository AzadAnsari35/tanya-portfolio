import "../styles/globals.css";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../styles/theme";
import { Header, Footer } from "../components";
import "../styles/globalStyling.css";

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <div style={{ minHeight: 500 }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </MuiThemeProvider>
  );
}

export default MyApp;
