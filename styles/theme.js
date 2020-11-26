import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "ITCAvantGardeStdBk",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    primary: {
      main: "#FFF337",
    },
    textPrimary: {
      main: "#000000",
    },
  },
  typography: {
    h1: {
      fontSize: "5.625rem",
      fontFamily: "ITCAvantGardeStdBold",
      lineHeight: "128px",
      letterSpacing: "0rem",
    },
    h2: {
      fontFamily: "ITCAvantGardeStdBold",
      fontWeight: 700,
      fontSize: "4rem",
      color: "#ffffff",
    },
    h3: {
      fontFamily: "ITCAvantGardeStdBold",
      fontWeight: 700,
      fontSize: "3rem",
    },
    h5: {
      fontFamily: "ITCAvantGardeStdBold",
      fontWeight: 700,
      fontSize: "2rem",
    },
    caption: {
      fontFamily: "ITCAvantGardeStdBk",
      fontWeight: "bold",
      fontSize: "1.5rem",
      lineHeight: "36px",
    },
    subtitle1: {
      fontFamily: "ITCAvantGardeStdBold",
      fontWeight: 700,
      fontSize: "1.875rem",
      color: "#fff",
    },

    body1: {
      fontFamily: "ITCAvantGardeStdBk",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        fontSize: "1.25rem",
        fontFamily: "ITCAvantGardeStdBk",
        borderRadius: 70,
        textTransform: "none",
        fontWeight: "bold",
      },
      text: {
        padding: "16px 32px",
      },
    },
  },
});

export default theme;
