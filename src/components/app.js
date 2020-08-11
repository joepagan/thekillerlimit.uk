import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'preact/hooks';

import Header from './header';
import Footer from './footer';
import Socials from './socials';

// Code-splitting is automated for routes
import Home from '../routes/home';

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

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
    const [state, setState] = useState({
      nav: false,
    });
		return (
			<div id="app">
        <ThemeProvider theme={theme}>
          <Header nav={state.nav} />
          <Router onChange={this.handleRoute}>
            <Home path="/" state={state} setState={setState} />
          </Router>
          <Socials />
          <Footer />
        </ThemeProvider>
			</div>
		);
	}
}
