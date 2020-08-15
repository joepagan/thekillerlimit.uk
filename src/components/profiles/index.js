import style from './style';
import Profile from '../profile';

import { h } from 'preact';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazyload';

const members = [
  {
    id: 'tiph',
    name: 'Tiph (Propz)',
    role: 'Raps & Vocals',
  },
  {
    id: 'cj',
    name: 'CJ',
    role: 'Lead Vocals',
  },
  {
    id: 'rinder',
    name: 'Rinder',
    role: 'Guitar, Backing Vocals',
  },
  {
    id: 'sully',
    name: 'Sully',
    role: 'Drums, Percussion',
  },
  {
    id: 'hickey',
    name: 'Hickey',
    role: 'Synths/Piano',
  },
  {
    id: 'joe',
    name: 'Joe',
    role: 'Bass, Backing Vocals',
  },
];

const Profiles = () => (
  <LazyLoad once height={200} placeholder={<div id="profiles" />}>
    <div id="profiles">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Paper className={style.paper} elevation={3} square align="center">
              <Typography variant="h2" component="h2" align="center" gutterBottom>Profiles</Typography>
              <Grid container spacing={3}>
                {members.map((member) => (
                  <Grid item md={4} sm={4} xs={12}>
                    <Profile name={member.name} id={member.id} role={member.role} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  </LazyLoad>
);

export default Profiles;
