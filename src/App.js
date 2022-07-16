import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Spotify API/spotify_login_url';
// import SpotifyWebApiJs from 'spotify-web-api-js';
import { useDataLayerValue } from './Context/DataLayer';
import { useSpotify_DOA_value } from './Context/Spotify_DOA';

// const spotify = new SpotifyWebApiJs();

function App() {
  const [{ user, token, playlists, discover_weekly }, dispatch] = useDataLayerValue();
  const { spotify } = useSpotify_DOA_value();

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

      spotify.getPlaylist('37i9dQZF1DWXtlo6ENS92N').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      )
    };

  }, [])

  // console.log(user);
  // console.log(playlists);
  // console.log(discover_weekly);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
