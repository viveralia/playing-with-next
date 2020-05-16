import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { palette, typography } from "./variables";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
    },
    text: {
      primary: palette.dark,
      secondary: palette.grey,
    },
    background: {
      default: palette.highlightMed,
    },
  },
  typography: {
    fontFamily: typography.secondaryFont,
    h1: {
      fontFamily: typography.primaryFont,
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontFamily: typography.primaryFont,
      fontSize: 28,
      fontWeight: 700,
    },
    h3: {
      fontFamily: typography.primaryFont,
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontFamily: typography.primaryFont,
      fontSize: 20,
      fontWeight: 700,
    },
    h5: {
      fontFamily: typography.secondaryFont,
      fontSize: 18,
      fontWeight: 700,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
