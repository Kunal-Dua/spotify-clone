import React from 'react'
import SongItem from './SongItem'
import { useDataLayerValue } from '../Context/DataLayer';
import { useSpotify_DOA_value } from '../Context/Spotify_DOA';
import './CSS/Songs.css'


const Songs = () => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
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
    <div className='songs' >
      {discover_weekly?.tracks.items.map((item) => (
        <SongItem track={item.track} playSong={playSong}/>
      ))}
    </div>
  )
}
export default Songs