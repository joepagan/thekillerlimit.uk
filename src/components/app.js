// Must be the first import
if (process.env.NODE_ENV==='development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require("preact/debug");
}
import { Component } from 'preact';
import { Router } from 'preact-router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../themes';
import Helmet from "preact-helmet";

import Header from './header';
import Footer from './footer';
import Socials from './socials';

// Code-splitting is automated for routes
import Home from './../routes/home';
import Cookies from '../routes/cookies';

// Data
import icons from './../data/icons';

// Meta
// import {helmetMeta, helmetScript} from './../data/meta';

import CookieBot from 'react-cookiebot';
const domainGroupId = '6b593094-6dab-47a6-8a5a-74099df33b9b';

export default class App extends Component {
  state = {
    nav: false,
    upcomingShows: [],
    pastShows: [],
  };
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
  };
  componentDidMount() {
    fetch('https://nextjs.joepagan.vercel.app/api/bit')
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          upcomingShows: res,
        });
      });
    fetch('https://nextjs.joepagan.vercel.app/api/bit?date=past')
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          pastShows: res,
        });
      });
  }

	render(props, state) {
		return (
			<div id="app">
        <CookieBot domainGroupId={domainGroupId} />
        <Helmet
          htmlAttributes={{lang: "en-GB", amp: undefined}} // amp takes no value
          // title={meta.title}
          titleTemplate=""
          defaultTitle="The Killer Limit"
          titleAttributes={{itemprop: "name", lang: "en-GB"}}
          // meta={helmetMeta}
          // script={helmetScript}
      />
        <ThemeProvider theme={theme}>
          <Header nav={state.nav} icons={icons} />
          <Router onChange={this.handleRoute}>
            <Home path="/" state={state} />
            <Cookies path="/cookies" />
          </Router>
          <Socials icons={icons} />
          <Footer />
        </ThemeProvider>
			</div>
		);
	}
}
