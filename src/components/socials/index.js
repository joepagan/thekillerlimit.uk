import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";
import Icon from './../icon';
import style from './style';

const Socials = ({children, ...props}) => (
  <div id="socials">
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Paper className={style.paper} elevation={3} square align="center">
          <List className={style.list}>
            {props.icons.map((icon) => (
              <Icon id={icon.id} title={icon.title} href={icon.href} text={icon.text} />
            ))}
          </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Socials;
