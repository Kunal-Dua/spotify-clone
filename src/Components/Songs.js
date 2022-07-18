import React from 'react'
import SongItem from './SongItem'
import { useDataLayerValue } from '../Context/DataLayer';
import './CSS/Songs.css'


const Songs = ({playSong}) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className='songs' >
      {discover_weekly?.tracks.items.map((item,index) => (
        <SongItem key={item.track.id} track={item.track} index={index} playSong={playSong}/>
      ))}
    </div>
  )
}
export default Songs