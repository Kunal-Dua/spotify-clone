import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Body from "./Body";
import './CSS/Player.css'
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default Player