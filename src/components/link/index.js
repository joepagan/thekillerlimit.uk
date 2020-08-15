import style from './style';
import { ListItem, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => {});

import * as Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

export default function Link(props) {
  const classes = useStyles();
  return (
    <ListItem className={`${props.class} ${classes.listItem}`}>
      <ScrollLink
        to={props.text.toLowerCase()}
        className={`${style.scrollLink} ${style.navLink}`}
        activeClass={props.navLinkActive}
        spy={true}
        smooth="easeOutQuint"
        duration={300}
        onClick={props.drawer !== null ? props.drawer : null}
      >
        <Typography
          variant="button"
          color="primary"
          className={`${style.text} ${props.textClass}`}
        >
          {props.text}
        </Typography>
      </ScrollLink>
    </ListItem>
  )
}
