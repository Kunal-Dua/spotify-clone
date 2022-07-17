import React from 'react'
import SongItem from './SongItem'
import { useDataLayerValue } from '../Context/DataLayer';
import { useSpotify_DOA_value } from '../Context/Spotify_DOA';
import './CSS/Songs.css'


const Songs = ({playSong}) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='songs' >
      {discover_weekly?.tracks.items.map((item) => (
        <SongItem track={item.track} playSong={playSong}/>
      ))}
    </div>
  )
}
export default Songs