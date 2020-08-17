import { h, Component } from 'preact';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import style from './style';
import Tabs from './../tabs';

export default class About extends Component {
  render() {
    return (
      <div id="shows">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Paper className={style.paper} elevation={3} square align="center">
                <Typography variant="h2" component="h2" align="center" gutterBottom>Shows</Typography>
                <Tabs />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}
