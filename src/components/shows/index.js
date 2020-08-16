import { h, Component } from 'preact';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import style from './style';

export default class About extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    document.body.appendChild(script);
  }
  render() {
    return (
      <div id="shows">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Paper className={style.paper} elevation={3} square align="center">
                <Typography variant="h2" component="h2" align="center" gutterBottom>Shows</Typography>
                <div className="c-shows">
                <a className="bit-widget-initializer"
                  data-artist-name="Impyus"
                  data-display-past-dates="false"
                  data-text-color="#212121"
                  data-link-color="#ff277c"
                  data-background-color="#ffffff"
                  data-display-details="false"
                  data-popup-background-color="#ffffff"
                  data-link-text-color="#FFFFFF"
                  data-separator-color="#CBCBCB"
                  data-language="en"
                  data-font="Helvetica"
                  data-display-local-dates="false"
                  data-auto-style="false"
                  data-display-lineup="false"
                  data-display-play-my-city="true"
                  data-display-limit="15"
                  data-display-start-time="false"></a>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}
