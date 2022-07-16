import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Spotify API/spotify_login_url';
import SpotifyWebApiJs from 'spotify-web-api-js';
import { useDataLayerValue } from './Context/DataLayer';

const spotify = new SpotifyWebApiJs();

function App() {
  const [{ user, token,playlists }, dispatch] = useDataLayerValue();
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

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:'SET_PLAYLISTS', 
          playlists:playlists
        })
      })
    }
  }, [])
  
  console.log(user);
  console.log(playlists);

  return (
    <div className="App">
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
