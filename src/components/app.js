// Must be the first import
if (process.env.NODE_ENV==='development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require("preact/debug");
}
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

const icons = [
  {
    id: 'presspack',
    title: 'Download our Press Pack',
    text: 'Press Pack',
    href: 'https://drive.google.com/open?id=1DdbOtK9zzpMCeecGV4adAotR6499oqzr',
  },
  {
    id: 'twitter',
    title: 'Follow us on Twitter',
    href: 'https://twitter.com/killermantisuk?ref=killermantis-website',
  },
  {
    id: 'facebook',
    title: 'Like us on Facebook',
    href: 'https://www.facebook.com/killermantismusic?ref=killermantis-website',
  },
  {
    id: 'instagram',
    title: 'Follow us on Instagram',
    href: 'https://www.instagram.com/killermantismusic?ref=killermantis-website',
  },
  {
    id: 'soundcloud',
    title: 'Follow us on SoundCloud',
    href: 'https://www.soundcloud.com/killermantis?ref=killermantis-website',
  },
  {
    id: 'youtube',
    title: 'Subscribe to us on YouTube',
    href: 'https://www.youtube.com/channel/UCjXeqCAvBsTNb2FlemGRhKQ?ref=killermantis-website',
  },
  {
    id: 'reverbnation',
    title: 'Follow us on Reverbnation',
    href: 'https://www.reverbnation.com/killermantis?ref=killermantis-website',
  },
  {
    id: 'patreon',
    title: 'Support us on Patreon',
    href: 'https://www.patreon.com/bePatron?u=28088162&redirect_uri=https://killermantis.com&utm_medium=headerLink',
  },
];

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
          <Header nav={state.nav} icons={icons} />
          <Router onChange={this.handleRoute}>
            <Home path="/" state={state} setState={setState} />
          </Router>
          <Socials icons={icons} />
          <Footer />
        </ThemeProvider>
			</div>
		);
	}
}
