import { Component } from 'preact';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from './../table';
import { useState } from 'preact/hooks';

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

export default class SimpleTabs extends Component {
  state = {
    activeTab: this.props.state.upcomingShows.length !== 0 ? 0 : 1,
  };
  render(props, state) {
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
          {props.state.upcomingShows.length ?
            <Table rows={props.upcomingShows} />
            : 'No upcoming shows'
          }
        </TabPanel>
        <TabPanel value={this.state.activeTab} index={1}>
          {props.state.pastShows ?
            <Table rows={props.state.pastShows} type="past" />
            : null }
        </TabPanel>
      </div>
    );
  }
}
