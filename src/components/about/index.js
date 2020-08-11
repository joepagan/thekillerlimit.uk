import { h, Component } from 'preact';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '6px 6px 0 0',
    padding: 70,
    marginTop: -60,
  },
  divider: {
    margin: '50px',
    width: '50%',
  }
}));

import "intersection-observer";
import scrollama from "scrollama";

export default class About extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://c6.patreon.com/becomePatronButton.bundle.js";
    script.async = true;
    document.body.appendChild(script);
    const scroller = scrollama();
    // setup the instance, pass callback functions
    scroller
      .setup({
        step: '#about',
      })
      .onStepEnter((res) => {
        if (res.direction === 'down') {
          {this.props.setState({
            nav: true,
          })}
        }
      })
      .onStepExit((res) => {
        if (res.direction !== 'down') {
          {this.props.setState({
            nav: false,
          })}
        }
      });
      window.addEventListener("resize", scroller.resize);
  }
  render() {
    const classes = useStyles();
    return (
      <div id="about" className={classes.section}>
        <div className={classes.container}>
          <Container maxWidth="lg">
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3} align="center">
                  <Grid item xs={8}>
                    <Typography variant="h2" component="h1" gutterBottom>The Killer Limit!</Typography>
                    <Typography variant="body1" gutterBottom>
                      The Killer Limit ( formerly known as Impyus ) have been making noise for 5 years.
                      <br />
                      The 6 boys from Yorkshire have been rocking the stages of the North since they joined forces.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      They’ve got raps, fantastic beats, killer synths, rockin’ riffs and those amazing catchy choruses.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      With over 50 gigs under their belt, they have decided to step things up with a fresh direction on a new batch of songs, a name change to suit.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Currently The Killer Limit are underway creating a collection of recordings to push in 2020 at Mantis HQ.
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="h4" gutterTop gutterBottom>
                      Support us!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      You can support us right now on Patreon!
                    </Typography>
                    <a
                      href="https://www.patreon.com/bePatron?u=28088162"
                      data-patreon-widget-type="become-patron-button"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Become a Patron!
                    </a>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    )
  }
}