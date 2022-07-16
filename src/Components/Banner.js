import React from 'react'
import { useDataLayerValue } from '../Context/DataLayer';
import weekly_banner from '../img/spotify song img.jpeg'
import './CSS/Banner.css'

const Banner = () => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  let type = discover_weekly?.type;
  let name = discover_weekly?.name;
  let description = discover_weekly?.description;
  let cover = discover_weekly?.images[0].url;

  return (
    <div className='Banner'>
      <div className="weekly_banner">
        <img src={cover ? cover : weekly_banner} alt="weekly discover banner" />
        <div className="weekly_banner_info">
          <p><strong>{type ? type.toUpperCase() : "unknown"}</strong></p>
          <h5>{name ? name : "Artist"}</h5>
          <p>{description ? description : "description"}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner