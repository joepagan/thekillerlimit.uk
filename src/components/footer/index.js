import style from './style';
import { h, Component } from 'preact';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <Container maxWidth="lg" className={style.container}>
          <Typography variant="subtitle1">
            &copy; {1900 + new Date().getYear()} The Killer Limit made by{" "}
            <Link
              href="https://joepagan.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              Joe Pagan
            </Link>
          </Typography>
        </Container>
      </footer>
    )
  }
}

// export default Footer;
