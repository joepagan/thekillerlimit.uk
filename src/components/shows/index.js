import { h, Component } from 'preact';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import style from './style';
import LazyLoad from 'react-lazyload';

export default class About extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <LazyLoad once height={200} placeholder={<div id="shows" />}>
        <div id="shows">
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12}>
                <Paper className={style.paper} elevation={3} square align="center">
                  <Typography variant="h2" component="h2" align="center" gutterBottom>Shows</Typography>
                  <div className="c-shows">
                    <a
                      className="bit-widget-initializer"
                      data-artist-name="Impyus"
                      data-display-local-dates="false"
                      data-display-past-dates="true"
                      data-auto-style="false"
                      data-text-color="#212121"
                      data-link-color="#ff277c"
                      data-background-color="rgba(0,0,0,0)"
                      data-display-limit=""
                      data-display-start-time="true"
                      data-link-text-color="#fff"
                      data-display-lineup="true"
                      data-display-play-my-city="true"
                      data-separator-color="rgba(0, 0, 0, 0.1)"
                    a></a>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </LazyLoad>
    )
  }
}
