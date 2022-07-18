import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Spotify API/spotify_login_url';
import { useDataLayerValue, useSpotifyValue } from './Context/DataLayer';

function App() {
  const [{ user, token, playlists, discover_weekly, item, id, currentPlaylistID, follows_playlist, curr_playback_state, duration, shuffle_state, playing, progress }, dispatch] = useDataLayerValue();
  const { spotify } = useSpotifyValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      });

      spotify.getPlaylist('37i9dQZF1DX14CbVHtvHRB').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      );
      spotify.getMe().then((response) =>
        dispatch({
          type: 'SET_CUURENT_USER_ID',
          id: response.id
        })
      );

      // spotify.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
      //   .then(function (data) {
      //     console.log('Albums information', data.body);
      //   }, function (err) {
      //     console.error(err);
      //   });

      spotify.getMyCurrentPlaybackState().then((playlist) => {
        dispatch({
          type: "GET_CURRENT_PLAYBACK_STATE",
          curr_playback_state: playlist,
          duration: playlist.item.duration_ms,
          shuffle_state: playlist.shuffle_state,
          playing: playlist.is_playing,
          progress: playlist.progress_ms
        })
      });

      {
        id ?
          spotify.areFollowingPlaylist(currentPlaylistID, [id]).then((res) => {
            console.log(res);
            dispatch({
              type: "FOLLOWS_PLAYLIST",
              follows_playlist: res[0],
            });
          })
          : console.log()
      }

    };
    // spotify.setVolume(70);

  }, [])

  useEffect(() => {
    {
      id ?
        spotify.areFollowingPlaylist(currentPlaylistID, [id]).then((res) => {
          console.log(res);
          dispatch({
            type: "FOLLOWS_PLAYLIST",
            follows_playlist: res[0],
          });
        })
        : console.log()
    }

    spotify.getMyCurrentPlaybackState().then((playlist) => {
      dispatch({
        type: "GET_CURRENT_PLAYBACK_STATE",
        curr_playback_state: playlist,
        duration: playlist.item.duration_ms,
        shuffle_state: playlist.shuffle_state,
        playing: playlist.is_playing,
        progress: playlist.progress_ms
      })
    });
  }, [currentPlaylistID])
  
  // console.log(item);
  // console.log(curr_playback_state);
  // console.log(id);
  // console.log(progress);
  // console.log(playlists);
  // console.log(currentPlaylistID);
  // console.log(discover_weekly);
  // console.log(follows_playlist);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
