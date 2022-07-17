import React, { useEffect } from 'react'
import './CSS/Footer.css'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDataLayerValue } from '../Context/DataLayer';
import { useSpotify_DOA_value } from '../Context/Spotify_DOA';


const Footer = ({ playSong }) => {
  const [{ item, playing }, dispatch] = useDataLayerValue();
  const { spotify } = useSpotify_DOA_value();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {

      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    console.log("Play/Pause");
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    console.log("Skipped");
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    console.log("Previous");
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };
  return (
    <div className='footer'>

      <div className="footer_left">
        <img className="footer_left_artist_cover" src={item?.album.images[0].url} alt="artist cover" />
        {item ? (
          <div className="footer_left_song_info">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_left_song_info">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
        <div className="footer_left_curr_song_favorite">
          <FavoriteIcon />
        </div>
      </div>

      <div className="footer_center">
        <div>
          <ShuffleIcon className='footer_green' />
        </div>
        <div onClick={skipPrevious}>
          <SkipPreviousIcon className='footer_icon' />
        </div>

        {!playing ? (
          <div onClick={handlePlayPause} >
            <PlayCircleFilledIcon fontSize='large' className='footer_icon' />
          </div>) :
          <div onClick={handlePlayPause} >
            <PauseCircleFilledIcon fontSize='large' className='footer_icon' />
          </div>
        }

        <div onClick={skipNext}>
          <SkipNextIcon className='footer_icon' />
        </div>
        <div>
          <RepeatIcon className='footer_green' />
        </div>
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item >
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className="footer_slider footer_volume_slider" defaultValue={70} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer