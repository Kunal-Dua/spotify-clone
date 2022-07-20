import React ,{useState}from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Body from "./Body";
import { useDataLayerValue,useSpotifyValue} from '../Context/DataLayer';
import './CSS/Player.css'

const Player = () => {
  const [{}, dispatch] = useDataLayerValue();
  const [_item, set_Item] = useState(null);
  const [_playing, set_Playing] = useState(null);
  const { spotify } = useSpotifyValue();

  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`],
    }).then(
      function(data){
        console.log(data);
      },
      function(err){
        alert("Spotify Premium required to play songs");
        console.error(err)
      }
    )
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          set_Item(r.item);
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