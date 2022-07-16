import React from 'react'
import weekly_banner from '../img/spotify song img.jpeg'
import './CSS/Banner.css'
const Banner = () => {
  return (
    <div className='Banner'>
      <div className="weekly_banner">
        <img src={weekly_banner} alt="weekly banner" />
        <div className="weekly_banner_info">
          <p><strong>PLAYLIST</strong></p>
            <h5>Artist</h5>
            <p>description...</p>
        </div>
      </div>
    </div>
  )
}

export default Banner