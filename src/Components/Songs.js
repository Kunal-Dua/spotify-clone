import React from 'react'
import SongItem from './SongItem'
import { useDataLayerValue } from '../Context/DataLayer';
import './CSS/Songs.css'

const Songs = () => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='songs'>
      {discover_weekly?.tracks.items.map((item) => (
        <SongItem track={item.track} />
      ))}
    </div>
  )
}
export default Songs