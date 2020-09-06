import style from './style.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import ReactPlayer from 'react-player';
import { isMobile } from "react-device-detect";
import LazyLoad from 'react-lazyload';

export default function Profile(props) {
  const image = `./../../assets/img/profiles/${props.id}-400.webp`;
  const video = `./../../assets/video/${props.id}.mp4`;
  return (
    <div>
      <Typography variant="h5" component="h3" align="center" gutterBottom>{props.name}</Typography>
      <Paper elevation={3} className={style.playerWrapper}>
        <LazyLoad once height={388}>
          <ReactPlayer
            className={style.player}
            url={video}
            config={{
              file: {
                attributes: {
                  poster: image
                }
              }
            }}
            light={isMobile ? image : false}
            playsinline
            autoPlay
            muted
            playing
            loop
            width="100%"
            height="100%"
          />
        </LazyLoad>
      </Paper>
      <Typography variant="overline">{props.role}</Typography>
    </div>
  )
}
