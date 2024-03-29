import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  typography: {
    fontFamily: [
      "Mulish",
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

  spacing: 4,

  palette: {
    primary: {
      main: "#FFF337",
    },
    textPrimary: {
      main: "#000000",
    },
    textSecondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "6rem",
      fontFamily: "Mulish",
      lineHeight: "8rem",
      letterSpacing: "0rem",
      fontWeight: 800,
      "@media (min-width:1024px)": {
        fontSize: "5.5rem",
      },
      "@media (min-width:768px)": {
        fontSize: "4.8rem",
      },
      "@media (max-width:500px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily: "Mulish",
      fontWeight: 800,
      fontSize: "4rem",
      color: "#ffffff",
      "@media (min-width:1024px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:768px)": {
        fontSize: "3.2rem",
      },
      "@media (max-width:500px)": {
        fontSize: "2.2rem",
      },
    },
    h3: {
      fontFamily: "Mulish",
      fontWeight: 800,
      fontSize: "2.5rem",
      "@media (min-width:768px)": {
        fontSize: "2rem",
      },
      "@media (max-width:500px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontFamily: "Mulish",
      fontWeight: 800,
      fontSize: "2rem",
      "@media (min-width:768px)": {
        fontSize: "1.8rem",
      },
      "@media (max-width:500px)": {
        fontSize: "1.5rem",
      },
    },
    caption: {
      fontFamily: "Mulish",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      "@media (min-width:768px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width:500px)": {
        fontSize: "1.1rem",
      },
    },
    subtitle1: {
      fontFamily: "Mulish",
      fontWeight: 800,
      fontSize: "1.875rem",
      color: "#fff",
      "@media (min-width:768px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:500px)": {
        fontSize: "1.2rem",
      },
    },

    subtitle2: {
      fontFamily: "Mulish",
      fontWeight: 300,
      fontSize: "1.25rem",
      "@media (min-width:768px)": {
        fontSize: "1.10rem",
      },
      "@media (max-width:500px)": {
        fontSize: "1rem",
      },
    },

    body1: {
      fontFamily: "Mulish",
      fontWeight: 300,
      fontSize: "1.25rem",
      "@media (min-width:768px)": {
        fontSize: "1rem",
      },
      "@media (max-width:500px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontFamily: "Mulish",
      fontWeight: 300,
      fontSize: "1.125rem",
      "@media (max-width:768px)": {
        fontSize: "1rem",
      },
    },
  },

  overrides: {
    MuiButton: {
      root: {
        fontSize: "1.25rem",
        fontFamily: "Mulish",
        borderRadius: 70,
        textTransform: "none",
        fontWeight: "bold",
      },
      text: {
        padding: "16px 32px",
        "@media (min-width:1024px)": {
          padding: "16px 24px",
        },
        "@media (max-width:764px)": {
          padding: "12px 20px",
        },
      },
    },
  },
});

export default theme;
