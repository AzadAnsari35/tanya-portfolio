import '../styles/globals.css'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from '../styles/theme'
import {Header} from '../components'
import "../styles/globalStyling.css"

function MyApp({ Component, pageProps }) {
  return <MuiThemeProvider  theme={theme}><Header /><Component {...pageProps} /></MuiThemeProvider>
}

export default MyApp
