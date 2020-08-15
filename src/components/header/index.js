import style from './style';
import { h, Fragment, Component } from 'preact';
import { useState } from 'preact/hooks';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Icon from './../icon';
import Link from './../link';
import Grid from "@material-ui/core/Grid";

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
    "@media (min-width: 1220px)": {
      display: "none"
    },
  },
}));

export default class ButtonAppBar extends Component {
  render(props) {
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

    const wantedIcons = ['presspack', 'twitter', 'facebook', 'soundcloud', 'youtube', 'patreon'];
    const headerIcons = props.icons.filter((icon) => wantedIcons.indexOf(icon.id) != -1);
    const links = ['About', 'Media', 'Profiles', 'Shows'];

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
          {links.map((link) => (
            <Link
              class={classes.listItem}
              text={link}
              activeClass={style.navLinkActive}
              textClass={style.text}
              drawer={toggleDrawer(anchor, false)}
            />
          ))}
          {props.icons.map((icon) => (
            <Icon id={icon.id} title={icon.title} href={icon.href} text={icon.text} navLink={style.navLink} />
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
                <ScrollLink
                  to="app"
                  className={`${style.scrollLink} ${style.navLink} ${style.siteNameLink}`}
                  spy={true}
                  smooth="easeOutQuint"
                  duration={300}
                >
                  <Typography variant="h6" component="h1" color="primary" className={`${style.siteName} ${style.text}`}>
                    The Killer Limit
                  </Typography>
                </ScrollLink>
                <List className={`${classes.list} ${style.list}`}>
                  {links.map((link) => (
                    <Link
                      class={classes.listItem}
                      text={link}
                      textClass={style.text}
                    />
                  ))}
                </List>

                <List className={`${classes.socialList} ${style.list}`}>
                  {headerIcons.map((icon) => (
                    <Icon id={icon.id} title={icon.title} href={icon.href} text={icon.text} navLink={style.navLink} />
                  ))}
                </List>

                <div className={`${classes.menuButtonWrapper} ${style.menuButtonWrapper}`}>
                  {['right'].map((anchor) => (
                    <Fragment key={anchor}>
                      <IconButton edge="start"
                        onClick={toggleDrawer(anchor, true)}
                        color="primary"
                        aria-label="menu"
                        className={style.navLink}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Drawer anchor={anchor} open={state[anchor]} className={style.drawer} onClose={toggleDrawer(anchor, false)}>
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
}
