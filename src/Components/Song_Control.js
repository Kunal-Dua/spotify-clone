import React from 'react'
import { useDataLayerValue, useSpotifyValue } from '../Context/DataLayer';
import './CSS/Song_Control.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Song_Control = () => {
  const [{ user, token, playlists, discover_weekly }, dispatch] = useDataLayerValue();
  const { spotify } = useSpotifyValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
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
      });
  };
  return (
    <div className='SongControl'>
      <PlayCircleFilledIcon className='PlayCircleFilledIcon' onClick={playPlaylist} />
      <FavoriteIcon className='FavoriteIcon' />
      <MoreHorizIcon className='MoreHorizIcon' />
    </div>
  )
}

export default Song_Control