import React from 'react'
import { useDataLayerValue, useSpotifyValue } from '../Context/DataLayer';
import './CSS/SongItem.css'

const SongItem = ({ track, playSong ,index}) => {
    const [{ duration}, dispatch] = useDataLayerValue();
    const { spotify } = useSpotifyValue();
    let duration_song=parseFloat(track.duration_ms/60000).toFixed(2);
    return (
        <div className='SongItem' onClick={() => playSong(track.id)}>

            <div className="c">
                <h4 className="song_num h">{index+1}</h4>
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
            <p className="song_duration">{duration_song}</p>
        </div>
    )
}

export default SongItem