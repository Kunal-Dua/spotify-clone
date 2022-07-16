import React from 'react'
import weekly_banner from '../img/spotify song img.jpeg'
import './CSS/SongItem.css'

const SongItem = ({ track }) => {
    // console.log(track.album.images[0].url);
    return (
        <div className='SongItem'>
            {/* track.album.images[0].url */}
            <img className="song_img" src={weekly_banner} alt="song image" />
            <div className="song_info">
                <h4>{track.name}</h4>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")}
                </p>
            </div>
        </div>
    )
}

export default SongItem