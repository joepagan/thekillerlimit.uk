import { Component } from 'preact';
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
    .then((response) => response.json());
}

export default class SimpleTabs extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }
  async componentDidMount() {
    let upcomingShows = await getEvents('https://nextjs.joepagan.vercel.app/api/bit');
    let pastShows = await getEvents('https://nextjs.joepagan.vercel.app/api/bit?date=past');
    const activeTab = upcomingShows.length !== 0 ? 0 : 1;
    this.setState({
      upcomingShows,
      pastShows,
      activeTab,
    });
  }
  render({}, {
    upcomingShows=[],
    pastShows=[],
  }) {
    const classes = useStyles();
    const handleChange = (event, newValue) => {
      this.setState({
        activeTab: newValue,
      });
    };
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={this.state.activeTab} onChange={handleChange} aria-label="Switch between upcoming and past shows">
            <Tab label="Upcoming Shows" {...a11yProps(0)} />
            <Tab label="Past Shows" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.activeTab} index={0}>
          {upcomingShows.length ?
            <Table rows={upcomingShows} />
            : 'No upcoming shows'
          }
        </TabPanel>
        <TabPanel value={this.state.activeTab} index={1}>
          {pastShows ?
            <Table rows={pastShows} type="past" />
            : null }
        </TabPanel>
      </div>
    );
  }
}
