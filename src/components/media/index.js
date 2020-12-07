import style from './style';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ResponsiveEmbed from "react-responsive-embed";

const useStyles = makeStyles(() => ({
  paper: {
    padding: 70,
    backgroundColor: '#eee',
  },
}));

export default function Media() {
  const classes = useStyles();
  return (
    <div id="media" className={classes.section}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={`${classes.paper} ${style.paper}`} elevation={3} square align="center">
              <Typography variant="h2" component="h2" align="center" gutterBottom>Media</Typography>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <ResponsiveEmbed
                    className={style.sc}
                    title="SoundCloud Player, The Killer Limit"
                    loading="lazy"
                    src=''
                    data-src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/719317062&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">'
                    data-cookieconsent="marketing"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ResponsiveEmbed
                    loading="lazy"
                    title="YouTube Player, The Killer Limit - Black Shark"
                    data-src="https://www.youtube.com/embed/iFDZ3QDq8Sc"
                    data-cookieconsent="marketing"
                    allowFullScreen
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
