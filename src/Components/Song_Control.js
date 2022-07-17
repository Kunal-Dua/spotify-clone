import React from 'react'
import { useDataLayerValue, useSpotifyValue } from '../Context/DataLayer';
import './CSS/Song_Control.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIconFilled from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Song_Control = () => {
  const [{ user, token, playlists, discover_weekly, id, currentPlaylistID, follows_playlist }, dispatch] = useDataLayerValue();
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

  const followPlaylist = () => {
    // spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 })
    //   .then(
    //     function (data) {
    //       console.log('Album information', data);
    //     },
    //     function (err) {
    //       console.error(err);
    //     }
    //   )

    spotify.followPlaylist('37i9dQZF1DX14CbVHtvHRB')
      .then(
        function (data) {
          console.log('Playlist follwed ', data);
          dispatch({
            type: "FOLLOWS_PLAYLIST",
            follows_playlist: true,
          });
        },
        function (err) {
          console.error(err);
        }
      )
  }

  const unFollowPlaylist = () => {
    spotify.unfollowPlaylist('37i9dQZF1DX14CbVHtvHRB')
      .then(
        function (data) {
          console.log('Playlist unfollwed ', data);
          dispatch({
            type: "FOLLOWS_PLAYLIST",
            follows_playlist: false,
          });
        },
        function (err) {
          console.error(err);
        }
      )
  }

  return (
    <div className='SongControl'>
      <PlayCircleFilledIcon className='PlayCircleFilledIcon change-Color-green' onClick={playPlaylist} />
      {follows_playlist ? (
        <FavoriteIconFilled fontSize='large' className='FavoriteIcon change-Color-green' onClick={unFollowPlaylist} />
        ) :
        <FavoriteIcon fontSize='large' className='FavoriteIcon' onClick={followPlaylist} />
      }
      <MoreHorizIcon className='MoreHorizIcon' />
    </div>
  )
}

export default Song_Control