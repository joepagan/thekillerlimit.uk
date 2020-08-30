import style from './style';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'preact/hooks';
import EventIcon from '@material-ui/icons/Event';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MapIcon from '@material-ui/icons/Map';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" className={style.btn} align="left" aria-haspopup="true" onClick={handleClick}>
        {props.colName === 'calendar' &&
          <EventIcon color="primary" className={props.iconClass} />
        }
        {props.colName === 'venue' &&
          <MusicNoteIcon color="primary" className={props.iconClass} />
        }
        {props.colName === 'location' &&
          <MapIcon color="primary" className={props.iconClass} />
        }
        {props.buttonText}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.menuItems.map((item) => (
          <MenuItem onClick={handleClose}>
            <Button href={item.url} onClick={props.handler} rel="noopener" target={item.target} color="primary" align="left">
              {item.text}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
