import React from 'react'
import Banner from './Banner'
import Header from './Header'
import './CSS/Body.css'
import Song_Control from './Song_Control'
import Songs from './Songs'
import Song_nav from './Song_nav'
const Body = ({playSong}) => {
  return (
    <div className='body'>
      <div className="header"><Header /></div>
      <div className="body_content">
        <div className="banner"><Banner /></div>
        <div className="song_control"><Song_Control /></div>
        <div className="Song_nav"><Song_nav /></div>
        <div className="songs"><Songs playSong={playSong}/></div>
      </div>
    </div>
  )
}

export default Body