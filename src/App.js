import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Spotify API/spotify_login_url';
import { useDataLayerValue, useSpotifyValue } from './Context/DataLayer';

function App() {
  const [{ user, token, playlists, discover_weekly, item, id }, dispatch] = useDataLayerValue();
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
    };

    spotify.setVolume(100);

  }, [])
  
  // console.log(user);
  // console.log(token);
  // console.log(playlists);
  console.log(item);
  // console.log(discover_weekly);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
