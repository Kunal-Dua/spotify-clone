import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Body from "./Body";
import { useDataLayerValue } from '../Context/DataLayer';
import { useSpotify_DOA_value } from '../Context/Spotify_DOA';
import './CSS/Player.css'

const Player = () => {
  const [{ discover_weekly, item, playing }, dispatch] = useDataLayerValue();
  const { spotify } = useSpotify_DOA_value();

  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`],
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
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body playSong={playSong} />
      </div>
      <Footer playSong={playSong} />
    </div>
  )
}

export default Player