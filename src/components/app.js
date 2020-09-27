// Must be the first import
if (process.env.NODE_ENV==='development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require("preact/debug");
}
import { Component } from 'preact';
import { Router } from 'preact-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { useState } from 'preact/hooks';
import Helmet from "preact-helmet";

import Header from './header';
import Footer from './footer';
import Socials from './socials';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Cookies from '../routes/cookies';

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
    href: 'https://twitter.com/killermantisuk',
  },
  {
    id: 'facebook',
    title: 'Like us on Facebook',
    href: 'https://www.facebook.com/killermantismusic',
  },
  {
    id: 'instagram',
    title: 'Follow us on Instagram',
    href: 'https://www.instagram.com/killermantismusic',
  },
  {
    id: 'soundcloud',
    title: 'Follow us on SoundCloud',
    href: 'https://www.soundcloud.com/killermantis',
  },
  {
    id: 'youtube',
    title: 'Subscribe to us on YouTube',
    href: 'https://www.youtube.com/channel/UCjXeqCAvBsTNb2FlemGRhKQ',
  },
  {
    id: 'reverbnation',
    title: 'Follow us on Reverbnation',
    href: 'https://www.reverbnation.com/killermantis',
  },
  {
    id: 'patreon',
    title: 'Support us on Patreon',
    href: 'https://www.patreon.com/bePatron?u=28088162&redirect_uri=https://thekillerlimit.com',
  },
];

const sameAs = icons.filter(icon => icon.id !== 'presspack').map((icon) => {
  return icon.href;
});

// const getEvents = async (endpoint) => {
//   return fetch(endpoint)
//     .then((response) => response.json());
// }
const getEndDate = (datetime) => {
  const date = new Date(datetime);
  date.setHours(date.getHours()+5);
  return date;
}

function mapEvents(events) {
  return JSON.stringify(
    events.map(event => {
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: `The Killer Limit at ${event.venue}, ${event.city}, ${event.country}`,
        startDate: event.datetime,
        endDate: getEndDate(event.datetime).toISOString(),
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: event.venue,
          address: {
            "@type": "PostalAddress",
            streetAddress: "100 West Snickerpark Dr",
            addressLocality: event.city,
            postalCode: "19019",
            addressRegion: "PA",
            addressCountry: event.country
          }
        },
        // image: [
        //   "https://example.com/photos/1x1/photo.jpg",
        //   "https://example.com/photos/4x3/photo.jpg",
        //   "https://example.com/photos/16x9/photo.jpg"
        // ],
        description: `The Killer Limit is coming to ${event.city} in a can’t miss performance.`,
        offers: {
          "@type": "Offer",
          url: "https://www.example.com/event_offer/12345_201803180430",
          price: "30",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          validFrom: "2024-05-21T12:00",
        },
        performer: {
          "@type": "PerformingGroup",
          name: "The Killer Limit",
        },
        organizer: {
          "@type": "Organization",
          name: "The Killer Limit",
          url: "https://thekillerlimit.uk",
        }
      };
    })
  );
}

const meta = {
  name: 'The Killer Limit',
  title: 'The Killer Limit - A Rock Rap Hip hop group from Leeds, UK',
  description: 'A dynamic & collaborative writing style has helped The Killer Limit achieve their unique sound which includes: interesting rhythms, unusual song structures, and, a sprinkling of hip hop.',
  url: 'https://thekillerlimit.uk',
  logoObject: `{
    "@type":"ImageObject",
    "url": "https://thekillerlimit.uk/assets/img/hero-bg.jpg",
    "width": "1334",
    "height": "2000"
  }`,
  imageObject: `{
    "@type":"ImageObject",
    "url": "https://thekillerlimit.uk/assets/img/hero-bg.jpg",
    "width": "1334",
    "height": "2000"
  }`,
  image: `https://thekillerlimit.uk/assets/img/hero-bg.jpg`,
  sameAs: JSON.stringify(sameAs),
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: false,
      upcomingShows: [],
      pastShows: [],
    };
  }
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
        <Helmet
          htmlAttributes={{lang: "en-GB", amp: undefined}} // amp takes no value
          title={meta.title}
          titleTemplate=""
          defaultTitle="The Killer Limit"
          titleAttributes={{itemprop: "name", lang: "en-GB"}}
          meta={[
            {name: "description", content: meta.description},
            {property: "og:title", content: meta.title},
            {property: "og:description", content: meta.description},
            {property: "og:image", content: meta.image},
            {property: "og:type", content: "website"},
            {property: "og:site_name", content: meta.name},
            {property: "og:url", content: meta.url},
            {property: "twitter:card", content: 'summary_large_image'},
            {property: "twitter:title", content: meta.title},
            {property: "twitter:description", content: meta.description},
            {property: "twitter:image", content: meta.image},
            {property: "twitter:site", content: '@thekillerlimit'},
            {property: "twitter:creator", content: '@thekillerlimit'},
            {property: "twitter:url", content: meta.url},
          ]}
          script={[
            {type: "application/ld+json", innerHTML: meta.logoObject},
            {type: "application/ld+json", innerHTML: meta.imageObject},
            {type: "application/ld+json", innerHTML: mapEvents(state.pastShows)},
            {type: "application/ld+json", innerHTML: `{
              "@context": "http://schema.org",
              "@type": "MusicGroup",
              "name": "${meta.name}",
              "url": "${meta.url}",
              "email": "thekillerlimit@gmail.com",
              "member": [
                {
                  "@type": "OrganizationRole",
                  "member": {
                    "@type": "Person",
                    "name": "Tiph"
                  },
                  "startDate": "2015",
                  "roleName": ["rapping", "vocals"]
                },
                {
                  "@type": "OrganizationRole",
                  "member": {
                    "@type": "Person",
                    "name": "CJ"
                  },
                  "startDate": "2020",
                  "roleName": ["lead vocals"]
                },
                {
                  "@type": "OrganizationRole",
                  "member": {
                    "@type": "Person",
                    "name": "Mark Rinder"
                  },
                  "startDate": "2015",
                  "roleName": ["guitar", "backing vocals"]
                },
                {
                  "@type": "OrganizationRole",
                  "member": {
                    "@type": "Person",
                    "name": "Liam Sullivan"
                  },
                  "startDate": "2015",
                  "roleName": ["drums"]
                },
                {
                  "@type": "OrganizationRole",
                  "member": {
                    "@type": "Person",
                    "name": "Matthew Hickey"
                  },
                  "startDate": "2015",
                  "roleName": ["synthesizers", "piano"]
                },
                {
                  "@type": "OrganizationRole",
                  "member": {
                    "@type": "Person",
                    "name": "Joe Pagan"
                  },
                  "startDate": "2015",
                  "roleName": ["bass", "backing vocals"]
                }
              ],
              "numberOfEmployees": "6",
              "sameAs": ${meta.sameAs},
              "foundingLocation": {
                "@context": "http://schema.org/",
                "@type": "Place",
                "address": "Leeds, GB"
              },
              "image": ${meta.imageObject},
              "logo": ${meta.logoObject},
              "genre": [
                "Rap",
                "Rock",
                "Hip Hop",
                "Rap Rock"
              ],
              "areaServed": "GB"
            }`}
          ]}
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
