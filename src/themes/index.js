import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5296',
      main:'#ff277c',
      dark: '#b21b56',
    },
    secondary: {
      main:'#27ffa9',
    },
    info: {
      main: '#ff27e9',
    },
    error: {
      main: '#ff3d27',
    },
    warning: {
      main: '#ffa927',
    },
    success: {
      main: '#7eff27',
    },
    text: {
      primary: '#212121',
    },
  },
  typography: {
   h1: {
    fontFamily: `"Bebas Neue", "Rubik", "Helvetica", "Arial", sans-serif`,
   },
   h2: {
    fontFamily: `"Bebas Neue", "Rubik", "Helvetica", "Arial", sans-serif`,
    '@media (max-width: 767px)': {
      fontSize: '2.5rem',
    },
   },
   h3: {
    fontFamily: `"Bebas Neue", "Rubik", "Helvetica", "Arial", sans-serif`,
   },
   h4: {
    fontFamily: `"Bebas Neue", "Rubik", "Helvetica", "Arial", sans-serif`,
   },
   h5: {
    fontFamily: `"Bebas Neue", "Rubik", "Helvetica", "Arial", sans-serif`,
   },
   h6: {
    fontFamily: `"Bebas Neue", "Rubik", "Helvetica", "Arial", sans-serif`,
   },
   body1: {
     lineHeight: 2,
     fontSize: 19,
     fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
     '@media (max-width: 767px)': {
        fontSize: 16,
        lineHeight: 1.4,
      },
    },
    button: {
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: 12,
    },
    overline: {
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
    },
  },
});

export default theme;
