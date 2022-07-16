import React from 'react'
import { useDataLayerValue } from '../Context/DataLayer';
import { useSpotify_DOA_value } from '../Context/Spotify_DOA';
import './CSS/Sidebar_Option.css'

const Sidebar_Option = ({ title, Icon, id }) => {
    const [{ }, dispatch] = useDataLayerValue();
    const { spotify } = useSpotify_DOA_value();
    const handleClick = () => {
        console.log("playlist changed");
        spotify.getPlaylist(id).then((response) =>
            dispatch({
                type: 'SET_DISCOVER_WEEKLY',
                discover_weekly: response
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