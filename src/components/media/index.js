import { h, Component } from 'preact';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ResponsiveEmbed from "react-responsive-embed";
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles(() => ({
  paper: {
    padding: 70,
    backgroundColor: '#eee',
  },
}));

export default class Media extends Component {
  componentDidMount() {
  }
  render() {
    const classes = useStyles();
    return (
      <LazyLoad once height={200} placeholder={<div id="media" />}>
        <div id="media" className={classes.section}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3} square align="center">
                  <Typography variant="h2" component="h2" align="center" gutterBottom>Media</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <ResponsiveEmbed
                        title="SoundCloud Player, Killer Mantis"
                        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/719317062&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">'
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ResponsiveEmbed
                        title="YouTube Player, Killer Mantis - Black Shark"
                        src="https://www.youtube.com/embed/iFDZ3QDq8Sc"
                        allowFullScreen
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </LazyLoad>
    )
  }
}
