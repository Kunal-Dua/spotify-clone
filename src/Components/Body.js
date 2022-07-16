import React from 'react'
import Banner from './Banner'
import Header from './Header'
import './CSS/Body.css'
import Song_Control from './Song_Control'
import Songs from './Songs'
const Body = () => {
  return (
    <div className='body'>
      <div className="header"><Header /></div>
      <div id="i" className="body_content">
        <div className="banner"><Banner /></div>
        <div className="song_control"><Song_Control /></div>
        <div className="songs"><Songs /></div>
      </div>
    </div>
  )
}

export default Body