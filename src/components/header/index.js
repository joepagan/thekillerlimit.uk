import style from './style';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import { CloudDownload, Twitter, Facebook, YouTube } from "@material-ui/icons";

import * as Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

const useStyles = makeStyles(() => ({
  list: {
    padding: 0,
    display: 'flex',
  },
  listItem: {
    padding: 0,
  },
  svg: {
    marginRight: 4,
  },
  socialList: {
    marginLeft: 'auto',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  menuButtonWrapper: {
    marginLeft: 'auto',
    "@media (min-width: 767px)": {
      display: "none"
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['All mail'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={`${style.nav} ${this.props.nav !== false ? style.isActive : ''}`}>
        <AppBar position="static" className={style.appBar}>
          <Grid container justify="center">
            <Grid item xs={10}>
            <Toolbar>
              <ScrollLink className={style.scrollLink} to="top" spy={true} smooth="easeOutQuint" duration={500}>
                <Typography variant="h6" component="h1" color="primary" className={`${style.siteName} ${style.text}`}>
                  The Killer Limit
                </Typography>
              </ScrollLink>
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ScrollLink className={`${style.scrollLink} ${style.navLink}`} to="about" spy={true} smooth="easeOutQuint" duration={500} >
                    <Typography variant="button" color="primary" className={style.text}>About</Typography>
                  </ScrollLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ScrollLink className={`${style.scrollLink} ${style.navLink}`} to="media" spy={true} smooth="easeOutQuint" duration={500}>
                    <Typography variant="button" color="primary" className={style.text}>Media</Typography>
                  </ScrollLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ScrollLink className={`${style.scrollLink} ${style.navLink}`} to="profiles" spy={true} smooth="easeOutQuint" duration={500}>
                    <Typography variant="button" color="primary" className={style.text}>Profiles</Typography>
                  </ScrollLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ScrollLink className={`${style.scrollLink} ${style.navLink}`} to="shows" spy={true} smooth="easeOutQuint" duration={500}>
                    <Typography variant="button" color="primary" className={style.text}>Shows</Typography>
                  </ScrollLink>
                </ListItem>
              </List>

              <List className={classes.socialList}>
                <ListItem className={classes.listItem}>
                  <Tooltip
                      id="presspack-tooltip"
                      title="Download our Press Pack"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                    <Button
                      href="https://drive.google.com/open?id=1DdbOtK9zzpMCeecGV4adAotR6499oqzr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                      color="primary"
                    >
                      <CloudDownload className={`${classes.icons} ${classes.svg}`} />&nbsp;Press pack
                    </Button>
                  </Tooltip>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Tooltip
                    id="twitter-tooltip"
                    title="Follow us on Twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://twitter.com/killermantisuk?ref=killermantis-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                      color="primary"
                    >
                      <Twitter className={classes.icons} />
                    </Button>
                  </Tooltip>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Tooltip
                    id="facebook-tooltip"
                    title="Follow us on Facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://www.facebook.com/killermantismusic?ref=killermantis-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                      color="primary"
                    >
                      <Facebook className={classes.icons} />
                    </Button>
                  </Tooltip>
                </ListItem>
                {/* <ListItem className={classes.listItem}>
                  <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on Instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://www.instagram.com/killermantismusic?ref=killermantis-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                      color="primary"
                    >
                      <Instagram className={classes.icons} />
                    </Button>
                  </Tooltip>
                </ListItem> */}
                {/* <ListItem className={classes.listItem}>
                  <Tooltip
                    id="spotify-tooltip"
                    title="Follow us on Spotify"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button

                      href="https://www.spotify.com/killermantis?ref=killermantis-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                    >
                      <FontAwesomeIcon className={classes.icons} icon={faSpotify} />
                    </Button>
                  </Tooltip>
                </ListItem> */}
                <ListItem className={classes.listItem}>
                  <Tooltip
                    id="soundcloud-tooltip"
                    title="Follow us on SoundCloud"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                  >
                    <Button
                      href="https://www.soundcloud.com/killermantis?ref=killermantis-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                    >
                      <svg className={style.svg} ariaHidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.67c0-1.48-1.12-2.67-2.62-2.67c-.38 0-.7.08-1.03.22c-.24-2.34-2.23-4.17-4.68-4.17c-1.17 0-2.28.44-3.11 1.16m-.88 1.02c-.3-.18-.62-.32-.97-.39V17h1.39V9.34c-.15.16-.29.36-.42.55m-2.35-.54V17h.92V9.38c-.19-.03-.38-.04-.58-.04c-.12 0-.23 0-.34.01M6.5 10v7h.91V9.54c-.33.11-.64.27-.91.46m-1.67 2.5c-.06 0-.12-.06-.19-.09V17h.92v-6.14c-.37.48-.62 1.05-.73 1.64m-2.04-.28v4.69c.21.06.45.09.71.09h.22v-4.86c-.08-.01-.16-.02-.22-.02c-.26 0-.5.04-.71.1M1 14.56c0 .75.34 1.41.87 1.86v-3.71c-.53.44-.87 1.11-.87 1.85z" />
                      </svg>
                    </Button>
                  </Tooltip>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Tooltip
                    id="youtube-tooltip"
                    title="Subscribe on Youtube"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://www.youtube.com/channel/UCjXeqCAvBsTNb2FlemGRhKQ?ref=killermantis-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                      color="primary"
                    >
                      <YouTube className={classes.icons} />
                    </Button>
                  </Tooltip>
                </ListItem>
                {/* <ListItem className={classes.listItem}>
                  <Tooltip
                    id="reverbnation-tooltip"
                    title="Reverbnation"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button

                      href="https://www.reverbnation.com/killermantis?ref=killermantis-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                    >
                      <svg
                        className={classes.svg}
                        enableBackground="new 0 0 568.6 76"
                        height="87.983047"
                        viewBox="0 0 87.983051 87.983047"
                        width="87.983047"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m78.418524 32.452812-25.968893-.085424-8.200702-24.7729565-8.029855 24.7729565-25.968893.085424h.08542l20.928878 15.20547-8.115279 24.858381h.08542l21.185155-15.290894 21.014301 15.290894-8.115279-24.772957z"
                          strokeWidth=".85424"
                        />
                      </svg>
                    </Button>
                  </Tooltip> */}
                <ListItem className={classes.listItem}>
                  <Tooltip
                    id="patreon-tooltip"
                    title="Support us on Patreon"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://www.patreon.com/bePatron?u=28088162&redirect_uri=https://killermantis.com&utm_medium=headerLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.navLink}
                    >
                      <svg className={style.svg} ariaHidden="true" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                        <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21c0 3.96-3.22 7.18-7.18 7.18c-3.97 0-7.21-3.22-7.21-7.18c0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
                      </svg>
                    </Button>
                  </Tooltip>
                </ListItem>
              </List>

              <div className={classes.menuButtonWrapper}>
                {['right'].map((anchor) => (
                  <Fragment key={anchor}>
                    <IconButton edge="start"
                      onClick={toggleDrawer(anchor, true)}
                      color="inherit" aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                      {list(anchor)}
                    </Drawer>
                  </Fragment>
                ))}
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </nav>
  );
}
