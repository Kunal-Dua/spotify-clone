import React from 'react'
import { useDataLayerValue, useSpotifyValue } from '../Context/DataLayer';
import './CSS/SongItem.css'

const SongItem = ({ track, playSong }) => {
    const [{ }, dispatch] = useDataLayerValue();
    const { spotify } = useSpotifyValue();
    let duration = track.album.duration_ms;
    console.log(duration);
    return (
        <div className='SongItem' onClick={() => playSong(track.id)}>

            <div className="c">
                <h4 className="song_num h">#</h4>
                <img className="song_img p" src={track.album.images[2].url} />
                <div className="song_title">
                    <h4>{track.name}</h4>
                    <p>
                        {track.artists.map((artist) => artist.name).join(", ")}
                    </p>
                </div>
            </div>

            <p className="song_album">{track.album.name}</p>
            <p className="song_added">{track.album.release_date}</p>
            <p className="song_duration">4:23</p>
        </div>
    )
}

export default SongItem