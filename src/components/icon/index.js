import style from './style';
import { ListItem, Tooltip, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { CloudDownload, Twitter, Facebook, Instagram, YouTube } from "@material-ui/icons";

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

export default function Icon(props) {
  const classes = useStyles();
  const renderIcon = (param) => {
    switch(param) {
      case 'presspack':
        return <CloudDownload className={`${style.icons} ${style.svg}`} />;
        case 'twitter':
          return <Twitter className={classes.icons} />;
      case 'facebook':
        return <Facebook className={classes.icons} />;
      case 'instagram':
        return <Instagram className={style.icons} />;
      case 'youtube':
        return <YouTube className={style.icons} />;
      case 'soundcloud':
        return <svg className={style.svg} ariaHidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path d="M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.67c0-1.48-1.12-2.67-2.62-2.67c-.38 0-.7.08-1.03.22c-.24-2.34-2.23-4.17-4.68-4.17c-1.17 0-2.28.44-3.11 1.16m-.88 1.02c-.3-.18-.62-.32-.97-.39V17h1.39V9.34c-.15.16-.29.36-.42.55m-2.35-.54V17h.92V9.38c-.19-.03-.38-.04-.58-.04c-.12 0-.23 0-.34.01M6.5 10v7h.91V9.54c-.33.11-.64.27-.91.46m-1.67 2.5c-.06 0-.12-.06-.19-.09V17h.92v-6.14c-.37.48-.62 1.05-.73 1.64m-2.04-.28v4.69c.21.06.45.09.71.09h.22v-4.86c-.08-.01-.16-.02-.22-.02c-.26 0-.5.04-.71.1M1 14.56c0 .75.34 1.41.87 1.86v-3.71c-.53.44-.87 1.11-.87 1.85z" />
        </svg>;
      case 'reverbnation':
        return <svg
          className={style.svg}
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
        </svg>;
      case 'patreon':
        return <svg className={style.svg} ariaHidden="true" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21c0 3.96-3.22 7.18-7.18 7.18c-3.97 0-7.21-3.22-7.21-7.18c0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
        </svg>;
      default:
        return null;
    }
  }
  return (
    <ListItem className={style.listItem}>
      <Tooltip
          id={`presspack-${props.id}`}
          title={props.title}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={props.navLink}
          color="primary"
        >
          {renderIcon(props.id)}
          {props.text ? <span className={style.text}>{props.text}</span> : null}
        </Button>
      </Tooltip>
    </ListItem>
  )
}
