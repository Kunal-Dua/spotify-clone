import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Body from "./Body";
import { useDataLayerValue,useSpotifyValue} from '../Context/DataLayer';
import './CSS/Player.css'

const Player = () => {
  const [{ }, dispatch] = useDataLayerValue();
  const { spotify } = useSpotifyValue();

  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`],
    })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
            duration:r.item.duration_ms
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
      <Footer />
    </div>
  )
}

export default Player