import React from 'react'
import './CSS/SongItem.css'

const SongItem = ({ track}) => {
    // let duration = track.album.duration_ms;

    return (
        <div className='SongItem'>

            <div className="content_box1">
                <h4 className="song_num">#</h4>
                <img className="song_img" src={track.album.images[2].url} alt="song image" />
                <div className="song_title">
                    <h4>{track.name}</h4>
                    <p>
                        {track.artists.map((artist) => artist.name).join(", ")}
                    </p>
                </div>
            </div>

            <div className="content_box2">
                <div className="song_album">
                    <p>{track.album.name}</p>
                </div>
                <div className="song_added">
                    <p>{track.album.release_date}</p>
                </div>
                <div className="song_duration">
                    {/* FIXME: */}
                    {/* <p>{duration}</p> */}
                    <p>123</p>
                </div>
            </div>
        </div>
    )
}

export default SongItem