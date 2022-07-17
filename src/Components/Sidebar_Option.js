import React from 'react'
import { useDataLayerValue, useSpotifyValue } from '../Context/DataLayer';
import './CSS/Sidebar_Option.css'

const Sidebar_Option = ({ title, Icon, id }) => {
    const [{ }, dispatch] = useDataLayerValue();
    const { spotify } = useSpotifyValue();
    const handleClick = () => {
        // console.log("playlist changed " + id);
        spotify.getPlaylist(id).then((response) =>
            dispatch({
                type: 'SET_DISCOVER_WEEKLY',
                discover_weekly: response
            }),

            //setCurrentPlaylistID
            dispatch({
                type: 'SET_CURRENT_PLAYLIST_ID',
                currentPlaylistID: id
            })
        )
    }

    return (
        <div className='Sidebar_Option'>
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <h6 onClick={handleClick}> {title}</h6> : <p onClick={handleClick}> {title}</p>}
        </div>
    )
}

export default Sidebar_Option