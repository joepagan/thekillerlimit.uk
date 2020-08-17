import { h, Component } from 'preact';
import { useState } from 'preact/hooks';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from './../table';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const getEvents = async (endpoint) => {
  return fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
      let rows = [];
      const events = data.resultsPage.results.event;
      if (typeof events !== 'undefined') {
        events.map((event) => {
          const parsedEvent = {
            name: event.displayName,
            date: event.start.date,
            venue: event.venue.displayName,
            venueUrl: event.venue.uri,
            location: event.location.city,
            locationUrl: `https://maps.google.com?q=${event.venue.displayName}, ${event.location.city}`,
            url: event.uri,
          }
          rows = [
            ...rows,
            parsedEvent,
          ];
        });
      }
      return rows;
  });
}

export default class SimpleTabs extends Component {
  async componentDidMount() {
    let upcomingShows = await getEvents('https://api.songkick.com/api/3.0/artists/10108237/calendar.json?apikey=MyiA1cFNdmmmtz5n');
    let pastShows = await getEvents('https://api.songkick.com/api/3.0/artists/10108237/gigography.json?apikey=MyiA1cFNdmmmtz5n');
    this.setState({
      upcomingShows,
      pastShows,
    });
  }
  render({}, {
    upcomingShows=[],
    pastShows=[],
  }) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    setValue(upcomingShows.length === 0 ? 1 : 0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Upcoming Shows" {...a11yProps(0)} />
            <Tab label="Past Shows" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {upcomingShows.length ?
            <Table rows={upcomingShows} />
            : 'No upcoming shows'
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
          {pastShows ?
            <Table rows={pastShows} />
            : null }
        </TabPanel>
      </div>
    );
  }
}
